import { useEffect, useState } from 'react';

<<<<<<< HEAD
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
=======
const LOGO_SRC = '/preloader/elia-logo.webp';
const PLAY_MS = 2600;
const FADE_MS = 480;

function easeInCubic(amount) {
  return amount ** 3;
}

function easeOutCubic(amount) {
  return 1 - (1 - amount) ** 3;
}
>>>>>>> 5b81fc4 (Replace the drawn preloader with a fading Elia logo and eased bar.)

function easeInOutCubic(amount) {
  return amount < 0.5
    ? 4 * amount * amount * amount
    : 1 - ((-2 * amount + 2) ** 3) / 2;
}

function logoOpacity(amount) {
  const fadeInUntil = 0.3;
  const fadeOutFrom = 0.7;
  if (amount <= fadeInUntil) return easeOutCubic(amount / fadeInUntil);
  if (amount >= fadeOutFrom) return 1 - easeInCubic((amount - fadeOutFrom) / (1 - fadeOutFrom));
  return 1;
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

export default function Preloader() {
  const playOnLoad = shouldPlayPreloader();
<<<<<<< HEAD
  const [currentFrame, setCurrentFrame] = useState(0);
=======
  const [amount, setAmount] = useState(0);
>>>>>>> 5b81fc4 (Replace the drawn preloader with a fading Elia logo and eased bar.)
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
<<<<<<< HEAD
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
=======
      setAmount(1);
      release(280);
    } else {
      const playFrom = performance.now();
      const tick = (now) => {
        if (cancelled) return;
        const elapsed = now - playFrom;
        setAmount(Math.min(1, elapsed / PLAY_MS));
        if (elapsed < PLAY_MS) rafId = window.requestAnimationFrame(tick);
      };
      rafId = window.requestAnimationFrame(tick);
      release(PLAY_MS);
>>>>>>> 5b81fc4 (Replace the drawn preloader with a fading Elia logo and eased bar.)
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

<<<<<<< HEAD
  const isRadiant = currentFrame >= 8;
=======
  const bar = easeInOutCubic(amount);
>>>>>>> 5b81fc4 (Replace the drawn preloader with a fading Elia logo and eased bar.)

  return (
    <div
      className={`elia-preloader fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#0D0C0B] ${
        closing ? 'elia-preloader-leave pointer-events-none' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Elia Boutique Hotel"
    >
<<<<<<< HEAD
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
=======
      <div className="flex w-[min(78vw,440px)] flex-col items-center">
        <img
          src={LOGO_SRC}
          alt=""
          draggable="false"
          className="h-auto w-full select-none"
          style={{ opacity: logoOpacity(amount) }}
        />
        <div
          className="elia-preloader-track mt-8 sm:mt-10"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(bar * 100)}
          aria-label="Loading"
        >
          <div
            className="elia-preloader-bar"
            style={{ transform: `scaleX(${bar})` }}
          />
>>>>>>> 5b81fc4 (Replace the drawn preloader with a fading Elia logo and eased bar.)
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
