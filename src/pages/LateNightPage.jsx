import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Clock, Utensils, Sparkles, Wine, Flame, Calendar, CheckCircle } from 'lucide-react';

export default function LateNightPage({ onOpenReservation }) {
  const lateNightItems = [
    {
      name: 'Midnight Wagyu Sliders (3pcs)',
      desc: 'Pan-seared A5 Wagyu beef patties, melted Gruyère cheese, black truffle aioli, soft brioche buns.',
      price: '฿650',
      tags: ['Chef Signature', 'Best Seller'],
      category: 'Night Bites',
    },
    {
      name: 'Truffle & Parmesan Hand-Cut Fries',
      desc: 'Crispy double-cooked skin-on potatoes tossed in wild white truffle oil, shaved aged Parmigiano, garlic mayo.',
      price: '฿380',
      tags: ['Vegetarian', 'Late Night Favorite'],
      category: 'Night Bites',
    },
    {
      name: 'Andaman Soft Shell Crab Tacos (3pcs)',
      desc: 'Crispy soft shell crab, avocado salsa, spicy sriracha crema, blue corn tortillas.',
      price: '฿520',
      tags: ['Seafood', 'Spicy'],
      category: 'Night Bites',
    },
    {
      name: 'Artisanal Charcuterie & Cheese Board',
      desc: 'Prosciutto di Parma, Truffle Salami, Aged Gouda, Brie de Meaux, wild honeycomb, artisan crackers.',
      price: '฿890',
      tags: ['Great to Share'],
      category: 'Sharing Boards',
    },
    {
      name: 'Japanese Karaage Chicken Bites',
      desc: 'Crispy marinated chicken bites with yuzu kosho dip and pickled ginger.',
      price: '฿420',
      tags: ['Crispy'],
      category: 'Night Bites',
    },
    {
      name: 'Late Night Midnight Espresso Martini',
      desc: 'Ketel One Vodka, fresh espresso, Kahlúa, dark chocolate flakes, roasted coffee bean.',
      price: '฿420',
      tags: ['Signature Nightcap'],
      category: 'Night Cocktails',
    },
    {
      name: 'Smoked Velvet Shisha - Royal Mint & Passion',
      desc: 'Premium French hookah blend with mint leaf, passion fruit, and ice cooling filter.',
      price: '฿1,200',
      tags: ['Shisha Lounge'],
      category: 'Shisha Sanctuary',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#141312] text-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/20 border border-[#A38B68]/40 text-[#E2C08D] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            <Moon size={14} className="animate-pulse" />
            <span>Served Daily • 10:00 PM – 02:00 AM</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#FAF7F2] mb-4">
            Late Night <span className="italic text-gold-gradient font-serif">Menu</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent mx-auto mb-6" />
          <p className="text-[#FAF7F2]/70 font-light text-base font-sans">
            As the moon rises over Bang Tao Beach, indulge in gourmet midnight bites, hand-cut truffle fries, signature nightcaps, and starlit shisha lounge vibes.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="mb-16 rounded-3xl overflow-hidden glass-card-gold p-8 sm:p-12 relative border border-[#C5A880]/30 bg-gradient-to-r from-[#1c1a18] via-[#23211e] to-[#1c1a18]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-2">
                Starlit Dining Sanctuary
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#FAF7F2] mb-4">
                Midnight Gastronomy by the Andaman Sea
              </h2>
              <p className="text-[#FAF7F2]/75 text-sm font-light leading-relaxed mb-6 font-sans">
                Our kitchen remains fully active until 02:00 AM every night. Pair your late-night food cravings with live sunset resident DJ lounge beats, ambient candlelight, and premium shisha.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-[#FAF7F2]">
                <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-full border border-white/10">
                  <Clock size={14} className="text-[#C5A880]" />
                  <span>Kitchen: 10 PM - 2 AM</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-full border border-white/10">
                  <Utensils size={14} className="text-[#C5A880]" />
                  <span>Wagyu & Seafood Bites</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/latenight.png"
                alt="Late Night Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20 text-xs text-[#FAF7F2] flex items-center justify-between">
                <span>Sunset Lounge & Shisha Bar</span>
                <span className="text-[#C5A880] font-semibold">Open Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {lateNightItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card-gold p-6 rounded-2xl border border-[#C5A880]/25 bg-[#1c1a18] hover:border-[#C5A880] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-serif text-xl font-medium text-[#FAF7F2]">
                    {item.name}
                  </h3>
                  <span className="font-serif text-xl font-semibold text-[#C5A880]">
                    {item.price}
                  </span>
                </div>

                <p className="text-[#FAF7F2]/70 text-xs font-light leading-relaxed mb-4 font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-white/10">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[9px] uppercase tracking-wider text-[#C5A880] bg-[#C5A880]/15 px-2.5 py-1 rounded-full border border-[#C5A880]/30 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Table Reservation CTA */}
        <div className="text-center bg-[#1c1a18] p-8 sm:p-12 rounded-3xl border border-[#C5A880]/30 max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-light mb-3">
            Reserve a Late Night Table or Shisha Lounge
          </h3>
          <p className="text-[#FAF7F2]/70 text-xs font-light mb-6 max-w-md mx-auto font-sans">
            Ensure prime beachfront seating and instant late-night service by reserving your table in advance.
          </p>
          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A880] to-[#9E8158] text-[#141312] font-bold text-xs uppercase tracking-[0.25em] hover:brightness-110 shadow-lg"
          >
            Book Late Night Reservation
          </button>
        </div>
      </div>
    </div>
  );
}
