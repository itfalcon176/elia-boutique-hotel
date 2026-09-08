import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import EatDrinkPage from './pages/EatDrinkPage';
import WellnessPage from './pages/WellnessPage';
import GoatBeachClubPage from './pages/GoatBeachClubPage';
import FamilyPage from './pages/FamilyPage';
import ExperiencesPage from './pages/ExperiencesPage';
import BangTaoPage from './pages/BangTaoPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SpecialOffersPage from './pages/SpecialOffersPage';
import FaqsPage from './pages/FaqsPage';
import LegalAndPolicyPages from './pages/LegalAndPolicyPages';

import './App.css';
import { initGA, trackPageView } from './utils/analytics';

const pageToPath = {
  home: '/',
  rooms: '/accommodation',
  accommodation: '/accommodation',
  accomodation: '/accommodation',
  'rooms/garden-beach-room': '/rooms/garden-beach-room',
  'rooms/garden-family-suite': '/rooms/garden-family-suite',
  'rooms/loft-apartment': '/rooms/loft-apartment',
  'rooms/one-bedroom-loft-suite': '/rooms/one-bedroom-loft-suite',
  // Backward compatible alias
  'rooms/garden-beach-rooms': '/rooms/garden-beach-room',
  'rooms/garden-family-suites': '/rooms/garden-family-suite',
  'rooms/loft-apartments': '/rooms/loft-apartment',
  'eat-drink': '/food-and-drinks',
  'food-and-drinks': '/food-and-drinks',
  'food-and-drink': '/food-and-drinks',
  menus: '/food-and-drinks',
  wellness: '/facilities',
  facilities: '/facilities',
  spa: '/facilities',
  'goat-beach-club': '/goat-beach-club',
  'family-hotel-phuket': '/family-hotel-phuket',
  family: '/family-hotel-phuket',
  experiences: '/experiences',
  'bang-tao-beach-phuket': '/bang-tao-beach-phuket',
  location: '/location',
  gallery: '/gallery',
  about: '/about',
  contact: '/location',
  'contact-us': '/location',
  offers: '/offers',
  'special-offers': '/offers',
  faq: '/faq',
  faqs: '/faq',
  policies: '/policies',
  cancellation: '/cancellation',
  privacy: '/privacy',
  terms: '/terms',
  cookies: '/cookies',
  directions: '/directions',
};

