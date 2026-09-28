import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';

export default function RoomGallery({ images = [], title }) {
  const slides = images.filter(Boolean);
  const slideKey = slides.join('|');
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    setIndex(0);
  }, [title, slideKey]);

  const go = useCallback((next) => {
    if (!slides.length) return;
    setIndex((current) => (current + next + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(false);
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };
    document.body.classList.add('elia-booking-scroll-lock');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('elia-booking-scroll-lock');
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, go]);

  if (!slides.length) return null;

  const current = slides[index];

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start == null || end == null) return;
    const delta = end - start;
    if (Math.abs(delta) < 40) return;
    go(delta < 0 ? 1 : -1);
  };

  return (
    <>
      <div className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-2xl border border-[#A38B68]/30 bg-[#EFEAE2]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={current}
            alt={`${title} photograph ${index + 1} of ${slides.length} at Elia Boutique Hotel Phuket`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 w-full h-full object-cover"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            decoding="async"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
          <div className="min-w-0 backdrop-blur-md bg-black/40 px-4 py-2.5 rounded-xl border border-white/20">
            <span className="font-serif text-sm sm:text-base font-normal tracking-wide block truncate">{title}</span>
            <span className="text-[10px] text-white/80">
              {index + 1} / {slides.length} • Swipe to view
            </span>
          </div>
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="shrink-0 inline-flex items-center gap-1.5 backdrop-blur-md bg-black/40 hover:bg-black/60 px-3 py-2.5 rounded-xl border border-white/20 text-[10px] uppercase tracking-wider font-semibold cursor-pointer"
          >
            <Expand size={13} />
            Gallery
          </button>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {slides.map((src, slideIndex) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(slideIndex)}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border-2 cursor-pointer ${
                slideIndex === index ? 'border-[#A38B68]' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
              aria-label={`Show photograph ${slideIndex + 1}`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#141312]/96 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} gallery`}
          >
            <div className="flex items-center justify-between px-4 py-3 text-white">
              <p className="font-serif text-base truncate pr-4">{title}</p>
              <button
                type="button"
                onClick={() => setLightbox(false)}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer"
                aria-label="Close gallery"
              >
                <X size={18} />
              </button>
            </div>
            <div
              className="relative flex-1 min-h-0"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={current}
                alt={`${title} photograph ${index + 1}`}
                className="absolute inset-0 m-auto max-h-full max-w-full object-contain"
              />
              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center cursor-pointer"
                    aria-label="Previous photograph"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center cursor-pointer"
                    aria-label="Next photograph"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            <p className="text-center text-white/70 text-xs py-3">
              {index + 1} / {slides.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
