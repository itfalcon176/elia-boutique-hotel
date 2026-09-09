import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Calendar, MapPin, ChevronDown, Sparkles, ArrowRight, Globe, Check } from 'lucide-react';
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
                              onClick={() => {
                                setSelectedLang(lang);
                                setLangDropdownOpen(false);
                              }}
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

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 focus:outline-none cursor-pointer ${isLightHeader ? 'text-[#23211E]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#F7F4EF] text-[#23211E] lg:hidden flex flex-col justify-between px-5 pt-5 pb-6 overflow-y-auto"
          >
            {/* Top Close Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#A38B68]/20">
                <button
                  onClick={() => handleNavClick('home')}
                  className="focus:outline-none cursor-pointer"
                >
                  <img
                    src="/Logos/elia gold.png"
                    alt="Elia Boutique Hotel Phuket Logo"
                    className="h-11 sm:h-12 w-auto object-contain"
                    onError={(e) => {
                      e.target.src = '/Logos/logo nwww.png';
                    }}
                  />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#EFECE6] border border-[#A38B68]/30 flex items-center justify-center text-[#23211E] hover:bg-[#23211E] hover:text-white transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Sub-label */}
              <div className="pt-3 pb-1 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-semibold font-sans">
                <span>NAVIGATION</span>
                <span>ELIA PHUKET • 13 ROOMS</span>
              </div>

              {/* Menu Links Stack */}
              <div className="py-2 flex flex-col gap-1.5">
                {navLinks.map((link, idx) => {
                  const isSelected = activePage === link.id || (link.id === 'rooms' && activePage.startsWith('rooms'));
                  return (
                    <div key={link.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-left cursor-pointer ${isSelected
                            ? 'bg-[#23211E] text-[#F7F4EF] border-[#23211E] shadow-md'
                            : 'bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] text-[#23211E] border-[#A38B68]/20'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-serif italic text-xs text-[#A38B68]">
                            0{idx + 1}
                          </span>
                          <span className="text-xs uppercase tracking-[0.2em] font-semibold font-sans">
                            {link.label}
                          </span>
                        </div>
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#A38B68]' : 'bg-[#A38B68]/40'}`} />
                      </button>

                      {/* If rooms, show quick links in mobile */}
                      {link.id === 'rooms' && (
                        <div className="pl-6 pr-2 py-1 space-y-1 bg-[#FAF7F2]/60 rounded-xl border border-[#A38B68]/15 mb-1">
                          {roomsData.map((room) => (
                            <button
                              key={room.id}
                              onClick={() => handleNavClick(`rooms/${room.slug}`)}
                              className={`w-full text-left py-1.5 px-2 text-[11px] font-sans flex items-center justify-between cursor-pointer rounded-lg ${activePage === `rooms/${room.slug}`
                                  ? 'font-bold text-[#A38B68] bg-white'
                                  : 'text-[#6E6A63] hover:text-[#23211E]'
                                }`}
                            >
                              <span>{room.title}</span>
                              <span className="text-[9px] uppercase tracking-wider text-[#A38B68]">
                                {room.countLabel}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Secondary SEO Pages Quick Links */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleNavClick('family-hotel-phuket')}
                    className="p-2.5 rounded-xl border border-[#A38B68]/20 bg-white text-left text-xs font-medium text-[#23211E] hover:border-[#A38B68] cursor-pointer"
                  >
                    Family Stays
                  </button>
                  <button
                    onClick={() => handleNavClick('goat-beach-club')}
                    className="p-2.5 rounded-xl border border-[#A38B68]/20 bg-white text-left text-xs font-medium text-[#23211E] hover:border-[#A38B68] cursor-pointer"
                  >
                    GOAT Beach Club
                  </button>
                  <button
                    onClick={() => handleNavClick('bang-tao-beach-phuket')}
                    className="p-2.5 rounded-xl border border-[#A38B68]/20 bg-white text-left text-xs font-medium text-[#23211E] hover:border-[#A38B68] cursor-pointer"
                  >
                    Bang Tao Beach
                  </button>
                  <button
                    onClick={() => handleNavClick('offers')}
                    className="p-2.5 rounded-xl border border-[#A38B68]/40 bg-[#A38B68]/10 text-left text-xs font-semibold text-[#8B6E3F] hover:bg-[#A38B68]/20 cursor-pointer"
                  >
                    Special Offers
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Language Selector */}
            <div className="pt-3 border-t border-[#A38B68]/20">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#A38B68] font-bold mb-2">
                <span>Select Language</span>
                <span className="text-xs flex items-center gap-1.5">
                  <selectedLang.FlagComponent className="w-4 h-3" />
                  {selectedLang.name}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => {
                  const isSelected = selectedLang.code === lang.code;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setSelectedLang(lang)}
                      className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#23211E] text-white border-[#23211E] shadow-sm'
                          : 'bg-white text-[#23211E] border-[#A38B68]/20 hover:border-[#A38B68]'
                      }`}
                    >
                      <lang.FlagComponent className="w-5 h-3.5" />
                      <span className="text-[10px] font-semibold">{lang.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Quick Info & CTA Footer */}
            <div className="space-y-3 pt-3 border-t border-[#A38B68]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('booking');
                }}
                className={`w-full py-3.5 rounded-full font-semibold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2.5 shadow-xl transition-all cursor-pointer ${activePage === 'booking'
                    ? 'bg-[#A38B68] text-white shadow-[0_0_20px_rgba(163,139,104,0.4)]'
                    : 'bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68]'
                  }`}
              >
                <Calendar size={15} className="text-[#A38B68]" />
                <span>RESERVE STAY OR TABLE</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-[#6E6A63] font-sans font-light px-1">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#A38B68]" />
                  <span>Bang Tao Beach, Phuket</span>
                </div>
                <a
                  href="https://wa.me/66932719103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#A38B68] transition-colors font-medium text-[#23211E]"
                >
                  <span>WhatsApp: +66 93 271 9103</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