const seoMetadata = {
  home: {
    title: 'Elia Boutique Hotel | Beachfront Hotel Bang Tao, Phuket',
    description: 'Stay steps from Bang Tao Beach at Elia, an intimate 13-room boutique hotel in Phuket with beach club access, facilities, dining and family amenities.',
  },
  rooms: {
    title: 'Accommodation | Elia Boutique Hotel Bang Tao Phuket',
    description: 'Discover boutique accommodation at Elia Phuket, featuring 13 intimate rooms and suites steps from Bang Tao Beach, Phuket.',
  },
  'rooms/garden-beach-room': {
    title: 'Garden Beach Room | Elia Hotel Bang Tao Beach Phuket',
    description: 'Stay steps from Bang Tao Beach in an Elia Garden Beach Room with a king bed, private terrace, garden, loungers and complimentary beach club access.',
  },
  'rooms/garden-family-suite': {
    title: 'Garden Family Suite | Family Hotel Bang Tao Phuket',
    description: "Discover Elia's Garden Family Suites in Bang Tao, Phuket, with extra family space, private outdoor areas and easy access to the beach and GOAT Beach Club.",
  },
  'rooms/loft-apartment': {
    title: 'Loft Apartment | Boutique Hotel Bang Tao Beach Phuket',
    description: 'Stay in a spacious Loft Apartment at Elia Boutique Hotel Phuket with flexible twin or super-king bedding close to Bang Tao Beach and GOAT Beach Club.',
  },
  'rooms/one-bedroom-loft-suite': {
    title: 'One-Bedroom Loft Suite | Elia Boutique Hotel Phuket',
    description: 'Our spacious One-Bedroom Loft Suite offers extra room for couples and families just moments from Bang Tao Beach in Phuket.',
  },
  'eat-drink': {
    title: 'Food and Drinks Bang Tao | Elia Phuket & GOAT Beach Club',
    description: 'Enjoy breakfast, barista coffee, beachfront dining, room service, cocktails and sunset drinks at GOAT Beach Club when staying at Elia Phuket.',
  },
  'food-and-drinks': {
    title: 'Food and Drinks Bang Tao | Elia Phuket & GOAT Beach Club',
    description: 'Enjoy breakfast, barista coffee, beachfront dining, room service, cocktails and sunset drinks at GOAT Beach Club when staying at Elia Phuket.',
  },
  wellness: {
    title: 'Hotel Facilities | Elia Boutique Hotel Bang Tao Phuket',
    description: 'Explore hotel facilities at Elia Phuket, including outdoor sauna, cold plunge, jacuzzi, plunge pool, and massage treatments steps from Bang Tao Beach.',
  },
  facilities: {
    title: 'Hotel Facilities | Elia Boutique Hotel Bang Tao Phuket',
    description: 'Explore hotel facilities at Elia Phuket, including outdoor sauna, cold plunge, jacuzzi, plunge pool, and massage treatments steps from Bang Tao Beach.',
  },
  'goat-beach-club': {
    title: 'Hotel With Beach Club Access Phuket | Elia & GOAT Bang Tao',
    description: 'Elia guests enjoy complimentary access to GOAT Beach Club on Bang Tao Beach, with beachfront dining, sun, cocktails and sunset atmosphere next door.',
  },
  'family-hotel-phuket': {
    title: 'Family Hotel Bang Tao Phuket | Elia Boutique Hotel',
    description: 'Discover a family-friendly boutique hotel on Bang Tao Beach with family suites, kids club, beach access, plunge pool and GOAT Beach Club next door.',
  },
  experiences: {
    title: 'Things To Do in Bang Tao Phuket | Elia Hotel Experiences',
    description: 'Discover Bang Tao Beach and Phuket from Elia with beach days, boat trips, excursions, transfers, family activities and personalised concierge assistance.',
  },
  'bang-tao-beach-phuket': {
    title: 'Bang Tao Beach Phuket Hotel | Stay at Elia Boutique Hotel',
    description: "Stay directly by Bang Tao Beach at Elia Boutique Hotel Phuket and discover one of Phuket's most popular west-coast beach destinations.",
  },
  about: {
    title: 'About Elia | Boutique Hotel on Bang Tao Beach Phuket',
    description: 'Meet Elia, an intimate design-led boutique hotel of just 13 rooms beside Bang Tao Beach and GOAT Beach Club in Phuket.',
  },
  gallery: {
    title: 'Elia Phuket Gallery | Boutique Hotel Bang Tao Beach',
    description: 'Explore Elia Boutique Hotel Phuket through our gallery of rooms, gardens, facilities, dining and life beside beautiful Bang Tao Beach.',
  },
  offers: {
    title: 'Elia Phuket Special Offers | Book Direct Bang Tao Hotel',
    description: 'Discover current offers and direct-booking packages at Elia Boutique Hotel on Bang Tao Beach, Phuket.',
  },
  faq: {
    title: 'Elia Phuket FAQ | Bang Tao Hotel Information',
    description: 'Find answers about Elia Boutique Hotel Phuket, including location, beach access, family stays, check-in, dining, facilities and GOAT Beach Club.',
  },
  contact: {
    title: 'Location & Contact | Elia Boutique Hotel Bang Tao Phuket',
    description: 'Find Elia Boutique Hotel on Bang Tao Beach, Phuket. Get location details, Google Maps directions, phone, WhatsApp concierge and contact information.',
  },
  location: {
    title: 'Location & Contact | Elia Boutique Hotel Bang Tao Phuket',
    description: 'Find Elia Boutique Hotel on Bang Tao Beach, Phuket. Get location details, Google Maps directions, phone, WhatsApp concierge and contact information.',
  },
};

