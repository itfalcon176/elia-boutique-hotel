import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Volume2, VolumeX } from 'lucide-react';
import './App.css';
import { initGA, trackPageView } from './utils/analytics';
import EnquiryModal from './components/EnquiryModal';

// Custom TikTok icon to match Lucide style (standard Feather path)
const Tiktok = ({ size = 24, ...props }) => (
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

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const removeListenersRef = useRef(() => { });

  useEffect(() => {
    // Initialize Google Analytics 4
    initGA();

    // Track the initial page view
    trackPageView();

    const handleLocationChange = () => {
      // Small timeout to ensure DOM has updated (e.g. document.title changes) before tracking the page view
      setTimeout(trackPageView, 0);
    };

    // Listen to history changes for SPA route tracking
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    const events = ['click', 'touchstart', 'mousemove', 'scroll', 'keydown'];

    const removeListeners = () => {
      events.forEach(evt => {
        window.removeEventListener(evt, handleUserInteraction);
      });
    };

    removeListenersRef.current = removeListeners;

    const handleUserInteraction = () => {
      if (!audio) return;
      audio.play().then(() => {
        // Once audio starts playing, remove listeners so mousemove doesn't override manual pause
        removeListeners();
      }).catch(() => {
        // Autoplay blocked by browser policy, keep listening until user gesture
      });
    };

    // Attempt autoplay immediately
    handleUserInteraction();

    // Trigger on any screen gesture/movement
    events.forEach(evt => {
      window.addEventListener(evt, handleUserInteraction, { passive: true });
    });

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      removeListeners();
    };
  }, []);

  const toggleSound = (e) => {
    e.stopPropagation();
    // Stop all background auto-start listeners permanently on button click
    if (removeListenersRef.current) {
      removeListenersRef.current();
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for high-end feel
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeOut",
      }
    }
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-[#08080a] text-white select-none">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-115 origin-top-left"
      >
        <source src="/Elia-boutique-hotel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Invisible Background Audio Element */}
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        autoPlay
        loop
        playsInline
        preload="auto"
        className="hidden"
      />

      {/* Dark Overlay (45-55% opacity) */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-black/50 z-10"
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-vignette z-20 pointer-events-none" />

      {/* Top Right Luxury Sound Toggle Button */}
      <div className="absolute top-5 right-5 sm:top-8 sm:right-10 z-40">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          onClick={toggleSound}
          className="flex items-center gap-2.5 sm:gap-3 bg-black/40 backdrop-blur-xl border border-gold/40 hover:border-gold hover:bg-black/60 rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-500 group cursor-pointer"
          aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        >
          {/* Animated Equalizer Sound Bars / Mute Icon */}
          <div className="flex items-end justify-center gap-0.5 h-4 w-4">
            {isPlaying ? (
              <>
                <span className="w-[2.5px] bg-gold rounded-full animate-eq-1"></span>
                <span className="w-[2.5px] bg-gold rounded-full animate-eq-2"></span>
                <span className="w-[2.5px] bg-gold rounded-full animate-eq-3"></span>
              </>
            ) : (
              <VolumeX size={16} className="text-white/60 group-hover:text-gold transition-colors" />
            )}
          </div>

          {/* Button Text Label */}
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-gold leading-tight">
              {isPlaying ? 'SOUND ON' : 'PLAY MUSIC'}
            </span>
            <span className="text-[8px] font-light tracking-[0.15em] text-white/70 hidden sm:inline leading-tight mt-0.5">
              SPRING 1 — MAX RICHTER
            </span>
          </div>
        </motion.button>
      </div>

      {/* Main Responsive Layout Wrapper (Full Viewport Height) */}
      <div className="absolute inset-0 flex flex-col justify-between items-center z-30 px-6 py-6 sm:py-12 pointer-events-none">
        {/* Spacer for Top Bar */}
        <div className="h-10 sm:h-12 w-full" />

        {/* Center Content Area: Logo + Opening Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl pointer-events-auto my-auto"
        >
          {/* Logo Container */}
          <motion.div
            variants={itemVariants}
            className="w-44 sm:w-56 md:w-64 lg:w-72 flex items-center justify-center mb-5 sm:mb-8"
          >
            <img
              src="/Logos/white-new.png"
              alt="Elia Boutique Hotel Logo"
              className="w-full h-auto object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]"
              onError={(e) => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                const placeholder = document.createElement('div');
                placeholder.className = "text-gold font-serif text-3xl font-light tracking-wider";
                placeholder.innerText = "ELIA";
                parent.appendChild(placeholder);
              }}
            />
          </motion.div>

          {/* Golden Divider Line */}
          <motion.div
            variants={itemVariants}
            className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-4 sm:mb-6"
          />

          {/* Opening text */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[11px] sm:text-sm md:text-base font-light tracking-[0.25em] sm:tracking-[0.4em] uppercase text-white/90 text-shadow-lux"
          >
            Opening November 2026
          </motion.p>

          {/* Enquire & WhatsApp Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-3.5"
          >
            {/* 1. Enquire Now Button */}
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="group relative w-60 sm:w-68 py-3 sm:py-3.5 rounded-full bg-black/40 backdrop-blur-xl border border-gold/60 hover:border-gold hover:bg-black/60 text-white hover:text-gold text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Enquire Now</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse group-hover:scale-125 transition-transform" />
            </button>

            {/* 2. WhatsApp Enquiry Button */}
            <a
              href="https://wa.me/66932719103?text=Hello%20Elia%20Boutique%20Hotel%2C%20I%20would%20like%20to%20enquire%20about%20the%20hotel."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-60 sm:w-68 py-3 sm:py-3.5 rounded-full bg-black/40 backdrop-blur-xl border border-gold/40 hover:border-[#25D366] hover:bg-black/60 text-white/90 hover:text-white text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-gold group-hover:text-[#25D366] transition-colors duration-300"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.34 7.35 9.04 7.42 8.78 7.7C8.53 7.98 7.81 8.65 7.81 10.02C7.81 11.39 8.81 12.71 8.95 12.9C9.09 13.09 10.99 16.02 13.89 17.27C14.58 17.57 15.12 17.75 15.54 17.88C16.23 18.1 16.87 18.07 17.37 18C17.93 17.91 19.08 17.3 19.32 16.63C19.56 15.96 19.56 15.38 19.49 15.26C19.42 15.14 19.23 15.07 18.95 14.93C18.67 14.79 17.3 14.11 17.04 14.02C16.78 13.93 16.59 13.88 16.41 14.16C16.22 14.44 15.69 15.07 15.53 15.26C15.37 15.44 15.21 15.47 14.93 15.33C14.65 15.19 13.76 14.9 12.71 13.96C11.89 13.23 11.33 12.33 11.19 12.05C11.05 11.77 11.17 11.62 11.31 11.48C11.44 11.35 11.6 11.14 11.74 10.98C11.88 10.82 11.93 10.7 12.02 10.51C12.11 10.33 12.07 10.17 12 10.03C11.93 9.89 11.37 8.51 11.14 7.96C10.91 7.42 10.68 7.5 10.51 7.49C10.35 7.48 10.16 7.48 9.97 7.48L9.53 7.35Z" />
              </svg>
              <span>WhatsApp Enquiry</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="flex items-center gap-6 sm:gap-8 pointer-events-auto pb-2 sm:pb-0"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61590545618953"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300 ease-out p-2"
            aria-label="Facebook"
          >
            <Facebook size={22} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.instagram.com/eliaboutiquehotel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300 ease-out p-2"
            aria-label="Instagram"
          >
            <Instagram size={22} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@elia.boutique.hote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300 ease-out p-2"
            aria-label="TikTok"
          >
            <Tiktok size={22} className="sm:w-6 sm:h-6" />
          </a>
        </motion.div>
      </div>

      {/* Enquiry Popup Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}

export default App;
