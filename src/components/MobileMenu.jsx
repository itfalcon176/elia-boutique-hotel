import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  BedDouble,
  Calendar,
  ChevronRight,
  Flower2,
  Info,
  MapPin,
  Sun,
  Tag,
  Users,
  Utensils,
  Waves,
  X,
} from 'lucide-react';
import { roomsData } from '../data/roomsData';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { GOAT_BEACH_CLUB_URL } from '../utils/goat';

const PRIMARY_CARDS = [
  {
    id: 'accommodation',
    title: 'Accommodation',
    subtitle: '13 rooms across 4 room types',
    image: '/accommodation/garden-beach-room.jpg',
    imagePosition: 'right center',
    Icon: BedDouble,
    opensPanel: true,
  },
  {
    id: 'wellness',
    title: 'Facilities',
    subtitle: 'Pool, beach club and more',
    image: '/images/suite.png',
    imagePosition: '82% center',
    Icon: Waves,
  },
  {
    id: 'eat-drink',
    title: 'Food & Drinks',
    subtitle: 'Dining experiences',
    image: '/images/dining.png',
    imagePosition: 'center 35%',
    Icon: Utensils,
  },
  {
    id: 'contact',
    title: 'Location',
    subtitle: 'Bang Tao Beach, Phuket',
    image: '/banner/banner.jpeg',
    imagePosition: 'center 40%',
    Icon: MapPin,
  },
];

const SECONDARY_LINKS = [
  { id: 'goat', title: 'GOAT Beach Club', Icon: Sun, external: GOAT_BEACH_CLUB_URL },
  { id: 'experiences', title: 'Experiences', Icon: Flower2 },
  { id: 'family-hotel-phuket', title: 'Families', Icon: Users },
  { id: 'offers', title: 'Offers', Icon: Tag },
  { id: 'about', title: 'About', Icon: Info },
];

const ROOM_MENU_IMAGES = {
  'garden-beach-room': '/accommodation/garden-beach-room.jpg',
  'garden-family-suite': '/accommodation/Garden Family Suite 2.webp',
  'loft-apartment': '/accommodation/Loft Apartment 3.webp',
  'one-bedroom-loft-suite': '/accommodation/One-Bedroom Loft Suite 4.webp',
};

