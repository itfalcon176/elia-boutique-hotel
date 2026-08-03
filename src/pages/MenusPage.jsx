import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Flame, Sparkles, Heart, Search, ArrowRight, Moon } from 'lucide-react';

export default function MenusPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'starters', label: 'Finger Bites & Starters', icon: Utensils },
    { id: 'mains', label: 'Mains & Seafood Grill', icon: Flame },
    { id: 'cocktails', label: 'Signature Cocktails', icon: Sparkles },
    { id: 'desserts', label: 'Desserts & Shisha', icon: Heart },
  ];

  const menuData = {
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
      {
        name: 'Japanese Karaage Chicken Bites',
        desc: 'Crispy marinated chicken bites with yuzu kosho dip and pickled ginger.',
        price: '฿420',
        tags: ['Crispy'],
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

  const currentItems = (menuData[activeCategory] || []).filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Nomad Beach Club Phuket Inspired
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Beachfront <span className="italic text-gold-gradient font-serif">Menus</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Delicate Nikkei Japanese & Mediterranean fusion, fresh local Andaman seafood, and handcrafted tropical mixology.
          </p>
        </div>

        {/* Banner Link to Late Night Page */}
        <motion.div
          onClick={() => onNavigate('latenight')}
          whileHover={{ scale: 1.01 }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#23211E] text-[#FAF7F2] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 cursor-pointer border border-[#A38B68]/30 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#A38B68]/20 border border-[#A38B68]/40 flex items-center justify-center text-[#A38B68] shrink-0">
              <Moon size={28} className="animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-1">
                Dedicated Night Dining
              </span>
              <h3 className="font-serif text-2xl text-[#FAF7F2] font-medium group-hover:text-[#C5A880] transition-colors">
                Looking for Late Night Menu (10 PM - 2 AM)?
              </h3>
              <p className="text-[#FAF7F2]/70 text-xs font-light mt-1 font-sans">
                View our exclusive midnight Wagyu sliders, truffle fries, nightcap cocktails, and starlit shisha lounge.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#141312] bg-[#C5A880] hover:bg-white font-semibold px-5 py-3 rounded-full transition-all shrink-0">
            <span>Open Late Night Page</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#23211E] text-[#F7F4EF] shadow-md scale-105'
                    : 'bg-white text-[#23211E]/80 hover:bg-[#EFEAE2] border border-[#A38B68]/20'
                }`}
              >
                <Icon size={15} className={isSelected ? 'text-[#A38B68]' : ''} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
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

        {/* Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
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
                    <h4 className="font-serif text-lg font-medium text-[#23211E] flex items-center gap-2">
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
    </div>
  );
}
