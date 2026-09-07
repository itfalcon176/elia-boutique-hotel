import { motion } from 'framer-motion';
import { Facebook, Instagram, ChevronDown, Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';

const TiktokIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function HeroSection({
  onOpenReservation,
  onExploreClick,
  onNavigateRooms,
}) {
  return (
    <section id="home" className="relative w-full min-h-screen lg:h-[100vh] min-h-[720px] overflow-hidden bg-[#141312] select-none flex flex-col justify-between pt-24 pb-8">
      {/* Background Hero Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105 origin-center"
      >
        <source src="/hero-banner-video.mp4" type="video/mp4" />
        <source src="/hero banner video.MOV" type="video/quicktime" />
        <source src="/Elia-boutique-hotel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Gentle Overlay for Text Contrast while Keeping Video Bright */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/45 z-10 pointer-events-none" />

      {/* Center Hero Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center justify-center">
        {/* Top Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#C5A880]/50 mb-6 text-[#F7F4EF] shadow-lg"
        >
          <Sparkles size={13} className="text-[#C5A880]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
            13 rooms by the sea • Bang Tao Beach, Phuket
          </span>
        </motion.div>

        {/* H1 for Homepage SEO matching Section 2 */}
        <h1 className="sr-only">Boutique Beachfront Hotel on Bang Tao Beach, Phuket</h1>

        {/* Hero Visual Title (Clean Non-Italic, Single Line, High-Impact Luxury Serif) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[90px] font-normal text-white uppercase tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.14em] leading-none mb-6 text-shadow-hero sm:whitespace-nowrap"
        >
          THE BEACH. AT YOUR DOOR.
        </motion.div>

        {/* Hero Narrative Copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="space-y-2 max-w-2xl mx-auto mb-8 font-sans text-shadow-lux"
        >
          <p className="text-[#F3DFBF] text-sm sm:text-base font-medium tracking-wide">
            Just 13 rooms. One beautiful corner of Phuket.
          </p>
          <p className="text-white/90 text-xs sm:text-sm md:text-base font-light leading-relaxed">
            Elia is an intimate boutique hotel on Bang Tao Beach, created for guests who want to stay closer to the sea, closer to the good life and a little further from everything else.
          </p>
          <p className="text-white/80 text-xs sm:text-sm font-light hidden sm:block">
            Wake up moments from the beach. Spend the day between your private terrace, the water, our outdoor wellness spaces and GOAT Beach Club next door.
          </p>
        </motion.div>

        {/* Action Buttons: BOOK YOUR STAY & EXPLORE OUR ROOMS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-xl mx-auto mb-8 px-2"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#C5A880] via-[#D5B992] to-[#B89A70] hover:from-[#D5B992] hover:to-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(197,168,128,0.45)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
          >
            <Calendar size={16} className="shrink-0 text-[#141312]" />
            <span className="whitespace-nowrap font-bold">BOOK YOUR STAY</span>
          </button>

          <button
            onClick={onNavigateRooms}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-xl border border-white/40 text-white hover:border-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap shadow-lg"
          >
            <span className="whitespace-nowrap">EXPLORE OUR ROOMS</span>
            <ArrowRight size={15} className="shrink-0 text-[#C5A880]" />
          </button>
        </motion.div>

        {/* 4 Quick Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 w-full max-w-3xl pt-4 border-t border-white/20 text-left"
        >
          <div className="bg-black/45 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-md">
            <span className="text-[10px] text-[#F3DFBF] uppercase tracking-wider block font-bold">Scale</span>
            <span className="text-xs text-white font-medium">13 Intimate Rooms</span>
          </div>
          <div className="bg-black/45 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-md">
            <span className="text-[10px] text-[#F3DFBF] uppercase tracking-wider block font-bold">Location</span>
            <span className="text-xs text-white font-medium">Bang Tao Beach</span>
          </div>
          <div className="bg-black/45 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-md">
            <span className="text-[10px] text-[#F3DFBF] uppercase tracking-wider block font-bold">Beach Club</span>
            <span className="text-xs text-white font-medium">GOAT Club Access</span>
          </div>
          <div className="bg-black/45 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-md">
            <span className="text-[10px] text-[#F3DFBF] uppercase tracking-wider block font-bold">Wellness</span>
            <span className="text-xs text-white font-medium">Sauna & Cold Plunge</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-30 px-6 pt-3 flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Social / WhatsApp icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <a
            href="https://wa.me/66824899371"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/80 hover:text-[#25D366] hover:scale-110 transition-all p-1.5"
            aria-label="WhatsApp"
            title="Chat on WhatsApp (+66 82 489 9371)"
          >
            <WhatsAppIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/eliaboutiquehotel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/80 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61590545618953"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/80 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.tiktok.com/@elia.boutique.hote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/80 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
            aria-label="TikTok"
          >
            <TiktokIcon size={18} />
          </a>
        </motion.div>

        {/* Scroll down trigger */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={onExploreClick}
          className="flex flex-col items-center gap-1 text-[#FAF7F2]/80 hover:text-[#C5A880] transition-colors cursor-pointer group"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-shadow-lux">Explore Elia</span>
          <ChevronDown size={16} className="animate-bounce text-[#C5A880]" />
        </motion.button>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#FAF7F2]/80 font-medium text-shadow-lux"
        >
          <MapPin size={13} className="text-[#C5A880]" />
          <span>Bang Tao Beach, Phuket</span>
        </motion.div>
      </div>
    </section>
  );
}
