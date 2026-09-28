import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  Bed,
  Calendar,
  ChevronDown,
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
    image: '/accommodation/Loft Apartment 3.webp',
    imagePosition: '82% 78%',
    Icon: Bed,
    opensPanel: true,
  },
  {
    id: 'wellness',
    title: 'Facilities',
    subtitle: 'Pool, beach club and more',
    image: '/images/suite.png',
    imagePosition: '92% 72%',
    Icon: Waves,
  },
  {
    id: 'eat-drink',
    title: 'Food & Drinks',
    subtitle: 'Dining experiences',
    image: '/images/menu-food-card.jpg',
    imagePosition: '38% 48%',
    Icon: Utensils,
  },
  {
    id: 'contact',
    title: 'Location',
    subtitle: 'Bang Tao Beach, Phuket',
    image: '/banner/banner.jpeg',
    imagePosition: '58% 42%',
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
        className="h-10 pl-2.5 pr-2 rounded-full bg-white border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex items-center gap-1 cursor-pointer"
        aria-label={`Language: ${selectedLang.name}`}
        aria-expanded={open}
      >
        <selectedLang.FlagComponent className="w-[1.15rem] h-3.5" />
        <ChevronDown
          size={12}
          strokeWidth={2}
          className={`text-[#8A847B] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
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
          className="elia-mobile-menu fixed inset-0 z-[60] lg:hidden text-[#1F1C19] flex flex-col overflow-hidden"
          style={{ height: '100dvh' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div
            className="grid grid-cols-[3.25rem_minmax(0,1fr)_3.25rem] items-center px-5 shrink-0 h-[3.7rem]"
            style={{ paddingTop: 'max(0.1rem, env(safe-area-inset-top))' }}
          >
            {level === 'rooms' ? (
              <button
                type="button"
                onClick={() => setLevel('main')}
                className="w-11 h-11 -ml-1.5 flex items-center justify-center cursor-pointer text-[#1C1916]"
                aria-label="Back to menu"
              >
                <ArrowLeft size={21} strokeWidth={1.7} />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="w-11 h-11 -ml-1.5 flex items-center justify-center cursor-pointer text-[#1C1916]"
                aria-label="Close menu"
              >
                <X size={21} strokeWidth={1.7} />
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
                className="h-[1.95rem] w-auto object-contain"
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
                level === 'rooms' ? '-translate-x-full pointer-events-none' : 'translate-x-0'
              }`}
              aria-hidden={level === 'rooms'}
            >
              <div
                ref={mainRef}
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5"
              >
                <p className="pt-1.5 pb-3.5 text-[10px] uppercase tracking-[0.28em] text-[#8A847B] font-medium">
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
                        className="relative w-full h-[4.85rem] min-[375px]:h-[5.05rem] min-[414px]:h-[5.25rem] rounded-full overflow-hidden bg-[#f4f0ea] text-left cursor-pointer shadow-[0_1px_2px_rgba(28,25,22,0.04)]"
                      >
                        <img
                          src={card.image}
                          alt=""
                          className="elia-mobile-menu-card-photo"
                          style={{ objectPosition: card.imagePosition }}
                        />
                        <div className="elia-mobile-menu-card-wash absolute inset-0" />
                        <div className="relative h-full flex items-center gap-2.5 pl-4 min-[375px]:pl-[1.15rem] pr-11">
                          <Icon size={21} strokeWidth={1.55} className="text-[#6F6558] shrink-0" />
                          <span className="min-w-0 max-w-[62%] min-[360px]:max-w-[64%]">
                            <span className="block text-[15.5px] min-[375px]:text-[16.5px] font-medium tracking-[-0.018em] text-[#1C1916] leading-none">
                              {card.title}
                            </span>
                            <span className="block mt-1 text-[11.5px] min-[375px]:text-[12px] text-[#7A746B] font-normal leading-snug">
                              {card.subtitle}
                            </span>
                          </span>
                          <ChevronRight
                            size={16}
                            strokeWidth={1.8}
                            className="absolute right-3.5 text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.28)]"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3.5 mb-0.5 h-px bg-[#E7E2D8]" />

                <nav className="pt-0.5" aria-label="More">
                  {SECONDARY_LINKS.map((item) => {
                    const Icon = item.Icon;
                    const className = 'w-full min-h-[3rem] flex items-center gap-3.5 py-1 cursor-pointer';
                    const inner = (
                      <>
                        <Icon size={18} strokeWidth={1.5} className="text-[#8A8378] shrink-0" />
                        <span className="flex-1 text-left text-[15.5px] min-[375px]:text-[16.5px] text-[#1C1916] font-medium tracking-[-0.015em]">
                          {item.title}
                        </span>
                        <ChevronRight size={16} strokeWidth={1.8} className="text-[#C6C0B6]" />
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
                className="elia-mobile-menu shrink-0 px-5 pt-2.5 space-y-2"
                style={{ paddingBottom: 'max(0.8rem, env(safe-area-inset-bottom))' }}
              >
                <button
                  type="button"
                  onClick={() => go('book-your-stay')}
                  className="w-full h-[3.15rem] rounded-full bg-[#171614] text-white font-semibold uppercase tracking-[0.2em] text-[11px] flex items-center justify-between px-5 cursor-pointer"
                >
                  <Calendar size={16} strokeWidth={1.75} />
                  <span>Book Now</span>
                  <ChevronRight size={16} strokeWidth={1.75} />
                </button>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full h-[3.15rem] rounded-full bg-[#25D366] text-white font-semibold uppercase tracking-[0.14em] text-[11px] flex items-center justify-between px-5"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Concierge</span>
                  <ChevronRight size={16} strokeWidth={1.75} />
                </a>
                <p className="flex items-center justify-center gap-1.5 pt-0.5 text-[11px] text-[#8A847B] font-normal">
                  <MapPin size={12} strokeWidth={1.75} />
                  Bang Tao Beach, Phuket
                </p>
              </div>
            </div>

            <div
              className={`elia-mobile-menu absolute inset-0 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                level === 'rooms' ? 'translate-x-0' : 'translate-x-full pointer-events-none'
              }`}
              aria-hidden={level !== 'rooms'}
            >
              <div
                ref={roomsRef}
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5"
                style={{ paddingBottom: 'max(1.1rem, env(safe-area-inset-bottom))' }}
              >
                <p className="pt-2 text-[10px] uppercase tracking-[0.28em] text-[#8A847B] font-medium">
                  Accommodation
                </p>
                <h2 className="mt-2 font-sans text-[2rem] min-[375px]:text-[2.3rem] leading-[1.04] font-semibold tracking-[-0.038em] text-[#1C1916]">
                  13 rooms across
                  <br />
                  4 room types
                </h2>
                <p className="mt-2.5 mb-4 text-[13.5px] min-[375px]:text-[14.5px] leading-[1.5] text-[#6A655D] font-normal max-w-[21.5rem]">
                  Designed for relaxed coastal living with modern comforts and natural elegance.
                </p>

                <div className="flex flex-col gap-2.5 min-[390px]:gap-3">
                  {roomsData.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => go(`rooms/${room.slug}`)}
                      className="relative w-full h-[8.35rem] min-[375px]:h-[8.85rem] min-[414px]:h-[9.25rem] rounded-[1.9rem] overflow-hidden text-left cursor-pointer"
                    >
                      <img
                        src={ROOM_MENU_IMAGES[room.slug] || room.mainImage}
                        alt={room.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          objectPosition: {
                            'garden-beach-room': '82% 70%',
                            'garden-family-suite': '24% 38%',
                            'loft-apartment': '78% 58%',
                            'one-bedroom-loft-suite': '46% 52%',
                          }[room.slug] || 'center',
                        }}
                      />
                      <div className="elia-mobile-menu-room-wash absolute inset-0" />
                      <div className="absolute left-5 bottom-3.5 right-[4.4rem]">
                        <span
                          className="block text-white text-[1.22rem] min-[375px]:text-[1.38rem] min-[414px]:text-[1.45rem] font-medium tracking-[-0.028em] leading-[1.12]"
                          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.45)' }}
                        >
                          {room.title}
                        </span>
                        <span className="block mt-1 text-[10.5px] uppercase tracking-[0.22em] text-white/90 font-medium">
                          {room.countLabel}
                        </span>
                      </div>
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.14)] flex items-center justify-center">
                        <ChevronRight size={19} strokeWidth={1.8} className="text-[#1C1916]" />
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
