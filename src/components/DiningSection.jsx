import { motion } from 'framer-motion';
import { UtensilsCrossed, Moon, Wine, ArrowRight } from 'lucide-react';

export default function DiningSection({ onOpenMenu, onSelectLateNight }) {
  const realms = [
    {
      title: 'Teyo Beach Restaurant',
      subtitle: 'Nikkei Asian & Mediterranean Fusion',
      hours: '12:00 PM – 10:00 PM',
      desc: 'Fresh Andaman seafood, Wagyu cuts, and delicate Nikkei sushi rolls served right on the sands of Bang Tao Beach.',
      image: '/images/dining.png',
      icon: UtensilsCrossed,
    },
    {
      title: 'Sunset Pool & Cocktail Bar',
      subtitle: 'Artisanal Mixology & Sunset Vibes',
      hours: '10:00 AM – Midnight',
      desc: 'Handcrafted tropical spritzes, vintage champagnes, and sunset DJ sessions overlooking the infinity pool.',
      image: '/images/cocktail.png',
      icon: Wine,
    },
    {
      title: 'Late Night Dining & Lounge',
      subtitle: 'Midnight Bites & Starlit Shisha',
      hours: '10:00 PM – 02:00 AM',
      isSpecial: true,
      desc: 'Exclusive late-night menu featuring midnight sliders, truffle fries, artisanal cheeses, craft cocktails, and premium shisha under the stars.',
      image: '/images/latenight.png',
      icon: Moon,
    },
  ];

  return (
    <section id="dining" className="relative py-24 sm:py-32 bg-[#F7F4EF] text-[#23211E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Gastronomy & Sunset Sessions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E] mb-4">
            Culinary <span className="italic text-gold-gradient font-serif">Realms</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            From golden midday dining to vibrant sunset cocktails and moonlit late-night bites by the Andaman Sea.
          </p>
        </div>

        {/* Realms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {realms.map((realm, idx) => {
            const Icon = realm.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`glass-card rounded-3xl overflow-hidden transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1 ${
                  realm.isSpecial
                    ? 'border-[#A38B68]/50 shadow-[0_10px_30px_rgba(163,139,104,0.15)] bg-gradient-to-b from-[#FFFDF9] to-[#F7F4EF]'
                    : 'hover:border-[#A38B68]/40'
                }`}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={realm.image}
                      alt={realm.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/60 via-transparent to-transparent" />
                    
                    {realm.isSpecial && (
                      <div className="absolute top-4 right-4 bg-[#23211E] text-[#FAF7F2] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Moon size={12} className="text-[#A38B68]" />
                        <span>Late Night Special</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A38B68] font-semibold mb-2">
                      <Icon size={16} />
                      <span>{realm.hours}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-[#23211E] mb-2 group-hover:text-[#A38B68] transition-colors">
                      {realm.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#6E6A63] mb-4 font-medium">
                      {realm.subtitle}
                    </p>
                    <p className="text-[#6E6A63] text-sm font-light leading-relaxed font-sans">
                      {realm.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  {realm.isSpecial ? (
                    <button
                      onClick={onSelectLateNight}
                      className="w-full py-3 rounded-xl bg-[#23211E] hover:bg-[#A38B68] text-[#F7F4EF] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <span>Explore Late Night Menu</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenMenu}
                      className="w-full py-3 rounded-xl bg-[#EFEAE2] hover:bg-[#23211E] hover:text-[#F7F4EF] text-[#23211E] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all"
                    >
                      <span>View Menu</span>
                      <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
