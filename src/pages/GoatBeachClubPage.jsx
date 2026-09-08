import { motion } from 'framer-motion';
import { Sparkles, Utensils, Waves, Clock, Check, Calendar, ArrowRight, Sun, Music, GlassWater } from 'lucide-react';

export default function GoatBeachClubPage({ onNavigate, onOpenReservation }) {
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
              GOAT Beach Club
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Elia + GOAT Beach Club
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Your Room. <span className="italic text-gold-gradient font-serif">Your Beach Club.</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            One of the things that makes staying at Elia different is what's waiting next door. Elia guests receive complimentary access to GOAT Beach Club on Bang Tao Beach.
          </p>
        </div>

        {/* Feature 1: The GOAT Experience */}
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
                <Sun size={12} />
                <span>Next Door on Bang Tao Beach</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                A Beach Club On <span className="italic text-gold-gradient font-serif">Your Doorstep</span>
              </h2>

              <p className="text-[#FAF7F2]/80 text-sm font-light leading-relaxed font-sans">
                GOAT brings together beachfront dining, drinks, music and the easy atmosphere of Bang Tao Beach. Elia gives you somewhere intimate and private to come home to. Together, you get both.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#FAF7F2]/90 font-light">
                    Start the morning over freshly prepared breakfast and barista coffee
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#FAF7F2]/90 font-light">
                    Settle in beside the beach and enjoy barefoot Mediterranean lunch
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#FAF7F2]/90 font-light">
                    Stay for sunset cocktails, DJ music and beachfront dinner
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#FAF7F2]/90 font-light">
                    Walk a few steps back to your peaceful Elia room at the end of the day
                  </span>
                </div>
              </div>

              {/* Please note notice */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
                <strong className="text-[#C5A880] font-medium block mb-1">Please note:</strong>
                Complimentary access is included for Elia guests. Food, beverages, reserved seating and paid experiences are charged separately unless specifically included within your booking.
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenReservation}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all cursor-pointer shadow-lg"
                >
                  BOOK YOUR STAY
                </button>
                <button
                  onClick={() => onNavigate('eat-drink')}
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer text-center"
                >
                  VIEW EAT & DRINK
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] lg:h-full min-h-[400px] overflow-hidden">
              <img
                src="/images/dining.png"
                alt="GOAT Beach Club beside Elia Boutique Hotel Bang Tao"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* 3 Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-6">
                <Utensils size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-1">
                Morning & Noon
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Beachfront Dining
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                Enjoy breakfast, barista coffee, proper restaurant-quality food throughout the day, and barefoot lunches right by the Andaman Sea.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-6">
                <GlassWater size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-1">
                Sunset & Evening
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Sunset Drinks & Cocktails
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                As afternoon turns to evening, stay for sunset drinks, craft cocktails, music, and beachfront dinner before walking back to your room.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-1">
                Seamless Comfort
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                In-Room Service
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                When you'd rather stay exactly where you are, order from GOAT and enjoy restaurant-quality dishes from your private Elia room or garden terrace.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Stay a little closer. To the sea. To the good life.
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            13 intimate rooms on Bang Tao Beach with complimentary GOAT Beach Club access and hotel facilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              BOOK YOUR STAY
            </button>
            <button
              onClick={() => onNavigate('rooms')}
              className="px-7 py-3.5 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer"
            >
              EXPLORE ROOMS & SUITES
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
