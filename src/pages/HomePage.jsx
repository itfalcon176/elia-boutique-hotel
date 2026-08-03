import HeroSection from '../components/HeroSection';
import OkuShowcaseSection from '../components/OkuShowcaseSection';
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
          const el = document.getElementById('oku-showcase');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* OKU Ibiza Style Inspired Home Page Sections */}
      <div id="oku-showcase">
        <OkuShowcaseSection
          onNavigate={onNavigate}
          onOpenReservation={onOpenReservation}
        />
      </div>

      {/* FAQs */}
      <FaqsSection />
    </div>
  );
}
