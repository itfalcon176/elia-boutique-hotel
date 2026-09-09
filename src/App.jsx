import { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
import FacilityDetailPage from './pages/FacilityDetailPage';

import './App.css';
import { initGA, trackPageView } from './utils/analytics';

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const root = document.getElementById('root');
  if (root) root.scrollTop = 0;
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
};

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
  'facilities/sauna': '/facilities/sauna',
  'facilities/cold-plunge': '/facilities/cold-plunge',
  'facilities/jacuzzi': '/facilities/jacuzzi',
  'facilities/plunge-pool': '/facilities/plunge-pool',
  'facilities/massage': '/facilities/massage',
  'facilities/massage-treatments': '/facilities/massage',
  'facilities/concierge': '/facilities/concierge',
  'facilities/goat-beach-club': '/facilities/goat-beach-club',
  'facilities/kids-club': '/facilities/kids-club',
  'facilities/beach-access': '/facilities/beach-access',
  'facilities/airport-transfers': '/facilities/airport-transfers',
  'facilities/phuket-experiences': '/facilities/phuket-experiences',
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
  'facilities/sauna': {
    title: 'Outdoor Cedar Sauna Bang Tao Phuket | Elia Boutique Hotel',
    description: 'Experience our Finnish cedarwood outdoor sauna in Bang Tao, Phuket. 85°C thermal heat, volcanic stones, and contrast therapy at Elia Boutique Hotel.',
  },
  'facilities/cold-plunge': {
    title: 'Cold Plunge Bath Bang Tao Phuket | Contrast Therapy Elia Hotel',
    description: 'Experience 8°C cold plunge ice immersion therapy at Elia Boutique Hotel Bang Tao, Phuket. Boost energy, reduce inflammation, and reset your body.',
  },
  'facilities/jacuzzi': {
    title: 'Hydrotherapy Jacuzzi Spa Bang Tao Phuket | Elia Boutique Hotel',
    description: 'Relax in our 38°C magnesium hydrotherapy jacuzzi under Phuket palms at Elia Boutique Hotel Bang Tao. Pure tropical relaxation steps from the beach.',
  },
  'facilities/plunge-pool': {
    title: 'Freshwater Lagoon Plunge Pool Bang Tao Phuket | Elia Hotel',
    description: 'Unwind at our freshwater lagoon plunge pool with submerged sun loungers in Bang Tao, Phuket. Intimate boutique hotel pool at Elia.',
  },
  'facilities/massage': {
    title: 'Thai Massage & Spa Treatments Bang Tao Phuket | Elia Boutique Hotel',
    description: 'Book traditional Thai massage, herbal compresses, and restorative spa rituals in Bang Tao Beach, Phuket at Elia Boutique Hotel.',
  },
  'facilities/massage-treatments': {
    title: 'Thai Massage & Spa Treatments Bang Tao Phuket | Elia Boutique Hotel',
    description: 'Book traditional Thai massage, herbal compresses, and restorative spa rituals in Bang Tao Beach, Phuket at Elia Boutique Hotel.',
  },
  'facilities/concierge': {
    title: 'Concierge & Island Assistance Bang Tao Phuket | Elia Hotel',
    description: 'Personalised 24/7 WhatsApp concierge and bespoke island care at Elia Boutique Hotel Bang Tao.',
  },
  'facilities/goat-beach-club': {
    title: 'GOAT Beach Club Bang Tao Phuket | Complimentary Elia Hotel Access',
    description: 'Enjoy complimentary VIP access to GOAT Beach Club on Bang Tao Beach when staying at Elia Boutique Hotel Phuket. Beachfront dining, daybeds, and sunset drinks.',
  },
  'facilities/kids-club': {
    title: 'Family Hotel & Kids Club Bang Tao Phuket | Elia Boutique Hotel',
    description: 'Discover family-friendly luxury at Elia Boutique Hotel Bang Tao Phuket. Kids club, family suites, baby amenities, and safe beach access steps away.',
  },
  'facilities/beach-access': {
    title: 'Direct Beach Access Bang Tao Phuket | Elia Boutique Hotel',
    description: 'Stay steps from the sand with direct Bang Tao Beach access at Elia Boutique Hotel Phuket. Beachfront living on Phuket’s west coast.',
  },
  'facilities/airport-transfers': {
    title: 'Phuket Airport Transfers & Chauffeur | Elia Boutique Hotel Bang Tao',
    description: 'Book private luxury airport transfers to Elia Boutique Hotel Bang Tao Phuket. 24/7 meet-and-greet chauffeur service from Phuket Airport (HKT).',
  },
  'facilities/phuket-experiences': {
    title: 'Phuket Experiences & Island Tours | Elia Boutique Hotel Bang Tao',
    description: 'Discover curated Phuket experiences, private yacht charters, elephant sanctuaries, and island adventures with Elia Boutique Hotel Bang Tao.',
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
  
  // Dedicated Facilities Deep-Links
  if (cleanPath === '/facilities/sauna' || cleanPath === '/facilities/outdoor-sauna' || cleanPath === '/sauna') return 'facilities/sauna';
  if (cleanPath === '/facilities/cold-plunge' || cleanPath === '/facilities/ice-bath' || cleanPath === '/cold-plunge') return 'facilities/cold-plunge';
  if (cleanPath === '/facilities/jacuzzi' || cleanPath === '/facilities/hydrotherapy' || cleanPath === '/jacuzzi') return 'facilities/jacuzzi';
  if (cleanPath === '/facilities/plunge-pool' || cleanPath === '/facilities/pool' || cleanPath === '/pool') return 'facilities/plunge-pool';
  if (cleanPath === '/facilities/massage' || cleanPath === '/facilities/massage-treatments' || cleanPath === '/facilities/spa' || cleanPath === '/massage' || cleanPath === '/spa') return 'facilities/massage';
  if (cleanPath === '/facilities/concierge' || cleanPath === '/facilities/transfers' || cleanPath === '/concierge') return 'facilities/concierge';
  if (cleanPath === '/facilities/goat-beach-club' || cleanPath === '/facilities/goat') return 'facilities/goat-beach-club';
  if (cleanPath === '/facilities/kids-club' || cleanPath === '/facilities/family') return 'facilities/kids-club';
  if (cleanPath === '/facilities/beach-access' || cleanPath === '/facilities/beach') return 'facilities/beach-access';
  if (cleanPath === '/facilities/airport-transfers' || cleanPath === '/facilities/transfers' || cleanPath === '/airport-transfers') return 'facilities/airport-transfers';
  if (cleanPath === '/facilities/phuket-experiences' || cleanPath === '/facilities/experiences' || cleanPath === '/phuket-experiences') return 'facilities/phuket-experiences';
  
  if (cleanPath === '/facilities' || cleanPath === '/facility' || cleanPath === '/wellness') return 'wellness';
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

  // Ensure page always starts at the very top on navigation
  useLayoutEffect(() => {
    scrollToTop();
  }, [activePage]);

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
      scrollToTop();
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
    scrollToTop();
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 100);
    setTimeout(trackPageView, 0);
  };

  return (
    <div className="relative w-full min-h-screen bg-elia-cream text-[#23211E]">
      {/* Main Header Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavClick}
      />

      {/* Page Content Rendering */}
      <main className="min-h-screen">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'rooms' && (
          <RoomsPage
            onNavigate={handleNavClick}
          />
        )}
        {activePage.startsWith('rooms/') && (
          <RoomDetailPage
            roomSlug={activePage.replace('rooms/', '')}
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'eat-drink' && (
          <EatDrinkPage
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'wellness' && (
          <WellnessPage
            onNavigate={handleNavClick}
          />
        )}
        {activePage.startsWith('facilities/') && (
          <FacilityDetailPage
            facilitySlug={activePage.replace('facilities/', '')}
            onNavigate={handleNavClick}
            onOpenReservation={() => handleNavClick('contact')}
          />
        )}
        {activePage === 'goat-beach-club' && (
          <GoatBeachClubPage
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'family-hotel-phuket' && (
          <FamilyPage
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'experiences' && (
          <ExperiencesPage
            onNavigate={handleNavClick}
          />
        )}
        {activePage === 'bang-tao-beach-phuket' && (
          <BangTaoPage
            onNavigate={handleNavClick}
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
          />
        )}
        {activePage === 'faq' && (
          <FaqsPage
            onNavigate={handleNavClick}
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
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;
