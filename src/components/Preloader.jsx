import { useEffect, useState } from 'react';

const LOGO_SRC = '/Logos/elia gold.png';
const HOLD_MS = 1100;
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

export default function Preloader() {
  const playOnLoad = shouldPlayPreloader();
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(!playOnLoad);

  useEffect(() => {
    if (!playOnLoad) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let closed = false;
    let exitTimer = 0;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const image = new Image();
    image.src = LOGO_SRC;

    const release = () => {
      if (closed) return;
      closed = true;
      document.body.style.overflow = previousOverflow;
      setClosing(true);
    };

    exitTimer = window.setTimeout(release, reduceMotion ? 280 : HOLD_MS);

    return () => {
      closed = true;
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
      <div className="relative flex items-center justify-center">
        <div className="elia-preloader-glow pointer-events-none absolute" aria-hidden="true" />
        <img
          src={LOGO_SRC}
          alt="Elia Boutique Hotel"
          className="elia-preloader-logo relative block h-auto w-[min(78vw,420px)] select-none"
          draggable="false"
        />
      </div>
    </div>
  );
}
