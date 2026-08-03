import HeroSection from '../components/HeroSection';
import EliaShowcaseSection from '../components/EliaShowcaseSection';
import FaqsSection from '../components/FaqsSection';

export default function HomePage({
  isPlaying,
  toggleSound,
  onOpenReservation,
  onNavigate,
}) {
  return (
    <div>
      {/* Hero Header Section (100vh Full Screen Video) */}
      <HeroSection
        isPlaying={isPlaying}
        toggleSound={toggleSound}
        onOpenReservation={onOpenReservation}
        onExploreClick={() => {
          const el = document.getElementById('elia-showcase');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Elia Phuket Home Page Sections */}
      <div id="elia-showcase">
        <EliaShowcaseSection
          onNavigate={onNavigate}
          onOpenReservation={onOpenReservation}
        />
      </div>

      {/* FAQs */}
      <FaqsSection />
    </div>
  );
}
