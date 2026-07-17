import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube } from 'lucide-react';
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
    <div className="relative w-full h-screen overflow-hidden bg-[#08080a] text-white select-none">
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

      {/* Dark Overlay (45-55% opacity) */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-black/50 z-10"
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-vignette z-20" />

      {/* Main Content Area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl"
        >
          {/* Logo Container (No circular frame background) */}
          <motion.div
            variants={itemVariants}
            className="w-48 sm:w-56 md:w-64 lg:w-72 flex items-center justify-center mb-6 sm:mb-8"
          >
            <img
              src="/Logos/white.png"
              alt="Elia Boutique Hotel Logo"
              className="w-full h-auto object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]"
              onError={(e) => {
                // Fail-safe placeholder if image fails to load
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                const placeholder = document.createElement('div');
                placeholder.className = "text-gold font-serif text-3xl font-light tracking-wider";
                placeholder.innerText = "ELIA";
                parent.appendChild(placeholder);
              }}
            />
          </motion.div>

          {/* Hotel Name */}
          {/* <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[0.18em] text-white text-shadow-lux leading-tight mb-4 sm:mb-5"
          >
            ELIA
            <span className="block text-xl sm:text-2xl md:text-3xl font-light tracking-[0.35em] mt-2 sm:mt-3 opacity-95 text-white/95">
              BOUTIQUE HOTEL
            </span>
          </motion.h1> */}

          {/* Golden Divider Line (Subtle Luxury Highlight) */}
          <motion.div
            variants={itemVariants}
            className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-5 sm:mb-6"
          />

          {/* Opening text */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-xs sm:text-sm md:text-base font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase text-white/90 text-shadow-lux"
          >
            Opening November 2026
          </motion.p>
        </motion.div>
      </div>

      {/* Social Icons at Bottom Center */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="flex items-center gap-6 md:gap-8"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61590545618953"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300 ease-out p-2"
            aria-label="Facebook"
          >
            <Facebook size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="#"
            className="text-white opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300 ease-out p-2"
            aria-label="Instagram"
          >
            <Instagram size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="#"
            className="text-white opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300 ease-out p-2"
            aria-label="YouTube"
          >
            <Youtube size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="#"
            className="text-white opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300 ease-out p-2"
            aria-label="TikTok"
          >
            <Tiktok size={20} className="sm:w-6 sm:h-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
