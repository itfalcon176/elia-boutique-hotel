import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { LETTERS, TAGLINE_PATHS, WORDMARK_VIEWBOX, glideShift, lockupShift } from './eliaWordmark';

const LETTER_AT = [16, 700, 1280, 1860];
const FADE_MS = 1120;
const GLIDE = {
  glideStart: 700,
  glideEnd: 2980,
  taglineAt: 2980,
  taglineMs: 880,
};
const TAGLINE_AT = GLIDE.taglineAt;
const REVEAL_MS = 4080;
const LEAVE_MS = 1120;
const CURTAIN_REVEAL_MS = 2400;
const CURTAIN_LEAVE_MS = 1000;
const FADE_REVEAL_MS = 2460;
const FADE_LEAVE_MS = 1200;
const REDUCED_MS = 420;

function readVariant() {
  const value = new URLSearchParams(window.location.search).get('preloader');
  if (value === 'curtain' || value === 'fade') return value;
  return 'glide';
}

const VIEWBOX = `${WORDMARK_VIEWBOX.x} ${WORDMARK_VIEWBOX.y} ${WORDMARK_VIEWBOX.width} ${WORDMARK_VIEWBOX.height}`;

function fadeAmount(elapsed, start, duration) {
  const u = Math.min(1, Math.max(0, (elapsed - start) / duration));
  return u * u * u * (u * (u * 6 - 15) + 10);
}

function shouldPlayPreloader() {
  if (typeof window === 'undefined') return false;
  const navigation = performance.getEntriesByType('navigation')[0];
  if (navigation?.type === 'back_forward') return false;
  if (navigation?.type === 'reload') return true;

  const path = window.location.pathname.replace(/\/$/, '').toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const fromDatePicker = path === '/book-your-stay'
    || path === '/book'
    || path === '/reserve'
    || params.has('checkin')
    || params.has('checkout')
    || (params.get('widget_source') || '').includes('date_picker');
  return !fromDatePicker;
}

