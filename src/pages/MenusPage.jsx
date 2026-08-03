import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Moon, Utensils, Flame, Sparkles, Heart, Coffee } from 'lucide-react';

export default function MenusPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryPills = [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Finger Bites & Starters' },
    { id: 'salads', label: 'Salads' },
    { id: 'mains', label: 'Mains, Pasta & Steak' },
    { id: 'thai', label: 'Local Thai Dishes' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Cocktails & Drinks' },
  ];

  const menuSections = [
    {
      id: 'starters',
      title: 'Finger Bites & Starters',
      items: [
        {
          name: 'Chicken Satay',
          desc: 'Grilled marinated chicken skewers served with rich, creamy peanut sauce and cucumber relish.',
          price: '280 THB',
          image: '/images/dining.png',
        },
        {
          name: 'Crispy Calamari & Tartar Sauce',
          desc: 'Golden-fried squid rings lightly seasoned and served with house-made tartar sauce and lemon.',
          price: '320 THB',
          image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Korean Popcorn Chicken',
          desc: 'Crispy fried chicken bites tossed in sweet & spicy Korean glaze with toasted sesame seeds.',
          price: '290 THB',
          image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Edamame',
          desc: 'Steamed green soybeans tossed with sea salt, chili flakes, and toasted garlic oil.',
          price: '180 THB',
          image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Sesame Crusted Chicken Tenders',
          desc: 'Crispy chicken tenders coated in toasted sesame seeds, served with honey mustard dip.',
          price: '270 THB',
          image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Salmon Tartare',
          desc: 'Fresh Atlantic salmon cubes with avocado, ponzu citrus dressing, and crispy lotus chips.',
          price: '390 THB',
          image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Truffle Fries',
          desc: 'Hand-cut crispy fries tossed with black truffle oil, shaved parmesan cheese, and fresh parsley.',
          price: '240 THB',
          image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Chicken Tacos',
          desc: 'Soft flour tortilla tacos filled with spiced chicken, fresh avocado, tomato salsa, and lime cream.',
          price: '310 THB',
          image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spicy Beef Tacos',
          desc: 'Tender grilled beef, pickled jalapeños, fresh cilantro, red onions, and chipotle taco sauce.',
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
          desc: 'Crisp cucumbers, vine tomatoes, kalamata olives, red onions, wild oregano, and barrel-aged feta.',
          price: '310 THB',
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Grilled Chicken Caesar Salad',
          desc: 'Romaine lettuce, charcoal-grilled chicken breast, shaved parmesan, bacon bits, and garlic croutons.',
          price: '340 THB',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Burrata & Heirloom Tomato',
          desc: 'Creamy Italian burrata cheese, fresh heirloom tomatoes, basil pesto, and aged balsamic glaze.',
          price: '420 THB',
          image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a85?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Smoked Salmon & Avocado Salad',
          desc: 'Premium smoked Atlantic salmon, mixed baby greens, avocado, capers, and lemon vinaigrette.',
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
          desc: 'Grilled Australian Wagyu patty, aged cheddar, caramelized onions, truffle mayo, and French fries.',
          price: '450 THB',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Mini Slider Trio',
          desc: 'Trio of mini burgers: Wagyu beef, crispy buttermilk chicken, and slow-cooked pulled pork.',
          price: '380 THB',
          image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Grilled Australian Angus Sirloin (250g)',
          desc: 'Charcoal-grilled sirloin steak served with garlic herb butter, roasted baby potatoes, and red wine jus.',
          price: '890 THB',
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'BBQ Pork Baby Back Ribs',
          desc: 'Slow-cooked tender pork ribs glazed with signature BBQ sauce, served with coleslaw and fries.',
          price: '580 THB',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spaghetti Carbonara',
          desc: 'Classic Italian spaghetti with crispy guanciale, egg yolk cream, black pepper, and pecorino romano.',
          price: '380 THB',
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Seafood Linguine',
          desc: 'Linguine pasta tossed with tiger prawns, squid, mussels, cherry tomatoes, and garlic white wine sauce.',
          price: '480 THB',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Truffle Mushroom Risotto',
          desc: 'Creamy arborio rice cooked with porcini mushrooms, black truffle oil, and shaved parmesan.',
          price: '420 THB',
          image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Penne Arrabbiata',
          desc: 'Penne pasta in a spicy tomato basil sauce with garlic, chili flakes, and fresh parmesan.',
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
          desc: 'Authentic spicy & sour Thai soup with tiger prawns, lemongrass, galangal, and kaffir lime leaves.',
          price: '340 THB',
          image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Tom Kha Gai',
          desc: 'Creamy coconut milk soup infused with tender chicken, galangal, straw mushrooms, and cilantro.',
          price: '290 THB',
          image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pineapple Fried Rice',
          desc: 'Jasmine rice fried with prawns, cashews, raisins, and curry spices, served in a carved pineapple.',
          price: '380 THB',
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pad Thai Goong',
          desc: 'Stir-fried Thai rice noodles with tiger prawns, tofu, bean sprouts, crushed peanuts, and tamarind.',
          price: '320 THB',
          image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Green Curry Chicken',
          desc: 'Classic Thai green curry with chicken breast, sweet basil, Thai eggplants, and coconut milk.',
          price: '310 THB',
          image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spicy Beef Salad (Yum Nua)',
          desc: 'Charcoal-grilled beef slices tossed with cucumber, mint, red onions, chili, and lime dressing.',
          price: '360 THB',
          image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Khao Pad Crab',
          desc: 'Traditional Thai fried rice loaded with sweet lump crab meat, eggs, and spring onions.',
          price: '390 THB',
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pad Krapow Pork',
          desc: 'Stir-fried minced pork with fresh holy basil, garlic, and red chili, topped with a fried egg.',
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
          desc: 'Warm chocolate cake with a rich molten center, served with vanilla bean gelato and fresh berries.',
          price: '290 THB',
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Classic Tiramisu',
          desc: 'Espresso-soaked ladyfinger biscuits layered with rich mascarpone cream and cocoa powder.',
          price: '260 THB',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Mango Sticky Rice',
          desc: 'Sweet ripe Thai mango with warm coconut sticky rice and toasted mung beans.',
          price: '240 THB',
          image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Artisanal Gelato Selection',
          desc: 'Selection of two scoops: Vanilla Bean, Dark Chocolate, Mango Sorbet, or Fresh Coconut.',
          price: '190 THB',
          image: 'https://images.unsplash.com/photo-1567206563064-6f60f4078b57?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'drinks',
      title: 'Signature Cocktails & Drinks',
      items: [
        {
          name: 'Elia Sunset Breeze (Signature)',
          desc: 'Chalong Bay Thai Rum, fresh passionfruit, coconut cream, lime, and roasted pineapple rim.',
          price: '380 THB',
          image: '/images/cocktail.png',
        },
        {
          name: 'Smoked Mezcalita',
          desc: 'Montelobos Mezcal, Cointreau, fresh lime juice, agave nectar, and black volcanic salt rim.',
          price: '420 THB',
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Phuket Passion Spritz',
          desc: 'Aperol, Prosecco, fresh passionfruit, soda water, and fresh mint leaf.',
          price: '360 THB',
          image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Coconut Lychee Martini',
          desc: 'Tanqueray Gin, lychee liqueur, fresh coconut water, and a dash of rose blossom.',
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
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FAF7F2] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-2 block font-sans">
            Elia Boutique Hotel Phuket
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Food & Drink <span className="italic text-gold-gradient font-serif">Menus</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-4" />
          <p className="text-[#6E6A63] font-light text-xs sm:text-sm leading-relaxed font-sans max-w-2xl mx-auto">
            Savor exquisite beachfront bites, Nikkei fusion, fresh Andaman seafood, authentic Thai delicacies, and handcrafted tropical mixology served daily from 12:00 PM onwards.
          </p>
        </div>

        {/* Late Night Banner Alert */}
        <motion.div
          onClick={() => onNavigate && onNavigate('latenight')}
          whileHover={{ scale: 1.01 }}
          className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#23211E] text-[#FAF7F2] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer border border-[#A38B68]/30 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#A38B68]/20 border border-[#A38B68]/40 flex items-center justify-center text-[#A38B68] shrink-0">
              <Moon size={24} className="animate-pulse" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#A38B68] font-bold block mb-0.5">
                Starlit Dining (10 PM - 2 AM)
              </span>
              <h3 className="font-serif text-xl text-[#FAF7F2] font-medium group-hover:text-[#C5A880] transition-colors">
                Looking for Late Night Menu (10 PM - 2 AM)?
              </h3>
              <p className="text-[#FAF7F2]/70 text-xs font-light font-sans">
                Explore midnight Wagyu sliders, truffle fries, signature nightcap cocktails, and beachside shisha.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#141312] bg-[#C5A880] hover:bg-white font-semibold px-5 py-2.5 rounded-full transition-all shrink-0 cursor-pointer shadow-md">
            <span>Late Night Page</span>
            <ArrowRight size={13} />
          </button>
        </motion.div>

        {/* Category Pills / Jump Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 mb-8 px-1">
          {categoryPills.map((pill) => (
            <button
              key={pill.id}
              onClick={() => setActiveCategory(pill.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer shrink-0 ${
                activeCategory === pill.id
                  ? 'bg-[#23211E] text-[#F7F4EF] shadow-md scale-105 border border-[#A38B68]'
                  : 'bg-white text-[#555047] hover:bg-[#EFEAE2] hover:text-[#23211E] border border-[#A38B68]/20'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div className="max-w-md mx-auto mb-14 relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A38B68]" />
          <input
            type="text"
            placeholder="Search food or cocktail items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#A38B68]/30 text-[#23211E] text-xs tracking-wider placeholder-[#6E6A63] focus:outline-none focus:border-[#23211E] transition-all shadow-sm font-sans"
          />
        </div>

        {/* Sections & Items Grid (Nomad Style) */}
        {filteredSections.length === 0 ? (
          <div className="text-center py-16 bg-white/60 rounded-2xl border border-[#A38B68]/20 max-w-md mx-auto">
            <p className="text-sm text-[#6E6A63] font-sans font-light">No menu items found matching "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-xs text-[#A38B68] font-semibold uppercase tracking-wider underline cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredSections.map((section) => (
              <div key={section.id} className="space-y-8">
                {/* Section Category Title with Dashes */}
                <div className="text-center">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#23211E] font-light tracking-wide inline-flex items-center gap-3">
                    <span className="w-8 sm:w-12 h-[1px] bg-[#A38B68]/40 inline-block" />
                    <span>{section.title}</span>
                    <span className="w-8 sm:w-12 h-[1px] bg-[#A38B68]/40 inline-block" />
                  </h2>
                </div>

                {/* Food Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {section.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                      className="glass-card rounded-2xl overflow-hidden border border-[#A38B68]/20 hover:border-[#A38B68]/50 hover:shadow-xl transition-all duration-500 flex flex-col justify-between group bg-white"
                    >
                      <div>
                        {/* Food Image */}
                        <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#EFEAE2]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = '/images/dining.png';
                            }}
                          />
                          <span className="absolute top-3 right-3 text-[11px] font-semibold font-serif bg-[#23211E]/90 text-[#F7F4EF] px-3 py-1 rounded-full backdrop-blur-md border border-[#A38B68]/40 shadow-md">
                            {item.price}
                          </span>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 sm:p-6">
                          <h3 className="font-serif text-lg sm:text-xl font-medium text-[#23211E] mb-2 group-hover:text-[#A38B68] transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Card Bottom Accent Line */}
                      <div className="px-6 pb-5 pt-0 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-semibold font-sans">
                          Elia Gastronomy
                        </span>
                        <span className="text-xs text-[#A38B68] font-serif font-bold">
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
    </div>
  );
}
