import { motion } from 'framer-motion';
import { Waves, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Waves,
      title: 'Barefoot Luxury',
      desc: 'Seamlessly blending natural earth elements, raw teak wood, and turquoise Andaman sea breezes.',
    },
    {
      icon: Sparkles,
      title: 'The Elia Ethos',
      desc: 'Inspired by the Japanese concept of inner space and sanctuary—a refuge for soul and senses.',
    },
    {
      icon: Compass,
      title: 'Cherngtalay Location',
      desc: 'Situated along Phuket’s most coveted beach strip, moments from vibrant sunset beach clubs.',
    },
    {
      icon: ShieldCheck,
      title: 'Curated Living',
      desc: 'Personalized butler service, private swim-up pools, and bespoke late-night culinary offerings.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F7F4EF] text-[#23211E] overflow-hidden">
      {/* Subtle Warm Sand Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A38B68]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block"
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
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#6E6A63] font-light text-base sm:text-lg leading-relaxed font-sans"
          >
            Elia Boutique Hotel is a bohemian-minimalist sanctuary born from the union of serene natural design, slow living, and vibrant beachfront spirit. Here, mornings begin with turquoise waves and evenings transition seamlessly into starlit late-night dining.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="glass-card p-8 rounded-2xl hover:border-[#A38B68]/40 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#A38B68]/10 border border-[#A38B68]/30 flex items-center justify-center text-[#A38B68] mb-6 group-hover:scale-110 group-hover:bg-[#A38B68]/20 transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-medium tracking-wide text-[#23211E] mb-3 group-hover:text-[#A38B68] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#6E6A63] text-sm font-light leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 glass-card-sand p-8 sm:p-12 rounded-3xl relative overflow-hidden text-center"
        >
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-4xl text-[#A38B68] font-serif block mb-4">“</span>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light italic text-[#23211E] leading-relaxed mb-6">
              Where days drift into unforgettable nights by the sea. A space designed to restore your rhythm and stir your senses.
            </p>
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold">
              ELIA BOUTIQUE HOTEL • PHUKET
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
