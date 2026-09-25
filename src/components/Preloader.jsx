import { useEffect, useState } from 'react';

const FRAME_NUMBERS = [1, 2, 3, 4, 6, 8, 7];
const FRAMES = FRAME_NUMBERS.map((n) => `/preloader/frame-${String(n).padStart(2, '0')}.png`);
const FRAME_MS = 520;
const MIN_VISIBLE_MS = 4600;

export default function Preloader() {
  const [frame, setFrame] = useState(0);
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const started = performance.now();
    let closed = false;
    let intervalId = 0;
    let exitTimer = 0;
    let capTimer = 0;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const close = () => {
      if (closed) return;
      closed = true;
      const elapsed = performance.now() - started;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
      exitTimer = window.setTimeout(() => {
        setClosing(true);
        document.body.style.overflow = previousOverflow;
      }, wait);
    };

    if (reduceMotion) {
      setFrame(FRAMES.length - 1);
      exitTimer = window.setTimeout(() => {
        setClosing(true);
        document.body.style.overflow = previousOverflow;
        closed = true;
      }, 350);
    } else {
      let index = 0;
      intervalId = window.setInterval(() => {
        index += 1;
        if (index >= FRAMES.length) {
          window.clearInterval(intervalId);
          return;
        }
        setFrame(index);
      }, FRAME_MS);

      if (document.readyState === 'complete') close();
      else window.addEventListener('load', close, { once: true });
      capTimer = window.setTimeout(close, 7000);
    }

    return () => {
      closed = true;
      window.clearInterval(intervalId);
      window.clearTimeout(exitTimer);
      window.clearTimeout(capTimer);
      window.removeEventListener('load', close);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

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
        <div
          className="relative aspect-[960/420] w-full"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse at center, #000 72%, transparent 96%)',
            maskImage: 'radial-gradient(ellipse at center, #000 72%, transparent 96%)',
          }}
        >
          {FRAMES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out ${
                index === frame ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="mt-1 h-px w-28 overflow-hidden bg-white/10">
          <div
            className="h-full bg-[#C5A880] transition-[width] duration-700 ease-in-out"
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
