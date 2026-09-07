import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart, Compass, Check, ArrowRight, BedDouble, Utensils } from 'lucide-react';

export default function AboutPage({ onNavigate, onOpenReservation }) {
  const values = [
    {
      title: 'Only 13 Suites',
      desc: 'By deliberately limiting our scale to just 13 rooms, we protect your peace. There are no crowds, no tour buses, and no compromises on attentive, discrete hospitality.',
      icon: BedDouble,
    },
    {
      title: 'Direct Beachfront Sand',
      desc: 'Located directly along Bang Tao Beach. From your bed to the warm turquoise Andaman water takes less than 30 seconds along our private palm pathway.',
      icon: Compass,
    },
    {
      title: 'Personalized Concierge',
      desc: 'From custom floating breakfasts to private island catamaran charters, your dedicated host is on hand 24/7 via WhatsApp to curate an effortless stay.',
      icon: Heart,
    },
    {
      title: 'Bohemian Slow Luxury',
      desc: 'Earth-toned architecture inspired by Japandi minimalism and natural Thai teak wood, creating an atmosphere of unhurried grounding and sensory rejuvenation.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              The Elia Philosophy
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            About <span className="italic text-gold-gradient font-serif">Elia Phuket</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            An intimate 13-room boutique sanctuary born from a desire for slow living, authentic beachfront connection, and effortless tropical elegance.
          </p>
        </div>

        {/* Brand Story Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-bold block font-sans">
              Our Origin & Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#23211E] leading-tight">
              A Quiet Oasis on the Sands of Bang Tao
            </h2>
            <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed font-sans">
              In a world of sprawling mega-resorts, Elia Phuket was conceived as an intentional antidote: an intimate sanctuary of only 13 private suites and lofts, where luxury is measured in stillness, personal space, and the sound of waves outside your window.
            </p>
            <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed font-sans">
              Our architecture marries minimalist lines with tactile organic materials — warm reclaimed teak, natural linen textiles, handcrafted terrazzo, and sun-drenched private terraces surrounded by lush tropical landscaping.
            </p>
            
            <div className="pt-2 flex items-center gap-6 text-xs text-[#23211E] font-medium font-sans">
              <div>
                <span className="font-serif text-3xl text-[#A38B68] font-light block">13</span>
                <span>Private Suites</span>
              </div>
              <div className="h-8 w-[1px] bg-[#A38B68]/30" />
              <div>
                <span className="font-serif text-3xl text-[#A38B68] font-light block">0m</span>
                <span>To Bang Tao Beach</span>
              </div>
              <div className="h-8 w-[1px] bg-[#A38B68]/30" />
              <div>
                <span className="font-serif text-3xl text-[#A38B68] font-light block">24/7</span>
                <span>WhatsApp Concierge</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#A38B68]/30">
            <img
              src="/images/suite.png"
              alt="Elia Phuket Suite"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <span className="font-serif text-xl block mb-1">“The beach at your door.”</span>
              <span className="text-[#C5A880] text-[10px] uppercase tracking-widest">Bang Tao Beach, Phuket</span>
            </div>
          </div>
        </div>

        {/* The Relationship Between Elia & GOAT Beach Club */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#23211E] to-[#181715] text-[#FAF7F2] border border-[#A38B68]/40 shadow-2xl mb-20"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A880]/20 text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold">
              <Utensils size={12} />
              <span>Distinct Identities • Seamless Partnership</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              The Harmony of <span className="italic text-gold-gradient font-serif">Elia & GOAT</span>
            </h2>

            <p className="text-[#FAF7F2]/85 text-sm sm:text-base font-light leading-relaxed font-sans">
              Elia Phuket and GOAT Beach Club share a beautiful beachfront address, but each retains its own distinct soul.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-2">
                  Elia Boutique Hotel
                </span>
                <h4 className="font-serif text-xl text-white font-light mb-2">
                  Your Peaceful Private Sanctuary
                </h4>
                <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
                  An exclusive, tranquil retreat of only 13 suites, calm gardens, private plunge pools, and restorative thermal sauna rituals. A serene space to sleep, recharge, and slow down.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-2">
                  GOAT Beach Club
                </span>
                <h4 className="font-serif text-xl text-white font-light mb-2">
                  Your Vibrant Beachfront Living Room
                </h4>
                <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
                  The culinary and social heartbeat on the sand — where Elia guests enjoy complimentary VIP daybeds, world-class Mediterranean-Nikkei dining, sunset DJ sessions, and late-night mixology.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FAF7F2]/70 font-light pt-2 italic">
              *Elia guests enjoy full VIP privileges and seamless room-folio charging at GOAT, while always returning to the peaceful quietude of their private room.
            </p>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white border border-[#A38B68]/25 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#A38B68]/15 flex items-center justify-center text-[#A38B68] mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-lg text-[#23211E] font-medium mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Experience the 13-Room Difference
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            Reserve your suite directly with our team for guaranteed lowest rates, private airport transfers, and customized concierge itineraries.
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
              EXPLORE ALL ROOMS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
