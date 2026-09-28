import { useEffect, useLayoutEffect, useState } from 'react';

const LOGO_SRC = '/preloader/elia-wordmark.svg';
const REVEAL_MS = 2400;
const LEAVE_MS = 1000;
const REDUCED_MS = 420;

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
  const [playOnLoad] = useState(shouldPlayPreloader);
  const [motionOk] = useState(() => (
    playOnLoad && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));
  const [phase, setPhase] = useState(playOnLoad ? 'play' : 'gone');

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

  return (
    <div
      className={[
        'elia-preloader fixed inset-0 z-[80] flex items-center justify-center',
        motionOk ? 'elia-preloader--motion' : 'elia-preloader--reduced',
        leaving ? 'elia-preloader-leave' : '',
      ].filter(Boolean).join(' ')}
      style={motionOk ? { '--elia-leave-ms': `${LEAVE_MS}ms` } : undefined}
      role={leaving ? undefined : 'status'}
      aria-live={leaving ? 'off' : 'polite'}
      aria-hidden={leaving ? true : undefined}
    >
      <span className="sr-only">Loading Elia Boutique Hotel</span>
      <span className="elia-preloader-corner is-tl" aria-hidden="true" />
      <span className="elia-preloader-corner is-tr" aria-hidden="true" />
      <span className="elia-preloader-corner is-bl" aria-hidden="true" />
      <span className="elia-preloader-corner is-br" aria-hidden="true" />

      <div className="elia-preloader-stage">
        <div className="elia-preloader-glow" aria-hidden="true" />
        <div className="elia-preloader-mark">
          <img
            src={LOGO_SRC}
            alt=""
            draggable="false"
            className="elia-preloader-logo"
          />
          <div className="elia-preloader-streak" aria-hidden="true" />
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
