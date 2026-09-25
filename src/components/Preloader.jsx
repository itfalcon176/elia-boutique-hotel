import { useEffect, useState } from 'react';

const LOGO_SRC = '/images/elia%20gold1.png';
const PLAY_MS = 2600;
const FADE_MS = 480;

function easeInCubic(amount) {
  return amount ** 3;
}

function easeOutCubic(amount) {
  return 1 - (1 - amount) ** 3;
}

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
  const [amount, setAmount] = useState(0);
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

  const bar = easeInOutCubic(amount);

  return (
    <div
      className={`elia-preloader fixed inset-0 z-[80] flex items-center justify-center ${
        closing ? 'elia-preloader-leave pointer-events-none' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Elia Boutique Hotel"
    >
      <div className="flex w-[min(78vw,440px)] flex-col items-center">
        <img
          src={LOGO_SRC}
          alt=""
          draggable="false"
          className="h-auto w-full select-none bg-transparent"
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
        </div>
      </div>
    </div>
  );
}
