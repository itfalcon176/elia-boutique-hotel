import { motion } from 'framer-motion';
import { Waves, Sparkles, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
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
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block font-sans"
          >
            Philosophy & Sanctuary
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4"
          >
            About <span className="italic text-gold-gradient font-serif">Elia</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#6E6A63] font-light text-base sm:text-lg leading-relaxed font-sans"
          >
            Elia Boutique Hotel is a bohemian-minimalist sanctuary born from the union of serene natural design, slow living, and vibrant beachfront spirit. Here along Bang Tao Beach, mornings begin with turquoise waves and evenings transition into starlit late-night dining.
          </motion.p>
        </div>

        {/* Feature Highlights Grid */}
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

        {/* Quote Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 glass-card-sand p-8 sm:p-12 rounded-3xl relative overflow-hidden text-center"
        >
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-4xl text-[#A38B68] font-serif block mb-4">“</span>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light italic text-[#23211E] leading-relaxed mb-6">
              Where days drift into unforgettable nights by the sea. A space designed to restore your rhythm and stir your senses.
            </p>
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold font-sans">
              ELIA BOUTIQUE HOTEL • PHUKET
            </span>
          </div>
        </motion.div>

        {/* Action Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="glass-card p-8 rounded-3xl border border-[#A38B68]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A38B68] font-semibold block mb-2 font-sans">
                Sanctuary Living
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Explore Rooms & Swim-Up Suites
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans mb-6">
                Discover our swim-up junior suites, rooftop plunge pools, and private 4-bedroom beach residence.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="py-3 px-6 rounded-full bg-[#23211E] text-[#F7F4EF] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              <span>View Suites & Living</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-[#A38B68]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A38B68] font-semibold block mb-2 font-sans">
                Gastronomy & Lounge
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                Explore Menus & Late Night
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans mb-6">
                Savor Nikkei Japanese-Mediterranean dishes and our signature Late Night 10 PM - 2 AM menu.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('menus')}
              className="py-3 px-6 rounded-full bg-[#23211E] text-[#F7F4EF] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              <span>View Menus</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
