import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import EatDrinkPage from './pages/EatDrinkPage';
import WellnessPage from './pages/WellnessPage';
import ExperiencesPage from './pages/ExperiencesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SpecialOffersPage from './pages/SpecialOffersPage';
import LegalAndPolicyPages from './pages/LegalAndPolicyPages';
import FaqsPage from './pages/FaqsPage';

import './App.css';
import { initGA, trackPageView } from './utils/analytics';

const pageToPath = {
  home: '/',
  rooms: '/rooms',
  'rooms/garden-beach-rooms': '/rooms/garden-beach-rooms',
  'rooms/garden-family-suites': '/rooms/garden-family-suites',
  'rooms/loft-apartments': '/rooms/loft-apartments',
  'rooms/one-bedroom-loft-suite': '/rooms/one-bedroom-loft-suite',
  'eat-drink': '/eat-drink',
  menus: '/eat-drink',
  wellness: '/wellness',
  spa: '/wellness',
  experiences: '/experiences',
  gallery: '/gallery',
  about: '/about',
  contact: '/contact',
  'special-offers': '/special-offers',
  faqs: '/faqs',
  policies: '/policies',
  cancellation: '/cancellation',
  privacy: '/privacy',
  terms: '/terms',
  cookies: '/cookies',
  directions: '/directions',
};

const getPageFromPath = (pathname) => {
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
  
  if (cleanPath === '/rooms/garden-beach-rooms') return 'rooms/garden-beach-rooms';
  if (cleanPath === '/rooms/garden-family-suites') return 'rooms/garden-family-suites';
  if (cleanPath === '/rooms/loft-apartments') return 'rooms/loft-apartments';
  if (cleanPath === '/rooms/one-bedroom-loft-suite') return 'rooms/one-bedroom-loft-suite';
  if (cleanPath === '/rooms' || cleanPath === '/suites') return 'rooms';
  if (cleanPath === '/eat-drink' || cleanPath === '/menus' || cleanPath === '/dining') return 'eat-drink';
  if (cleanPath === '/wellness' || cleanPath === '/spa') return 'wellness';
  if (cleanPath === '/experiences' || cleanPath === '/location') return 'experiences';
  if (cleanPath === '/gallery') return 'gallery';
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/contact') return 'contact';
  if (cleanPath === '/special-offers' || cleanPath === '/offers') return 'special-offers';
  if (cleanPath === '/faqs' || cleanPath === '/faq') return 'faqs';
  if (cleanPath === '/policies' || cleanPath === '/hotel-policies') return 'policies';
  if (cleanPath === '/cancellation') return 'cancellation';
  if (cleanPath === '/privacy') return 'privacy';
  if (cleanPath === '/terms') return 'terms';
  if (cleanPath === '/cookies') return 'cookies';
  if (cleanPath === '/directions') return 'directions';
  
  return 'home';
};

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname));
  const [isReservationOpen, setIsReservationOpen] = useState(false);

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
    const targetPath = pageToPath[id] || `/${id}`;
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
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Page Content Rendering */}
      <main className="min-h-screen">
        {activePage === 'home' && (
          <HomePage
            isPlaying={isPlaying}
            toggleSound={toggleSound}
            onOpenReservation={() => setIsReservationOpen(true)}
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'rooms' && (
          <RoomsPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage.startsWith('rooms/') && (
          <RoomDetailPage
            roomSlug={activePage.replace('rooms/', '')}
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'eat-drink' && (
          <EatDrinkPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'wellness' && (
          <WellnessPage
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'experiences' && (
          <ExperiencesPage
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'gallery' && (
          <GalleryPage />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
        {activePage === 'special-offers' && (
          <SpecialOffersPage
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'faqs' && (
          <FaqsPage />
        )}
        {['policies', 'cancellation', 'privacy', 'terms', 'cookies', 'directions'].includes(activePage) && (
          <LegalAndPolicyPages
            pageType={activePage}
            onNavigate={handleNavClick}
          />
        )}
      </main>

      {/* Footer Navigation */}
      <Footer onNavClick={handleNavClick} />

      {/* Reservation & Booking Dialog Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

export default App;