function LogoLayer({ paths, className }) {
  return (
    <svg
      className={className}
      viewBox={VIEWBOX}
      fill="none"
      aria-hidden="true"
    >
      <g transform="translate(0 1201) scale(0.1 -0.1)" fill="#ffffff">
        {paths.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
    </svg>
  );
}

export default function Preloader() {
  const [playOnLoad] = useState(shouldPlayPreloader);
  const [variant] = useState(readVariant);
  const [motionOk] = useState(() => (
    playOnLoad && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));
  const [phase, setPhase] = useState(playOnLoad ? 'play' : 'gone');
  const [step, setStep] = useState(motionOk ? 0 : 5);
  const lockupRef = useRef(null);

  useLayoutEffect(() => {
    document.getElementById('elia-boot')?.remove();
    if (variant !== 'glide' || !motionOk || !lockupRef.current) return;
    const shift = lockupShift(1);
    lockupRef.current.style.transform = `translate3d(${shift.x}%, ${shift.y}%, 0)`;
  }, [motionOk, variant]);

  useEffect(() => {
    if (!playOnLoad) return undefined;

    let cancelled = false;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const unlock = () => {
      document.body.style.overflow = previousOverflow;
    };

    const finish = () => {
      if (cancelled) return;
      unlock();
      setPhase('gone');
    };

    const onPopState = () => finish();
    window.addEventListener('popstate', onPopState);

    const timers = [];
    let frame = 0;
    const revealMs = variant === 'curtain'
      ? CURTAIN_REVEAL_MS
      : variant === 'fade'
        ? FADE_REVEAL_MS
        : REVEAL_MS;
    const leaveMs = variant === 'curtain'
      ? CURTAIN_LEAVE_MS
      : variant === 'fade'
        ? FADE_LEAVE_MS
        : LEAVE_MS;
    if (!motionOk) {
      timers.push(window.setTimeout(finish, REDUCED_MS));
    } else if (variant !== 'glide') {
      timers.push(window.setTimeout(() => {
        if (cancelled) return;
        unlock();
        setPhase('leave');
      }, revealMs));
      timers.push(window.setTimeout(finish, revealMs + leaveMs));
    } else {
      const started = performance.now();
      let shown = 0;
      const tick = (now) => {
        if (cancelled) return;
        const elapsed = now - started;
        const shift = glideShift(elapsed, GLIDE);
        const lockup = lockupRef.current;
        if (lockup) {
          lockup.style.transform = `translate3d(${shift.x}%, ${shift.y}%, 0)`;
          lockup.querySelectorAll('.elia-preloader-letter').forEach((node, index) => {
            const amount = fadeAmount(elapsed, LETTER_AT[index], FADE_MS);
            node.style.opacity = String(amount);
            node.style.transform = `translate3d(0, ${(1 - amount) * 10}px, 0)`;
          });
          const tagline = lockup.querySelector('.elia-preloader-tagline');
          if (tagline) {
            const amount = elapsed < TAGLINE_AT ? 0 : fadeAmount(elapsed, TAGLINE_AT, GLIDE.taglineMs);
            tagline.style.opacity = String(amount);
            tagline.style.visibility = amount > 0.01 ? 'visible' : 'hidden';
          }
        }
        const next = elapsed >= TAGLINE_AT
          ? 5
          : LETTER_AT.reduce((count, at) => count + (elapsed >= at ? 1 : 0), 0);
        if (next !== shown) {
          shown = next;
          setStep(next);
        }
        if (elapsed < REVEAL_MS) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
      timers.push(window.setTimeout(() => {
        if (cancelled) return;
        unlock();
        setPhase('leave');
      }, revealMs));
      timers.push(window.setTimeout(finish, revealMs + leaveMs));
    }

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('popstate', onPopState);
      unlock();
    };
  }, [motionOk, playOnLoad, variant]);

  if (phase === 'gone') return null;

  const leaving = phase === 'leave';

  return (
    <div
      className={[
        'elia-preloader fixed inset-0 z-[80] flex items-center justify-center',
        `elia-preloader--${variant}`,
        motionOk ? 'elia-preloader--motion' : 'elia-preloader--reduced',
        leaving ? 'elia-preloader-leave' : '',
        variant === 'glide' && step >= 5 ? 'is-complete' : '',
      ].filter(Boolean).join(' ')}
      style={motionOk ? {
        '--elia-leave-ms': `${variant === 'curtain' ? CURTAIN_LEAVE_MS : variant === 'fade' ? FADE_LEAVE_MS : LEAVE_MS}ms`,
        '--elia-reveal-ms': `${variant === 'glide' ? REVEAL_MS : variant === 'curtain' ? CURTAIN_REVEAL_MS : FADE_REVEAL_MS}ms`,
      } : undefined}
      data-variant={variant}
      data-step={variant === 'glide' ? step : undefined}
      role={leaving ? undefined : 'status'}
      aria-live={leaving ? 'off' : 'polite'}
      aria-hidden={leaving ? true : undefined}
      inert={leaving ? true : undefined}
    >
      <span className="sr-only">Loading Elia Boutique Hotel</span>
      <span className="elia-preloader-corner is-tl" aria-hidden="true" />
      <span className="elia-preloader-corner is-tr" aria-hidden="true" />
      <span className="elia-preloader-corner is-bl" aria-hidden="true" />
      <span className="elia-preloader-corner is-br" aria-hidden="true" />

      <div className="elia-preloader-stage">
        <div className="elia-preloader-glow" aria-hidden="true" />
        {variant === 'curtain' && (
          <div className="elia-preloader-mark">
            <img src="/logo.svg" alt="" draggable="false" className="elia-preloader-logo" />
            <div className="elia-preloader-streak" aria-hidden="true" />
          </div>
        )}
        {variant === 'fade' && (
          <div className="elia-preloader-mark">
            <img src="/logo.svg" alt="" draggable="false" className="elia-preloader-fade-logo" />
          </div>
        )}
        {variant === 'glide' && (
          <div className="elia-preloader-mark">
            <div className="elia-preloader-lockup" ref={lockupRef}>
              {LETTERS.map((letter, index) => (
                <LogoLayer
                  key={letter.id}
                  paths={letter.paths}
                  className={[
                    'elia-preloader-layer elia-preloader-letter',
                    step > index ? 'is-on' : '',
                  ].filter(Boolean).join(' ')}
                />
              ))}
              <LogoLayer
                paths={TAGLINE_PATHS}
                className={[
                  'elia-preloader-layer elia-preloader-tagline',
                  step >= 5 ? 'is-on' : '',
                ].filter(Boolean).join(' ')}
              />
            </div>
          </div>
        )}
        {variant === 'curtain' && <div className="elia-preloader-rule" aria-hidden="true" />}
        {variant === 'fade' && <div className="elia-preloader-fade-rule" aria-hidden="true" />}
        {variant === 'glide' && <div className="elia-preloader-rule" aria-hidden="true" />}
        {variant !== 'fade' && <p className="elia-preloader-meta">Bang Tao Beach, Phuket</p>}
      </div>

      {variant !== 'fade' && (
        <div className="elia-preloader-progress" aria-hidden="true">
          <div className="elia-preloader-track">
            <div className="elia-preloader-bar" />
          </div>
        </div>
      )}
    </div>
  );
}
