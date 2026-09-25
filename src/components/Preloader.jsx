import { useEffect, useState } from 'react';

const FRAME_COUNT = 12;
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, index) => (
  `/preloader/frame-${String(index + 1).padStart(2, '0')}.webp`
));
const DRAW_MS = 2400;
const HOLD_MS = 560;
const FADE_MS = 480;

function easeOutCubic(amount) {
  return 1 - (1 - amount) ** 3;
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

function frameOpacity(index, progress) {
  const base = Math.floor(progress);
  const mix = progress - base;
  const blend = 0.22;
  if (index === base) {
    if (mix <= 1 - blend) return 1;
    return 1 - (mix - (1 - blend)) / blend;
  }
  if (index === base + 1) {
    if (mix <= 1 - blend) return 0;
    return (mix - (1 - blend)) / blend;
  }
  return 0;
}

export default function Preloader() {
  const playOnLoad = shouldPlayPreloader();
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(!playOnLoad);

  useEffect(() => {
    if (!playOnLoad) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let closed = false;
    let cancelled = false;
    let rafId = 0;
    let exitTimer = 0;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const release = (delay) => {
      exitTimer = window.setTimeout(() => {
        if (closed || cancelled) return;
        closed = true;
        document.body.style.overflow = previousOverflow;
        setClosing(true);
      }, delay);
    };

    if (reduceMotion) {
      setProgress(FRAME_COUNT - 1);
      release(320);
    } else {
      const preload = Promise.all(FRAMES.map((src) => new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = src;
      })));
      const preloadCap = new Promise((resolve) => {
        window.setTimeout(resolve, 700);
      });

      Promise.race([preload, preloadCap]).then(() => {
        if (cancelled) return;
        const playFrom = performance.now();
        const tick = (now) => {
          if (cancelled) return;
          const elapsed = now - playFrom;
          const eased = easeOutCubic(Math.min(1, elapsed / DRAW_MS));
          setProgress(eased * (FRAME_COUNT - 1));
          if (elapsed < DRAW_MS) rafId = window.requestAnimationFrame(tick);
        };
        rafId = window.requestAnimationFrame(tick);
        release(DRAW_MS + HOLD_MS);
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
    const timer = window.setTimeout(() => setGone(true), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [closing]);

  if (gone) return null;

  return (
    <div
      className={`elia-preloader fixed inset-0 z-[80] flex items-center justify-center ${
        closing ? 'elia-preloader-leave pointer-events-none' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Elia Boutique Hotel"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="elia-preloader-glow pointer-events-none absolute"
          style={{ opacity: 0.2 + (progress / (FRAME_COUNT - 1)) * 0.45 }}
          aria-hidden="true"
        />
        <div className="relative aspect-[730/454] w-[min(90vw,560px)]">
          {FRAMES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              draggable="false"
              className="absolute inset-0 h-full w-full object-contain select-none"
              style={{ opacity: frameOpacity(index, progress) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
