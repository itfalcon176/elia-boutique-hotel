import { useEffect, useState } from 'react';

const LOGO_SRC = '/preloader/elia-logo.png';
const FADE_IN_MS = 800;
const HOLD_MS = 900;
const FADE_OUT_MS = 600;
const TOTAL_MS = FADE_IN_MS + HOLD_MS + FADE_OUT_MS;
const PROGRESS_MS = FADE_IN_MS + HOLD_MS + FADE_OUT_MS * 0.5;

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

export default function Preloader() {
  const playOnLoad = shouldPlayPreloader();
  const [phase, setPhase] = useState('idle');   // idle | fadein | hold | fadeout
  const [progress, setProgress] = useState(0);  // 0-100
  const [gone, setGone] = useState(!playOnLoad);

  useEffect(() => {
    if (!playOnLoad) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cancelled = false;
    let rafId = 0;
    let timers = [];
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (reduceMotion) {
      setPhase('hold');
      setProgress(100);
      const t = window.setTimeout(() => {
        if (!cancelled) {
          document.body.style.overflow = previousOverflow;
          setGone(true);
        }
      }, 400);
      timers.push(t);
    } else {
      // Preload the logo
      const img = new Image();
      img.src = LOGO_SRC;

      const start = () => {
        if (cancelled) return;
        const startTime = performance.now();

        // Phase: fade in
        setPhase('fadein');

        // Phase: hold
        timers.push(window.setTimeout(() => {
          if (!cancelled) setPhase('hold');
        }, FADE_IN_MS));

        // Phase: fade out
        timers.push(window.setTimeout(() => {
          if (!cancelled) setPhase('fadeout');
        }, FADE_IN_MS + HOLD_MS));

        // Phase: gone
        timers.push(window.setTimeout(() => {
          if (!cancelled) {
            document.body.style.overflow = previousOverflow;
            setGone(true);
          }
        }, TOTAL_MS));

        // Animate progress bar with ease-in-out
        const tickProgress = (now) => {
          if (cancelled) return;
          const elapsed = now - startTime;
          const t = Math.min(1, elapsed / PROGRESS_MS);
          // ease-in-out cubic
          const eased = t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
          setProgress(Math.round(eased * 100));
          if (t < 1) rafId = window.requestAnimationFrame(tickProgress);
        };
        rafId = window.requestAnimationFrame(tickProgress);
      };

      // Start after logo loads (or 200ms max wait)
      img.onload = () => { if (!cancelled) start(); };
      img.onerror = () => { if (!cancelled) start(); };
      timers.push(window.setTimeout(() => { if (!cancelled) start(); }, 200));
    }

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
      timers.forEach((t) => window.clearTimeout(t));
      document.body.style.overflow = previousOverflow;
    };
  }, [playOnLoad]);

  if (gone) return null;

  const logoOpacity =
    phase === 'idle' ? 0 :
    phase === 'fadein' ? 1 :
    phase === 'hold' ? 1 :
    0;

  return (
    <div
      className="elia-preloader fixed inset-0 z-[80] flex flex-col items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading Elia Boutique Hotel"
    >
      {/* Logo with fade in / fade out */}
      <img
        src={LOGO_SRC}
        alt="Elia Boutique Hotel"
        draggable="false"
        className="elia-preloader-logo block h-auto select-none pointer-events-none"
        style={{
          width: 'min(72vw, 380px)',
          opacity: logoOpacity,
          transition: phase === 'fadein'
            ? `opacity ${FADE_IN_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : phase === 'fadeout'
            ? `opacity ${FADE_OUT_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : 'none',
        }}
      />

      {/* Progress bar */}
      <div className="mt-6 h-[1.5px] w-28 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#A38B68] to-[#C5A880] rounded-full"
          style={{
            width: `${progress}%`,
            transition: 'width 60ms linear',
          }}
        />
      </div>
    </div>
  );
}
