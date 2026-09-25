import { useEffect, useState } from 'react';

const FRAME_COUNT = 55;
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, index) => (
  `/preloader/seq/${String(index + 1).padStart(3, '0')}.webp`
));
const FRAME_MS = 86;
const HOLD_MS = 900;
const MIN_VISIBLE_MS = FRAME_COUNT * FRAME_MS + HOLD_MS;

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
  const [frame, setFrame] = useState(0);
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(!playOnLoad);

  useEffect(() => {
    if (!playOnLoad) return undefined;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let closed = false;
    let rafId = 0;
    let exitTimer = 0;
    let cancelled = false;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const finish = (delay) => {
      if (closed) return;
      closed = true;
      exitTimer = window.setTimeout(() => {
        setClosing(true);
        document.body.style.overflow = previousOverflow;
      }, delay);
    };

    if (reduceMotion) {
      setFrame(FRAMES.length - 1);
      finish(350);
    } else {
      const preload = Promise.all(FRAMES.map((src) => new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = src;
      })));
      const preloadCap = new Promise((resolve) => {
        window.setTimeout(resolve, 1200);
      });

      Promise.race([preload, preloadCap]).then(() => {
        if (cancelled) return;
        const playFrom = performance.now();
        let shown = -1;
        const tick = (now) => {
          if (cancelled) return;
          const index = Math.min(FRAMES.length - 1, Math.floor((now - playFrom) / FRAME_MS));
          if (index !== shown) {
            shown = index;
            setFrame(index);
          }
          if (index < FRAMES.length - 1) rafId = window.requestAnimationFrame(tick);
        };
        rafId = window.requestAnimationFrame(tick);
        finish(MIN_VISIBLE_MS);
      });
    }

    return () => {
      cancelled = true;
      closed = true;
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(exitTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [playOnLoad]);

  useEffect(() => {
    if (!closing) return undefined;
    const timer = window.setTimeout(() => setGone(true), 1100);
    return () => window.clearTimeout(timer);
  }, [closing]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-[#070706] transition-opacity duration-1000 ease-in-out ${
        closing ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Elia Boutique Hotel"
    >
      <div className={`flex w-[min(92vw,640px)] flex-col items-center transition-transform duration-1000 ease-in-out ${closing ? 'scale-[1.03]' : 'scale-100'}`}>
        <div className="relative aspect-[800/350] w-full">
          {FRAMES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ease-linear ${
                index === frame ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="mt-1 h-px w-28 overflow-hidden bg-white/10">
          <div
            className="h-full bg-[#C5A880] transition-[width] duration-150 ease-linear"
            style={{ width: `${((frame + 1) / FRAMES.length) * 100}%` }}
          />
        </div>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.42em] text-[#C5A880]/90">
          Boutique Hotel
        </p>
      </div>
    </div>
  );
}
