import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import MenusPage from './pages/MenusPage';
import LateNightPage from './pages/LateNightPage';
import LocationPage from './pages/LocationPage';
import FaqsPage from './pages/FaqsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

import './App.css';
import { initGA, trackPageView } from './utils/analytics';

const pageToPath = {
  home: '/',
  menus: '/menus',
  about: '/about',
  latenight: '/latenight',
  location: '/location',
  faqs: '/faqs',
  contact: '/contact',
  booking: '/book',
};

const getPageFromPath = (pathname) => {
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (cleanPath === '/menus') return 'menus';
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/latenight' || cleanPath === '/late-night') return 'latenight';
  if (cleanPath === '/location') return 'location';
  if (cleanPath === '/faqs' || cleanPath === '/faq') return 'faqs';
  if (cleanPath === '/contact') return 'contact';
  if (cleanPath === '/book' || cleanPath === '/booking' || cleanPath === '/reservations' || cleanPath === '/reservation') return 'booking';
  return 'home';
};

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname));

  const removeListenersRef = useRef(() => {});

  useEffect(() => {
    // Initialize Google Analytics 4
    initGA();

    // Track the initial page view
    trackPageView();

    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      setActivePage(page);
      setTimeout(trackPageView, 0);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
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
      events.forEach((evt) => {
        window.removeEventListener(evt, handleUserInteraction);
      });
    };

    removeListenersRef.current = removeListeners;

    const handleUserInteraction = () => {
      if (!audio) return;
      audio
        .play()
        .then(() => {
          removeListeners();
        })
        .catch(() => {
          // Autoplay blocked by browser policy
        });
    };

    handleUserInteraction();

    events.forEach((evt) => {
      window.addEventListener(evt, handleUserInteraction, { passive: true });
    });

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      removeListeners();
    };
  }, []);

  const toggleSound = (e) => {
    if (e) e.stopPropagation();
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

  const handleNavClick = (id) => {
    setActivePage(id);
    const targetPath = pageToPath[id] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(trackPageView, 0);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F7F4EF] text-[#23211E]">
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

      {/* Main Header Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavClick}
        onOpenReservation={() => handleNavClick('booking')}
      />

      {/* Page Content Rendering */}
      <main className="min-h-screen">
        {activePage === 'home' && (
          <HomePage
            isPlaying={isPlaying}
            toggleSound={toggleSound}
            onOpenReservation={() => handleNavClick('booking')}
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'menus' && (
          <MenusPage onNavigate={handleNavClick} />
        )}
        {activePage === 'latenight' && (
          <LateNightPage onOpenReservation={() => handleNavClick('booking')} />
        )}
        {activePage === 'location' && (
          <LocationPage />
        )}
        {activePage === 'faqs' && (
          <FaqsPage />
        )}
        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavClick} />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
        {activePage === 'booking' && (
          <BookingPage />
        )}
      </main>

      {/* Footer Navigation */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;
