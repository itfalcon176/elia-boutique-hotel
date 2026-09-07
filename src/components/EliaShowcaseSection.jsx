import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Utensils, Waves, Flame, Droplets, Check } from 'lucide-react';
import { roomsData } from '../data/roomsData';

export default function EliaShowcaseSection({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % roomsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + roomsData.length) % roomsData.length);
  };

  const prevIdx = (currentIndex - 1 + roomsData.length) % roomsData.length;
  const nextIdx = (currentIndex + 1) % roomsData.length;

  const visibleRooms = [
    { ...roomsData[prevIdx], targetIndex: prevIdx, isCenter: false },
    { ...roomsData[currentIndex], targetIndex: currentIndex, isCenter: true },
    { ...roomsData[nextIdx], targetIndex: nextIdx, isCenter: false },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Boutique 13-Room Sanctuary Philosophy */}
      <section className="py-16 sm:py-24 bg-[#EFECE6] text-[#23211E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block font-sans"
          >
            Intimate 13-Room Boutique Hotel
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#23211E] leading-tight mb-6"
          >
            The Essence of <span className="italic text-gold-gradient font-serif">Elia Phuket</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#555047] text-sm sm:text-base leading-[1.8] font-sans font-light max-w-3xl mx-auto"
          >
            Elia Phuket is an intimate boutique haven of just 13 bespoke suites situated directly on the golden sands of Bang Tao Beach. Crafted for slow living, sensory rejuvenation, and authentic island connection, guests enjoy personal 24/7 concierge service, restorative thermal hydrotherapy, and privileged VIP access to the renowned GOAT Beach Club next door.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Room Highlights Carousel (Linking to All 4 Individual Room Pages) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-[#23211E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-2 block font-sans">
              Curated Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E]">
              Rooms & <span className="italic text-gold-gradient font-serif">Suites</span>
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-3 mb-6" />
          </div>

          {/* Quick Room Selection Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2 mb-8 px-1 sm:px-0">
            {roomsData.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setCurrentIndex(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold font-sans transition-all duration-300 cursor-pointer shrink-0 ${
                  currentIndex === idx
                    ? 'bg-[#23211E] text-[#F7F4EF] shadow-lg scale-105 border border-[#A38B68]'
                    : 'bg-[#EFECE6] text-[#555047] hover:bg-[#A38B68]/20 hover:text-[#23211E]'
                }`}
              >
                {idx + 1}. {room.title}
              </button>
            ))}
          </div>

          {/* Carousel Display */}
          <div className="relative py-2 max-w-md md:max-w-none mx-auto">
            <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-3 -right-3 sm:-left-6 sm:-right-6 z-30 pointer-events-none">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 shadow-xl border border-[#A38B68]/30 flex items-center justify-center text-[#23211E] hover:bg-[#23211E] hover:text-white transition-all duration-300 pointer-events-auto cursor-pointer"
                aria-label="Previous Room"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 shadow-xl border border-[#A38B68]/30 flex items-center justify-center text-[#23211E] hover:bg-[#23211E] hover:text-white transition-all duration-300 pointer-events-auto cursor-pointer"
                aria-label="Next Room"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center"
              >
                {visibleRooms.map((room, i) => {
                  const isCenter = room.isCenter;
                  return (
                    <div
                      key={`${room.id}-${i}`}
                      onClick={() => !isCenter && setCurrentIndex(room.targetIndex)}
                      className={`flex flex-col transition-all duration-500 rounded-2xl overflow-hidden ${
                        !isCenter
                          ? 'hidden md:flex scale-95 z-0 opacity-80 cursor-pointer border border-[#A38B68]/20 bg-[#EFECE6]'
                          : 'flex scale-100 sm:scale-105 z-20 shadow-[0_20px_50px_rgba(35,33,30,0.18)] border-2 border-[#A38B68] ring-4 ring-[#A38B68]/15 bg-white'
                      }`}
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={room.mainImage}
                          alt={room.title}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            isCenter ? 'scale-105' : 'group-hover:scale-105'
                          }`}
                        />
                        <span
                          className={`absolute top-4 right-4 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-sans font-semibold backdrop-blur-md shadow-md ${
                            isCenter
                              ? 'bg-[#A38B68] text-white border border-white/30'
                              : 'bg-[#23211E]/80 text-[#F7F4EF] border border-white/20'
                          }`}
                        >
                          {room.tag}
                        </span>
                      </div>

                      <div
                        className={`p-5 sm:p-6 text-center flex flex-col justify-between flex-1 border-t ${
                          isCenter
                            ? 'bg-gradient-to-b from-[#FFFFFF] to-[#FAF7F2] border-[#A38B68]/40'
                            : 'bg-[#EFECE6] border-[#A38B68]/20'
                        }`}
                      >
                        <div>
                          <h3
                            className={`font-serif tracking-wide text-[#23211E] mb-1 ${
                              isCenter ? 'text-xl sm:text-2xl font-semibold' : 'text-lg font-medium'
                            }`}
                          >
                            {room.title}
                          </h3>
                          <p className="text-[10px] text-[#A38B68] uppercase tracking-widest font-semibold font-sans mb-2">
                            {room.subtitle}
                          </p>
                          <p className="text-[12px] text-[#6E6A63] font-light font-sans mb-4 leading-relaxed">
                            {room.shortDesc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#A38B68]/15 flex items-center justify-between gap-2">
                          <span className="text-[10px] text-[#555047] uppercase font-medium font-sans">
                            {room.size} • {room.occupancy}
                          </span>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigate(`rooms/${room.slug}`);
                            }}
                            className={`inline-block text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-full cursor-pointer ${
                              isCenter
                                ? 'bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] hover:text-white px-5 py-2 shadow-md'
                                : 'bg-[#DCD7CD] text-[#23211E] hover:bg-[#23211E] hover:text-white px-4 py-1.5'
                            }`}
                          >
                            VIEW ROOM →
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Pagination / Dots */}
            <div className="flex items-center justify-between max-w-xs mx-auto mt-8 pt-2">
              <div className="flex items-center gap-2">
                {roomsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-[#23211E]'
                        : 'w-2 bg-[#A38B68]/30 hover:bg-[#A38B68]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#A38B68] font-sans">
                0{currentIndex + 1} / 0{roomsData.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Facilities Overview (Intimate, Peaceful Beachfront) */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] text-[#23211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold mb-2 block font-sans">
              Intimate Facilities
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#23211E]">
              Crafted for Serene Phuket Living
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-3 mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#A38B68]/20 shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-4">
                <Waves size={20} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#23211E] mb-2">Direct Beach Path</h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                Step straight from your private room onto Bang Tao Beach in under 30 seconds.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#A38B68]/20 shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-4">
                <Droplets size={20} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#23211E] mb-2">Lagoon Plunge Pool</h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                Shaded freshwater swimming oasis with semi-submerged sun loungers and garden daybeds.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#A38B68]/20 shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-4">
                <Flame size={20} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#23211E] mb-2">Thermal Spa & Sauna</h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                Finnish cedarwood sauna, 8°C cold plunge, and outdoor massage cabanas.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#A38B68]/20 shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-4">
                <Sparkles size={20} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#23211E] mb-2">24/7 Digital Concierge</h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                Instant personal assistance via WhatsApp for dining, boat charters, and island transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GOAT Beach Club Integration Highlight */}
      <section className="py-16 sm:py-24 bg-[#181715] text-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold">
                <Utensils size={12} />
                <span>Culinary & Beach Club Partner</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Privileged Access to <span className="italic text-gold-gradient font-serif">GOAT Beach Club</span>
              </h2>
              <p className="text-[#FAF7F2]/80 text-xs sm:text-sm font-light leading-relaxed font-sans">
                Elia guests enjoy direct access to GOAT Beach Club right at your doorstep. From beachfront breakfast and daybeds to sunset Nikkei dining and 10 PM – 2 AM Late Night craft cocktails, charging directly to your room folio.
              </p>
              <div className="space-y-2.5 pt-2 text-xs text-[#FAF7F2]/85">
                <div className="flex items-center gap-2.5">
                  <Check size={15} className="text-[#C5A880]" />
                  <span>Complimentary VIP sunbed reservations with no minimum spend</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={15} className="text-[#C5A880]" />
                  <span>Daily artisanal breakfast on the sand or delivered to your suite</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={15} className="text-[#C5A880]" />
                  <span>Signature 10 PM – 2 AM Late Night Menu and Shisha Lounge</span>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('eat-drink')}
                  className="px-7 py-3.5 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all cursor-pointer shadow-lg"
                >
                  DISCOVER EAT & DRINK
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#A38B68]/30">
              <img
                src="/images/dining.png"
                alt="GOAT Beach Club Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Wellness Thermal Circuit Teaser */}
      <section className="py-16 sm:py-24 bg-[#EFECE6] text-[#23211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#A38B68]/20 order-2 lg:order-1">
              <img
                src="/images/spa.png"
                alt="Elia Wellness & Spa"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-bold block font-sans">
                Thermal & Body Sanctuary
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#23211E]">
                Restorative <span className="italic text-gold-gradient font-serif">Wellness</span>
              </h2>
              <p className="text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans">
                Restore your natural balance with our contrast hydrotherapy circuit: Nordic cedarwood sauna, 8°C ice cold plunge, warm magnesium jacuzzi, and beachfront Thai massage cabanas.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-[#A38B68]/20">
                  <span className="text-xs font-semibold text-[#23211E] block">Cedar Sauna</span>
                  <span className="text-[11px] text-[#6E6A63]">Deep heat detox</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#A38B68]/20">
                  <span className="text-xs font-semibold text-[#23211E] block">Cold Plunge</span>
                  <span className="text-[11px] text-[#6E6A63]">8°C vitality reset</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#A38B68]/20">
                  <span className="text-xs font-semibold text-[#23211E] block">Hydro Jacuzzi</span>
                  <span className="text-[11px] text-[#6E6A63]">Magnesium jet bath</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#A38B68]/20">
                  <span className="text-xs font-semibold text-[#23211E] block">Outdoor Spa</span>
                  <span className="text-[11px] text-[#6E6A63]">Herbal compress rituals</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('wellness')}
                  className="px-7 py-3 rounded-full bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md"
                >
                  EXPLORE WELLNESS OFFERINGS →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Location & Experiences Teaser */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-[#23211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-bold block font-sans">
                Location & Curations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#23211E]">
                Bang Tao Beach & <span className="italic text-gold-gradient font-serif">Island Curations</span>
              </h2>
              <p className="text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans">
                Located 25 minutes from Phuket International Airport on Phuket’s most coveted 6 km coastline. Explore Phang Nga Bay via private catamaran, discover Old Phuket Town, or unwind with paddleboards on calm morning waters.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('experiences')}
                  className="px-7 py-3 rounded-full bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md"
                >
                  DISCOVER EXPERIENCES →
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#A38B68]/20">
              <img
                src="/images/cocktail.png"
                alt="Phuket Island Excursions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
