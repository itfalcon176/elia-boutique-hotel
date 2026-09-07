import { motion } from 'framer-motion';
import { Sparkles, Heart, Users, Baby, Palmtree, Waves, Check, ArrowRight, BedDouble } from 'lucide-react';

export default function FamilyPage({ onNavigate, onOpenReservation }) {
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
              Family Stays
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Heart size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Family-Friendly Boutique Stay
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Family Stays at <span className="italic text-gold-gradient font-serif">Elia Phuket</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-4">
            Small hotel. Very easy family holiday.
          </h2>

          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Travelling with children doesn't mean your hotel needs to feel like a children's resort. Elia gives families the space and facilities they need while keeping the atmosphere relaxed, stylish and intimate.
          </p>
          <p className="text-[#6E6A63] font-light text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto mt-2">
            With only 13 rooms, a kids club, family suites, a plunge pool, Bang Tao Beach and GOAT Beach Club next door, everything is close enough to make family days easy.
          </p>
        </div>

        {/* 3 Family Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Family Accommodation */}
          <div className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-6">
                <BedDouble size={24} />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Family Accommodation
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed mb-4">
                Our Garden Family Suites and One-Bedroom Loft Suite are designed for families needing additional sleeping and living space.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#A38B68]/15 text-xs text-[#555047] font-light">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Cots available free of charge when booked in advance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Additional fold-up beds can be arranged where suitable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Accommodates up to 3 adults + 1 child or 2 adults + 2 children</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#A38B68]/15">
              <button
                onClick={() => onNavigate('rooms/garden-family-suite')}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B6E3F] hover:text-[#23211E] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>View Garden Family Suite</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Pillar 2: Kids Club */}
          <div className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-6">
                <Baby size={24} />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Kids Club
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed mb-4">
                A place for younger Elia guests to play, create and spend some time of their own — and perhaps give their parents some time of their own too.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#A38B68]/15 text-xs text-[#555047] font-light">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Creative arts, games and supervised children activities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Shaded indoor and garden play spaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Gives parents peace of mind and time to relax</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#A38B68]/15">
              <span className="text-xs text-[#A38B68] font-semibold uppercase tracking-wider">
                Included with your stay
              </span>
            </div>
          </div>

          {/* Pillar 3: Beach Days Made Easy */}
          <div className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-6">
                <Waves size={24} />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Beach Days Made Easy
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed mb-4">
                No packing everyone into taxis. No shuttle timetable. No twenty-minute walk carrying everything you own. Bang Tao Beach is right here.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#A38B68]/15 text-xs text-[#555047] font-light">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Direct beachfront access in under 30 seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Gentle waves and shallow warm water for family swimming</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#A38B68]" />
                  <span>Plunge pool and garden loungers right by your room</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#A38B68]/15">
              <button
                onClick={() => onNavigate('bang-tao-beach-phuket')}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B6E3F] hover:text-[#23211E] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Discover Bang Tao Beach</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Featured Family Suite Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#23211E] text-[#FAF7F2] rounded-3xl overflow-hidden border border-[#A38B68]/30 shadow-2xl mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block">
                Ground Floor Family Retreat
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
                Garden Family Suite
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/80 font-light leading-relaxed">
                Positioned on the ground floor with a private terrace and garden area, making beach days, breakfast and getting in and out with children refreshingly simple.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={onOpenReservation}
                  className="px-8 py-3.5 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all cursor-pointer shadow-md"
                >
                  CHECK AVAILABILITY
                </button>
                <button
                  onClick={() => onNavigate('rooms/garden-family-suite')}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer"
                >
                  SUITE DETAILS
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/dining.png"
                alt="Elia Garden Family Suite in Phuket"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Plan Your Family Stay at Elia
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            Intimate 13-room boutique hotel on Bang Tao Beach with family suites, kids club, plunge pool and complimentary GOAT Beach Club access.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              BOOK YOUR STAY
            </button>
            <a
              href="https://wa.me/66824899371?text=Hello%20Elia%20Phuket%2C%20I%20would%20like%20to%20inquire%20about%20a%20family%20stay."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer"
            >
              WHATSAPP CONCIERGE
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
