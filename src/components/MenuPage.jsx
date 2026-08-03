import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sparkles, Flame, Heart, Search, Clock, Utensils } from 'lucide-react';

export default function MenuPage({ initialTab = 'latenight' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const menuCategories = [
    { id: 'latenight', label: 'Late Night Menu', icon: Moon, isSpecial: true },
    { id: 'starters', label: 'Finger Bites & Starters', icon: Utensils },
    { id: 'mains', label: 'Mains & Seafood Grill', icon: Flame },
    { id: 'cocktails', label: 'Signature Cocktails', icon: Sparkles },
    { id: 'desserts', label: 'Desserts & Shisha', icon: Heart },
  ];

  const menuData = {
    latenight: [
      {
        name: 'Midnight Wagyu Sliders (3pcs)',
        desc: 'Pan-seared A5 Wagyu beef patties, melted Gruyère, black truffle aioli, brioche buns.',
        price: '฿650',
        tags: ['Late Night Signature', 'Chef Special'],
        isPopular: true,
      },
      {
        name: 'Truffle & Parmesan Hand-Cut Fries',
        desc: 'Crispy double-cooked potatoes tossed in wild white truffle oil, shaved aged Parmigiano, garlic mayo.',
        price: '฿380',
        tags: ['Vegetarian', 'Late Night Favorite'],
      },
      {
        name: 'Andaman Soft Shell Crab Tacos',
        desc: 'Crispy soft shell crab, avocado salsa, spicy sriracha crema, blue corn tortillas (3pcs).',
        price: '฿520',
        tags: ['Seafood', 'Spicy'],
      },
      {
        name: 'Artisanal Charcuterie & Cheese Board',
        desc: 'Prosciutto di Parma, Truffle Salami, Aged Gouda, Brie de Meaux, wild honeycomb, artisan crackers.',
        price: '฿890',
        tags: ['Great to Share'],
      },
      {
        name: 'Japanese Karaage Chicken Bites',
        desc: 'Crispy marinated chicken bites with yuzu kosho dip and pickled ginger.',
        price: '฿420',
        tags: ['Crispy'],
      },
      {
        name: 'Late Night Midnight Espresso Martini',
        desc: 'Ketel One Vodka, fresh espresso, Kahlúa, dark chocolate flakes, roasted coffee bean.',
        price: '฿420',
        tags: ['Cocktail', 'Best Seller'],
        isPopular: true,
      },
      {
        name: 'Smoked Velvet Shisha',
        desc: 'Premium French hookah blend with mint leaf, passion fruit, and ice cooling filter.',
        price: '฿1,200',
        tags: ['Hookah / Shisha'],
      },
    ],
    starters: [
      {
        name: 'Shrimp Dynamite',
        desc: 'Crispy tiger prawns tossed in sweet-spicy sriracha mayo, chives, and toasted sesame.',
        price: '฿480',
        tags: ['Popular'],
        isPopular: true,
      },
      {
        name: 'Spicy Salmon & Avocado Tartare',
        desc: 'Norwegian salmon, avocado puree, ponzu dressing, tobiko caviar, crispy lotus root chips.',
        price: '฿560',
        tags: ['Raw / Fresh', 'Gluten Free'],
      },
      {
        name: 'Watermelon & Greek Feta Salad',
        desc: 'Compressed chilled watermelon, wild rocket, barrel-aged feta, mint, lime reduction.',
        price: '฿380',
        tags: ['Vegan Option', 'Fresh'],
      },
      {
        name: 'Spicy Tuna Crispy Rice',
        desc: 'Pan-fried sushi rice cakes topped with spicy bluefin tuna, jalapeño slice, eel sauce.',
        price: '฿520',
        tags: ['Chef Special'],
      },
    ],
    mains: [
      {
        name: 'Grilled Andaman Tiger Prawns (400g)',
        desc: 'Charcoal-grilled jumbo prawns with garlic herb butter, seafood dip, and charred lemon.',
        price: '฿1,150',
        tags: ['Local Seafood', 'Chef Special'],
        isPopular: true,
      },
      {
        name: 'Australian Wagyu Ribeye Steak (300g)',
        desc: 'MB5+ Wagyu ribeye, roasted baby potatoes, smoked shallot jus, roasted garlic.',
        price: '฿1,650',
        tags: ['Prime Steak'],
      },
      {
        name: 'Pan-Seared Phuket Sea Bass',
        desc: 'Local sea bass fillet, saffron risotto, braised cherry tomatoes, lemon herb emulsion.',
        price: '฿780',
        tags: ['Gluten Free'],
      },
      {
        name: 'Wild Mushroom Truffle Tagliatelle',
        desc: 'Fresh handmade pasta, porcini mushrooms, black truffle cream sauce, shaved parmesan.',
        price: '฿680',
        tags: ['Vegetarian'],
      },
    ],
    cocktails: [
      {
        name: 'Elia Sunset Breeze (Signature)',
        desc: 'Chalong Bay Thai Rum, fresh passionfruit, coconut cream, fresh lime, roasted pineapple rim.',
        price: '฿450',
        tags: ['House Signature'],
        isPopular: true,
      },
      {
        name: 'Smoked Mezcalita',
        desc: 'Montelobos Mezcal, Cointreau, fresh lime juice, agave nectar, black volcanic salt rim.',
        price: '฿480',
        tags: ['Craft Cocktail'],
      },
      {
        name: 'Phuket Passion Spritz',
        desc: 'Aperol, Prosecco, fresh passionfruit, soda water, fresh mint leaf.',
        price: '฿420',
        tags: ['Refreshing'],
      },
      {
        name: 'Coconut Lychee Martini',
        desc: 'Tanqueray Gin, lychee liqueur, fresh coconut water, dash of rose blossom.',
        price: '฿420',
        tags: ['Smooth'],
      },
    ],
    desserts: [
      {
        name: 'Matcha Lava Cake',
        desc: 'Warm Uji matcha green tea molten cake, sesame tuile, artisanal coconut gelato.',
        price: '฿340',
        tags: ['Sweet'],
      },
      {
        name: 'Phuket Mango Panna Cotta',
        desc: 'Silky coconut milk panna cotta, fresh Chiang Mai mango, passionfruit reduction.',
        price: '฿320',
        tags: ['Vegan', 'Gluten Free'],
      },
      {
        name: 'Artisan Tropical Fruit Platter',
        desc: 'Freshly carved Thai dragonfruit, mango, papaya, pineapple, mangosteen, and wild honey.',
        price: '฿390',
        tags: ['Healthy'],
      },
      {
        name: 'Exclusive Shisha - Royal Mint & Berry',
        desc: 'Premium waterpipe with natural coconut coal and ice cooling hose.',
        price: '฿1,200',
        tags: ['Shisha Lounge'],
      },
    ],
  };

  const currentItems = (menuData[activeTab] || []).filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="menu-section" className="relative py-24 sm:py-32 bg-[#EFEAE2] text-[#23211E] min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Nomad Beach Club Inspired
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E] mb-4">
            Curated <span className="italic text-gold-gradient font-serif">Menus</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Explore our daily beachfront offerings, artisanal mixology, and our signature <strong className="text-[#A38B68]">Late Night Menu</strong> served until 2:00 AM.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {menuCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#23211E] text-[#F7F4EF] shadow-md scale-105'
                    : 'bg-white/80 text-[#23211E]/80 hover:bg-white hover:text-[#23211E] border border-[#A38B68]/20'
                }`}
              >
                <Icon size={15} className={isSelected ? 'text-[#A38B68]' : ''} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6A63]" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#A38B68]/30 text-[#23211E] text-xs tracking-wider placeholder-[#6E6A63] focus:outline-none focus:border-[#23211E] transition-all shadow-sm"
          />
        </div>

        {/* Late Night Banner (When Late Night Tab is active) */}
        {activeTab === 'latenight' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#23211E] text-[#FAF7F2] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#A38B68]/20 border border-[#A38B68]/50 flex items-center justify-center text-[#A38B68] shrink-0">
                <Moon size={28} className="animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-2xl text-[#FAF7F2] font-medium">
                    Late Night Dining Sanctuary
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#A38B68] text-white">
                    10 PM - 2 AM
                  </span>
                </div>
                <p className="text-[#FAF7F2]/70 text-xs font-light mt-1 max-w-xl font-sans">
                  As the Phuket moon rises over Bang Tao bay, enjoy our curated selection of gourmet sliders, crisp truffle bites, signature nightcaps, and premium shisha.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A38B68] font-semibold whitespace-nowrap bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <Clock size={14} />
              <span>Kitchen open till 02:00 AM</span>
            </div>
          </motion.div>
        )}

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentItems.map((item, idx) => (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 hover:border-[#A38B68] hover:shadow-md flex flex-col justify-between ${
                  item.isPopular ? 'border-[#A38B68]/50 bg-gradient-to-b from-[#FFFFFF] to-[#FDFBF7]' : 'border-[#A38B68]/20'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-serif text-lg font-medium text-[#23211E] group-hover:text-[#A38B68] transition-colors flex items-center gap-2">
                      {item.name}
                      {item.isPopular && (
                        <span className="text-[9px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#A38B68]/15 text-[#A38B68] border border-[#A38B68]/30">
                          Popular
                        </span>
                      )}
                    </h4>
                    <span className="font-serif text-lg font-semibold text-[#A38B68] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-[#6E6A63] text-xs font-light leading-relaxed mb-4 font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-[#A38B68]/10">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] uppercase tracking-wider text-[#6E6A63] bg-[#EFEAE2] px-2.5 py-1 rounded-full border border-[#A38B68]/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
