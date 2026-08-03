import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Calendar, Moon } from 'lucide-react';

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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F7F4EF]/95 backdrop-blur-xl border-b border-[#A38B68]/20 py-3.5 shadow-[0_4px_25px_rgba(35,33,30,0.08)]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <img
              src={scrolled ? "/Logos/logo with.png" : "/Logos/white-new.png"}
              alt="Elia Boutique Hotel Logo"
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback if logo with.png transparent issue occurs
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
                    scrolled
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
                  {Icon && <Icon size={13} className={scrolled ? "text-[#A38B68]" : "text-amber-300"} />}
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
                scrolled
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
            className={`md:hidden p-2 focus:outline-none ${scrolled ? 'text-[#23211E]' : 'text-white'}`}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F7F4EF]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between px-6 pt-24 pb-8"
          >
            <div className="flex flex-col gap-6 text-center my-auto">
              <img
                src="/Logos/logo with.png"
                alt="Elia Logo"
                className="w-36 mx-auto mb-4 opacity-90"
                onError={(e) => { e.target.src = "/Logos/white-new.png"; }}
              />
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm uppercase tracking-[0.25em] py-2 flex items-center justify-center gap-2 transition-colors ${
                      activePage === link.id
                        ? 'text-[#A38B68] font-bold'
                        : 'text-[#23211E]/80 hover:text-[#A38B68]'
                    }`}
                  >
                    {Icon && <Icon size={16} className="text-[#A38B68]" />}
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-[#23211E]/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3.5 rounded-full bg-[#23211E] text-[#F7F4EF] font-semibold uppercase tracking-[0.2em] text-xs shadow-lg"
              >
                Reserve Stay or Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
