import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SuitesSection from '../components/SuitesSection';
import DiningSection from '../components/DiningSection';
import SpaWellnessSection from '../components/SpaWellnessSection';
import ExperiencesSection from '../components/ExperiencesSection';
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
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* About / Essence Preview */}
      <AboutSection />

      {/* Suites & Sanctuary */}
      <SuitesSection onOpenReservation={onOpenReservation} />

      {/* Culinary Realm Preview */}
      <DiningSection
        onOpenMenu={() => onNavigate('menus')}
        onSelectLateNight={() => onNavigate('latenight')}
      />

      {/* Wellness & Spa */}
      <SpaWellnessSection onOpenReservation={onOpenReservation} />

      {/* Experiences */}
      <ExperiencesSection onOpenReservation={onOpenReservation} />

      {/* FAQs */}
      <FaqsSection />
    </div>
  );
}
