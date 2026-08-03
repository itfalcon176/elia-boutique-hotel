import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Calendar, Moon, MapPin, Phone } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'menus', label: 'Menus' },
    { id: 'about', label: 'About' },
    { id: 'latenight', label: 'Late Night', icon: Moon },
    { id: 'location', label: 'Location' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  const isLightHeader = scrolled || activePage !== 'home';

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLightHeader
            ? 'bg-[#F7F4EF]/95 backdrop-blur-xl border-b border-[#A38B68]/20 py-2 sm:py-2.5 shadow-[0_4px_25px_rgba(35,33,30,0.08)]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <img
              src={isLightHeader ? "/Logos/logo with.png" : "/Logos/white-new.png"}
              alt="Elia Boutique Hotel Logo"
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback if logo transparent issue occurs
                e.target.src = "/Logos/white-new.png";
              }}
            />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isSelected = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-1.5 py-1 ${
                    isLightHeader
                      ? isSelected
                        ? 'text-[#A38B68] font-bold'
                        : link.id === 'latenight'
                        ? 'text-[#826C4B] hover:text-[#A38B68] font-bold'
                        : 'text-[#23211E]/80 hover:text-[#23211E]'
                      : isSelected
                      ? 'text-[#A38B68] font-bold'
                      : link.id === 'latenight'
                      ? 'text-[#EFEAE2] hover:text-white font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {Icon && <Icon size={13} className={isLightHeader ? "text-[#A38B68]" : "text-amber-300"} />}
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

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 ${
                isLightHeader
                  ? 'bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] shadow-md'
                  : 'bg-gradient-to-r from-[#A38B68] to-[#826C4B] text-white hover:brightness-110 shadow-[0_0_20px_rgba(163,139,104,0.4)]'
              }`}
            >
              <Calendar size={14} />
              <span>Reservations</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-none ${isLightHeader ? 'text-[#23211E]' : 'text-white'}`}
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
            className="fixed inset-0 z-50 bg-[#F7F4EF] text-[#23211E] md:hidden flex flex-col justify-between px-5 pt-5 pb-6 overflow-y-auto"
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
                    className="h-10 w-auto object-contain"
                    onError={(e) => { e.target.src = "/Logos/white-new.png"; }}
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
                <span>ELIA PHUKET</span>
              </div>

              {/* Menu Links Stack (Compact Cards) */}
              <div className="py-2 flex flex-col gap-2.5">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  const isSelected = activePage === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 + 0.05, duration: 0.25 }}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'bg-[#23211E] text-[#F7F4EF] border-[#23211E] shadow-md'
                          : 'bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] text-[#23211E] border-[#A38B68]/20'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`font-serif italic text-xs ${isSelected ? 'text-[#A38B68]' : 'text-[#A38B68]'}`}>
                          0{idx + 1}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold font-sans">
                          {link.label}
                        </span>
                      </div>

                      {Icon ? (
                        <Icon size={15} className={isSelected ? 'text-[#A38B68]' : 'text-[#A38B68]'} />
                      ) : (
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#A38B68]' : 'bg-[#A38B68]/40'}`} />
                      )}
                    </motion.button>
                  );
                })}
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
                <span>RESERVE STAY OR TABLE</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-[#6E6A63] font-sans font-light px-1">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#A38B68]" />
                  <span>Bang Tao Beach, Phuket</span>
                </div>
                <a href="tel:+66824899371" className="flex items-center gap-1.5 hover:text-[#A38B68] transition-colors">
                  <Phone size={13} className="text-[#A38B68]" />
                  <span>+66 82 489 9371</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
