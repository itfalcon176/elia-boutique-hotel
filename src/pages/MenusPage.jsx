import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Moon } from 'lucide-react';

export default function MenusPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryPills = [
    { id: 'all', label: 'All Menus' },
    { id: 'starters', label: 'Finger Bites & Starters' },
    { id: 'salads', label: 'Salads' },
    { id: 'mains', label: 'Mains, Pasta & Steak' },
    { id: 'thai', label: 'Local Thai Dishes' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Signature Cocktails' },
  ];

  const menuSections = [
    {
      id: 'starters',
      title: 'Finger Bites & Starters',
      items: [
        {
          name: 'Chicken Satay',
          desc: 'Grilled marinated chicken skewers with creamy peanut sauce.',
          price: '280 THB',
          image: '/images/dining.png',
        },
        {
          name: 'Crispy Calamari & Tartar Sauce',
          desc: 'Golden fried squid rings served with homemade tartar sauce.',
          price: '320 THB',
          image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Korean Popcorn Chicken',
          desc: 'Crispy fried chicken tossed in sweet & spicy Korean glaze.',
          price: '290 THB',
          image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Edamame',
          desc: 'Steamed soybeans tossed with sea salt & chili garlic seasoning.',
          price: '180 THB',
          image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Sesame Crusted Chicken Tenders',
          desc: 'Crispy chicken tenders with honey mustard dip.',
          price: '270 THB',
          image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Salmon Tartare',
          desc: 'Fresh Atlantic salmon, avocado, ponzu, and sesame crisps.',
          price: '390 THB',
          image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Truffle Fries',
          desc: 'Hand-cut fries tossed with black truffle oil and parmesan.',
          price: '240 THB',
          image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Chicken Tacos',
          desc: 'Soft tacos loaded with spiced chicken, avocado, and salsa.',
          price: '310 THB',
          image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spicy Beef Tacos',
          desc: 'Tender beef with jalapenos, fresh cilantro, and lime cream.',
          price: '340 THB',
          image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'salads',
      title: 'Salads',
      items: [
        {
          name: 'Greek Salad',
          desc: 'Crisp cucumbers, tomatoes, olives, and feta cheese.',
          price: '310 THB',
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Grilled Chicken Caesar Salad',
          desc: 'Romaine lettuce, grilled chicken breast, parmesan, croutons.',
          price: '340 THB',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Burrata & Heirloom Tomato',
          desc: 'Creamy burrata cheese with heirloom tomatoes and pesto.',
          price: '420 THB',
          image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a85?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Smoked Salmon & Avocado Salad',
          desc: 'Smoked salmon, mixed greens, avocado, lemon dressing.',
          price: '390 THB',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'mains',
      title: 'Mains, Pasta & Steak',
      items: [
        {
          name: 'Wagyu Beef Cheeseburger',
          desc: 'Wagyu beef patty, cheddar cheese, caramelized onions, fries.',
          price: '450 THB',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Mini Slider Trio',
          desc: 'Three mini burgers: Wagyu beef, chicken, and pulled pork.',
          price: '380 THB',
          image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Grilled Australian Sirloin (250g)',
          desc: 'Sirloin steak, garlic butter, baby potatoes, red wine jus.',
          price: '890 THB',
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'BBQ Pork Baby Back Ribs',
          desc: 'Tender pork ribs glazed with BBQ sauce, coleslaw, fries.',
          price: '580 THB',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spaghetti Carbonara',
          desc: 'Spaghetti with guanciale, egg yolk, black pepper, pecorino.',
          price: '380 THB',
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Seafood Linguine',
          desc: 'Linguine with prawns, squid, mussels, garlic white wine.',
          price: '480 THB',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Truffle Mushroom Risotto',
          desc: 'Arborio rice, porcini mushrooms, black truffle oil, parmesan.',
          price: '420 THB',
          image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Penne Arrabbiata',
          desc: 'Penne in spicy tomato basil sauce with chili & parmesan.',
          price: '320 THB',
          image: 'https://images.unsplash.com/photo-1621996346565-e3d5d628830f?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'thai',
      title: 'Local Thai Dishes',
      items: [
        {
          name: 'Tom Yum Goong',
          desc: 'Spicy & sour Thai soup with tiger prawns & lemongrass.',
          price: '340 THB',
          image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Tom Kha Gai',
          desc: 'Coconut soup with tender chicken, galangal, cilantro.',
          price: '290 THB',
          image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pineapple Fried Rice',
          desc: 'Jasmine rice with prawns, cashews, raisins in pineapple.',
          price: '380 THB',
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pad Thai Goong',
          desc: 'Stir-fried rice noodles with prawns, tofu, bean sprouts.',
          price: '320 THB',
          image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Green Curry Chicken',
          desc: 'Thai green curry with chicken, basil, Thai eggplants.',
          price: '310 THB',
          image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spicy Beef Salad (Yum Nua)',
          desc: 'Grilled beef slices tossed with cucumber, mint, lime.',
          price: '360 THB',
          image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Khao Pad Crab',
          desc: 'Thai fried rice loaded with lump crab meat & egg.',
          price: '390 THB',
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pad Krapow Pork',
          desc: 'Stir-fried minced pork with holy basil & fried egg.',
          price: '290 THB',
          image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        {
          name: 'Molten Chocolate Lava Cake',
          desc: 'Warm chocolate lava cake with vanilla bean gelato.',
          price: '290 THB',
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Classic Tiramisu',
          desc: 'Ladyfingers soaked in espresso with mascarpone cream.',
          price: '260 THB',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Mango Sticky Rice',
          desc: 'Ripe Thai mango with warm coconut sticky rice.',
          price: '240 THB',
          image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Artisanal Gelato Selection',
          desc: 'Two scoops: Vanilla, Dark Chocolate, Mango, Coconut.',
          price: '190 THB',
          image: 'https://images.unsplash.com/photo-1567206563064-6f60f4078b57?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'drinks',
      title: 'Signature Cocktails',
      items: [
        {
          name: 'Elia Sunset Breeze (Signature)',
          desc: 'Chalong Bay Rum, passionfruit, coconut, pineapple.',
          price: '380 THB',
          image: '/images/cocktail.png',
        },
        {
          name: 'Smoked Mezcalita',
          desc: 'Mezcal, Cointreau, lime, agave, volcanic salt.',
          price: '420 THB',
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Phuket Passion Spritz',
          desc: 'Aperol, Prosecco, passionfruit, soda, mint.',
          price: '360 THB',
          image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Coconut Lychee Martini',
          desc: 'Gin, lychee liqueur, coconut water, rose blossom.',
          price: '360 THB',
          image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
  ];

  // Filter sections based on active category & search query
  const filteredSections = menuSections
    .filter(section => activeCategory === 'all' || section.id === activeCategory)
    .map(section => {
      const matchingItems = section.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...section, items: matchingItems };
    })
    .filter(section => section.items.length > 0);

  return (
    <div className="pt-20 sm:pt-24 pb-0 bg-[#F5EFE6] text-[#23211E] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-6 pt-4">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#23211E] mb-3">
            Food & Drink Menus
          </h1>
          <p className="text-[#88837A] font-light text-xs sm:text-sm font-sans max-w-2xl mx-auto leading-relaxed">
            Savor exquisite bites, Nikkei fusion & handcrafted cocktails along Bang Tao Beach, Phuket. Served daily from 12:00 PM onwards.
          </p>
        </div>

        {/* Category Jump Navigation */}
        <div className="flex items-center justify-center gap-4 flex-wrap text-xs sm:text-sm font-sans mb-4 text-[#7A756C]">
          {categoryPills.map((pill, idx) => (
            <div key={pill.id} className="flex items-center gap-4">
              <button
                onClick={() => setActiveCategory(pill.id)}
                className={`transition-colors cursor-pointer ${
                  activeCategory === pill.id
                    ? 'text-[#23211E] font-semibold border-b border-[#23211E]'
                    : 'hover:text-[#23211E]'
                }`}
              >
                {pill.label}
              </button>
              {idx < categoryPills.length - 1 && <span className="text-[#C5BEB2]">•</span>}
            </div>
          ))}
        </div>

        {/* Late Night Banner Link */}
        <div className="text-center mb-8">
          <button
            onClick={() => onNavigate && onNavigate('latenight')}
            className="inline-flex items-center gap-2 text-xs font-serif italic text-[#A38B68] hover:text-[#23211E] transition-colors cursor-pointer bg-white/70 px-4 py-1.5 rounded-full border border-[#E2DACB] shadow-xs"
          >
            <Moon size={13} className="text-[#A38B68]" />
            <span>Looking for Late Night Menu (10 PM - 2 AM)? Click here for Midnight Sliders & Shisha</span>
            <ArrowRight size={12} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A38B68]" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#DDD5C5] text-[#23211E] text-xs placeholder-[#99948B] focus:outline-none focus:border-[#23211E] transition-all shadow-xs font-sans"
          />
        </div>

        {/* Menu Sections Grid (Exact Nomad 5-column layout) */}
        {filteredSections.length === 0 ? (
          <div className="text-center py-16 bg-white/80 rounded-xl border border-[#DDD5C5] max-w-md mx-auto">
            <p className="text-xs text-[#7A756C] font-sans font-light">No menu items found matching "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-[#A38B68] font-semibold uppercase tracking-wider underline cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredSections.map((section) => (
              <div key={section.id} className="space-y-6">
                {/* Dash Category Title: — Finger Bites & Starters — */}
                <div className="text-center">
                  <h2 className="font-serif text-xl sm:text-2xl text-[#23211E] font-normal tracking-wide inline-flex items-center gap-3">
                    <span className="text-[#A38B68]">—</span>
                    <span>{section.title}</span>
                    <span className="text-[#A38B68]">—</span>
                  </h2>
                </div>

                {/* 5-Column Grid (Exact Nomad Style) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                  {section.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (idx % 5) * 0.05 }}
                      className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E5DEC9] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-left"
                    >
                      <div>
                        {/* Food Photo Container */}
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#EFEAE2] mb-2.5">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = '/images/dining.png';
                            }}
                          />
                        </div>

                        {/* Item Title */}
                        <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#23211E] mb-1 group-hover:text-[#A38B68] transition-colors leading-tight">
                          {item.name}
                        </h4>

                        {/* Description */}
                        <p className="text-[10px] sm:text-xs text-[#77736C] font-light leading-relaxed mb-2 font-sans line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="pt-2 border-t border-[#F0EBE1] flex items-center justify-between">
                        <span className="text-[11px] font-sans font-semibold text-[#A38B68]">
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Tropical Palm Beach Banner */}
      <div className="mt-16 w-full h-48 sm:h-64 overflow-hidden relative">
        <img
          src="/images/location.png"
          alt="Elia Phuket Beachfront Palms"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE6] via-transparent to-transparent opacity-80" />
      </div>
    </div>
  );
}
