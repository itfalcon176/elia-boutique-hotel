import { motion } from 'framer-motion';
import { Sparkles, Flame, Snowflake, Bath, Droplets, Check, ArrowRight, Heart, Calendar } from 'lucide-react';

export default function WellnessPage({ onNavigate, onOpenReservation }) {
  const spaFacilities = [
    {
      title: 'Sauna',
      desc: 'Slow down, switch off and enjoy the warmth of our outdoor sauna.',
      icon: Flame,
      image: '/images/spa.png',
      tag: 'Heat Therapy',
    },
    {
      title: 'Cold Plunge',
      desc: 'Cool down after the sauna or start the morning with something significantly less gentle.',
      icon: Snowflake,
      image: '/images/suite.png',
      tag: 'Cold Therapy',
    },
    {
      title: 'Jacuzzi',
      desc: 'Warm water, bubbles and nowhere else you need to be.',
      icon: Bath,
      image: '/images/cocktail.png',
      tag: 'Hydrotherapy',
    },
    {
      title: 'Plunge Pool',
      desc: 'A refreshing place to cool off between the gardens and the beach.',
      icon: Droplets,
      image: '/images/dining.png',
      tag: 'Freshwater Pool',
    },
  ];

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
              Facilities
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Restorative Sanctuary
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Facilities at <span className="italic text-gold-gradient font-serif">Elia Phuket</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-4">
            Hot. Cold. Massage. Repeat.
          </h2>

          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Facilities at Elia aren't about schedules, programmes or taking things too seriously. Everything is simply there when you want it.
          </p>
          <p className="text-[#555047] font-light text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto mt-2">
            Step into the sauna. Cool down in the cold plunge. Ease into the jacuzzi. Book a massage. Swim. Read. Do absolutely nothing.
          </p>
          <p className="text-[#8B6E3F] font-serif italic text-sm mt-2">
            You're on holiday.
          </p>
        </div>

        {/* H2: Outdoor Spa Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold mb-2 block font-sans">
              Thermal Circuit & Water
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#23211E]">
              Outdoor Spa & Thermal Circuit
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-3 mb-6" />
            <p className="text-xs sm:text-sm text-[#6E6A63] font-light leading-relaxed">
              Our outdoor facilities bring together heat, cold and water in a relaxed tropical setting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaFacilities.map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border border-[#A38B68]/25 shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={facility.image}
                        alt={`${facility.title} at Elia Boutique Hotel Phuket`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#23211E]/80 backdrop-blur-md flex items-center justify-center border border-white/20 text-[#A38B68]">
                        <Icon size={20} />
                      </div>
                      <span className="absolute top-4 right-4 bg-[#23211E]/80 backdrop-blur-md text-[#FAF7F2] text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-white/20">
                        {facility.tag}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-2xl font-light text-[#23211E] mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans">
                        {facility.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#A38B68]/15 mt-2">
                    <span className="text-[11px] text-[#A38B68] font-semibold uppercase tracking-wider">
                      Complimentary for guests
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* H2: Massage at Elia Section */}
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
                <Heart size={12} />
                <span>Relaxation & Bodywork</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Massage at <span className="italic text-gold-gradient font-serif">Elia</span>
              </h2>

              <p className="text-[#FAF7F2]/80 text-sm font-light leading-relaxed font-sans">
                Make time for a massage without having to leave the hotel.
              </p>

              <p className="text-[#FAF7F2]/80 text-sm font-light leading-relaxed font-sans">
                Our massage treatments are designed to be easy to book and easy to fit into your day.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#FAF7F2]/75 font-light">
                Ask reception or arrange your treatment through the Elia concierge.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a
                  href="https://wa.me/66932719103?text=Hello%20Elia%20Phuket%2C%20I%20would%20like%20to%20book%20a%20massage%20treatment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.15em] whitespace-nowrap hover:brightness-110 transition-all cursor-pointer shadow-lg text-center"
                >
                  BOOK YOUR MASSAGE
                </a>
                <a
                  href="https://wa.me/66932719103?text=Hello%20Elia%20Phuket%2C%20I%20would%20like%20to%20inquire%20about%20a%20massage%20treatment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-[0.15em] font-semibold whitespace-nowrap transition-all cursor-pointer text-center"
                >
                  WHATSAPP CONCIERGE
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] lg:h-full min-h-[380px] overflow-hidden">
              <img
                src="/images/spa.png"
                alt="Massage at Elia Boutique Hotel Phuket"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Your Facilities & Sanctuary on Bang Tao Beach
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            13 intimate rooms with outdoor sauna, cold plunge, jacuzzi, plunge pool, and massage treatments steps from the Andaman Sea.
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
              EXPLORE OUR ROOMS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
