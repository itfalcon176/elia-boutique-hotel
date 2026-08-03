import AboutSection from '../components/AboutSection';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Philosophy & Design Ethos
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            About <span className="italic text-gold-gradient font-serif">Elia</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Born from the union of Japanese minimalism, slow living, and vibrant Phuket beachfront culture.
          </p>
        </div>

        {/* Embedded About Details */}
        <AboutSection />

        {/* Action Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="glass-card p-8 rounded-3xl border border-[#A38B68]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A38B68] font-semibold block mb-2">
                Sanctuary Living
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Explore Rooms & Swim-Up Suites
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans mb-6">
                Discover our swim-up junior suites, rooftop plunge pools, and private 4-bedroom beach residence.
              </p>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="py-3 rounded-full bg-[#23211E] text-[#F7F4EF] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#A38B68] transition-all"
            >
              <span>View Suites & Living</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-[#A38B68]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A38B68] font-semibold block mb-2">
                Gastronomy & Lounge
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Explore Menus & Late Night
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans mb-6">
                Savor Nikkei Japanese-Mediterranean dishes and our signature Late Night 10 PM - 2 AM menu.
              </p>
            </div>
            <button
              onClick={() => onNavigate('menus')}
              className="py-3 rounded-full bg-[#23211E] text-[#F7F4EF] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#A38B68] transition-all"
            >
              <span>View Menus</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
