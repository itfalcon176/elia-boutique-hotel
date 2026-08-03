import { motion } from 'framer-motion';
import { Flower2, HeartPulse, Sun, Droplets, Check } from 'lucide-react';

export default function SpaWellnessSection({ onOpenReservation }) {
  const treatments = [
    {
      title: 'Elia Signature Botanical Massage',
      time: '90 Mins',
      desc: 'Warm herbal compresses infused with Thai lemongrass, organic coconut oil, and deep tissue pressure.',
      price: '฿3,500',
    },
    {
      title: 'Sound Bowl & Chakra Healing',
      time: '60 Mins',
      desc: 'Vibrational sound healing with Tibetan singing bowls to restore inner alignment and quiet the mind.',
      price: '฿2,800',
    },
    {
      title: 'Andaman Sea Mineral Facial',
      time: '75 Mins',
      desc: 'Deep marine collagen hydration, pearl powder scrub, and lymphatic facial drainage.',
      price: '฿3,200',
    },
  ];

  return (
    <section id="spa" className="relative py-24 sm:py-32 bg-[#F7F4EF] text-[#23211E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Inner Calm & Restoration
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E] mb-4">
            Wellness & <span className="italic text-gold-gradient font-serif">Spa</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Reclaim your vital energy with organic treatments, sound meditation, and daily sunrise yoga by the sea.
          </p>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Feature Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] glass-card border border-[#A38B68]/30"
          >
            <img
              src="/images/spa.png"
              alt="Spa Sanctuary"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#141312]/80 backdrop-blur-md border border-white/20 text-[#FAF7F2]">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium block mb-1">
                Sanctuary Highlights
              </span>
              <p className="text-xs text-white/80 font-light">
                Private open-air treatment suites surrounded by lush tropical gardens and natural water fountains.
              </p>
            </div>
          </motion.div>

          {/* Right Treatments List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="space-y-4 mb-8">
              {treatments.map((t, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-[#A38B68]/20 hover:border-[#A38B68] transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl font-medium text-[#23211E]">{t.title}</h3>
                    <div className="text-right">
                      <span className="font-serif text-lg font-semibold text-[#A38B68] block">{t.price}</span>
                      <span className="text-[10px] text-[#6E6A63] uppercase tracking-wider">{t.time}</span>
                    </div>
                  </div>
                  <p className="text-[#6E6A63] text-xs font-light leading-relaxed font-sans">{t.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-4 rounded-xl bg-[#23211E] hover:bg-[#A38B68] text-[#F7F4EF] font-semibold text-xs uppercase tracking-[0.25em] transition-all duration-300 shadow-md"
            >
              Book Spa Experience
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
