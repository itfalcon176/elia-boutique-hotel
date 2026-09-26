import { useEffect, useLayoutEffect, useState } from 'react';
import { LETTERS, TAGLINE_PATHS, WORDMARK_VIEWBOX, lockupShift } from './eliaWordmark';

const LETTER_AT = [140, 640, 1140, 1640];
const TAGLINE_AT = 3060;
const REVEAL_MS = 4000;
const LEAVE_MS = 1000;
const REDUCED_MS = 420;

const VIEWBOX = `${WORDMARK_VIEWBOX.x} ${WORDMARK_VIEWBOX.y} ${WORDMARK_VIEWBOX.width} ${WORDMARK_VIEWBOX.height}`;

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
  const [motionOk] = useState(() => (
    playOnLoad && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));
  const [phase, setPhase] = useState(playOnLoad ? 'play' : 'gone');
  const [step, setStep] = useState(motionOk ? 0 : 5);

  useLayoutEffect(() => {
    document.getElementById('elia-boot')?.remove();
  }, []);

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
    if (!motionOk) {
      timers.push(window.setTimeout(finish, REDUCED_MS));
    } else {
      LETTER_AT.forEach((at, index) => {
        timers.push(window.setTimeout(() => {
          if (!cancelled) setStep(index + 1);
        }, at));
      });
      timers.push(window.setTimeout(() => {
        if (!cancelled) setStep(5);
      }, TAGLINE_AT));
      timers.push(window.setTimeout(() => {
        if (cancelled) return;
        unlock();
        setPhase('leave');
      }, REVEAL_MS));
      timers.push(window.setTimeout(finish, REVEAL_MS + LEAVE_MS));
    }

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('popstate', onPopState);
      unlock();
    };
  }, [motionOk, playOnLoad]);

  if (phase === 'gone') return null;

  const leaving = phase === 'leave';
  const shift = lockupShift(step);

  return (
    <div
      className={[
        'elia-preloader fixed inset-0 z-[80] flex items-center justify-center',
        motionOk ? 'elia-preloader--motion' : 'elia-preloader--reduced',
        leaving ? 'elia-preloader-leave' : '',
        step >= 5 ? 'is-complete' : '',
      ].filter(Boolean).join(' ')}
      style={motionOk ? {
        '--elia-leave-ms': `${LEAVE_MS}ms`,
        '--elia-reveal-ms': `${REVEAL_MS}ms`,
      } : undefined}
      data-step={step}
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
        <div className="elia-preloader-mark">
          <div
            className="elia-preloader-lockup"
            style={motionOk ? { transform: `translate3d(${shift.x}%, ${shift.y}%, 0)` } : undefined}
          >
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
        <div className="elia-preloader-rule" aria-hidden="true" />
        <p className="elia-preloader-meta">Bang Tao Beach, Phuket</p>
      </div>

      <div className="elia-preloader-progress" aria-hidden="true">
        <div className="elia-preloader-track">
          <div className="elia-preloader-bar" />
        </div>
      </div>
    </div>
  );
}
