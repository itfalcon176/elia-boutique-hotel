import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Utensils, 
  Waves, 
  Flame, 
  Droplets, 
  Check, 
  ArrowRight, 
  Sun, 
  Bath, 
  Heart, 
  Palmtree, 
  Compass, 
  Phone,
  Bell,
  Car
} from 'lucide-react';
import { roomsData } from '../data/roomsData';

export default function EliaShowcaseSection({ onNavigate, onOpenReservation }) {
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

  const facilities = [
    {
      title: 'Plunge Pool',
      subtitle: 'Cool off & unwind under tropical palms',
      category: 'Relaxation',
      icon: Waves,
      tag: 'Hydro',
    },
    {
      title: 'Outdoor Sauna',
      subtitle: 'Nordic heat & botanical detox rituals',
      category: 'Wellness',
      icon: Flame,
      tag: 'Thermal',
    },
    {
      title: 'Cold Plunge',
      subtitle: 'Invigorating contrast therapy & recovery',
      category: 'Recovery',
      icon: Droplets,
      tag: 'Vitality',
    },
    {
      title: 'Jacuzzi',
      subtitle: 'Warm bubbling open-air soak',
      category: 'Hydrotherapy',
      icon: Bath,
      tag: 'Spa',
    },
    {
      title: 'Massage Treatments',
      subtitle: 'Traditional Thai & restorative bodywork',
      category: 'Spa Rituals',
      icon: Sparkles,
      tag: 'Bespoke',
    },
    {
      title: 'Kids Club',
      subtitle: 'Creative play for younger guests',
      category: 'Family Care',
      icon: Heart,
      tag: 'Family',
    },
    {
      title: 'Beach Access',
      subtitle: 'Direct footsteps to Bang Tao sandy shore',
      category: 'Location',
      icon: Palmtree,
      tag: 'Beachfront',
    },
    {
      title: 'GOAT Beach Club',
      subtitle: 'Complimentary VIP access & beachfront dining',
      category: 'Day-to-Night',
      icon: Utensils,
      tag: 'Exclusive',
    },
    {
      title: 'Concierge Service',
      subtitle: 'Personalised 24/7 island reservations',
      category: 'Guest Care',
      icon: Bell,
      tag: '24/7 Care',
    },
    {
      title: 'Airport Transfers',
      subtitle: 'Seamless private chauffeur pickup',
      category: 'Arrivals',
      icon: Car,
      tag: 'Transfer',
    },
    {
      title: 'Phuket Experiences',
      subtitle: 'Curated boat trips, excursions & culture',
      category: 'Adventures',
      icon: Compass,
      tag: 'Curated',
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: 13 Rooms. One Very Special Place. */}
      <section className="py-16 sm:py-24 bg-[#EFECE6] text-[#23211E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-gold font-semibold mb-3 block font-sans"
          >
            Intimate Boutique Hotel
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#23211E] leading-tight mb-6"
          >
            13 Rooms. <span className="italic text-gold-gradient font-serif">One Very Special Place.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 text-[#555047] text-sm sm:text-base leading-[1.8] font-sans font-light max-w-3xl mx-auto"
          >
            <p>
              Elia is deliberately small. With just 13 rooms and suites, our approach is more personal, more relaxed and a world away from the scale of a traditional Phuket resort.
            </p>
            <p>
              Choose from ground-floor Garden Beach Rooms and Family Suites or our spacious upstairs Loft Apartments and Loft Suite. Beautiful spaces, thoughtful details and Bang Tao Beach almost outside your door.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6"
          >
            <button
              onClick={() => onNavigate('rooms')}
              className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              EXPLORE ROOMS & SUITES
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Room Highlights Carousel */}
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
                {room.countLabel ? `${room.title} (${room.countLabel})` : room.title}
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

      {/* SECTION 3: Your Room. Your Beach Club. */}
      <section className="py-16 sm:py-24 bg-[#181715] text-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A880]/20 text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold">
                <Utensils size={12} />
                <span>Complimentary Access</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Your Room. <span className="italic text-gold-gradient font-serif">Your Beach Club.</span>
              </h2>
              <p className="text-[#FAF7F2]/80 text-xs sm:text-sm font-light leading-relaxed font-sans">
                Staying at Elia includes complimentary access to GOAT Beach Club Phuket, located right beside the hotel on Bang Tao Beach.
              </p>
              <p className="text-[#FAF7F2]/80 text-xs sm:text-sm font-light leading-relaxed font-sans">
                Start with breakfast and barista coffee, drift into a day on the beach, stop for lunch, stay for sunset cocktails and return for dinner.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#FAF7F2]/75 font-light">
                There is no shuttle. No taxi. No planning. It's simply there when you want it.
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('goat-beach-club')}
                  className="px-8 py-3.5 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all cursor-pointer shadow-lg"
                >
                  DISCOVER GOAT BEACH CLUB
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#A38B68]/30">
              <img
                src="/images/dining.png"
                alt="GOAT Beach Club beside Elia Boutique Hotel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: A Stay With Something Extra */}
      <section className="py-20 sm:py-28 bg-[#FAF7F2] text-[#23211E] relative overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#A38B68]/12 via-[#A38B68]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#A38B68]/30 shadow-sm text-[#8B6E3F] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-semibold mb-4"
            >
              <Sparkles size={13} className="text-[#A38B68]" />
              <span>Boutique Scale, Generous Experience</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#23211E] tracking-tight leading-tight mb-4"
            >
              A Stay With <span className="italic text-gold-gradient font-serif">Something Extra</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-xs sm:text-base text-[#555047] font-light leading-relaxed font-sans max-w-2xl mx-auto"
            >
              A small hotel doesn't have to mean a small experience. At Elia you'll find an outdoor spa with sauna, cold plunge and jacuzzi, a plunge pool, massage treatments, a kids club and personalised concierge services. And beyond the hotel, Phuket is waiting.
            </motion.p>
          </div>

          {/* 11 Modern Luxury Facility Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-14">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="group relative bg-white/95 hover:bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#A38B68]/20 hover:border-[#A38B68]/60 shadow-[0_4px_20px_rgba(163,139,104,0.06)] hover:shadow-[0_16px_35px_rgba(163,139,104,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
                >
                  {/* Subtle hover golden glow */}
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#C5A880]/20 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  <div>
                    {/* Header with Icon and Tag */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#A38B68]/10 text-[#8B6E3F] group-hover:bg-[#23211E] group-hover:text-[#C5A880] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0">
                        <Icon size={20} />
                      </div>
                      <span className="text-[9px] uppercase tracking-wider font-semibold font-sans px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#8B6E3F] border border-[#A38B68]/25 group-hover:border-[#A38B68]/50 transition-colors">
                        {fac.tag}
                      </span>
                    </div>

                    {/* Facility Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#23211E] group-hover:text-[#8B6E3F] transition-colors leading-snug mb-1.5">
                      {fac.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans">
                      {fac.subtitle}
                    </p>
                  </div>

                  {/* Category Accent Footer */}
                  <div className="pt-4 mt-4 border-t border-[#A38B68]/15 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#A38B68] font-semibold font-sans">
                    <span>{fac.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A38B68]/40 group-hover:bg-[#A38B68] group-hover:scale-125 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="text-center">
            <button
              onClick={() => onNavigate('facilities')}
              className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#23211E] hover:bg-[#A38B68] text-[#FAF7F2] font-semibold text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>EXPLORE ALL FACILITIES</span>
              <ArrowRight size={14} className="text-[#C5A880] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: Wake Up This Close to the Beach */}
      <section className="py-16 sm:py-24 bg-[#EFECE6] text-[#23211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#A38B68]/20 order-2 lg:order-1">
              <img
                src="/images/suite.png"
                alt="Garden Beach Room at Elia Boutique Hotel Phuket"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-bold block font-sans">
                Ground Floor Living
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#23211E]">
                Wake Up This Close to the Beach
              </h2>
              <div className="space-y-3 text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans">
                <p>
                  Our Garden Beach Rooms and Garden Family Suites open onto their own terrace and garden area with loungers and an umbrella.
                </p>
                <p>Morning coffee outside.</p>
                <p>A few steps to the beach.</p>
                <p>And absolutely no reason to rush.</p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('rooms/garden-beach-room')}
                  className="px-8 py-3.5 rounded-full bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md"
                >
                  VIEW GARDEN BEACH ROOMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Eat. Drink. Stay Awhile. */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-[#23211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-bold block font-sans">
                Food & Beverage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#23211E]">
                Eat. Drink. <span className="italic text-gold-gradient font-serif">Stay Awhile.</span>
              </h2>
              <p className="text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans">
                Food at Elia comes courtesy of GOAT Beach Club.
              </p>
              <p className="text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans">
                Enjoy breakfast, proper restaurant-quality food throughout the day, fresh coffee, cocktails, sunset drinks and beachfront dining — with room service available when you'd rather stay exactly where you are.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('eat-drink')}
                  className="px-6 py-3 rounded-full border border-[#C5A880] text-[#C5A880] text-xs font-semibold uppercase tracking-widest hover:bg-[#C5A880] hover:text-[#141312] transition-all cursor-pointer"
                >
                  FOOD & DRINKS
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#A38B68]/20">
              <img
                src="/images/dining.png"
                alt="Beachfront dining at GOAT Beach Club Bang Tao"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Bang Tao, Phuket */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] text-[#23211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#A38B68]/20 order-2 lg:order-1">
              <img
                src="/images/cocktail.png"
                alt="Bang Tao Beach beside Elia Boutique Hotel Phuket"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-bold block font-sans">
                West Coast Phuket
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#23211E]">
                Bang Tao, <span className="italic text-gold-gradient font-serif">Phuket</span>
              </h2>
              <p className="text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans">
                Elia sits directly beside Bang Tao Beach in Choeng Thale on Phuket's west coast.
              </p>
              <p className="text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans">
                It's an area known for its long sandy beach, restaurants, beach clubs, relaxed atmosphere and easy access to some of Phuket's best experiences.
              </p>
              <p className="text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans">
                At Elia, you're right in it — while still having your own little corner to disappear into.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('bang-tao-beach-phuket')}
                  className="px-8 py-3.5 rounded-full bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md"
                >
                  DISCOVER BANG TAO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOME PAGE FINAL CTA */}
      <section className="py-20 sm:py-28 bg-[#181715] text-[#FAF7F2] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block font-sans">
            Elia Boutique Hotel Phuket
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-white leading-tight">
            Stay a little closer.
          </h2>
          <div className="space-y-1 text-lg sm:text-xl text-[#FAF7F2]/80 font-serif italic">
            <p>To the sea.</p>
            <p>To the good life.</p>
          </div>
          <div className="pt-4">
            <button
              onClick={onOpenReservation}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#C5A880] via-[#D5B992] to-[#B89A70] hover:from-[#D5B992] hover:to-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(197,168,128,0.45)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              BOOK YOUR STAY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
