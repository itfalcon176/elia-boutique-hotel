import { motion } from 'framer-motion';
import { Facebook, Instagram, VolumeX, ChevronDown, Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';

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
  isPlaying,
  toggleSound,
  onOpenReservation,
  onExploreClick,
  onNavigateRooms,
}) {
  return (
    <section id="home" className="relative w-full min-h-screen lg:h-[100vh] min-h-[700px] overflow-hidden bg-[#141312] select-none flex flex-col justify-between pt-24 pb-8">
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

      {/* Cinematic Dark Gradation Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/80 z-10" />
      <div className="absolute inset-0 bg-vignette z-20 pointer-events-none" />

      {/* Top Right Sound Toggle */}
      <div className="absolute top-20 right-5 sm:top-24 sm:right-10 z-40">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          onClick={toggleSound}
          className="flex items-center gap-2.5 bg-[#141312]/65 backdrop-blur-xl border border-[#C5A880]/40 hover:border-[#C5A880] hover:bg-[#141312]/85 rounded-full px-3.5 py-2 shadow-[0_0_25px_rgba(197,168,128,0.2)] transition-all duration-300 group cursor-pointer"
          aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          <div className="flex items-end justify-center gap-0.5 h-3.5 w-3.5">
            {isPlaying ? (
              <>
                <span className="w-[2px] bg-[#C5A880] rounded-full animate-eq-1"></span>
                <span className="w-[2px] bg-[#C5A880] rounded-full animate-eq-2"></span>
                <span className="w-[2px] bg-[#C5A880] rounded-full animate-eq-3"></span>
              </>
            ) : (
              <VolumeX size={15} className="text-[#FAF7F2]/60 group-hover:text-[#C5A880]" />
            )}
          </div>
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C5A880]">
            {isPlaying ? 'SOUND ON' : 'PLAY SOUND'}
          </span>
        </motion.button>
      </div>

      {/* Center Hero Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center justify-center">
        {/* Top Highlight Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 mb-6 text-[#EAE4D9]"
        >
          <Sparkles size={13} className="text-[#C5A880]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-medium">
            13 Curated Suites • Bang Tao Beach, Phuket
          </span>
        </motion.div>

        {/* Headline: The beach at your door */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.08] mb-6 drop-shadow-lg"
        >
          The beach at <span className="italic font-serif text-gold-gradient font-light">your door.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="text-[#FAF7F2]/85 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8 font-sans"
        >
          Boutique beachfront slow living with only 13 bespoke rooms, holistic thermal wellness, and direct VIP access to GOAT Beach Club.
        </motion.p>

        {/* Action Buttons: Immediate Book Now & Explore Rooms */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-10"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A880] via-[#D5B992] to-[#B89A70] text-[#141312] font-bold text-xs uppercase tracking-[0.22em] shadow-[0_0_35px_rgba(197,168,128,0.45)] hover:brightness-110 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar size={15} />
            <span>BOOK NOW</span>
          </button>

          <button
            onClick={onNavigateRooms}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/30 text-white hover:bg-white/15 hover:border-[#C5A880] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>VIEW ROOMS & SUITES</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* 4 Feature Highlights Micro-Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl pt-4 border-t border-white/15 text-left"
        >
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
            <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block font-semibold">Scale</span>
            <span className="text-xs text-white/90 font-light">Only 13 Rooms</span>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
            <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block font-semibold">Location</span>
            <span className="text-xs text-white/90 font-light">Direct Beachfront</span>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
            <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block font-semibold">Lifestyle</span>
            <span className="text-xs text-white/90 font-light">GOAT Beach Club VIP</span>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
            <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block font-semibold">Thermal Spa</span>
            <span className="text-xs text-white/90 font-light">Sauna & Cold Plunge</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-30 px-6 pt-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Social / WhatsApp icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <a
            href="https://wa.me/66932719103"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/70 hover:text-[#25D366] hover:scale-110 transition-all p-1.5"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/eliaboutiquehotel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/70 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61590545618953"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/70 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.tiktok.com/@elia.boutique.hote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/70 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
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
          className="flex flex-col items-center gap-1 text-[#FAF7F2]/70 hover:text-[#C5A880] transition-colors cursor-pointer group"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-light">Explore Elia</span>
          <ChevronDown size={16} className="animate-bounce text-[#C5A880]" />
        </motion.button>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#FAF7F2]/70"
        >
          <MapPin size={13} className="text-[#C5A880]" />
          <span>Bang Tao Beach, Phuket</span>
        </motion.div>
      </div>
    </section>
  );
}