function LanguageControl({ selectedLang, languages, onSelectLanguage }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onPointer = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    return () => document.removeEventListener('mousedown', onPointer);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="w-11 h-11 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center cursor-pointer"
        aria-label={`Language: ${selectedLang.name}`}
        aria-expanded={open}
      >
        <selectedLang.FlagComponent className="w-5 h-3.5" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-full mt-2 w-52 bg-[#FAF7F2] text-[#23211E] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.22)] border border-[#A38B68]/25 p-2 z-20"
          >
            {languages.map((lang) => {
              const selected = selectedLang.code === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    onSelectLanguage(lang);
                    setOpen(false);
                  }}
                  className={`w-full min-h-11 flex items-center gap-3 px-3 rounded-xl text-left cursor-pointer ${
                    selected ? 'bg-[#23211E] text-white' : 'text-[#23211E]'
                  }`}
                >
                  <lang.FlagComponent className="w-5 h-3.5" />
                  <span className="text-xs font-semibold">{lang.name}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MobileMenu({
  open,
  onClose,
  onNavigate,
  selectedLang,
  languages,
  onSelectLanguage,
}) {
  const [level, setLevel] = useState('main');
  const mainRef = useRef(null);
  const roomsRef = useRef(null);

  useEffect(() => {
    if (open) setLevel('main');
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      setLevel((current) => {
        if (current === 'rooms') return 'main';
        onClose();
        return current;
      });
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (level === 'rooms') roomsRef.current?.scrollTo({ top: 0 });
    else mainRef.current?.scrollTo({ top: 0 });
  }, [level]);

  const go = (id) => {
    onNavigate(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] lg:hidden bg-[#F6F3EE] text-[#23211E] flex flex-col overflow-hidden"
          style={{ height: '100dvh' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div
            className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center px-4 shrink-0"
            style={{ paddingTop: 'max(0.7rem, env(safe-area-inset-top))' }}
          >
            {level === 'rooms' ? (
              <button
                type="button"
                onClick={() => setLevel('main')}
                className="w-11 h-11 -ml-1 flex items-center justify-center cursor-pointer"
                aria-label="Back to menu"
              >
                <ArrowLeft size={22} strokeWidth={1.75} />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="w-11 h-11 -ml-1 flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.75} />
              </button>
            )}

            <button
              type="button"
              onClick={() => go('home')}
              className="justify-self-center cursor-pointer"
            >
              <img
                src="/Logos/elia gold.png"
                alt="Elia Boutique Hotel Phuket"
                className="h-8 w-auto object-contain"
              />
            </button>

            <div className="justify-self-end">
              <LanguageControl
                selectedLang={selectedLang}
                languages={languages}
                onSelectLanguage={onSelectLanguage}
              />
            </div>
          </div>

          <div className="relative flex-1 min-h-0 overflow-hidden">
            <div
              className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                level === 'rooms' ? '-translate-x-full' : 'translate-x-0'
              }`}
            >
              <div
                ref={mainRef}
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4"
              >
                <p className="pt-3 pb-3 text-[10px] uppercase tracking-[0.28em] text-[#8A8378] font-medium">
                  13 rooms · Bang Tao Beach
                </p>

                <div className="flex flex-col gap-2.5">
                  {PRIMARY_CARDS.map((card) => {
                    const Icon = card.Icon;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => (card.opensPanel ? setLevel('rooms') : go(card.id))}
                        className="relative w-full h-[4.85rem] min-[375px]:h-[5.15rem] rounded-[1.65rem] overflow-hidden text-left cursor-pointer"
                      >
                        <img
                          src={card.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: card.imagePosition }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F3EE] via-[#F6F3EE]/88 to-transparent" />
                        <div className="relative h-full flex items-center gap-3 px-3 min-[375px]:px-3.5">
                          <span className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                            <Icon size={18} strokeWidth={1.6} className="text-[#4A453E]" />
                          </span>
                          <span className="min-w-0 pr-2">
                            <span className="block text-[15px] min-[375px]:text-[16px] font-semibold tracking-tight text-[#23211E] leading-tight">
                              {card.title}
                            </span>
                            <span className="block mt-0.5 text-[11px] min-[375px]:text-[12px] text-[#6E6A63] font-light leading-snug">
                              {card.subtitle}
                            </span>
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <nav className="mt-2" aria-label="More">
                  {SECONDARY_LINKS.map((item) => {
                    const Icon = item.Icon;
                    const className = 'w-full min-h-12 flex items-center gap-3.5 py-1 cursor-pointer';
                    const inner = (
                      <>
                        <Icon size={18} strokeWidth={1.6} className="text-[#8A8378] shrink-0" />
                        <span className="flex-1 text-left text-[15px] text-[#23211E] font-medium tracking-tight">
                          {item.title}
                        </span>
                        <ChevronRight size={16} className="text-[#B5AFA6]" />
                      </>
                    );
                    if (item.external) {
                      return (
                        <a
                          key={item.id}
                          href={item.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className={className}
                        >
                          {inner}
                        </a>
                      );
                    }
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => go(item.id)}
                        className={className}
                      >
                        {inner}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div
                className="shrink-0 px-4 pt-3 space-y-2.5 bg-[#F6F3EE]"
                style={{ paddingBottom: 'max(0.85rem, env(safe-area-inset-bottom))' }}
              >
                <button
                  type="button"
                  onClick={() => go('book-your-stay')}
                  className="w-full min-h-12 rounded-full bg-[#1C1A18] text-white font-semibold uppercase tracking-[0.16em] text-[11px] flex items-center justify-between px-5 cursor-pointer"
                >
                  <Calendar size={16} />
                  <span>Book Now</span>
                  <ChevronRight size={16} />
                </button>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full min-h-12 rounded-full bg-[#22C55E] text-white font-semibold uppercase tracking-[0.14em] text-[11px] flex items-center justify-between px-5"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Concierge</span>
                  <ChevronRight size={16} />
                </a>
                <p className="flex items-center justify-center gap-1.5 pt-0.5 pb-0.5 text-[11px] text-[#8A8378]">
                  <MapPin size={12} />
                  Bang Tao Beach, Phuket
                </p>
              </div>
            </div>

            <div
              className={`absolute inset-0 flex flex-col bg-[#F6F3EE] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                level === 'rooms' ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div
                ref={roomsRef}
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4"
                style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
              >
                <h2 className="pt-4 font-sans text-[1.85rem] min-[375px]:text-[2.05rem] leading-[1.12] font-semibold tracking-[-0.03em] text-[#23211E]">
                  13 rooms across
                  <br />
                  4 room types
                </h2>
                <p className="mt-3 mb-5 text-[13px] min-[375px]:text-[14px] leading-relaxed text-[#6E6A63] font-light max-w-[20rem]">
                  Designed for relaxed coastal living with modern comforts and natural elegance.
                </p>

                <div className="flex flex-col gap-3">
                  {roomsData.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => go(`rooms/${room.slug}`)}
                      className="relative w-full h-[9.4rem] min-[375px]:h-[10.25rem] rounded-[1.75rem] overflow-hidden text-left cursor-pointer"
                    >
                      <img
                        src={ROOM_MENU_IMAGES[room.slug] || room.mainImage}
                        alt={room.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/5" />
                      <div className="absolute left-5 bottom-4 right-16">
                        <span className="block text-white text-[1.35rem] min-[375px]:text-[1.5rem] font-medium tracking-[-0.03em] leading-tight">
                          {room.title}
                        </span>
                        <span className="block mt-1 text-[11px] uppercase tracking-[0.18em] text-white/80">
                          {room.countLabel}
                        </span>
                      </div>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center">
                        <ChevronRight size={18} className="text-[#23211E]" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
