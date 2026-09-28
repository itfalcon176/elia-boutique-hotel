import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu as MenuIcon, X, Calendar, ChevronDown, ArrowRight, Globe, Check } from 'lucide-react';
import { roomsData } from '../data/roomsData';

// Crisp Vector SVG Flag Components for 100% Consistent Cross-Platform Rendering (iOS, Android, Windows, Mac)
const FlagGB = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 60 40" className={`inline-block shrink-0 rounded-xs shadow-[0_0_1px_rgba(0,0,0,0.4)] ${className}`} aria-hidden="true">
    <clipPath id="uk-flag-clip">
      <rect width="60" height="40" rx="1" />
    </clipPath>
    <g clipPath="url(#uk-flag-clip)">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,40" stroke="#C8102E" strokeWidth="2.2" strokeDasharray="30,30" />
      <path d="M60,0 L0,40" stroke="#C8102E" strokeWidth="2.2" strokeDasharray="30,30" strokeDashoffset="30" />
      <path d="M30,0 v40 M0,20 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const FlagTH = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 60 40" className={`inline-block shrink-0 rounded-xs shadow-[0_0_1px_rgba(0,0,0,0.4)] ${className}`} aria-hidden="true">
    <rect width="60" height="40" rx="1" fill="#A51931" />
    <rect y="6.67" width="60" height="26.67" fill="#F4F5F8" />
    <rect y="13.33" width="60" height="13.33" fill="#2D2A4A" />
  </svg>
);

const FlagRU = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 60 40" className={`inline-block shrink-0 rounded-xs shadow-[0_0_1px_rgba(0,0,0,0.4)] border border-black/10 ${className}`} aria-hidden="true">
    <rect width="60" height="40" rx="1" fill="#FFFFFF" />
    <rect y="13.33" width="60" height="26.67" fill="#0039A6" />
    <rect y="26.67" width="60" height="13.33" fill="#D52B1E" />
  </svg>
);

const FlagCN = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 60 40" className={`inline-block shrink-0 rounded-xs shadow-[0_0_1px_rgba(0,0,0,0.4)] ${className}`} aria-hidden="true">
    <rect width="60" height="40" rx="1" fill="#DE2910" />
    <polygon points="10,3 12,9 18,9 13,13 15,19 10,15 5,19 7,13 2,9 8,9" fill="#FFDE00" transform="scale(0.85) translate(2, 2)" />
    <polygon points="20,4 21,7 24,7 21.5,9 22.5,12 20,10 17.5,12 18.5,9 16,7 19,7" fill="#FFDE00" transform="scale(0.45) translate(22, 1)" />
    <polygon points="20,4 21,7 24,7 21.5,9 22.5,12 20,10 17.5,12 18.5,9 16,7 19,7" fill="#FFDE00" transform="scale(0.45) translate(27, 6)" />
    <polygon points="20,4 21,7 24,7 21.5,9 22.5,12 20,10 17.5,12 18.5,9 16,7 19,7" fill="#FFDE00" transform="scale(0.45) translate(27, 13)" />
    <polygon points="20,4 21,7 24,7 21.5,9 22.5,12 20,10 17.5,12 18.5,9 16,7 19,7" fill="#FFDE00" transform="scale(0.45) translate(22, 18)" />
  </svg>
);

const FlagFR = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 60 40" className={`inline-block shrink-0 rounded-xs shadow-[0_0_1px_rgba(0,0,0,0.4)] border border-black/10 ${className}`} aria-hidden="true">
    <rect width="20" height="40" fill="#002395" rx="1" />
    <rect x="20" width="20" height="40" fill="#FFFFFF" />
    <rect x="40" width="20" height="40" fill="#ED2939" rx="1" />
  </svg>
);

