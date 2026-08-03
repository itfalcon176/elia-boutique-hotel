import { motion } from 'framer-motion';
import { Facebook, Instagram, VolumeX, ChevronDown, Calendar, Users } from 'lucide-react';

const TiktokIcon = ({ size = 20, ...props }) => (
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

export default function HeroSection({
  isPlaying,
  toggleSound,
  onOpenReservation,
  onExploreClick,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="home" className="relative w-full h-[100vh] min-h-[650px] overflow-hidden bg-[#141312] select-none flex flex-col justify-between">
      {/* Background Hero Video - Fits Screen 100vh */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105 origin-center"
      >
        <source src="/Elia-boutique-hotel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Elia Earth Vignette Overlay */}
      <div className="absolute inset-0 bg-vignette z-20 pointer-events-none" />

      {/* Top Right Sound Toggle Button */}
      <div className="absolute top-20 right-5 sm:top-24 sm:right-10 z-40">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          onClick={toggleSound}
          className="flex items-center gap-2.5 sm:gap-3 bg-[#141312]/60 backdrop-blur-xl border border-[#C5A880]/40 hover:border-[#C5A880] hover:bg-[#141312]/80 rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_0_20px_rgba(197,168,128,0.15)] hover:shadow-[0_0_30px_rgba(197,168,128,0.35)] transition-all duration-500 group cursor-pointer"
          aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        >
          <div className="flex items-end justify-center gap-0.5 h-4 w-4">
            {isPlaying ? (
              <>
                <span className="w-[2.5px] bg-[#C5A880] rounded-full animate-eq-1"></span>
                <span className="w-[2.5px] bg-[#C5A880] rounded-full animate-eq-2"></span>
                <span className="w-[2.5px] bg-[#C5A880] rounded-full animate-eq-3"></span>
              </>
            ) : (
              <VolumeX size={16} className="text-[#FAF7F2]/60 group-hover:text-[#C5A880] transition-colors" />
            )}
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#C5A880] leading-tight">
              {isPlaying ? 'SOUND ON' : 'PLAY MUSIC'}
            </span>
            <span className="text-[8px] font-light tracking-[0.15em] text-[#FAF7F2]/70 hidden sm:inline leading-tight mt-0.5">
              SPRING 1 — MAX RICHTER
            </span>
          </div>
        </motion.button>
      </div>

      {/* Hero Center Content */}
      <div className="relative z-30 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#E2C08D] font-medium px-4 py-1.5 rounded-full bg-[#141312]/60 border border-[#C5A880]/30 backdrop-blur-md mb-6"
          >
            Phuket, Thailand • Barefoot Luxury
          </motion.span>

          <motion.div
            variants={itemVariants}
            className="w-48 sm:w-64 md:w-80 lg:w-96 flex items-center justify-center mb-6"
          >
            <img
              src="/Logos/white-new.png"
              alt="Elia Boutique Hotel Logo"
              className="w-full h-auto object-contain filter drop-shadow-[0_0_25px_rgba(197,168,128,0.25)]"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent mb-6"
          />

          <motion.p
            variants={itemVariants}
            className="font-sans text-xs sm:text-sm md:text-base font-light tracking-[0.3em] sm:tracking-[0.45em] uppercase text-[#FAF7F2]/95 text-shadow-lux mb-8"
          >
            Opening November 2026
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 bg-[#141312]/60 backdrop-blur-xl border border-[#FAF7F2]/15 p-2 sm:p-2.5 rounded-2xl sm:rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A880] to-[#9E8158] text-[#141312] hover:brightness-110 shadow-[0_0_25px_rgba(197,168,128,0.4)] transition-all"
            >
              <Calendar size={15} />
              <span>Book Your Sanctuary</span>
            </button>

            <button
              onClick={onExploreClick}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/20 transition-all"
            >
              <Users size={15} className="text-[#C5A880]" />
              <span>Reserve Table</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-30 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex items-center gap-4 sm:gap-6"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61590545618953"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/70 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/eliaboutiquehotel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/70 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@elia.boutique.hote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF7F2]/70 hover:text-[#C5A880] hover:scale-110 transition-all p-1.5"
            aria-label="TikTok"
          >
            <TiktokIcon size={20} />
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          onClick={onExploreClick}
          className="flex flex-col items-center gap-1.5 text-[#FAF7F2]/70 hover:text-[#C5A880] transition-colors cursor-pointer group"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-light">Scroll to Explore</span>
          <ChevronDown size={18} className="animate-bounce text-[#C5A880]" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden sm:block text-right"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#FAF7F2]/60">
            Cherngtalay • Phuket
          </span>
        </motion.div>
      </div>
    </section>
  );
}
