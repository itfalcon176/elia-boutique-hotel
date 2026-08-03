import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Users, BedDouble, ArrowRight, Check } from 'lucide-react';

export default function SuitesSection({ onOpenReservation }) {
  const [selectedSuite, setSelectedSuite] = useState(0);

  const suites = [
    {
      id: 'swim-up',
      name: 'Swim-Up Junior Suite',
      tagline: 'Direct Access to Private Lagoon Pool',
      size: '65 m²',
      guests: '2 Adults',
      bed: 'King Organic Latex Bed',
      image: '/images/suite.png',
      description: 'Step straight from your private teak terrace into the crystalline lagoon pool. Crafted with minimalist Japanese oak, natural stone finishes, and soothing ambient lighting.',
      amenities: ['Direct Pool Access', 'Private Teak Terrace', 'Freestanding Stone Tub', '24/7 Room Butler', 'High-Speed Wi-Fi'],
    },
    {
      id: 'deluxe-ocean',
      name: 'Deluxe Ocean View Suite',
      tagline: 'Panoramic Andaman Sea Horizons',
      size: '80 m²',
      guests: '2-3 Adults',
      bed: 'Super King Feather Bed',
      image: '/images/dining.png',
      description: 'Perched on upper levels with floor-to-ceiling glass windows framing breathtaking Andaman sunsets. Features a spacious private balcony with outdoor lounge daybeds.',
      amenities: ['Panoramic Ocean View', 'Sunset Balcony Daybed', 'Rain Shower & Tub', 'Espresso Bar', 'Bespoke Bath Amenities'],
    },
    {
      id: 'rooftop-pool',
      name: 'Rooftop Sunset Pool Suite',
      tagline: 'Private Plunge Pool & Sunset Deck',
      size: '110 m²',
      guests: '2 Adults',
      bed: 'Custom King Bed',
      image: '/images/cocktail.png',
      description: 'The pinnacle of barefoot luxury. Features a private rooftop infinity plunge pool, open-air sun deck, and unobstructed views of the golden Thai horizon.',
      amenities: ['Private Infinity Pool', 'Rooftop Sun Deck', 'In-Suite Dining Setup', 'Bespoke Cocktail Cabinet', 'Personal Concierge'],
    },
    {
      id: 'private-villa',
      name: 'Private 4-Bedroom Villa',
      tagline: 'Exclusive Beachfront Residence',
      size: '350 m²',
      guests: '8 Adults',
      bed: '4 Super King Bedrooms',
      image: '/images/latenight.png',
      description: 'An expansive private sanctuary featuring a 15-meter private swimming pool, full designer kitchen, private chef service, and direct golden beach access.',
      amenities: ['15m Private Pool', 'Private Chef Included', 'Direct Beach Access', 'Private Gym & Spa Room', 'Dedicated Driver'],
    },
  ];

  const current = suites[selectedSuite];

  return (
    <section id="suites" className="relative py-24 sm:py-32 bg-[#EFEAE2] text-[#23211E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Sanctuary & Living
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E] mb-4">
            Rooms & <span className="italic text-gold-gradient font-serif">Suites</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Designed with natural earth textures, warm timber, and private water elements for profound relaxation.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {suites.map((suite, idx) => (
            <button
              key={suite.id}
              onClick={() => setSelectedSuite(idx)}
              className={`px-5 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedSuite === idx
                  ? 'bg-[#23211E] text-[#F7F4EF] shadow-md'
                  : 'bg-white/80 text-[#23211E]/70 hover:bg-white hover:text-[#23211E] border border-[#A38B68]/20'
              }`}
            >
              {suite.name}
            </button>
          ))}
        </div>

        {/* Suite Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-10 rounded-3xl"
          >
            {/* Image Side */}
            <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10]">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs tracking-widest text-[#F7F4EF] uppercase bg-[#141312]/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
                <span className="text-[#C5A880] font-medium">{current.tagline}</span>
                <span className="font-semibold text-white">{current.size}</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-2">
                  Featured Sanctuary
                </span>
                <h3 className="font-serif text-3xl font-light text-[#23211E] mb-4">
                  {current.name}
                </h3>
                <p className="text-[#6E6A63] text-sm font-light leading-relaxed mb-6 font-sans">
                  {current.description}
                </p>

                {/* Quick Specs */}
                <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-[#A38B68]/20 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Maximize2 size={16} className="text-[#A38B68]" />
                    <span className="text-[10px] text-[#6E6A63] uppercase tracking-wider">Size</span>
                    <span className="text-xs font-semibold text-[#23211E]">{current.size}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Users size={16} className="text-[#A38B68]" />
                    <span className="text-[10px] text-[#6E6A63] uppercase tracking-wider">Guests</span>
                    <span className="text-xs font-semibold text-[#23211E]">{current.guests}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <BedDouble size={16} className="text-[#A38B68]" />
                    <span className="text-[10px] text-[#6E6A63] uppercase tracking-wider">Bed</span>
                    <span className="text-xs font-semibold text-[#23211E] truncate max-w-[100px]">{current.bed}</span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="space-y-2 mb-8">
                  <span className="text-xs uppercase tracking-wider text-[#23211E]/70 font-semibold block mb-3">
                    Suite Highlights:
                  </span>
                  {current.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#6E6A63]">
                      <div className="w-4 h-4 rounded-full bg-[#A38B68]/20 text-[#A38B68] flex items-center justify-center">
                        <Check size={10} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reserve CTA Button */}
              <button
                onClick={onOpenReservation}
                className="w-full py-4 rounded-xl bg-[#23211E] hover:bg-[#A38B68] text-[#F7F4EF] font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Reserve Suite</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
