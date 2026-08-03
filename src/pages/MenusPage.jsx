import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Moon } from 'lucide-react';

export default function MenusPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const row1Categories = [
    { id: 'starters', label: 'Finger Bites & Starters' },
    { id: 'salads', label: 'Salads' },
    { id: 'mains', label: 'Mains, Pasta & Steak' },
    { id: 'thai', label: 'Local Thai Dishes' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const row2Categories = [
    { id: 'champagne', label: 'Champagne & Prosecco' },
    { id: 'wine', label: 'Red, White & Rosé Wine' },
    { id: 'signature-cocktails', label: 'Signature Cocktails' },
    { id: 'classic-cocktails', label: 'Classic Cocktails' },
    { id: 'spirits', label: 'Spirits, Aperitifs & Liqueurs' },
    { id: 'beers', label: 'Beers' },
  ];

  const row3Categories = [
    { id: 'soft-drinks', label: 'Soft Drinks, Juices, Smoothies & Other Drinks' },
  ];

  const allCategoryPills = [
    { id: 'all', label: 'All Menus' },
    ...row1Categories,
    ...row2Categories,
    ...row3Categories,
  ];

  const menuSections = [
    {
      id: 'starters',
      title: 'Finger Bites & Starters',
      items: [
        {
          name: 'Shrimp Dynamite',
          desc: 'Crispy shrimp tossed in a creamy, spicy sauce with a touch of sweetness and heat.',
          price: '฿400',
          image: '/images/dining.png',
        },
        {
          name: 'Fried Calamari and Garlic Aioli',
          desc: 'Golden-fried calamari served with a zesty house-made garlic aioli.',
          price: '฿450',
          image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Korean BBQ Wings with Sesame-Cucumber Salad',
          desc: 'Sticky, smoky-sweet wings paired with a refreshing sesame-cucumber side salad.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'BBQ Corn Ribs',
          desc: 'Char-grilled corn ribs brushed with smoky BBQ sauce—crunchy, juicy, and made for snacking.',
          price: '฿320',
          image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Steamed Edamame with Salt',
          desc: 'Lightly steamed edamame pods sprinkled with sea salt—simple, healthy, and addictive.',
          price: '฿290',
          image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Japanese Fried Chicken (Karaage Chicken)',
          desc: 'Crispy, golden-brown bite-sized chicken—served with a side of tangy dipping sauce.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spicy Salmon Tartare with Rice Nori',
          desc: 'Diced salmon in spicy dressing, served on crispy rice and wrapped in crunchy seaweed.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'French Fries (v)',
          desc: 'Classic crispy fries, golden and salted—perfectly snackable on the side.',
          price: '฿290',
          image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Chicken Tacos',
          desc: 'Two soft tacos with spiced chicken, topped with slaw and sauce.',
          price: '฿480',
          image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pulled Beef Tacos',
          desc: 'Two soft tortillas filled with tender pulled beef, tangy slaw, and chipotle mayo for a bold, flavorful bite.',
          price: '฿690',
          image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'salads',
      title: 'Salads',
      items: [
        {
          name: 'Greek Salad (v)',
          desc: 'A mix of cucumber, tomatoes, olives, and feta cheese. Add chicken for extra protein.',
          price: '฿420 / 470',
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Grilled Chicken Caesar Salad',
          desc: 'Grilled chicken over romaine lettuce with Caesar dressing, croutons, and parmesan.',
          price: '฿530',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Watermelon and Feta Salad (v)',
          desc: 'Juicy watermelon cubes tossed with creamy feta, fresh mint, and a splash of lime for a refreshing summer bite.',
          price: '฿490',
          image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a85?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Elia Crab Salad with Miso Mayonnaise',
          desc: 'Fresh crab meat tossed with miso mayonnaise, served on a bed of crisp greens.',
          price: '฿720',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'mains',
      title: 'Mains, Pasta & Steak',
      subtitle: 'All steak dishes are served with a single side and sauce (Truffle Demi-Glaze / Chimichurri / Peppercorn / Nam Jim Jeaw)',
      items: [
        {
          name: 'Nomad Beef Burger with French Fries',
          desc: 'Juicy beef stacked with toppings, served with crispy golden fries.',
          price: '฿590',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Beef Sliders and French Fries',
          desc: 'A trio of Beef Sliders, featuring seasoned Beef patties in a golden bun, accompanied by a side of fries.',
          price: '฿590',
          image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Sliced Angus Steak with Ponzu Dressing',
          desc: 'Tender slices of aged Angus beef drizzled with citrusy ponzu.',
          price: '฿1290',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Angus 270-Day Grain-Fed Australian Ribeye (300g)',
          desc: 'Rich, marbled ribeye steak with deep flavor, paired with your choice of side and signature sauce.',
          price: '฿2590',
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spaghetti alle Vongole',
          desc: 'Classic Italian spaghetti with fresh clams, garlic, white wine, and a hint of chili.',
          price: '฿590',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Spaghetti Aglio e Olio (v)',
          desc: 'Classic Italian pasta tossed with garlic, extra-virgin olive oil, chili, and parsley. Add shrimp.',
          price: '฿590',
          image: 'https://images.unsplash.com/photo-1621996346565-e3d5d628830f?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Truffle Linguini (v)',
          desc: 'Silky linguine tossed in a rich, creamy truffle sauce for an indulgent vegetarian treat.',
          price: '฿790',
          image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Traditional Bolognese',
          desc: 'Slow-cooked Italian beef ragù with tomato, herbs, and parmesan, served over perfectly al dente pasta of choice.',
          price: '฿590',
          image: 'https://images.unsplash.com/photo-1621996346565-e3d5d628830f?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Traditional Carbonara (p)',
          desc: 'Creamy Roman-style spaghetti with crispy pancetta, egg yolk, pecorino, and cracked black pepper.',
          price: '฿590',
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'thai',
      title: 'Local Thai Dishes',
      items: [
        {
          name: 'Tom Yum Goong (Shrimp)',
          desc: 'A spicy and sour soup with shrimp, bursting with lemongrass and kaffir lime flavors.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Tom Kha (Chicken)',
          desc: 'A Thai soup featuring tender chicken, galangal, lemongrass, and coconut milk, harmoniously blended with aromatic herbs and spices.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pineapple Fried Rice',
          desc: 'A Thailand favorite, with a choice of succulent seafood, tender chicken, or fresh vegetables, that contains nuts.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pad Thai',
          desc: 'Stir-fried rice noodles with vegetables, chicken, shrimp, or seafood, garnished with crushed peanuts and lime, and contains nuts.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Thai Green Chicken Curry with Rice',
          desc: 'Creamy green curry with tender chicken, Thai eggplant, and basil, served with steamed rice.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Glass Noodle Salad with Shrimp',
          desc: 'A refreshing and spicy Thai salad with glass noodles, shrimp, herbs, and lime-chili dressing, and contain nuts.',
          price: '฿420',
          image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Thai Fried Rice',
          desc: 'Classic Thai fried rice with your choice of protein (Chicken, Pork, Shrimp, Seafood) and crisp vegetables.',
          price: '฿330',
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Pad Kra Pao',
          desc: 'Spicy Thai stir-fry with holy basil, garlic, and chili, served with rice and your choice of meat (Pork, Chicken, Beef).',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        {
          name: 'Nutella & Hazelnut Brownie (add Ice Cream) (v)(n)',
          desc: 'Rich chocolate brownie with a Nutella swirl, served with ice cream for a decadent treat.',
          price: '฿320 / 480',
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Tiramisu (v)',
          desc: 'A classic Italian dessert layered with mascarpone and espresso-soaked ladyfingers.',
          price: '฿390',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Ice Cream (v)',
          desc: 'Select from Madagascar Vanilla Bean, Salted Caramel, Dark Belgian Chocolate (72%), or Dark Chocolate & Peanut Butter',
          price: '฿160',
          image: 'https://images.unsplash.com/photo-1567206563064-6f60f4078b57?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Mango Sticky Rice',
          desc: 'A Thai classic featuring sweet mango slices paired with sticky rice and coconut cream.',
          price: '฿350',
          image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'champagne',
      title: 'Champagne & Prosecco',
      items: [
        {
          name: 'Moët & Chandon Impérial Brut',
          desc: 'Iconic French champagne with vibrant green apple, citrus notes, and crisp minerality.',
          price: '฿5,800',
          image: 'https://images.unsplash.com/photo-1594488669399-bfb7e2894562?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Veuve Clicquot Yellow Label Brut',
          desc: 'Pinot Noir dominant champagne with aromas of peach, plum, and subtle vanilla brioche.',
          price: '฿6,500',
          image: 'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Prosecco Superiore DOCG',
          desc: 'Crisp Italian sparkling wine with delicate persistent bubbles and refreshing green apple notes.',
          price: '฿2,400',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Dom Pérignon Vintage',
          desc: 'Prestige champagne with complex aromas of candied fruit, brioche, roasted almonds, and citrus.',
          price: '฿18,500',
          image: 'https://images.unsplash.com/photo-1594488669399-bfb7e2894562?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'wine',
      title: 'Red, White & Rosé Wine',
      items: [
        {
          name: 'Whispering Angel Rosé (Provence)',
          desc: 'Premium French rosé with delicate aromas of red berries, fresh peach, and floral elegance.',
          price: '฿3,200',
          image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Marlborough Sauvignon Blanc (New Zealand)',
          desc: 'Vibrant white wine with intense tropical passionfruit, grapefruit, and fresh lime notes.',
          price: '฿2,600',
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Chianti Classico DOCG (Tuscany)',
          desc: 'Refined Italian red with ripe cherry, wild rosemary, and toasted oak complexities.',
          price: '฿2,800',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Barossa Valley Shiraz (Australia)',
          desc: 'Full-bodied red wine packed with ripe blackberry, dark chocolate, and spicy oak character.',
          price: '฿3,100',
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'signature-cocktails',
      title: 'Signature Cocktails',
      items: [
        {
          name: 'Elia Sunset Breeze (Signature)',
          desc: 'Chalong Bay Thai Rum, fresh passionfruit, coconut cream, lime, and roasted pineapple rim.',
          price: '฿380',
          image: '/images/cocktail.png',
        },
        {
          name: 'Smoked Mezcalita',
          desc: 'Montelobos Mezcal, Cointreau, fresh lime juice, agave nectar, and black volcanic salt rim.',
          price: '฿420',
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Phuket Passion Spritz',
          desc: 'Aperol, Prosecco, fresh passionfruit, soda water, and fresh mint leaf.',
          price: '฿360',
          image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Coconut Lychee Martini',
          desc: 'Tanqueray Gin, lychee liqueur, fresh coconut water, and a dash of rose blossom.',
          price: '฿360',
          image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'classic-cocktails',
      title: 'Classic Cocktails',
      items: [
        {
          name: 'Classic Mojito',
          desc: 'White rum, fresh muddled mint leaves, fresh lime juice, cane sugar, and chilled soda water.',
          price: '฿340',
          image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Aperol Spritz',
          desc: 'Aperol, Prosecco, soda water, and fresh orange slice.',
          price: '฿360',
          image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Espresso Martini',
          desc: 'Premium vodka, freshly brewed espresso, Kahlúa coffee liqueur, and vanilla bean syrup.',
          price: '฿380',
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Negroni',
          desc: 'Campari, sweet vermouth, Tanqueray London Dry Gin, and charred orange wheel.',
          price: '฿380',
          image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'spirits',
      title: 'Spirits, Aperitifs & Liqueurs',
      items: [
        {
          name: 'Macallan 12 Years Double Cask',
          desc: 'Single malt Scotch whisky with balanced honeyed wood, citrus, and ginger character.',
          price: '฿480',
          image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Hennessy VSOP Cognac',
          desc: 'Smooth French cognac with harmonious aromas of candied fruit and subtle vanilla.',
          price: '฿520',
          image: 'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Tanqueray No. TEN Gin',
          desc: 'Small batch premium gin distilled with whole fresh citrus fruits and hand-selected botanicals.',
          price: '฿380',
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Patrón Añejo Tequila',
          desc: 'Delicate blend of uniquely aged tequilas with warm notes of oak, vanilla, and roasted agave.',
          price: '฿450',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'beers',
      title: 'Beers',
      items: [
        {
          name: 'Singha Thai Premium Beer',
          desc: 'Crisp 100% barley malt Thai lager with a light golden hue and clean bitter finish.',
          price: '฿160',
          image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Chang Cold Brew Lager',
          desc: 'Smooth Thai lager brewed using sub-zero cold brew technology.',
          price: '฿160',
          image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Corona Extra',
          desc: 'Classic Mexican pale lager served chilled with a fresh lime wedge.',
          price: '฿220',
          image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Hoegaarden White Beer',
          desc: 'Refreshing Belgian wheat beer with orange peel and coriander spice aromas.',
          price: '฿260',
          image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      id: 'soft-drinks',
      title: 'Soft Drinks, Juices, Smoothies & Other Drinks',
      items: [
        {
          name: 'Fresh Young Coconut',
          desc: 'Chilled whole organic Thai coconut with sweet coconut water and tender meat.',
          price: '฿180',
          image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Mango Passionfruit Smoothie',
          desc: 'Blended sweet Thai mango, passionfruit, wild honey, and Greek yogurt.',
          price: '฿220',
          image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'Freshly Squeezed Orange Juice',
          desc: 'Pure 100% natural orange juice served chilled over ice.',
          price: '฿160',
          image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80',
        },
        {
          name: 'San Pellegrino Sparkling Water (750ml)',
          desc: 'Classic Italian sparkling mineral water.',
          price: '฿240',
          image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=600&auto=format&fit=crop&q=80',
        },
      ],
    },
  ];

  // Food sections shown by default on first load (when activeCategory === 'all')
  const foodSectionIds = ['starters', 'salads', 'mains', 'thai', 'desserts'];

  // Filter sections based on active category & search query
  const filteredSections = menuSections
    .filter(section => {
      if (activeCategory === 'all') {
        // Hide drink categories starting from Champagne & Prosecco by default on initial page load
        return foodSectionIds.includes(section.id);
      }
      return section.id === activeCategory;
    })
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

        {/* Category Jump Navigation Layout matching Screenshot (3 Rows) */}
        <div className="flex flex-col items-center gap-2 mb-6 text-xs sm:text-sm font-sans text-[#7A756C]">
          {/* Row 1: Food Categories */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {row1Categories.map((pill, idx) => (
              <div key={pill.id} className="flex items-center gap-3">
                <button
                  onClick={() => setActiveCategory(pill.id)}
                  className={`transition-colors cursor-pointer border-b ${
                    activeCategory === pill.id
                      ? 'text-[#23211E] font-semibold border-[#23211E]'
                      : 'border-transparent hover:text-[#23211E] hover:border-[#23211E]/40'
                  }`}
                >
                  {pill.label}
                </button>
                {idx < row1Categories.length - 1 && <span className="text-[#C5BEB2]">•</span>}
              </div>
            ))}
          </div>

          {/* Row 2: Wine & Drinks Categories */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {row2Categories.map((pill, idx) => (
              <div key={pill.id} className="flex items-center gap-3">
                <button
                  onClick={() => setActiveCategory(pill.id)}
                  className={`transition-colors cursor-pointer border-b ${
                    activeCategory === pill.id
                      ? 'text-[#23211E] font-semibold border-[#23211E]'
                      : 'border-transparent hover:text-[#23211E] hover:border-[#23211E]/40'
                  }`}
                >
                  {pill.label}
                </button>
                {idx < row2Categories.length - 1 && <span className="text-[#C5BEB2]">•</span>}
              </div>
            ))}
          </div>

          {/* Row 3: Soft Drinks & Smoothies */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {row3Categories.map((pill) => (
              <button
                key={pill.id}
                onClick={() => setActiveCategory(pill.id)}
                className={`transition-colors cursor-pointer border-b ${
                  activeCategory === pill.id
                    ? 'text-[#23211E] font-semibold border-[#23211E]'
                    : 'border-transparent hover:text-[#23211E] hover:border-[#23211E]/40'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* View All Button */}
          {activeCategory !== 'all' && (
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-1 text-[11px] uppercase tracking-wider text-[#A38B68] font-semibold hover:underline cursor-pointer"
            >
              Show All Menu Categories
            </button>
          )}
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
                  {section.subtitle && (
                    <p className="text-[11px] sm:text-xs text-[#7A756C] font-light font-sans mt-2 max-w-2xl mx-auto leading-relaxed">
                      {section.subtitle}
                    </p>
                  )}
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
                      className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E5DEC9] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-center"
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
                        <p className="text-[10px] sm:text-xs text-[#77736C] font-light leading-relaxed mb-2 font-sans">
                          {item.desc}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="pt-2 border-t border-[#F0EBE1] flex items-center justify-center">
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

    </div>
  );
}
