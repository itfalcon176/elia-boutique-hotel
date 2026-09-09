import HeroSection from '../components/HeroSection';
import EliaShowcaseSection from '../components/EliaShowcaseSection';
import FaqsSection from '../components/FaqsSection';

export default function HomePage({
  onOpenReservation,
  onNavigate,
}) {
  return (
    <div>
      {/* Hero Header Section (100vh Full Screen Video with Beachfront copy & immediate Book Now) */}
      <HeroSection
        onOpenReservation={onOpenReservation}
        onNavigateRooms={() => onNavigate('rooms')}
        onExploreClick={() => {
          const el = document.getElementById('elia-showcase');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Elia Phuket Home Page Sections: Philosophy, 4 Room Highlights, Facilities, GOAT Club, Wellness, Location */}
      <div id="elia-showcase">
        <EliaShowcaseSection
          onNavigate={onNavigate}
          onOpenReservation={onOpenReservation}
        />
      </div>

      {/* FAQs Section */}
      <FaqsSection onNavigate={onNavigate} />
    </div>
  );
}