const getPageFromPath = (pathname) => {
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
  
  if (cleanPath === '/rooms/garden-beach-room' || cleanPath === '/rooms/garden-beach-rooms' || cleanPath === '/accommodation/garden-beach-room' || cleanPath === '/accomodation/garden-beach-room') return 'rooms/garden-beach-room';
  if (cleanPath === '/rooms/garden-family-suite' || cleanPath === '/rooms/garden-family-suites' || cleanPath === '/accommodation/garden-family-suite' || cleanPath === '/accomodation/garden-family-suite') return 'rooms/garden-family-suite';
  if (cleanPath === '/rooms/loft-apartment' || cleanPath === '/rooms/loft-apartments' || cleanPath === '/accommodation/loft-apartment' || cleanPath === '/accomodation/loft-apartment') return 'rooms/loft-apartment';
  if (cleanPath === '/rooms/one-bedroom-loft-suite' || cleanPath === '/accommodation/one-bedroom-loft-suite' || cleanPath === '/accomodation/one-bedroom-loft-suite') return 'rooms/one-bedroom-loft-suite';
  if (cleanPath === '/accommodation' || cleanPath === '/accomodation' || cleanPath === '/rooms' || cleanPath === '/suites') return 'rooms';
  if (cleanPath === '/food-and-drinks' || cleanPath === '/food-and-drink' || cleanPath === '/food-drinks' || cleanPath === '/eat-drink' || cleanPath === '/menus' || cleanPath === '/dining') return 'eat-drink';
  if (cleanPath === '/facilities' || cleanPath === '/facility' || cleanPath === '/wellness' || cleanPath === '/spa') return 'wellness';
  if (cleanPath === '/goat-beach-club' || cleanPath === '/goat') return 'goat-beach-club';
  if (cleanPath === '/family-hotel-phuket' || cleanPath === '/family' || cleanPath === '/families') return 'family-hotel-phuket';
  if (cleanPath === '/experiences') return 'experiences';
  if (cleanPath === '/bang-tao-beach-phuket') return 'bang-tao-beach-phuket';
  if (cleanPath === '/gallery') return 'gallery';
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/location' || cleanPath === '/contact' || cleanPath === '/contact-us' || cleanPath === '/directions' || cleanPath === '/getting-here') return 'contact';
  if (cleanPath === '/offers' || cleanPath === '/special-offers') return 'offers';
  if (cleanPath === '/faq' || cleanPath === '/faqs') return 'faq';
  if (cleanPath === '/policies' || cleanPath === '/hotel-policies') return 'policies';
  if (cleanPath === '/cancellation') return 'cancellation';
  if (cleanPath === '/privacy') return 'privacy';
  if (cleanPath === '/terms') return 'terms';
  if (cleanPath === '/cookies') return 'cookies';
  if (cleanPath === '/directions') return 'directions';
  
  return 'home';
};

function App() {
  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname));
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Update SEO Document Title and Meta Description on page change
  useEffect(() => {
    const meta = seoMetadata[activePage] || seoMetadata.home;
    if (meta) {
      document.title = meta.title;
      let metaDescEl = document.querySelector('meta[name="description"]');
      if (metaDescEl) {
        metaDescEl.setAttribute('content', meta.description);
      }
      let ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) {
        ogTitleEl.setAttribute('content', meta.title);
      }
      let ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) {
        ogDescEl.setAttribute('content', meta.description);
      }
    }
  }, [activePage]);

  useEffect(() => {
    // Initialize Google Analytics 4
    initGA();

    // Track initial page view
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
    <div className="relative w-full min-h-screen bg-elia-cream text-[#23211E]">
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
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'goat-beach-club' && (
          <GoatBeachClubPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'family-hotel-phuket' && (
          <FamilyPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'experiences' && (
          <ExperiencesPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'bang-tao-beach-phuket' && (
          <BangTaoPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'offers' && (
          <SpecialOffersPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {activePage === 'faq' && (
          <FaqsPage
            onNavigate={handleNavClick}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
        {['policies', 'cancellation', 'privacy', 'terms', 'cookies', 'directions'].includes(activePage) && (
          <LegalAndPolicyPages
            pageType={activePage}
            onNavigate={handleNavClick}
          />
        )}
      </main>

      {/* Footer Navigation */}
      <Footer onNavClick={handleNavClick} onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Reservation & Booking Dialog Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

export default App;
