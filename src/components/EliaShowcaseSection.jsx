import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EliaShowcaseSection({ onNavigate, onOpenReservation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rooms = [
    {
      id: 'deluxe-junior',
      title: 'Deluxe Junior Suite',
      subtitle: 'Overlooking Main Lagoon Pool',
      size: '70 m²',
      guests: '2-3 Guests',
      desc: 'Spacious luxury suite with floor-to-ceiling glass windows framing our tranquil central pool and lush tropical garden views.',
      image: '/images/dining.png',
      tag: 'Lagoon View',
    },
    {
      id: 'elia-signature',
      title: 'Elia Signature Suite',
      subtitle: 'Ultimate Phuket Luxury Residence',
      size: '120 m²',
      guests: '2 Adults',
      desc: 'Our flagship sanctuary featuring a private cocktail bar, outdoor sun lounge deck, freestanding stone tub, and dedicated butler.',
      image: '/images/cocktail.png',
      tag: 'VIP Signature',
    },
    {
      id: 'superior-room',
      title: 'Superior Room',
      subtitle: 'Bohemian Earthy Elegance',
      size: '55 m²',
      guests: '2 Guests',
      desc: 'Designed with minimalist teak wood, natural earth textures, organic linen, and a cozy private terrace for slow morning coffee.',
      image: '/images/latenight.png',
      tag: 'Teak Terrace',
    },
    {
      id: 'rooftop-room',
      title: 'Rooftop Room',
      subtitle: 'Starlit Horizon & Plunge Pool',
      size: '95 m²',
      guests: '2 Guests',
      desc: 'Perched high above Bang Tao Beach with a private rooftop infinity plunge pool and unobstructed views of the golden horizon.',
      image: '/images/spa.png',
      tag: 'Private Plunge Pool',
    },
    {
      id: 'swim-up',
      title: 'Swim Up Room',
      subtitle: 'Direct Step-In Lagoon Pool Access',
      size: '65 m²',
      guests: '2 Guests',
      desc: 'Step straight from your private teak deck into the crystalline lagoon pool surrounded by serene tropical greenery.',
      image: '/images/suite.png',
      tag: 'Direct Pool Access',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % rooms.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  // Position selected room in CENTER (index 1)
  const prevIdx = (currentIndex - 1 + rooms.length) % rooms.length;
  const nextIdx = (currentIndex + 1) % rooms.length;

  const visibleRooms = [
    { ...rooms[prevIdx], targetIndex: prevIdx, isCenter: false },
    { ...rooms[currentIndex], targetIndex: currentIndex, isCenter: true },
    { ...rooms[nextIdx], targetIndex: nextIdx, isCenter: false },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Bohemian Minimalism Intro Text Block */}
      <section className="py-14 sm:py-20 bg-[#EFECE6] text-[#23211E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block font-sans"
          >
            Philosophy & Sanctuary
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#23211E] leading-tight mb-6"
          >
            The Essence of <span className="italic text-gold-gradient font-serif">Elia</span>
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
            Elia Boutique Hotel is a bohemian-minimalist sanctuary born from the union of serene natural design, slow living, and vibrant beachfront spirit. Here along the golden sands of Bang Tao Beach, mornings begin with turquoise waves and gentle sea breezes, while evenings transition seamlessly into starlit Nikkei fusion gastronomy, handcrafted tropical mixology, and our signature 10 PM - 2 AM Late Night Menu.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Modern Interactive Rooms & Suites Carousel */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF] text-[#23211E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-2 block font-sans">
              Sanctuary & Living
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E]">
              Rooms & <span className="italic text-gold-gradient font-serif">Suites</span>
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-3 mb-6" />
          </div>

          {/* Quick Room Selection Pills / Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2 mb-8 px-1 sm:px-0">
            {rooms.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setCurrentIndex(idx)}
                className={`whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans transition-all duration-300 cursor-pointer shrink-0 ${
                  currentIndex === idx
                    ? 'bg-[#23211E] text-[#F7F4EF] shadow-lg scale-105 border border-[#A38B68]'
                    : 'bg-[#EFECE6] text-[#555047] hover:bg-[#A38B68]/20 hover:text-[#23211E]'
                }`}
              >
                {idx + 1}. {room.title}
              </button>
            ))}
          </div>

          {/* Carousel Slider Display */}
          <div className="relative py-2 max-w-md md:max-w-none mx-auto">
            {/* Left / Right Arrow Controls */}
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

            {/* Carousel Cards Grid */}
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
                      className={`flex-col transition-all duration-500 rounded-xl overflow-hidden ${
                        !isCenter
                          ? 'hidden md:flex scale-95 z-0 opacity-100 cursor-pointer border border-[#A38B68]/20 bg-[#EFECE6] hover:border-[#A38B68]/40'
                          : 'flex scale-100 sm:scale-105 z-20 shadow-[0_20px_50px_rgba(35,33,30,0.18)] border-2 border-[#A38B68] ring-4 ring-[#A38B68]/15 bg-white'
                      }`}
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={room.image}
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

                        {isCenter && (
                          <div className="absolute top-4 left-4 bg-[#23211E] text-[#A38B68] text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full font-bold shadow-md">
                            ★ Selected
                          </div>
                        )}
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
                            className={`font-serif tracking-wide text-[#23211E] mb-1.5 ${
                              isCenter ? 'text-xl sm:text-2xl font-semibold' : 'text-lg font-medium'
                            }`}
                          >
                            {room.title}
                          </h3>
                          <p className="text-[11px] text-[#A38B68] uppercase tracking-widest font-semibold font-sans mb-2">
                            {room.subtitle}
                          </p>
                          <p className="text-[12px] text-[#6E6A63] font-light font-sans mb-5 leading-relaxed">
                            {room.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#A38B68]/15 flex items-center justify-between gap-2">
                          <span className="text-[10px] text-[#555047] uppercase font-medium font-sans">
                            {room.size} • {room.guests}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onOpenReservation) onOpenReservation();
                            }}
                            className={`inline-block text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-full cursor-pointer ${
                              isCenter
                                ? 'bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] hover:text-white px-5 py-2 shadow-md'
                                : 'bg-[#DCD7CD] text-[#23211E] hover:bg-[#23211E] hover:text-white px-4 py-1.5'
                            }`}
                          >
                            EXPLORE SUITE
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots & Counter */}
            <div className="flex items-center justify-between max-w-xs mx-auto mt-8 pt-2">
              <div className="flex items-center gap-2">
                {rooms.map((_, idx) => (
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
                0{currentIndex + 1} / 0{rooms.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Asymmetrical Gastronomy, Spa & Experiences Showcase */}
      <section className="py-14 sm:py-20 bg-[#EFECE6] text-[#23211E] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

          {/* Block 1: Culinary Realm (Top Split with L-Line) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-6 relative">
              {/* Thin L-shaped connecting line */}
              <div className="hidden lg:block absolute -top-4 right-0 left-0 h-[1px] bg-[#23211E]/30" />
              <div className="hidden lg:block absolute -top-4 right-0 w-[1px] h-28 bg-[#23211E]/30" />

              <div className="pt-2 lg:pt-4 pr-0 lg:pr-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-1.5 font-sans">
                  Gastronomy & Mixology
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#23211E] font-light mb-3">
                  Culinary Realm & <span className="italic text-gold-gradient font-serif">Late Night</span>
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-5">
                  Experience delicate Nikkei Japanese & Mediterranean fusion dishes by day, transitioning into our signature 10 PM - 2 AM Late Night Menu with midnight Wagyu sliders, truffle fries, craft cocktails, and starlit shisha lounge.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('menus')}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full cursor-pointer shadow-sm"
                >
                  EXPLORE MENUS
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl shadow-lg border border-[#A38B68]/20 group">
                <img
                  src="/images/dining.png"
                  alt="Culinary Realm"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Wellness & Spa (Asymmetrical Dual Image & Content Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg border border-[#A38B68]/20 group">
                <img
                  src="/images/spa.png"
                  alt="Wellness & Holistic Spa"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              {/* Thin L-shaped connecting line */}
              <div className="hidden lg:block absolute -bottom-4 left-0 right-0 h-[1px] bg-[#23211E]/30" />
              <div className="hidden lg:block absolute -bottom-4 left-0 w-[1px] h-28 bg-[#23211E]/30" />

              <div className="pb-2 lg:pb-4 pl-0 lg:pl-6 max-w-lg">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-1.5 font-sans">
                  Body & Soul Sanctuary
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#23211E] font-light mb-3">
                  Wellness & <span className="italic text-gold-gradient font-serif">Holistic Spa</span>
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-5">
                  Restore your natural rhythm with beachfront massages, sound bath meditations, private sauna sessions, and organic Thai herbal rituals designed to soothe body and mind.
                </p>
                <button
                  onClick={() => onOpenReservation && onOpenReservation()}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full cursor-pointer shadow-sm"
                >
                  DISCOVER SPA
                </button>
              </div>
            </div>
          </div>

          {/* Block 3: Bespoke Experiences (Content Left & Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7 order-1 lg:order-1 relative">
              {/* Thin L-shaped connecting line */}
              <div className="hidden lg:block absolute -top-4 left-0 right-0 h-[1px] bg-[#23211E]/30" />
              <div className="hidden lg:block absolute -top-4 right-0 w-[1px] h-28 bg-[#23211E]/30" />

              <div className="pt-2 lg:pt-4 pr-0 lg:pr-6 max-w-lg">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-1.5 font-sans">
                  Land & Sea Journeys
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#23211E] font-light mb-3">
                  Phuket Bespoke <span className="italic text-gold-gradient font-serif">Experiences</span>
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-5">
                  Explore Phang Nga Bay by private catamaran, enjoy sunset beach lounge DJ sessions, or venture into nearby Boat Avenue markets with our 24/7 personal concierge.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('location')}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full cursor-pointer shadow-sm"
                >
                  EXPLORE LOCATION
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative order-2 lg:order-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg border border-[#A38B68]/20 group">
                <img
                  src="/images/latenight.png"
                  alt="Phuket Bespoke Experiences"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
