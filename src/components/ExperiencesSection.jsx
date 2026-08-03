import { motion } from 'framer-motion';
import { Music, Anchor, GlassWater, Flame } from 'lucide-react';

export default function ExperiencesSection({ onOpenReservation }) {
  const experiences = [
    {
      icon: Music,
      title: 'Sunset Resident DJ & Fire Shows',
      desc: 'Daily sunset rituals from 5:30 PM with deep house beats, acoustic sets, and spectacular seaside fire performances.',
    },
    {
      icon: Anchor,
      title: 'Private Yacht Andaman Charters',
      desc: 'Custom luxury catamaran excursions to Phang Nga Bay, Similan, and Phi Phi islands with personal chef on board.',
    },
    {
      icon: GlassWater,
      title: 'Thai Botanical Mixology Masterclass',
      desc: 'Learn to blend exotic Asian spirits, fresh kaffir lime, and lemongrass with our master mixologist.',
    },
    {
      icon: Flame,
      title: 'Private Beachfront Candlelight Dinner',
      desc: 'A secluded table right on the water edge illuminated by torchlight and private acoustic music.',
    },
  ];

  return (
    <section id="experiences" className="relative py-24 sm:py-32 bg-[#EFEAE2] text-[#23211E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Vibrant Living & Excursions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E] mb-4">
            Curated <span className="italic text-gold-gradient font-serif">Experiences</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Unforgettable moments designed for adventurous spirits and luxury travelers in Thailand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="glass-card p-8 rounded-3xl hover:border-[#A38B68]/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 border border-[#A38B68]/30 flex items-center justify-center text-[#A38B68] mb-6 group-hover:scale-110 group-hover:bg-[#A38B68]/25 transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#23211E] mb-3 group-hover:text-[#A38B68] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-[#6E6A63] text-xs font-light leading-relaxed font-sans">
                    {exp.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenReservation}
                  className="mt-6 pt-4 border-t border-[#A38B68]/15 text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-semibold flex items-center justify-between group-hover:text-[#23211E] transition-colors"
                >
                  <span>Inquire Experience</span>
                  <span>→</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
