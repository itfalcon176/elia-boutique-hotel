import { motion } from 'framer-motion';
import { Utensils, Sparkles, Clock, Check, Calendar, ArrowRight, Wine, Coffee, Moon } from 'lucide-react';
import { eatDrinkData } from '../data/eatDrinkData';

export default function EatDrinkPage({ onNavigate, onOpenReservation }) {
  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Utensils size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Beachfront Gastronomy & Mixology
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Eat & <span className="italic text-gold-gradient font-serif">Drink</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            {eatDrinkData.hero.description}
          </p>
        </div>

        {/* Feature 1: GOAT Beach Club Flagship Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#23211E] to-[#181715] text-[#FAF7F2] rounded-3xl overflow-hidden border border-[#A38B68]/40 shadow-2xl mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A880]/20 text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold">
                <Sparkles size={12} />
                <span>Seamless Guest Access</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Direct Access to <span className="italic text-gold-gradient font-serif">GOAT Beach Club</span>
              </h2>

              <p className="text-[#FAF7F2]/80 text-sm font-light leading-relaxed font-sans">
                {eatDrinkData.goatClub.description}
              </p>

              <div className="space-y-3 pt-2">
                {eatDrinkData.goatClub.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#FAF7F2]/90 font-light">{perk}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenReservation}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all cursor-pointer shadow-lg"
                >
                  Reserve Table / Sunbed
                </button>
                <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/60">
                  <Clock size={14} className="text-[#C5A880]" />
                  <span>{eatDrinkData.goatClub.hours}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] lg:h-full min-h-[380px] overflow-hidden">
              <img
                src={eatDrinkData.goatClub.image}
                alt="GOAT Beach Club"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Pillars Grid: Breakfast, Beachfront Dining, In-Room Dining & Minibar */}
        <div className="space-y-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold mb-2 block font-sans">
              Culinary Curation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#23211E]">
              From Sunrise to Late Night
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-3 mb-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eatDrinkData.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#A38B68]/25 shadow-lg flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#23211E]/80 backdrop-blur-md text-[#FAF7F2] text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-white/20">
                    {pillar.timing}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-bold block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6A63] font-light leading-relaxed mb-6 font-sans">
                      {pillar.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-2 border-t border-[#A38B68]/15">
                      {pillar.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-[#555047] font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A38B68]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#A38B68]/15 flex items-center justify-between">
                    <button
                      onClick={onOpenReservation}
                      className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B6E3F] hover:text-[#23211E] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire / Reserve Table</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Late Night Highlight */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-[#8B6E3F]">
              <Moon size={16} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
                Signature 10 PM – 2 AM
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E]">
              Starlit Late Night Dining & Shisha
            </h3>
            <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
              Craving gourmet bites under the stars? Enjoy midnight Wagyu sliders, truffle fries, artisanal shisha, and craft cocktails directly at GOAT or delivered in-suite.
            </p>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-7 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shrink-0 shadow-md"
          >
            RESERVE LATE NIGHT TABLE
          </button>
        </div>

      </div>
    </div>
  );
}
