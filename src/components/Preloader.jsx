import { useEffect, useState } from 'react';

const FRAME_COUNT = 12;
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, index) => (
  `/preloader/frame-${String(index + 1).padStart(2, '0')}.webp`
));

// Progressive timing: snappy wireframe drawing -> glowing crescendo
const TIMINGS = [
  0,    // Frame 1: initial stroke of E
  80,   // Frame 2: complete E
  160,  // Frame 3: E + start of L
  245,  // Frame 4: EL complete
  330,  // Frame 5: ELI complete
  415,  // Frame 6: ELI + start of A
  500,  // Frame 7: ELI + partial A
  590,  // Frame 8: ELIA complete wireframe
  710,  // Frame 9: Glow ignites
  830,  // Frame 10: Lens gleam / flare
  950,  // Frame 11: Light energy sweep
  1080, // Frame 12: Radiant golden logo
];
const DRAW_END_MS = TIMINGS[TIMINGS.length - 1];
const HOLD_MS = 520;
const TOTAL_VISIBLE_MS = DRAW_END_MS + HOLD_MS;
const FADE_MS = 480;

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
  const [currentFrame, setCurrentFrame] = useState(0);
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(!playOnLoad);
  const [progress, setProgress] = useState(0);

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
      setCurrentFrame(FRAME_COUNT - 1);
      setProgress(100);
      release(250);
    } else {
      // Preload all 12 frames for butter-smooth playback
      const preload = Promise.all(
        FRAMES.map((src) => new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        }))
      );
      const preloadTimeout = new Promise((resolve) => {
        window.setTimeout(resolve, 600);
      });

      Promise.race([preload, preloadTimeout]).then(() => {
        if (cancelled) return;
        const startTime = performance.now();

        const tick = (now) => {
          if (cancelled) return;
          const elapsed = now - startTime;

          // Determine current frame based on keyframe timings
          let activeIndex = 0;
          for (let i = TIMINGS.length - 1; i >= 0; i--) {
            if (elapsed >= TIMINGS[i]) {
              activeIndex = i;
              break;
            }
          }
          setCurrentFrame(activeIndex);

          // Smooth progress 0-100%
          const pct = Math.min(100, Math.round((elapsed / TOTAL_VISIBLE_MS) * 100));
          setProgress(pct);

          if (elapsed < TOTAL_VISIBLE_MS) {
            rafId = window.requestAnimationFrame(tick);
          }
        };

        rafId = window.requestAnimationFrame(tick);
        release(TOTAL_VISIBLE_MS);
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

  const isRadiant = currentFrame >= 8;

  return (
    <div
      className={`elia-preloader fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#0D0C0B] ${
        closing ? 'elia-preloader-leave pointer-events-none' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Elia Boutique Hotel"
    >
      <div
        className={`relative flex flex-col items-center justify-center transition-all duration-700 ease-out ${
          closing ? 'scale-[1.03] opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Ambient Warm Golden Glow */}
        <div
          className="elia-preloader-glow pointer-events-none absolute"
          style={{
            opacity: 0.15 + (currentFrame / (FRAME_COUNT - 1)) * 0.55,
            transform: `scale(${0.9 + (currentFrame / (FRAME_COUNT - 1)) * 0.25})`,
          }}
          aria-hidden="true"
        />

        {/* 12-Frame Laser Wireframe Artwork */}
        <div className="relative aspect-[2/1] w-[min(88vw,520px)] max-h-[260px] select-none">
          {FRAMES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              draggable="false"
              className={`absolute inset-0 h-full w-full object-contain pointer-events-none transition-opacity duration-75 ${
                index === currentFrame ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>

        {/* Minimalist Luxury Progress & Subtitle */}
        <div className="flex flex-col items-center mt-4 space-y-3">
          {/* Hairline Golden Progress Bar */}
          <div className="h-[1px] w-32 bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-[#A38B68] via-[#C5A880] to-[#E6D4BA] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Subtitle */}
          <p
            className={`text-[9.5px] uppercase tracking-[0.35em] text-[#C5A880] font-sans font-medium transition-opacity duration-500 ${
              isRadiant ? 'opacity-85' : 'opacity-35'
            }`}
          >
            Boutique Hotel • Bang Tao Beach
          </p>
        </div>
      </div>
    </div>
  );
}
