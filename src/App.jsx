import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Volume2, VolumeX } from 'lucide-react';
import './App.css';

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

  const removeListenersRef = useRef(() => {});

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
        </motion.div>
      </div>
    </div>
  );
}

export default App;