const FlagDE = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 60 40" className={`inline-block shrink-0 rounded-xs shadow-[0_0_1px_rgba(0,0,0,0.4)] ${className}`} aria-hidden="true">
    <rect width="60" height="40" rx="1" fill="#000000" />
    <rect y="13.33" width="60" height="26.67" fill="#DD0000" />
    <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
  </svg>
);

const languages = [
  { code: 'EN', name: 'English', native: 'English', FlagComponent: FlagGB },
  { code: 'TH', name: 'Thailand', native: 'ภาษาไทย', FlagComponent: FlagTH },
  { code: 'RU', name: 'Russian', native: 'Русский', FlagComponent: FlagRU },
  { code: 'ZH', name: 'Chinese', native: '中文', FlagComponent: FlagCN },
  { code: 'FR', name: 'French', native: 'Français', FlagComponent: FlagFR },
  { code: 'DE', name: 'German', native: 'Deutsch', FlagComponent: FlagDE },
];

export default function Navbar({ activePage, setActivePage, onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuToggleRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Restore selected language from storage/cookies on mount
  useEffect(() => {
    try {
      const savedCode = localStorage.getItem('elia_preferred_lang');
      if (savedCode) {
        const match = languages.find((l) => l.code === savedCode);
        if (match) setSelectedLang(match);
      } else {
        const matchCookie = document.cookie.match(/googtrans=\/en\/([^;]+)/);
        if (matchCookie && matchCookie[1]) {
          const mapping = { EN: 'en', TH: 'th', RU: 'ru', ZH: 'zh-CN', FR: 'fr', DE: 'de' };
          const found = languages.find((l) => mapping[l.code] === matchCookie[1]);
          if (found) setSelectedLang(found);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => {
      if (media.matches) setMobileMenuOpen(false);
    };
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const menu = menuRef.current;
    const toggleButton = menuToggleRef.current;
    const body = document.body;
    const root = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = root.style.overflow;
    body.style.overflow = 'hidden';
    root.style.overflow = 'hidden';

    const inerted = [];
    if (menu?.parentElement) {
      for (const child of menu.parentElement.children) {
        if (child === menu || child.contains(menu) || child.hasAttribute('inert')) continue;
        child.setAttribute('inert', '');
        inerted.push(child);
      }
    }

    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    const getFocusable = () => {
      if (!menu) return [];
      return [...menu.querySelectorAll(focusableSelector)].filter((el) => el.getClientRects().length > 0);
    };

    closeButtonRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMobileMenuOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const items = getFocusable();
      if (items.length === 0) {
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const inside = menu?.contains(active);

      if (event.shiftKey) {
        if (!inside || active === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (!inside || active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      body.style.overflow = previousBodyOverflow;
      root.style.overflow = previousRootOverflow;
      inerted.forEach((el) => el.removeAttribute('inert'));
      toggleButton?.focus({ preventScroll: true });
    };
  }, [mobileMenuOpen]);

  const handleSelectLanguage = (lang) => {
    setSelectedLang(lang);
    setLangDropdownOpen(false);

    try {
      localStorage.setItem('elia_preferred_lang', lang.code);
    } catch {
      // ignore
    }

    const langMapping = {
      EN: 'en',
      TH: 'th',
      RU: 'ru',
      ZH: 'zh-CN',
      FR: 'fr',
      DE: 'de',
    };

    const target = langMapping[lang.code] || 'en';
    const host = window.location.hostname;

    if (target === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${host};`;
      document.cookie = `googtrans=/en/en; path=/;`;
      document.cookie = `googtrans=/en/en; path=/; domain=${host};`;
    } else {
      const cookieVal = `/en/${target}`;
      document.cookie = `googtrans=${cookieVal}; path=/;`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${host};`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${host};`;
    }

    // Trigger Google Translate Combo box or reload if needed
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = target;
      select.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  // Header items matching Section 22 of SEO Pack:
  // ROOMS & SUITES | EAT & DRINK | WELLNESS | EXPERIENCES | GALLERY | ABOUT | CONTACT | BOOK NOW
  const navLinks = [
    { id: 'rooms', label: 'Accommodation', hasDropdown: true },
    { id: 'wellness', label: 'Facilities' },
    { id: 'eat-drink', label: 'Food and Drinks' },
    { id: 'contact', label: 'Location' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    setRoomsDropdownOpen(false);
  };

  const isLightHeader = scrolled || (activePage !== 'home');

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isLightHeader
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#A38B68]/20 py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group text-left"
            >
              <img
                src={isLightHeader ? '/Logos/elia gold.png' : '/Logos/logo nwww.png'}
                alt="Elia Boutique Hotel Phuket Logo"
                className="h-12 sm:h-12 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/Logos/elia gold.png';
                }}
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => {
                const isSelected = activePage === link.id || (link.id === 'rooms' && activePage.startsWith('rooms'));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.id}
                      className="relative"
                      onMouseEnter={() => setRoomsDropdownOpen(true)}
                      onMouseLeave={() => setRoomsDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`relative text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center gap-1.5 py-1 cursor-pointer ${isLightHeader
                            ? isSelected
                              ? 'text-[#A38B68] font-bold'
                              : 'text-[#23211E]/80 hover:text-[#23211E]'
                            : isSelected
                              ? 'text-[#C5A880] font-bold'
                              : 'text-white/85 hover:text-white'
                          }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={13} className={`transition-transform duration-200 ${roomsDropdownOpen ? 'rotate-180' : ''}`} />
                        {isSelected && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent"
                          />
                        )}
                      </button>

                      {/* Rooms Dropdown Menu - Large, Spacious, Luxury Card Layout */}
                      <AnimatePresence>
                        {roomsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-3 w-[420px] sm:w-[460px] bg-[#FAF7F2] text-[#23211E] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-[#A38B68]/30 p-3 sm:p-4 z-50 backdrop-blur-2xl"
                          >
                            <div className="px-2 py-1.5 border-b border-[#A38B68]/20 mb-2 flex items-center justify-between">
                              <span className="text-xs uppercase tracking-[0.2em] text-[#A38B68] font-bold">
                                Rooms & Suites
                              </span>
                              <button
                                onClick={() => handleNavClick('rooms')}
                                className="text-xs font-semibold uppercase text-[#23211E] hover:text-[#A38B68] flex items-center gap-1 transition-colors group cursor-pointer"
                              >
                                <span>Overview</span>
                                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                              </button>
                            </div>

                            <div className="space-y-1.5">
                              {roomsData.map((room) => (
                                <button
                                  key={room.id}
                                  onClick={() => handleNavClick(`rooms/${room.slug}`)}
                                  className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3.5 transition-all cursor-pointer group ${activePage === `rooms/${room.slug}`
                                      ? 'bg-[#23211E] text-white shadow-md'
                                      : 'hover:bg-[#EFECE6] text-[#23211E]'
                                    }`}
                                >
                                  {/* Thumbnail Image */}
                                  <div className="w-14 h-12 rounded-lg overflow-hidden shrink-0 border border-[#A38B68]/25 bg-stone-200">
                                    <img
                                      src={room.mainImage}
                                      alt={room.title}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                  </div>

                                  {/* Content */}
                                  <div className="flex-1 min-w-0">
                                    <div className="font-serif font-medium text-sm sm:text-base leading-snug group-hover:text-[#A38B68] transition-colors truncate">
                                      {room.title}
                                    </div>
                                    <div className={`text-xs mt-0.5 font-light truncate ${activePage === `rooms/${room.slug}` ? 'text-white/80' : 'text-[#6E6A63]'
                                      }`}>
                                      {room.countLabel} • {room.size} • {room.maxOccupancyText}
                                    </div>
                                  </div>

                                  {/* Action Arrow */}
                                  <div className="shrink-0 pl-1">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A38B68] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                      View →
                                    </span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center gap-1.5 py-1 cursor-pointer ${isLightHeader
                        ? isSelected
                          ? 'text-[#A38B68] font-bold'
                          : 'text-[#23211E]/80 hover:text-[#23211E]'
                        : isSelected
                          ? 'text-[#C5A880] font-bold'
                          : 'text-white/85 hover:text-white'
                      }`}
                  >
                    <span>{link.label}</span>
                    {isSelected && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Header Actions: BOOK NOW + Luxury Language Selector */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Desktop BOOK NOW Button */}
              <button
                type="button"
                onClick={() => handleNavClick('book-your-stay')}
                className={`hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold px-5 lg:px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer ${
                  isLightHeader
                    ? 'bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68]'
                    : 'bg-gradient-to-r from-[#C5A880] to-[#9E8259] text-[#141312] font-bold hover:brightness-110 shadow-[0_0_20px_rgba(197,168,128,0.4)]'
                }`}
              >
                <Calendar size={14} />
                <span>BOOK NOW</span>
              </button>

              {/* Luxury Language Selector Dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    isLightHeader
                      ? 'bg-white/90 text-[#23211E] border-[#A38B68]/30 hover:border-[#A38B68] shadow-sm'
                      : 'bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md shadow-sm'
                  }`}
                  aria-label="Select Language"
                  title={`Language: ${selectedLang.name}`}
                >
                  <Globe size={13} className={isLightHeader ? 'text-[#A38B68]' : 'text-[#C5A880]'} />
                  <selectedLang.FlagComponent className="w-4 h-3" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold font-sans">{selectedLang.code}</span>
                  <ChevronDown size={11} className={`transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Animated Dropdown Menu */}
                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-[#FAF7F2] text-[#23211E] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-[#A38B68]/30 p-2 z-50 backdrop-blur-2xl"
                    >
                      <div className="px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#A38B68] font-bold border-b border-[#A38B68]/20 mb-1 flex items-center justify-between">
                        <span>Language</span>
                        <span className="text-[9px] lowercase font-normal text-[#6E6A63]">({languages.length})</span>
                      </div>
                      <div className="space-y-1">
                        {languages.map((lang) => {
                          const isSelected = selectedLang.code === lang.code;
                          return (
                            <button
                              key={lang.code}
                              type="button"
                              onClick={() => handleSelectLanguage(lang)}
                              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#23211E] text-white shadow-sm'
                                  : 'hover:bg-[#EFECE6] text-[#23211E]'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <lang.FlagComponent className="w-5 h-3.5" />
                                <div>
                                  <div className="text-xs font-semibold leading-none">{lang.name}</div>
                                  <div className={`text-[10px] mt-0.5 font-light ${isSelected ? 'text-white/75' : 'text-[#6E6A63]'}`}>
                                    {lang.native}
                                  </div>
                                </div>
                              </div>
                              {isSelected && <Check size={14} className="text-[#C5A880]" />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile menu toggle. Desktop navigation stays in the bar above. */}
            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isLightHeader
                  ? 'text-[#23211E] focus-visible:outline-[#A38B68]'
                  : 'text-white focus-visible:outline-[#C5A880]'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuOpen ? 'elia-mobile-menu' : undefined}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile navigation. Language and secondary promo links stay outside this drawer. */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="elia-mobile-menu"
            key="elia-mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="elia-mobile-menu-title"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex h-dvh max-h-dvh flex-col overflow-y-auto overscroll-contain bg-[#F7F4EF] px-6 text-[#23211E] lg:hidden"
          >
            <h2 id="elia-mobile-menu-title" className="sr-only">Menu</h2>
            <div className="mx-auto flex min-h-full w-full max-w-md flex-col">
              <div className="sticky top-0 z-10 -mx-6 shrink-0 bg-[#F7F4EF] px-6 pt-[max(0.75rem,env(safe-area-inset-top))]">
                <div className="flex items-center justify-between gap-4 border-b border-[#A38B68]/20 pb-4">
                <button
                  type="button"
                  onClick={() => handleNavClick('home')}
                  className="min-w-0 cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A38B68]"
                >
                  <img
                    src="/Logos/elia gold.png"
                    alt="Elia Boutique Hotel Phuket"
                    className="h-11 w-auto max-w-[9.5rem] object-contain object-left sm:h-12"
                    onError={(e) => {
                      e.target.src = '/Logos/logo nwww.png';
                    }}
                  />
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#A38B68]/35 text-[#23211E] transition-colors duration-200 hover:border-[#A38B68] hover:text-[#A38B68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A38B68]"
                  aria-label="Close menu"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
                </div>
              </div>

              <nav className="my-auto w-full py-3" aria-label="Primary">
                <ul className="flex flex-col">
                  {navLinks.map((link) => {
                    if (link.hasDropdown) {
                      const sectionActive = activePage === link.id || activePage.startsWith(`${link.id}/`);
                      return (
                        <li key={link.id} className="border-b border-[#A38B68]/20">
                          <button
                            type="button"
                            onClick={() => handleNavClick(link.id)}
                            className={`flex min-h-12 w-full cursor-pointer items-center py-2 text-left font-serif text-[1.65rem] font-light leading-tight tracking-wide transition-colors duration-200 focus-visible:underline focus-visible:decoration-[#A38B68] focus-visible:underline-offset-8 focus-visible:outline-none sm:text-[2rem] ${
                              sectionActive ? 'text-[#A38B68]' : 'text-[#23211E] hover:text-[#A38B68]'
                            }`}
                            aria-current={activePage === link.id ? 'page' : undefined}
                          >
                            {link.label}
                          </button>
                          <ul className="mb-2 mt-0.5 flex flex-col" aria-label="Rooms">
                            {roomsData.map((room) => {
                              const roomPage = `rooms/${room.slug}`;
                              const isRoomActive = activePage === roomPage;
                              return (
                                <li key={room.id}>
                                  <button
                                    type="button"
                                    onClick={() => handleNavClick(roomPage)}
                                    className={`flex min-h-11 w-full cursor-pointer items-center border-l py-2 pl-4 text-left font-sans text-[15px] leading-snug tracking-wide transition-colors duration-200 focus-visible:underline focus-visible:decoration-[#A38B68] focus-visible:underline-offset-4 focus-visible:outline-none sm:text-base ${
                                      isRoomActive
                                        ? 'border-[#A38B68] text-[#A38B68]'
                                        : 'border-[#A38B68]/30 text-[#6E6A63] hover:border-[#A38B68] hover:text-[#23211E]'
                                    }`}
                                    aria-current={isRoomActive ? 'page' : undefined}
                                  >
                                    {room.title}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    }

                    const isSelected = activePage === link.id;
                    return (
                      <li key={link.id} className="border-b border-[#A38B68]/20">
                        <button
                          type="button"
                          onClick={() => handleNavClick(link.id)}
                          className={`flex min-h-12 w-full cursor-pointer items-center py-2 text-left font-serif text-[1.65rem] font-light leading-tight tracking-wide transition-colors duration-200 focus-visible:underline focus-visible:decoration-[#A38B68] focus-visible:underline-offset-8 focus-visible:outline-none sm:text-[2rem] ${
                            isSelected ? 'text-[#A38B68]' : 'text-[#23211E] hover:text-[#A38B68]'
                          }`}
                          aria-current={isSelected ? 'page' : undefined}
                        >
                          {link.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="sticky bottom-0 z-10 -mx-6 shrink-0 bg-[#F7F4EF] px-6 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.setTimeout(() => onOpenReservation?.(), 0);
                  }}
                  className="flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-[#23211E] px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F7F4EF] transition-colors duration-300 hover:bg-[#A38B68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A38B68] sm:text-xs"
                >
                  Reserve stay or table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
