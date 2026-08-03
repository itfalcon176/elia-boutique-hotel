import { motion } from 'framer-motion';

export default function OkuShowcaseSection({ onNavigate, onOpenReservation }) {
  return (
    <div className="w-full">
      {/* SECTION 1: Bohemian Minimalism Intro Text Block */}
      <section className="py-20 sm:py-28 bg-[#EFECE6] text-[#23211E]">
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
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#23211E] leading-tight mb-8"
          >
            The Essence of <span className="italic text-gold-gradient font-serif">Elia</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#555047] text-sm sm:text-base leading-[2] font-sans font-light max-w-3xl mx-auto"
          >
            Elia Boutique Hotel is a bohemian-minimalist sanctuary born from the union of serene natural design, slow living, and vibrant beachfront spirit. Here along the golden sands of Bang Tao Beach, mornings begin with turquoise waves and gentle sea breezes, while evenings transition seamlessly into starlit Nikkei fusion gastronomy, handcrafted tropical mixology, and our signature 10 PM - 2 AM Late Night Menu.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Rooms - Natural Earthy Tones Grid */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#23211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block font-sans">
              Sanctuary & Living
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E]">
              Rooms & <span className="italic text-gold-gradient font-serif">Suites</span>
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Room 1 */}
            <div className="flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                <img
                  src="/images/suite.png"
                  alt="Swim-Up Junior Suite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#EFECE6] p-8 text-center flex flex-col justify-between flex-1 rounded-b-xl border-t border-[#A38B68]/20">
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-wide text-[#23211E] mb-2">
                    Swim-Up Junior Suite
                  </h3>
                  <p className="text-[12px] text-[#A38B68] uppercase tracking-widest font-semibold font-sans mb-3">
                    Direct Access to Lagoon Pool
                  </p>
                  <p className="text-[13px] text-[#6E6A63] font-light font-sans mb-6 leading-relaxed">
                    Step straight from your private teak terrace into the crystalline lagoon pool, crafted with minimalist Japanese oak and natural stone.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onOpenReservation && onOpenReservation()}
                    className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full"
                  >
                    EXPLORE SUITE
                  </button>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                <img
                  src="/images/dining.png"
                  alt="Deluxe Ocean View Suite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#EFECE6] p-8 text-center flex flex-col justify-between flex-1 rounded-b-xl border-t border-[#A38B68]/20">
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-wide text-[#23211E] mb-2">
                    Deluxe Ocean View Suite
                  </h3>
                  <p className="text-[12px] text-[#A38B68] uppercase tracking-widest font-semibold font-sans mb-3">
                    Panoramic Andaman Horizons
                  </p>
                  <p className="text-[13px] text-[#6E6A63] font-light font-sans mb-6 leading-relaxed">
                    Perched on upper levels with floor-to-ceiling glass windows framing breathtaking Andaman sunsets and outdoor lounge daybeds.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onOpenReservation && onOpenReservation()}
                    className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full"
                  >
                    EXPLORE SUITE
                  </button>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                <img
                  src="/images/cocktail.png"
                  alt="Rooftop Sunset Pool Suite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#EFECE6] p-8 text-center flex flex-col justify-between flex-1 rounded-b-xl border-t border-[#A38B68]/20">
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-wide text-[#23211E] mb-2">
                    Rooftop Sunset Pool Suite
                  </h3>
                  <p className="text-[12px] text-[#A38B68] uppercase tracking-widest font-semibold font-sans mb-3">
                    Private Infinity Plunge Pool
                  </p>
                  <p className="text-[13px] text-[#6E6A63] font-light font-sans mb-6 leading-relaxed">
                    The pinnacle of barefoot luxury. Features a private rooftop infinity plunge pool, open-air sun deck, and full cocktail cabinet.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onOpenReservation && onOpenReservation()}
                    className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full"
                  >
                    EXPLORE SUITE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Asymmetrical Gastronomy, Spa & Experiences Showcase */}
      <section className="py-24 sm:py-32 bg-[#EFECE6] text-[#23211E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

          {/* Block 1: Gastronomic Journey (Top Right Layout with L-Line) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 lg:col-start-2 relative">
              {/* Thin L-shaped connecting line */}
              <div className="hidden lg:block absolute -top-8 right-0 left-12 h-[1px] bg-[#A38B68]/30" />
              <div className="hidden lg:block absolute -top-8 right-0 w-[1px] h-36 bg-[#A38B68]/30" />

              <div className="max-w-md ml-auto pr-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-2 font-sans">
                  Gastronomy & Mixology
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#23211E] font-light mb-4">
                  Culinary Realm & <span className="italic text-gold-gradient font-serif">Late Night</span>
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-6">
                  Experience delicate Nikkei Japanese & Mediterranean fusion dishes by day, transitioning into our signature 10 PM - 2 AM Late Night Menu with midnight Wagyu sliders, truffle fries, craft cocktails, and starlit shisha lounge.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('menus')}
                  className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full"
                >
                  EXPLORE MENUS
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-full border-4 border-white/80 shadow-xl">
                <img
                  src="/images/dining.png"
                  alt="Culinary Realm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Awaken Your Senses (Middle Left Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1">
              <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-2xl shadow-lg border border-[#A38B68]/20">
                <img
                  src="/images/spa.png"
                  alt="Wellness & Holistic Spa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              {/* Thin L-shaped connecting line */}
              <div className="hidden lg:block absolute -bottom-8 left-0 right-12 h-[1px] bg-[#A38B68]/30" />
              <div className="hidden lg:block absolute -bottom-8 left-0 w-[1px] h-36 bg-[#A38B68]/30" />

              <div className="max-w-md pl-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-2 font-sans">
                  Body & Soul Sanctuary
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#23211E] font-light mb-4">
                  Wellness & <span className="italic text-gold-gradient font-serif">Holistic Spa</span>
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-6">
                  Restore your natural rhythm with beachfront massages, sound bath meditations, private sauna sessions, and organic Thai herbal rituals designed to soothe body and mind.
                </p>
                <button
                  onClick={() => onOpenReservation && onOpenReservation()}
                  className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full"
                >
                  DISCOVER SPA
                </button>
              </div>
            </div>
          </div>

          {/* Block 3: Bays, Beaches and Memorable Experiences (Bottom Layout with L-Line) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 lg:col-start-2 relative order-2 lg:order-1">
              <div className="aspect-[16/10] max-w-lg mx-auto overflow-hidden rounded-2xl shadow-lg border border-[#A38B68]/20">
                <img
                  src="/images/latenight.png"
                  alt="Phuket Bespoke Experiences"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              {/* Thin L-shaped connecting line */}
              <div className="hidden lg:block absolute -top-8 left-0 right-8 h-[1px] bg-[#A38B68]/30" />

              <div className="max-w-md pl-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-2 font-sans">
                  Land & Sea Journeys
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#23211E] font-light mb-4">
                  Phuket Bespoke <span className="italic text-gold-gradient font-serif">Experiences</span>
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-6">
                  Explore Phang Nga Bay by private catamaran, enjoy sunset beach lounge DJ sessions, or venture into nearby Boat Avenue markets with our 24/7 personal concierge.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('location')}
                  className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-full"
                >
                  EXPLORE LOCATION
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
