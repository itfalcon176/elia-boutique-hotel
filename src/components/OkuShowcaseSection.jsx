import { motion } from 'framer-motion';

export default function OkuShowcaseSection({ onNavigate, onOpenReservation }) {
  return (
    <div className="w-full">
      {/* SECTION 1: Bohemian Minimalism Intro Text Block */}
      <section className="py-20 sm:py-28 bg-[#EFECE6] text-[#23211E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#23211E] mb-8 font-normal leading-tight"
          >
            Bohemian minimalism on the sands of Phuket
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#555047] text-sm sm:text-base leading-[2] font-sans font-light max-w-3xl mx-auto"
          >
            Nestled among tropical palm groves along Bang Tao Beach, Elia Boutique Hotel offers a five-star retreat moments from the turquoise waters of Phuket. Elia Boutique Hotel is a stylish sanctuary for those looking for the best of Phuket's lifestyle on their doorstep, with flavourful Nikkei fusion cuisine, nature-inspired design and a laidback luxury spirit. Rooms include rooftops with ocean views, swim-up pool rooms and a private four-bedroom villa for exclusive hire. Greet the day with a complimentary meditation or yoga practice, followed by an artisan coffee and the chance to create your perfect breakfast bowl. Then kick back by one of our pristine swimming pools and soak up the serene atmosphere. Indulge in a spa ritual during your stay, or try a workshop from our experience programme, before joining us in the restaurant for freshly-caught fish from our all-day menu, or more sumptuous Japanese fusion in our signature restaurant come night time. Evenings are brought to life by our resident DJ as the sun goes down and our signature Late Night Menu begins.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Rooms - Natural Earthy Tones Grid */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#23211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-script text-4xl sm:text-5xl text-[#23211E] font-normal">
              Rooms – natural earthy tones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Room 1 */}
            <div className="flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/suite.png"
                  alt="Swim Up Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#EFECE6] p-8 text-center flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[#23211E] mb-2">
                    SWIM UP ROOM
                  </h3>
                  <p className="text-[13px] text-[#6E6A63] font-light font-sans mb-6">
                    Enjoy access to a peaceful private pool
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onOpenReservation && onOpenReservation()}
                    className="inline-block text-[11px] uppercase tracking-[0.2em] font-medium text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/dining.png"
                  alt="Deluxe Junior Suite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#EFECE6] p-8 text-center flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[#23211E] mb-2">
                    DELUXE JUNIOR SUITE
                  </h3>
                  <p className="text-[13px] text-[#6E6A63] font-light font-sans mb-6">
                    Luxurious suites overlooking our main swimming pool
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onOpenReservation && onOpenReservation()}
                    className="inline-block text-[11px] uppercase tracking-[0.2em] font-medium text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/cocktail.png"
                  alt="Elia Signature Suite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#EFECE6] p-8 text-center flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[#23211E] mb-2">
                    ELIA SIGNATURE SUITE
                  </h3>
                  <p className="text-[13px] text-[#6E6A63] font-light font-sans mb-6">
                    Ultimate Phuket luxury, with a full bar and DJ booth
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onOpenReservation && onOpenReservation()}
                    className="inline-block text-[11px] uppercase tracking-[0.2em] font-medium text-[#23211E] bg-[#C8DFD7] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300"
                  >
                    LEARN MORE
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
              <div className="hidden lg:block absolute -top-8 right-0 left-12 h-[1px] bg-[#23211E]/30" />
              <div className="hidden lg:block absolute -top-8 right-0 w-[1px] h-36 bg-[#23211E]/30" />

              <div className="max-w-md ml-auto pr-6">
                <h3 className="font-script text-3xl sm:text-4xl text-[#23211E] font-normal mb-4">
                  A gastronomic journey
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-6">
                  Culinary delights seek to feed the soul and tantalise tastebuds. Two restaurants offer locally-sourced fusion cuisine from day to night, with internationally-inspired menus built on our philosophy of sustainable produce.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('menus')}
                  className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300"
                >
                  EXPLORE DINING
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-full border-4 border-white/60 shadow-xl">
                <img
                  src="/images/dining.png"
                  alt="Gastronomic journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Awaken Your Senses (Middle Left Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1">
              <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden shadow-lg">
                <img
                  src="/images/spa.png"
                  alt="Awaken your senses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              {/* Thin L-shaped connecting line */}
              <div className="hidden lg:block absolute -bottom-8 left-0 right-12 h-[1px] bg-[#23211E]/30" />
              <div className="hidden lg:block absolute -bottom-8 left-0 w-[1px] h-36 bg-[#23211E]/30" />

              <div className="max-w-md pl-4">
                <h3 className="font-script text-3xl sm:text-4xl text-[#23211E] font-normal mb-4">
                  Awaken your senses
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-6">
                  Our spa and wellness areas form an integral part of your journey. Our relaxing wellness spaces offer holistic therapies and rituals, unique experiences and daily yoga classes and meditations.
                </p>
                <button
                  onClick={() => onOpenReservation && onOpenReservation()}
                  className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300"
                >
                  DISCOVER OUR SPA
                </button>
              </div>
            </div>
          </div>

          {/* Block 3: Bays, Beaches and Memorable Experiences (Bottom Layout with L-Line) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 lg:col-start-2 relative order-2 lg:order-1">
              <div className="aspect-[16/10] max-w-lg mx-auto overflow-hidden shadow-lg">
                <img
                  src="/images/latenight.png"
                  alt="Bays and beaches"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              {/* Thin L-shaped connecting line */}
              <div className="hidden lg:block absolute -top-8 left-0 right-8 h-[1px] bg-[#23211E]/30" />

              <div className="max-w-md pl-4">
                <h3 className="font-script text-3xl sm:text-4xl text-[#23211E] font-normal mb-4">
                  Bays, beaches and memorable experiences
                </h3>
                <p className="text-[#555047] text-xs sm:text-sm leading-relaxed font-light font-sans mb-6">
                  Explore the island's beaches, forests and cliffs with us, as well as its inner hedonistic spirit, with our selection of experiences available at the hotel and further afield.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('location')}
                  className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#23211E] bg-[#DCD7CD] hover:bg-[#23211E] hover:text-white px-6 py-2.5 transition-all duration-300"
                >
                  EXPERIENCES
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
