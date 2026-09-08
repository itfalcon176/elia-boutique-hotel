import { motion } from 'framer-motion';
import { Utensils, Sparkles, Coffee, Sun, Moon, GlassWater, Bell, Check, ArrowRight, BedDouble } from 'lucide-react';

export default function EatDrinkPage({ onNavigate, onOpenReservation }) {
  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#6E6A63] font-sans">
          <ol className="flex items-center gap-2">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-[#A38B68] transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>/</li>
            <li className="text-[#23211E] font-medium" aria-current="page">
              Food and Drinks
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Utensils size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Beachfront Dining & Bar
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Food and Drinks at <span className="italic text-gold-gradient font-serif">Elia</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-4">
            Your table is just next door.
          </h2>

          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Elia's food and drink experience comes courtesy of GOAT Beach Club, our beachfront neighbour and an integral part of staying with us.
          </p>
          <p className="text-[#6E6A63] font-light text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto mt-2">
            From the first coffee of the morning to the final drink of the evening, everything happens just a few steps from your room.
          </p>
        </div>

        {/* 5 Core Pillars Grid matching Section 8 of SEO Pack */}
        <div className="space-y-12 mb-16">
          
          {/* 1. Breakfast by the Beach */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-[#8B6E3F]">
                <Coffee size={18} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Morning Rituals</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#23211E]">
                Breakfast by the Beach
              </h2>
              <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                No enormous hotel buffet.
              </p>
              <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                Start your morning at GOAT with freshly prepared breakfast, proper coffee and the sea in front of you.
              </p>
              <p className="text-xs sm:text-sm text-[#8B6E3F] font-serif italic">
                Take your time. You're already where you need to be.
              </p>
            </div>
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/suite.png"
                alt="Beachfront breakfast at GOAT Beach Club Bang Tao"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 2. Lunch Without Leaving the Beach */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
              <img
                src="/images/dining.png"
                alt="Barefoot lunch at GOAT Beach Club Bang Tao"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-[#8B6E3F]">
                <Sun size={18} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Midday Flavours</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#23211E]">
                Lunch Without Leaving the Beach
              </h2>
              <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                Barefoot lunches, Mediterranean-inspired dishes, fresh flavours and long afternoons by Bang Tao Beach.
              </p>
              <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                Staying at Elia means the restaurant isn't somewhere you have to travel to. It's part of the experience.
              </p>
            </div>
          </motion.div>

          {/* 3. Sunset Drinks & Dinner */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-[#8B6E3F]">
                <GlassWater size={18} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Golden Hour & Evening</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#23211E]">
                Sunset Drinks & Dinner
              </h2>
              <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                As afternoon turns into evening, stay for cocktails, dinner and the atmosphere of Bang Tao after sunset.
              </p>
              <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                Then walk home. Your room is only moments away.
              </p>
            </div>
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/cocktail.png"
                alt="Sunset drinks and cocktails at GOAT Beach Club Bang Tao"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 4. Room Service & 5. The Elia Minibar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#8B6E3F]">
                  <Bell size={18} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">In-Suite Convenience</span>
                </div>
                <h2 className="font-serif text-2xl font-light text-[#23211E]">
                  Room Service
                </h2>
                <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                  Some days, staying in wins. Order from GOAT and enjoy restaurant-quality food from the comfort of your Elia room or terrace.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#A38B68]/15">
                <span className="text-xs text-[#A38B68] font-semibold uppercase tracking-wider">
                  Available direct to your room or terrace
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#8B6E3F]">
                  <Sparkles size={18} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">In-Room Amenities</span>
                </div>
                <h2 className="font-serif text-2xl font-light text-[#23211E]">
                  The Elia Minibar
                </h2>
                <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                  Each room includes a carefully selected minibar with chilled drinks, beers, wines and quality snacks.
                </p>
                <p className="text-xs sm:text-sm text-[#8B6E3F] font-medium">
                  Tea and coffee are complimentary.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#A38B68]/15">
                <span className="text-xs text-[#A38B68] font-semibold uppercase tracking-wider">
                  Complimentary tea & coffee in every room
                </span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom CTA Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Experience Beachfront Dining at Elia & GOAT
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            Complimentary access to GOAT Beach Club is included for all Elia guests throughout their stay on Bang Tao Beach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              BOOK YOUR STAY
            </button>
            <button
              onClick={() => onNavigate('goat-beach-club')}
              className="px-7 py-3.5 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer"
            >
              DISCOVER GOAT BEACH CLUB
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
