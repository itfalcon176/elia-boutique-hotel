import { useEffect, useState } from 'react';

const FRAME_COUNT = 12;
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, index) => (
  `/preloader/frame-${String(index + 1).padStart(2, '0')}.webp`
));
const SEGMENT_MS = 170;
const DRAW_MS = (FRAME_COUNT - 1) * SEGMENT_MS;
const HOLD_MS = 480;
const FADE_MS = 400;

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
  if (mix === 0) return index === base ? 1 : 0;
  if (index === base) return 1 - mix;
  if (index === base + 1) return mix;
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
          const next = Math.min(FRAME_COUNT - 1, elapsed / SEGMENT_MS);
          setProgress(next);
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
      className={`elia-preloader fixed inset-0 z-[80] flex items-center justify-center bg-[#141312] ${
        closing ? 'elia-preloader-leave pointer-events-none' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Elia Boutique Hotel"
    >
      <div className="relative aspect-[384/341] w-[min(86vw,440px)]">
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
  );
}
