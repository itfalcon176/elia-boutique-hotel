import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { roomsData } from '../data/roomsData';

export default function Navbar({ activePage, setActivePage, onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);

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

  // Header items matching user prompt:
  // ELIA logo | Rooms & Suites | Eat & Drink | Wellness | Experiences | Gallery | About | Contact | BOOK NOW
  const navLinks = [
    { id: 'rooms', label: 'Rooms & Suites', hasDropdown: true },
    { id: 'eat-drink', label: 'Eat & Drink' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLightHeader
            ? 'bg-[#F7F4EF]/95 backdrop-blur-xl border-b border-[#A38B68]/20 py-2.5 sm:py-3 shadow-[0_4px_25px_rgba(35,33,30,0.08)]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer shrink-0"
            aria-label="Elia Phuket Home"
          >
            <img
              src={isLightHeader ? '/Logos/logo with.png' : '/Logos/white-new.png'}
              alt="Elia Boutique Hotel Logo"
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = '/Logos/white-new.png';
              }}
            />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
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
                      onClick={() => handleNavClick('rooms')}
                      className={`text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center gap-1 py-1 cursor-pointer ${
                        isLightHeader
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

                    {/* Rooms Dropdown Menu */}
                    <AnimatePresence>
                      {roomsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-[#FAF7F2] text-[#23211E] rounded-2xl shadow-2xl border border-[#A38B68]/30 p-2.5 z-50 backdrop-blur-xl"
                        >
                          <div className="p-2 border-b border-[#A38B68]/15 mb-1.5 flex items-center justify-between">
                            <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-semibold">
                              All 4 Room Categories
                            </span>
                            <button
                              onClick={() => handleNavClick('rooms')}
                              className="text-[10px] font-semibold uppercase text-[#23211E] hover:text-[#A38B68] underline"
                            >
                              View All
                            </button>
                          </div>
                          <div className="space-y-1">
                            {roomsData.map((room) => (
                              <button
                                key={room.id}
                                onClick={() => handleNavClick(`rooms/${room.slug}`)}
                                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer group ${
                                  activePage === `rooms/${room.slug}`
                                    ? 'bg-[#23211E] text-white'
                                    : 'hover:bg-[#EFECE6] text-[#23211E]'
                                }`}
                              >
                                <div>
                                  <div className="font-serif font-medium text-xs group-hover:text-[#A38B68]">
                                    {room.title}
                                  </div>
                                  <div className="text-[10px] text-[#6E6A63] font-light">
                                    {room.size} • {room.occupancy}
                                  </div>
                                </div>
                                <span className="text-[9px] uppercase tracking-wider text-[#A38B68] font-semibold">
                                  Explore →
                                </span>
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
                  className={`relative text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center gap-1.5 py-1 cursor-pointer ${
                    isLightHeader
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

          {/* Right CTA Button: BOOK NOW */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer ${
                isLightHeader
                  ? 'bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68]'
                  : 'bg-gradient-to-r from-[#C5A880] to-[#9E8259] text-[#141312] font-bold hover:brightness-110 shadow-[0_0_20px_rgba(197,168,128,0.4)]'
              }`}
            >
              <Calendar size={14} />
              <span>BOOK NOW</span>
            </button>
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
                    src="/Logos/logo with.png"
                    alt="Elia Boutique Hotel Logo"
                    className="h-9 w-auto object-contain"
                    onError={(e) => {
                      e.target.src = '/Logos/white-new.png';
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
              <div className="py-2 flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const isSelected = activePage === link.id || (link.id === 'rooms' && activePage.startsWith('rooms'));
                  return (
                    <div key={link.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all text-left cursor-pointer ${
                          isSelected
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
                        <div className="pl-6 pr-2 py-1 space-y-1.5 bg-[#FAF7F2]/60 rounded-xl border border-[#A38B68]/15 mb-1">
                          {roomsData.map((room) => (
                            <button
                              key={room.id}
                              onClick={() => handleNavClick(`rooms/${room.slug}`)}
                              className={`w-full text-left py-1.5 px-2 text-[11px] font-sans flex items-center justify-between cursor-pointer rounded-lg ${
                                activePage === `rooms/${room.slug}`
                                  ? 'font-bold text-[#A38B68] bg-white'
                                  : 'text-[#6E6A63] hover:text-[#23211E]'
                              }`}
                            >
                              <span>{room.title}</span>
                              <span className="text-[9px] uppercase tracking-wider text-[#A38B68]">
                                {room.size}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Special Offers link */}
                <button
                  onClick={() => handleNavClick('special-offers')}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-[#A38B68]/40 bg-gradient-to-r from-[#A38B68]/15 to-transparent text-[#23211E] text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs">✨</span>
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B6E3F]">
                      Special Offers & Packages
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#8B6E3F]">25% Off</span>
                </button>
              </div>
            </div>

            {/* Bottom Quick Info & CTA Footer */}
            <div className="space-y-3 pt-4 border-t border-[#A38B68]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3.5 rounded-full bg-[#23211E] text-[#F7F4EF] font-semibold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2.5 shadow-xl hover:bg-[#A38B68] transition-all cursor-pointer"
              >
                <Calendar size={15} className="text-[#A38B68]" />
                <span>BOOK NOW</span>
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
