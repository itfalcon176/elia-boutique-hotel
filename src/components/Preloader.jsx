import { useEffect, useState } from 'react';

const LOGO = '/preloader/elia-logo.webp';
const VISIBLE_MS = 3200;

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
    image.src = LOGO;

    exitTimer = window.setTimeout(() => {
      if (closed) return;
      closed = true;
      setClosing(true);
      document.body.style.overflow = previousOverflow;
    }, reduceMotion ? 500 : VISIBLE_MS);

    return () => {
      closed = true;
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
      <div className={`relative flex items-center justify-center transition-transform duration-1000 ease-in-out ${closing ? 'scale-[1.02]' : 'scale-100'}`}>
        <div className="elia-preloader-glow pointer-events-none absolute" />
        <div className="relative w-[min(84vw,540px)]">
          <img
            src={LOGO}
            alt="Elia Boutique Hotel"
            className="elia-preloader-logo block h-auto w-full"
          />
          <div className="elia-preloader-sheen pointer-events-none absolute inset-0" />
        </div>
      </div>
    </div>
  );
}
