import { motion } from 'framer-motion';
import { Sparkles, Waves, Flame, Snowflake, Bath, Droplets, Check, Calendar, ArrowRight } from 'lucide-react';
import { wellnessData } from '../data/wellnessData';

export default function WellnessPage({ onOpenReservation }) {
  const getIcon = (id) => {
    switch (id) {
      case 'massage-treatments':
        return <Sparkles size={20} className="text-[#A38B68]" />;
      case 'outdoor-spa':
        return <Waves size={20} className="text-[#A38B68]" />;
      case 'sauna':
        return <Flame size={20} className="text-[#A38B68]" />;
      case 'cold-plunge':
        return <Snowflake size={20} className="text-[#A38B68]" />;
      case 'jacuzzi':
        return <Bath size={20} className="text-[#A38B68]" />;
      case 'plunge-pool':
        return <Droplets size={20} className="text-[#A38B68]" />;
      default:
        return <Sparkles size={20} className="text-[#A38B68]" />;
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Holistic Body & Thermal Circuit
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Wellness & <span className="italic text-gold-gradient font-serif">Sanctuary</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            {wellnessData.hero.description}
          </p>
        </div>

        {/* Contrast Therapy Circuit Explainer Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#23211E] to-[#181715] text-[#FAF7F2] border border-[#A38B68]/40 shadow-2xl mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block mb-2">
              Contrast Hydrotherapy Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white mb-3">
              The Elia Thermal Reset Circuit
            </h2>
            <p className="text-[#FAF7F2]/75 text-xs sm:text-sm font-light leading-relaxed">
              Alternating between Finnish cedar dry heat and ice cold plunge stimulates blood flow, spikes dopamine, releases muscle tension, and enhances deep sleep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wellnessData.contrastTherapyGuide.steps.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif italic text-xl text-[#C5A880] font-medium block mb-1">
                    {item.step}
                  </span>
                  <h4 className="font-serif text-lg text-white font-medium mb-1">
                    {item.name}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold block mb-2">
                    {item.time}
                  </span>
                  <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The 6 Wellness Offerings Grid */}
        <div className="space-y-16">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold mb-2 block font-sans">
              Our 6 Sanctuaries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#23211E]">
              Restorative Rituals & Facilities
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-3 mb-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessData.facilities.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#A38B68]/25 shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#23211E]/80 backdrop-blur-md flex items-center justify-center border border-white/20">
                      {getIcon(item.id)}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-bold block mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#23211E] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6E6A63] font-light leading-relaxed mb-5 font-sans">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#A38B68]/15">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#555047] font-light">
                          <Check size={14} className="text-[#A38B68] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={onOpenReservation}
                    className="w-full py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#23211E] hover:text-white text-[#23211E] text-[11px] uppercase tracking-[0.2em] font-semibold border border-[#A38B68]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire / Book Ritual</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Spa Booking Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Custom Wellness Journeys for Residents
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            Complimentary access to the Sauna, Cold Plunge, Jacuzzi, and Plunge Pool is included with every suite reservation. Private massage therapies can be scheduled directly with your host.
          </p>
          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
          >
            SCHEDULE SPA APPOINTMENT
          </button>
        </div>

      </div>
    </div>
  );
}
