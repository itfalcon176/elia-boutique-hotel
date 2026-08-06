import { useState, useEffect } from 'react';
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

  const handleCategorySelect = (pillId, pillLabel) => {
    setActiveCategory(pillId);
    if (pillId === 'all') {
      window.history.pushState(null, '', '/menus');
    } else {
      const label = pillLabel || allCategoryPills.find((p) => p.id === pillId)?.label || pillId;
      window.history.pushState(null, '', `/menus#${label}`);
    }
  };

  useEffect(() => {
    const syncFromHash = () => {
      const rawHash = window.location.hash ? window.location.hash.substring(1) : '';
      if (!rawHash) return;

      const decodedHash = decodeURIComponent(rawHash).trim().toLowerCase();

      const matchedPill = allCategoryPills.find(
        (pill) =>
          pill.label.toLowerCase() === decodedHash ||
          pill.id.toLowerCase() === decodedHash ||
          encodeURIComponent(pill.label).toLowerCase() === decodedHash
      );

      if (matchedPill) {
        setActiveCategory(matchedPill.id);
      }
    };

    syncFromHash();

    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);

    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, []);

  const menuSections = [
    {
      id: 'starters',
      title: 'Finger Bites & Starters',
      items: [
        {
          name: 'Shrimp Dynamite',
          desc: 'Crispy shrimp tossed in a creamy, spicy sauce with a touch of sweetness and heat.',
          price: '฿400',
          image: '/menus-images/shrimp_dynamite.jpg',
        },
        {
          name: 'Fried Calamari and Garlic Aioli',
          desc: 'Golden-fried calamari served with a zesty house-made garlic aioli.',
          price: '฿450',
          image: '/menus-images/Fried+Calamari+and+Garlic+Aioli.jpg',
        },
        {
          name: 'Korean BBQ Wings with Sesame-Cucumber Salad',
          desc: 'Sticky, smoky-sweet wings paired with a refreshing sesame-cucumber side salad.',
          price: '฿390',
          image: '/menus-images/Korean+Style+BBQ+Wings.jpg',
        },
        {
          name: 'BBQ Corn Ribs',
          desc: 'Char-grilled corn ribs brushed with smoky BBQ sauce—crunchy, juicy, and made for snacking.',
          price: '฿320',
          image: '/menus-images/corn_ribs.png',
        },
        {
          name: 'Steamed Edamame with Salt',
          desc: 'Lightly steamed edamame pods sprinkled with sea salt—simple, healthy, and addictive.',
          price: '฿290',
          image: '/menus-images/edamame.png',
        },
        {
          name: 'Japanese Fried Chicken (Karaage Chicken)',
          desc: 'Crispy, golden-brown bite-sized chicken—served with a side of tangy dipping sauce.',
          price: '฿390',
          image: '/menus-images/karaage.png',
        },
        {
          name: 'Spicy Salmon Tartare with Rice Nori',
          desc: 'Diced salmon in spicy dressing, served on crispy rice and wrapped in crunchy seaweed.',
          price: '฿390',
          image: '/menus-images/Spicy+Salmon+Tartare.jpg',
        },
        {
          name: 'French Fries (v)',
          desc: 'Classic crispy fries, golden and salted—perfectly snackable on the side.',
          price: '฿290',
          image: '/menus-images/French+Fries.jpg',
        },
        {
          name: 'Chicken Tacos',
          desc: 'Two soft tacos with spiced chicken, topped with slaw and sauce.',
          price: '฿480',
          image: '/menus-images/tacos.png',
        },
        {
          name: 'Pulled Beef Tacos',
          desc: 'Two soft tortillas filled with tender pulled beef, tangy slaw, and chipotle mayo for a bold, flavorful bite.',
          price: '฿690',
          image: '/menus-images/Tacos.jpg',
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
          image: '/menus-images/Greek+Salad.jpg',
        },
        {
          name: 'Grilled Chicken Caesar Salad',
          desc: 'Grilled chicken over romaine lettuce with Caesar dressing, croutons, and parmesan.',
          price: '฿530',
          image: '/menus-images/Fried+Chicken+Caesar+Salad.jpg',
        },
        {
          name: 'Watermelon and Feta Salad (v)',
          desc: 'Juicy watermelon cubes tossed with creamy feta, fresh mint, and a splash of lime for a refreshing summer bite.',
          price: '฿490',
          image: '/menus-images/Watermelon+and+Feta+Salad+%28v%29.jpg.jpeg',
        },
        {
          name: 'Elia Crab Salad with Miso Mayonnaise',
          desc: 'Fresh crab meat tossed with miso mayonnaise, served on a bed of crisp greens.',
          price: '฿720',
          image: '/menus-images/Nomad+Crab+Salad.jpg',
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
          image: '/menus-images/beef_burger.png',
        },
        {
          name: 'Beef Sliders and French Fries',
          desc: 'A trio of Beef Sliders, featuring seasoned Beef patties in a golden bun, accompanied by a side of fries.',
          price: '฿590',
          image: '/menus-images/Beef+Sliders+and+Fries.jpg',
        },
        {
          name: 'Sliced Angus Steak with Ponzu Dressing',
          desc: 'Tender slices of aged Angus beef drizzled with citrusy ponzu.',
          price: '฿1290',
          image: '/menus-images/Sliced+Angus+Steak.jpg',
        },
        {
          name: 'Angus 270-Day Grain-Fed Australian Ribeye (300g)',
          desc: 'Rich, marbled ribeye steak with deep flavor, paired with your choice of side and signature sauce.',
          price: '฿2590',
          image: '/menus-images/ribeye.png',
        },
        {
          name: 'Spaghetti alle Vongole',
          desc: 'Classic Italian spaghetti with fresh clams, garlic, white wine, and a hint of chili.',
          price: '฿590',
          image: '/menus-images/Spaghetti+alle+Vongole.jpg',
        },
        {
          name: 'Spaghetti Aglio e Olio (v)',
          desc: 'Classic Italian pasta tossed with garlic, extra-virgin olive oil, chili, and parsley. Add shrimp.',
          price: '฿590',
          image: '/menus-images/Spaghetti+Aglio+e+Olio.jpg.jpeg',
        },
        {
          name: 'Truffle Linguini (v)',
          desc: 'Silky linguine tossed in a rich, creamy truffle sauce for an indulgent vegetarian treat.',
          price: '฿790',
          image: '/menus-images/Truffle+Linguini.jpg',
        },
        {
          name: 'Traditional Bolognese',
          desc: 'Slow-cooked Italian beef ragù with tomato, herbs, and parmesan, served over perfectly al dente pasta of choice.',
          price: '฿590',
          image: '/menus-images/Bolognese.jpg',
        },
        {
          name: 'Traditional Carbonara (p)',
          desc: 'Creamy Roman-style spaghetti with crispy pancetta, egg yolk, pecorino, and cracked black pepper.',
          price: '฿590',
          image: '/menus-images/Traditional+Carbonara.jpg',
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
          image: '/menus-images/Tom+Yum+Goong.jpg',
        },
        {
          name: 'Tom Kha (Chicken)',
          desc: 'A Thai soup featuring tender chicken, galangal, lemongrass, and coconut milk, harmoniously blended with aromatic herbs and spices.',
          price: '฿390',
          image: '/menus-images/Tom+Yum+Kha.jpg',
        },
        {
          name: 'Pineapple Fried Rice',
          desc: 'A Thailand favorite, with a choice of succulent seafood, tender chicken, or fresh vegetables, that contains nuts.',
          price: '฿390',
          image: '/menus-images/Pineapple+Fried+Rice.jpg',
        },
        {
          name: 'Pad Thai',
          desc: 'Stir-fried rice noodles with vegetables, chicken, shrimp, or seafood, garnished with crushed peanuts and lime, and contains nuts.',
          price: '฿390',
          image: '/menus-images/Pad+Thai.jpg',
        },
        {
          name: 'Thai Green Chicken Curry with Rice',
          desc: 'Creamy green curry with tender chicken, Thai eggplant, and basil, served with steamed rice.',
          price: '฿390',
          image: '/menus-images/Thai+Green+Chicken+Curry.jpg',
        },
        {
          name: 'Glass Noodle Salad with Shrimp',
          desc: 'A refreshing and spicy Thai salad with glass noodles, shrimp, herbs, and lime-chili dressing, and contain nuts.',
          price: '฿420',
          image: '/menus-images/Glass+Noodle+Salad.jpg',
        },
        {
          name: 'Thai Fried Rice',
          desc: 'Classic Thai fried rice with your choice of protein (Chicken, Pork, Shrimp, Seafood) and crisp vegetables.',
          price: '฿330',
          image: '/menus-images/Thai+Fried+Rice.jpg',
        },
        {
          name: 'Pad Kra Pao',
          desc: 'Spicy Thai stir-fry with holy basil, garlic, and chili, served with rice and your choice of meat (Pork, Chicken, Beef).',
          price: '฿390',
          image: '/menus-images/Pad+Kra+Pao.jpg',
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
          image: '/menus-images/Brownie.jpg',
        },
        {
          name: 'Tiramisu (v)',
          desc: 'A classic Italian dessert layered with mascarpone and espresso-soaked ladyfingers.',
          price: '฿390',
          image: '/menus-images/Tiramisu.jpg',
        },
        {
          name: 'Ice Cream (v)',
          desc: 'Select from Madagascar Vanilla Bean, Salted Caramel, Dark Belgian Chocolate (72%), or Dark Chocolate & Peanut Butter',
          price: '฿160',
          image: '/menus-images/Ice+Cream.jpg.jpeg',
        },
        {
          name: 'Mango Sticky Rice',
          desc: 'A Thai classic featuring sweet mango slices paired with sticky rice and coconut cream.',
          price: '฿350',
          image: '/menus-images/Mango+Sticky+Rice.jpg',
        },
      ],
    },
    {
      id: 'champagne',
      title: 'Champagne & Prosecco',
      items: [
        {
          name: 'Château de Bligny Grande Réserve Brut',
          desc: '',
          price: '฿3,280',
        },
        {
          name: 'Nicolas Feuillatte Brut Réserve',
          desc: '',
          price: '฿3,790',
        },
        {
          name: 'Nicolas Feuillatte Brut Rosé',
          desc: '',
          price: '฿4,390',
        },
        {
          name: 'Frerejean Frères Brut Premier Cru',
          desc: '',
          price: '฿4,590',
        },
        {
          name: 'Moët & Chandon Impérial Brut',
          desc: '',
          price: '฿4,650',
        },
        {
          name: 'Veuve Clicquot Brut (Carte Jaune)',
          desc: '',
          price: '฿4,820',
        },
        {
          name: 'Nicolas Feuillatte Blanc de Blancs Millésimé',
          desc: '',
          price: '฿5,080',
        },
        {
          name: 'Moët & Chandon Impérial Brut Rosé',
          desc: '',
          price: '฿6,020',
        },
        {
          name: 'Frerejean Frères Rosé Premier Cru',
          desc: '',
          price: '฿7,370',
        },
        {
          name: 'Fleur de Miraval Petite Fleur Rosé',
          desc: '',
          price: '฿8,170',
        },
        {
          name: 'Moët & Chandon Impérial Brut (Magnum)',
          desc: '',
          price: '฿10,290',
        },
        {
          name: 'Ruinart Blanc de Blancs Brut',
          desc: '',
          price: '฿10,290',
        },
        {
          name: 'Ruinart Brut Rosé',
          desc: '',
          price: '฿10,600',
        },
        {
          name: 'Veuve Clicquot Brut (Magnum)',
          desc: '',
          price: '฿11,340',
        },
        {
          name: 'Nicolas Feuillatte Palmes d’Or',
          desc: '',
          price: '฿13,380',
        },
        {
          name: 'Dom Pérignon Brut',
          desc: '',
          price: '฿19,950',
        },
        {
          name: 'Louis Roederer Cristal Brut (Millésimé)',
          desc: '',
          price: '฿30,450',
        },
        {
          name: 'Fleur de Miraval Petite Fleur Rosé Exclusive',
          desc: '',
          price: '฿33,440',
        },
        {
          name: 'Dom Pérignon Brut Rosé',
          desc: '',
          price: '฿35,590',
        },
        {
          name: 'Veuve Clicquot Brut (Double Magnum)',
          desc: '',
          price: '฿36,750',
        },
        {
          name: 'Villa Sandi Il Fresco Prosecco DOC Rosé Millesimato Brut, 2023, 11%, Italy',
          desc: '',
          price: '฿280 / ฿1,240',
        },
        {
          name: 'Villa Sandi Il Fresco Prosecco Biologico DOC – Organic, NV, 11%, Italy',
          desc: '',
          price: '฿280 / ฿1,240',
        },
      ],
    },
    {
      id: 'wine',
      title: 'Red, White & Rosé Wine',
      subcategories: [
        {
          title: 'Red Wine',
          items: [
            {
              name: 'Monte Antico Toscana Rosso IGT, 2019, 13%, Italy',
              desc: 'Rich, red fruit and oaky',
              price: '฿300 / ฿1,130',
            },
            {
              name: 'Zuccardi Serie A Malbec (Valle de Uco), 2023, 13.5%, Argentina',
              desc: 'Bold, black fruit and coffee',
              price: '฿310 / ฿1,330',
            },
            {
              name: 'Sileni Estates Pinot Noir (Hawke’s Bay), 2022, 12%, New Zealand',
              desc: 'Smooth, strawberry and earthy',
              price: '฿320 / ฿1,380',
            },
            {
              name: 'Vintae Clea Ribera del Duero Crianza, 2021, 14%, Spain',
              desc: 'Round, vanilla and blackberry',
              price: '฿380 / ฿1,720',
            },
            {
              name: 'Marqués de Riscal Reserva (Rioja DOCa), 2019, 14%, Spain',
              desc: 'Spicy, cedar and earthy',
              price: '฿2,110',
            },
            {
              name: 'San Marzano Collezione Cinquanta, NV, 14.5%, Italy',
              desc: 'Intense, chocolate and blackcurrant',
              price: '฿2,300',
            },
            {
              name: 'Bannock Brae Pinot Noir ‘Crawford’s Block’, 2019, 12%, New Zealand',
              desc: 'Fresh, cherry and earthy',
              price: '฿2,390',
            },
            {
              name: 'J. de Villebois Sancerre Rouge, 2022, 12.8%, France',
              desc: 'Subtle, raspberry and mineral',
              price: '฿2,430',
            },
            {
              name: 'Grattamacco Bolgheri Rosso DOC, 2021, 13.5%, Italy',
              desc: 'Smooth, black fruit and oaky',
              price: '฿2,840',
            },
            {
              name: 'Soprasasso Amarone della Valpolicella DOCG, 2020, 15%, Italy',
              desc: 'Well-balanced, chocolate and blackcurrant',
              price: '฿2,950',
            },
            {
              name: 'Louis Jadot Santenay ‘Clos de Malte’, 2017, 13.5%, France',
              desc: 'Complex, cherry and earthy',
              price: '฿3,000',
            },
            {
              name: 'Le Seuil de Mazeyres Pomerol AOC, 2019, 12.5%, France',
              desc: 'Opulent, vanilla and raspberry',
              price: '฿3,250',
            },
            {
              name: 'Enzo Bartoli Barolo ‘Bussia’ DOCG, 2016, 14%, Italy',
              desc: 'Smooth, cherry and earthy',
              price: '฿3,880',
            },
            {
              name: 'LV Pinot Noir (Marlborough), 2019, 13.5%, New Zealand',
              desc: 'Bright and silky, red cherry and raspberry',
              price: '฿4,290',
            },
            {
              name: 'Henschke ‘Keyneton Euphonium’ (Barossa Valley), 2019, 14%, Australia',
              desc: 'Rich, cassis and oaky',
              price: '฿4,690',
            },
            {
              name: 'San Giorgio Brunello di Montalcino DOCG ‘Ugolforte’, 2019, 13.5%, Italy',
              desc: 'Fleshy, cherry and smoky',
              price: '฿5,070',
            },
            {
              name: 'Domaine François Merlin Côte-Rôtie, 2020, 14%, France',
              desc: 'Textured, blackberry and earthy',
              price: '฿5,090',
            },
            {
              name: 'Louis Jadot Pommard, 2021, 13%, France',
              desc: 'Refined, earthy and strawberry',
              price: '฿6,160',
            },
            {
              name: 'Rockford ‘Basket Press’ Shiraz, NV, 13.5%, Australia',
              desc: 'Complex, oak and plum',
              price: '฿6,510',
            },
            {
              name: 'DBR (Lafite) Blason de L’Évangile Pomerol AOC, NV, 14%, France',
              desc: 'Refined, blueberry and cedar',
              price: '฿7,990',
            },
            {
              name: 'Château Durfort-Vivens Margaux 2ème Grand Cru Classé, 2015, France',
              desc: 'Complex, black fruit and earthy',
              price: '฿8,400',
            },
            {
              name: 'Don Maximiano Cabernet Sauvignon, 2012, 14%, Chile',
              desc: 'Generous, red berry and chocolate',
              price: '฿8,500',
            },
            {
              name: 'Marqués de Riscal ‘Barón de Chirel’ (Rioja DOCa), NV, 14%, Spain',
              desc: 'Delicate, black cherry and floral',
              price: '฿8,960',
            },
            {
              name: 'Yalumba ‘The Octavius’ Old Vine Shiraz (Barossa Valley), 2016, 14%, Australia',
              desc: 'Spicy, fruity and oaky',
              price: '฿10,230',
            },
            {
              name: 'Bertinga ‘Volta di Bertinga’ Toscana IGT, 2016, 14%, Italy',
              desc: 'Captivating, black olive and leather',
              price: '฿10,530',
            },
            {
              name: 'Luis Pato ‘Quinta do Ribeirinho Pé Franco’ Bairrada DOC, 2019, 13.5%, Portugal',
              desc: 'Bold, violet and pine',
              price: '฿12,450',
            },
            {
              name: 'Château Belair (Dubois-Challon) Saint-Émilion 1er Grand Cru Classé, 2005, 14.5%, France',
              desc: 'Tannic, blackcurrant and coffee',
              price: '฿12,650',
            },
            {
              name: 'Château de Beaucastel Châteauneuf-du-Pape Rouge, 2021, 14%, France',
              desc: 'Mellow, leather and blackberry',
              price: '฿15,120',
            },
            {
              name: 'Poggio di Sotto Brunello di Montalcino DOCG, 2019, 14%, Italy',
              desc: 'Elegant, earthy and vanilla',
              price: '฿22,680',
            },
            {
              name: 'ADAMVS ‘DÁMVS’ Cabernet Sauvignon (Howell Mountain AVA), 2019, 14%, USA',
              desc: 'Velvety, dark fruit and oaky',
              price: '฿36,290',
            },
          ],
        },
        {
          title: 'White Wine',
          items: [
            {
              name: 'Sileni Estates Sauvignon Blanc (Marlborough), 2023, 13%, New Zealand',
              desc: 'Refreshing, tropical fruit',
              price: '฿300 / ฿1,280',
            },
            {
              name: 'Zuccardi Serie A Chardonnay–Viognier (Tupungato, Uco Valley), 2023, 14%, Argentina',
              desc: 'Full-flavored, tropical and floral',
              price: '฿320 / ฿1,330',
            },
            {
              name: 'Peter Zemmer Pinot Grigio (Alto Adige DOC), 2022, 13.5%, Italy',
              desc: 'Harmonious, pear and citrus',
              price: '฿1,520',
            },
            {
              name: 'Marquis de Pennautier ‘Terroirs d’Altitude’ Chardonnay, 2022, 13%, France',
              desc: 'Exotic fruits, vanilla and honey; mineral and fresh',
              price: '฿1,720',
            },
            {
              name: 'J. de Villebois Sancerre, 2023, 12.5%, France',
              desc: 'Delicate, green apple and citrus',
              price: '฿2,430',
            },
            {
              name: 'Louis Jadot Pouilly-Fuissé, 2023, 13%, France',
              desc: 'Powerful, orchard fruit and vanilla',
              price: '฿3,300',
            },
            {
              name: 'Cloudy Bay Sauvignon Blanc (Marlborough), 2024, 13%, New Zealand',
              desc: 'Vibrant, tropical and herbal',
              price: '฿3,320',
            },
            {
              name: 'LV Chardonnay (Mendoza Clone, Marlborough), 2023, 13.5%, New Zealand',
              desc: 'Structured, nutty and creamy',
              price: '฿3,480',
            },
            {
              name: 'Château de Beaucastel ‘Coudoulet’ Côtes-du-Rhône Blanc, 2022, 14%, France',
              desc: 'Textured, peach and honey',
              price: '฿3,590',
            },
            {
              name: 'La Chablisienne Chablis 1er Cru ‘Montmains’, 2020, 12.5%, France',
              desc: 'Smooth, green apple and minerality',
              price: '฿3,750',
            },
            {
              name: 'Grattamacco Bianco (Bolgheri DOC) Vermentino, 2022, 14%, Italy',
              desc: 'Citrus, mineral, floral',
              price: '฿3,880',
            },
            {
              name: 'Quintodecimo ‘Giallo d’Arles’ Greco di Tufo DOCG, 2019, 13.5%, Italy',
              desc: 'Tannic, fruity and earthy',
              price: '฿4,160',
            },
            {
              name: 'Domaine François Merlin Condrieu ‘Les Terroirs’, 2020, 13.5%, France',
              desc: 'Smooth-textured, apricot and earthy',
              price: '฿4,270',
            },
            {
              name: 'Quintodecimo ‘Exultet’ Fiano di Avellino DOCG, 2019, 13.5%, Italy',
              desc: 'Complex, mineral and pear',
              price: '฿4,480',
            },
            {
              name: 'Vasse Felix ‘Heytesbury’ Chardonnay (Margaret River), 2022, 13%, Australia',
              desc: 'Refined, oaky and grapefruit',
              price: '฿5,440',
            },
            {
              name: 'Domaine du Colombier Hermitage Blanc, 2021, 13%, France',
              desc: 'Elegant, exotic and earthy',
              price: '฿7,500',
            },
            {
              name: 'Louis Jadot Meursault, 2022, 13%, France',
              desc: 'Rounded, apple and citrus',
              price: '฿7,690',
            },
            {
              name: 'Château Lagrézette ‘Le Pigeonnier White Vision’ Viognier, 2018, 13%, France',
              desc: 'Velvety, oaky and coconut',
              price: '฿7,770',
            },
            {
              name: 'La Chablisienne Chablis Grand Cru ‘Château Grenouilles’, 2020, 13%, France',
              desc: 'Fleshy, earthy and oaky',
              price: '฿8,900',
            },
            {
              name: 'Querciabella ‘Batàr’ Toscana IGT, 2019, 14%, Italy',
              desc: 'Intense, oak and peach',
              price: '฿10,770',
            },
            {
              name: 'Bachelet-Monnot Puligny-Montrachet 1er Cru ‘Les Folatières’, 2021, 13%, France',
              desc: 'Creamy, hazelnut and vanilla',
              price: '฿18,490',
            },
          ],
        },
        {
          title: 'Rosé Wine',
          items: [
            {
              name: 'J. de Villebois Pinot Noir Rosé (Val de Loire), NV, 12%, France',
              desc: 'Floral and citrusy',
              price: '฿300 / ฿1,250',
            },
            {
              name: 'Château d\'Esclans The Pale Rosé by Sacha Lichine, 2023, 12.5%, France',
              desc: 'Crisp and refreshing',
              price: '฿340 / ฿1,280',
            },
            {
              name: 'Monfort Pinot Grigio Ramato Vigneti delle Dolomiti IGT, NV, 12.5%, Italy',
              desc: 'Intense, fruity and spicy',
              price: '฿1,480',
            },
            {
              name: 'Château d\'Esclans Whispering Angel Rosé (Côtes de Provence), NV, 13.5%, France',
              desc: 'Raspberry and citrus',
              price: '฿1,650',
            },
            {
              name: 'Château d\'Esclans Rock Angel Rosé (Côtes de Provence), NV, 13.5%, France',
              desc: 'Peach and mineral',
              price: '฿2,430',
            },
            {
              name: 'Domaines Ott Clos Mireille Rosé (Côtes de Provence), NV, 13.5%, France',
              desc: 'Tropical and herbal',
              price: '฿2,950',
            },
            {
              name: 'Château d\'Esclans Whispering Angel Rosé (Côtes de Provence), NV, 13.5%, France (Magnum)',
              desc: 'Raspberry and citrus',
              price: '฿3,520',
            },
            {
              name: 'Château d\'Esclans Garrus Rosé (Côtes de Provence), NV, 14.5%, France',
              desc: 'White peach and subtle spice',
              price: '฿12,250',
            },
          ],
        },
      ],
    },
    {
      id: 'signature-cocktails',
      title: 'Signature Cocktails',
      items: [
        {
          name: 'Pinky Promise',
          desc: 'Bael-fruit gin, Campari, and pineapple weave a bittersweet, tropical refresher.',
          price: '฿450',
        },
        {
          name: 'Skinny Bitch',
          desc: 'Blanco tequila, fresh watermelon, agave, and chili deliver a light, lively heat.',
          price: '฿450',
        },
        {
          name: 'Island Passion',
          desc: 'London Dry Gin, Thai basil, and banana-passion cordial craft lush island aromatics.',
          price: '฿450',
        },
        {
          name: 'Killer Beach Zombie',
          desc: 'Gin, blue curaçao, Campari, and pineapple collide in a vivid, bittersweet splash.',
          price: '฿450',
        },
        {
          name: 'Mango Tree Punch',
          desc: 'Vodka, amaretto, mango purée, and coconut milk blend into creamy tropical comfort.',
          price: '฿450',
        },
        {
          name: 'Monsoon Mule',
          desc: 'Bourbon, Kahlúa, amaro, ginger beer, orange, and lime storm with depth.',
          price: '฿450',
        },
        {
          name: 'Nomad Tiki Puka Puka',
          desc: 'Five rums and tropical juices fuel a classic, potent tiki voyage.',
          price: '฿450',
        },
      ],
    },
    {
      id: 'classic-cocktails',
      title: 'Classic Cocktails',
      subcategories: [
        {
          title: 'Vodka',
          items: [
            {
              name: 'Watermelon Martini',
              desc: 'Tito’s Vodka, watermelon, sweet & sour',
              price: '฿380',
            },
            {
              name: 'Espresso Martini',
              desc: 'Vodka, Kahlúa, white crème de cacao, espresso',
              price: '฿380',
            },
            {
              name: 'Porn Star Martini',
              desc: 'Vanilla Vodka, vanilla liqueur, passion fruit, pineapple juice',
              price: '฿380',
            },
          ],
        },
        {
          title: 'Gin',
          items: [
            {
              name: 'Classic Martini',
              desc: 'Beefeater Gin, dry vermouth, green olive',
              price: '฿380',
            },
            {
              name: 'Negroni',
              desc: 'Beefeater Gin, sweet vermouth, Campari',
              price: '฿500',
            },
          ],
        },
        {
          title: 'Tequila',
          items: [
            {
              name: 'Classic Margarita',
              desc: 'Tequila Blanco, Cointreau, lime juice, agave syrup',
              price: '฿350',
            },
            {
              name: 'Coconut Margarita',
              desc: 'Coconut-infused Tequila, Cointreau, coconut milk, sweet & sour',
              price: '฿350',
            },
          ],
        },
        {
          title: 'Rum',
          items: [
            {
              name: 'Jungle Bird',
              desc: 'White Rum, Campari, pineapple juice, sweet & sour',
              price: '฿320',
            },
            {
              name: 'Classic Mai Tai',
              desc: 'Diplomático Rum, White & Dark Rum, orange liqueur, lime juice',
              price: '฿320',
            },
            {
              name: 'Piña Colada',
              desc: 'White Rum, Coconut Rum, pineapple juice, coconut milk',
              price: '฿320',
            },
            {
              name: 'Mojito',
              desc: 'Havana Club 3 Year Rum, lime juice, sugar, mint leaves, soda',
              price: '฿380',
            },
            {
              name: 'Dark & Stormy',
              desc: 'White Rum, lemon juice, ginger beer',
              price: '฿420',
            },
          ],
        },
        {
          title: 'Whisky',
          items: [
            {
              name: 'Old Fashioned',
              desc: 'Bourbon, Angostura bitters, brown sugar',
              price: '฿320',
            },
            {
              name: 'Whiskey Sour',
              desc: 'Bourbon, Angostura bitters, lemon juice, egg white',
              price: '฿320',
            },
          ],
        },
        {
          title: 'Prosecco Cocktails',
          items: [
            {
              name: 'Hugo Spritz',
              desc: 'Prosecco, elderflower liqueur, mint leaves, soda',
              price: '฿320',
            },
            {
              name: 'Aperol Spritz',
              desc: 'Aperol, Prosecco, soda',
              price: '฿420',
            },
          ],
        },
        {
          title: 'Other Classics',
          items: [
            {
              name: 'Americano',
              desc: 'Campari, sweet vermouth, soda, orange slice',
              price: '฿420',
            },
            {
              name: 'Long Island Iced Tea',
              desc: 'Rum, Vodka, Gin, Tequila, Coca-Cola, sweet & sour',
              price: '฿420',
            },
            {
              name: 'Nomad Sangria (500 ml)',
              desc: 'Red wine, brandy, orange, apple, seasonal fruit, citrus',
              price: '฿900',
            },
            {
              name: 'Nomad Sangria (1 L)',
              desc: 'Red wine, brandy, orange, apple, seasonal fruit, citrus',
              price: '฿1,800',
            },
          ],
        },
      ],
    },
    {
      id: 'spirits',
      title: 'Spirits, Aperitifs & Liqueurs',
      subcategories: [
        {
          title: 'Vodka',
          items: [
            {
              name: 'Smirnoff No. 21 Vodka',
              desc: '',
              price: '฿170 / ฿2,700',
            },
            {
              name: 'Russian Standard Original',
              desc: '',
              price: '฿170 / ฿2,700',
            },
            {
              name: 'Absolut Vodka',
              desc: '',
              price: '฿210 / ฿3,300',
            },
            {
              name: 'Tito’s Handmade Vodka',
              desc: '',
              price: '฿200 / ฿3,300',
            },
            {
              name: 'CÎROC Premium Vodka',
              desc: '',
              price: '฿450 / ฿7,500',
            },
            {
              name: 'Beluga Noble Russian Vodka',
              desc: '',
              price: '฿500 / ฿7,700',
            },
            {
              name: 'Belvedere Vodka (Poland)',
              desc: '',
              price: '฿500 / ฿7,900',
            },
            {
              name: 'Grey Goose Vodka',
              desc: '',
              price: '฿500 / ฿8,000',
            },
          ],
        },
        {
          title: 'Gin',
          items: [
            {
              name: 'Gordon’s London Dry Gin',
              desc: '',
              price: '฿210 / ฿3,300',
            },
            {
              name: 'Beefeater London Dry Gin',
              desc: '',
              price: '฿210 / ฿3,500',
            },
            {
              name: 'Whitley Neill Rhubarb & Ginger Gin',
              desc: '',
              price: '฿230 / ฿3,900',
            },
            {
              name: 'Whitley Neill Lemongrass & Ginger Gin',
              desc: '',
              price: '฿260 / ฿3,900',
            },
            {
              name: 'Tanqueray London Dry Gin',
              desc: '',
              price: '฿280 / ฿4,500',
            },
            {
              name: 'Beefeater Pink Strawberry Gin',
              desc: '',
              price: '฿290 / ฿4,800',
            },
            {
              name: 'Bombay Sapphire Gin',
              desc: '',
              price: '฿290 / ฿4,800',
            },
            {
              name: 'Roku Japanese Gin',
              desc: '',
              price: '฿320 / ฿5,000',
            },
            {
              name: 'Bulldog London Dry Gin',
              desc: '',
              price: '฿380 / ฿6,400',
            },
            {
              name: 'Hendrick’s Gin',
              desc: '',
              price: '฿500 / ฿7,600',
            },
            {
              name: 'Drumshanbo Gunpowder Irish Gin',
              desc: '',
              price: '฿500 / ฿8,000',
            },
            {
              name: 'Monkey 47 Schwarzwald Dry Gin',
              desc: '',
              price: '฿800 / ฿8,400',
            },
            {
              name: 'Hendrick’s Flora Adora Gin',
              desc: '',
              price: '฿600 / ฿9,200',
            },
            {
              name: 'Hendrick’s Neptunia Gin',
              desc: '',
              price: '฿600 / ฿9,200',
            },
            {
              name: 'Dictador Colombian Ortodoxy Gin',
              desc: '',
              price: '฿600 / ฿9,400',
            },
            {
              name: 'Gin Mare Mediterranean Gin',
              desc: '',
              price: '฿620 / ฿10,000',
            },
            {
              name: 'Forty Spotted Wild Rose Gin',
              desc: '',
              price: '฿680 / ฿11,000',
            },
          ],
        },
        {
          title: 'Tequila',
          items: [
            {
              name: 'Jose Cuervo Especial Reposado',
              desc: '',
              price: '฿200 / ฿3,000',
            },
            {
              name: 'Jose Cuervo Especial Silver',
              desc: '',
              price: '฿200 / ฿3,000',
            },
            {
              name: 'Olmeca Reposado Tequila',
              desc: '',
              price: '฿200 / ฿3,000',
            },
            {
              name: 'Olmeca Altos Plata 100% Agave',
              desc: '',
              price: '฿470 / ฿7,300',
            },
            {
              name: 'Olmeca Altos Reposado 100% Agave',
              desc: '',
              price: '฿500 / ฿7,800',
            },
            {
              name: 'Espolòn Reposado Tequila',
              desc: '',
              price: '฿530 / ฿8,800',
            },
            {
              name: 'Patrón Silver Tequila',
              desc: '',
              price: '฿650 / ฿10,800',
            },
            {
              name: '1800 Añejo Tequila',
              desc: '',
              price: '฿700 / ฿11,800',
            },
            {
              name: 'Herradura Reposado Tequila',
              desc: '',
              price: '฿770 / ฿12,000',
            },
            {
              name: '1800 Cristalino Añejo Tequila',
              desc: '',
              price: '฿930 / ฿15,400',
            },
            {
              name: 'Don Julio 1942 Tequila',
              desc: '',
              price: '฿2,500 / ฿26,000',
            },
            {
              name: 'Clase Azul Reposado Tequila',
              desc: '',
              price: '฿32,000',
            },
          ],
        },
        {
          title: 'Mezcal',
          items: [
            {
              name: 'Creyente Mezcal Joven',
              desc: '',
              price: '฿500 / ฿8,200',
            },
          ],
        },
        {
          title: 'Rum',
          items: [
            {
              name: 'SangSom (Thailand)',
              desc: '',
              price: '฿100 / ฿1,260',
            },
            {
              name: 'Captain Morgan Gold',
              desc: '',
              price: '฿120 / ฿1,750',
            },
            {
              name: 'Bacardi Carta Blanca',
              desc: '',
              price: '฿140 / ฿2,950',
            },
            {
              name: 'Captain Morgan Dark Rum',
              desc: '',
              price: '฿180 / ฿3,000',
            },
            {
              name: 'Havana Club Añejo 3 Años',
              desc: '',
              price: '฿220 / ฿3,300',
            },
            {
              name: 'Malibu Coconut Rum',
              desc: '',
              price: '฿220 / ฿3,400',
            },
            {
              name: 'Sailor Jerry Spiced Rum',
              desc: '',
              price: '฿220 / ฿3,400',
            },
            {
              name: 'Havana Club Añejo 7 Años',
              desc: '',
              price: '฿370 / ฿5,700',
            },
            {
              name: 'Bumbu The Original Rum',
              desc: '',
              price: '฿540 / ฿8,300',
            },
            {
              name: 'Diplomático Reserva Exclusiva',
              desc: '',
              price: '฿540 / ฿8,300',
            },
            {
              name: 'Bumbu XO Rum',
              desc: '',
              price: '฿640 / ฿10,000',
            },
            {
              name: 'Mount Gay XO (Extra Old)',
              desc: '',
              price: '฿840 / ฿13,000',
            },
            {
              name: 'Flor de Caña 25 Year Old Rum',
              desc: '',
              price: '฿1,000 / ฿16,000',
            },
          ],
        },
        {
          title: 'Brandy',
          items: [
            {
              name: 'Hennessy V.S.O.P',
              desc: '',
              price: '฿740 / ฿11,400',
            },
            {
              name: 'Martell V.S.O.P',
              desc: '',
              price: '฿740 / ฿11,600',
            },
            {
              name: 'Rémy Martin V.S.O.P',
              desc: '',
              price: '฿780 / ฿12,000',
            },
            {
              name: 'Hennessy X.O',
              desc: '',
              price: '฿1,800 / ฿28,000',
            },
          ],
        },
        {
          title: 'Whisky',
          items: [
            {
              name: 'Mekhong (Thailand)',
              desc: '',
              price: '฿100 / ฿1,300',
            },
            {
              name: 'Jim Beam Bourbon',
              desc: '',
              price: '฿140 / ฿2,000',
            },
            {
              name: 'Ballantine’s Finest Blended Scotch',
              desc: '',
              price: '฿140 / ฿2,200',
            },
            {
              name: 'Jameson Irish Whiskey',
              desc: '',
              price: '฿260 / ฿4,000',
            },
            {
              name: 'Jack Daniel’s Tennessee Whiskey',
              desc: '',
              price: '฿320 / ฿4,900',
            },
            {
              name: 'Chivas Regal 12 Year Old Blended Scotch',
              desc: '',
              price: '฿360 / ฿5,500',
            },
            {
              name: 'Johnnie Walker Black Label 12 Year Old Blended Scotch',
              desc: '',
              price: '฿360 / ฿5,500',
            },
            {
              name: 'Monkey Shoulder Blended Malt Scotch Whisky',
              desc: '',
              price: '฿380 / ฿6,000',
            },
            {
              name: 'Maker’s Mark Bourbon',
              desc: '',
              price: '฿360 / ฿6,000',
            },
            {
              name: 'Bulleit 95 Rye Whiskey',
              desc: '',
              price: '฿500 / ฿7,700',
            },
            {
              name: 'The Deacon Blended Scotch',
              desc: '',
              price: '฿500 / ฿7,800',
            },
            {
              name: 'Woodford Reserve Rye Whiskey',
              desc: '',
              price: '฿560 / ฿8,800',
            },
            {
              name: 'Chivas Regal 15 Year Old Blended Scotch',
              desc: '',
              price: '฿580 / ฿9,000',
            },
            {
              name: 'Jack Daniel’s Single Barrel Select Tennessee Whiskey',
              desc: '',
              price: '฿720 / ฿11,200',
            },
            {
              name: 'Chivas Regal 18 Year Old Blended Scotch',
              desc: '',
              price: '฿800 / ฿12,500',
            },
            {
              name: 'Johnnie Walker Blue Label Blended Scotch',
              desc: '',
              price: '฿1,900 / ฿29,500',
            },
          ],
        },
        {
          title: 'Whisky Single Malt',
          items: [
            {
              name: 'Arran 10 Year Old Single Malt Scotch Whisky',
              desc: '',
              price: '฿530 / ฿8,200',
            },
            {
              name: 'The Glenlivet Founder’s Reserve',
              desc: '',
              price: '฿530 / ฿8,400',
            },
            {
              name: 'Glenfiddich 12 Year Old Single Malt Scotch Whisky',
              desc: '',
              price: '฿580 / ฿9,000',
            },
            {
              name: 'The Glenlivet 12 Year Old',
              desc: '',
              price: '฿700 / ฿10,800',
            },
            {
              name: 'The Singleton of Dufftown 18 Year Old Single Malt',
              desc: '',
              price: '฿800 / ฿12,300',
            },
            {
              name: 'Lagavulin 16 Year Old Islay Single Malt Scotch Whisky',
              desc: '',
              price: '฿960 / ฿15,000',
            },
            {
              name: 'Glenfiddich 18 Year Old Single Malt Scotch Whisky',
              desc: '',
              price: '฿1,030 / ฿16,000',
            },
            {
              name: 'The Glenlivet 18 Year Old',
              desc: '',
              price: '฿1,160 / ฿18,000',
            },
            {
              name: 'Bushmills 16 Year Old Single Malt Irish Whiskey',
              desc: '',
              price: '฿1,180 / ฿18,400',
            },
            {
              name: 'Highland Park 15 Year Old Single Malt Scotch Whisky',
              desc: '',
              price: '฿1,390 / ฿21,500',
            },
            {
              name: 'The Macallan Rare Cask',
              desc: '',
              price: '฿52,800',
            },
          ],
        },
        {
          title: 'Whisky Japanese',
          items: [
            {
              name: 'The Chita Single Grain Japanese Whisky',
              desc: '',
              price: '฿450 / ฿7,400',
            },
            {
              name: 'Hibiki Japanese Harmony',
              desc: '',
              price: '฿950 / ฿14,700',
            },
            {
              name: 'Hakushu 12 Year Old Single Malt Japanese Whisky',
              desc: '',
              price: '฿1,600 / ฿25,900',
            },
            {
              name: 'Hibiki Blossom Harmony (Limited Edition)',
              desc: '',
              price: '฿36,250',
            },
          ],
        },
        {
          title: 'Moutai',
          items: [
            {
              name: 'Kweichow Moutai',
              desc: '',
              price: '฿33,200',
            },
          ],
        },
        {
          title: 'Aperitif',
          items: [
            {
              name: 'Sambuca Matti Italiano',
              desc: '',
              price: '฿170 / ฿2,600',
            },
            {
              name: 'Southern Comfort Lime',
              desc: '',
              price: '฿230 / ฿3,800',
            },
            {
              name: 'Aperol',
              desc: '',
              price: '฿250 / ฿3,900',
            },
            {
              name: 'Jagermeister',
              desc: '',
              price: '฿250 / ฿3,900',
            },
            {
              name: 'Martini Blanco',
              desc: '',
              price: '฿200 / ฿4,400',
            },
            {
              name: 'Martini Extra Dry',
              desc: '',
              price: '฿200 / ฿4,400',
            },
            {
              name: 'Martini Rosso',
              desc: '',
              price: '฿200 / ฿4,400',
            },
            {
              name: 'Branca Menta',
              desc: '',
              price: '฿300 / ฿4,800',
            },
            {
              name: 'Amaro Averna Siciliano',
              desc: '',
              price: '฿320 / ฿5,200',
            },
            {
              name: 'Campari',
              desc: '',
              price: '฿320 / ฿5,200',
            },
          ],
        },
        {
          title: 'Liqueur',
          items: [
            {
              name: 'Amaretto',
              desc: '',
              price: '฿200 / ฿3,000',
            },
            {
              name: 'Cacao White (Milk Chocolate)',
              desc: '',
              price: '฿200 / ฿3,000',
            },
            {
              name: 'Creme De Casis',
              desc: '',
              price: '฿200 / ฿3,000',
            },
            {
              name: 'Luxardo Limoncello',
              desc: '',
              price: '฿230 / ฿3,900',
            },
            {
              name: 'Midori Melon',
              desc: '',
              price: '฿280 / ฿4,400',
            },
            {
              name: 'Bailey Original Irish Cream',
              desc: '',
              price: '฿300 / ฿4,600',
            },
            {
              name: 'Kahlua Coffee',
              desc: '',
              price: '฿300 / ฿4,600',
            },
            {
              name: 'Cointreau',
              desc: '',
              price: '฿340 / ฿5,400',
            },
            {
              name: 'Galliano Vanilla',
              desc: '',
              price: '฿400 / ฿6,200',
            },
            {
              name: 'ST Germain Elderflower',
              desc: '',
              price: '฿420 / ฿6,400',
            },
            {
              name: 'Mr Black Original Coffee',
              desc: '',
              price: '฿420 / ฿6,400',
            },
            {
              name: 'Frangelico',
              desc: '',
              price: '฿420 / ฿6,600',
            },
            {
              name: 'Grand Marnier',
              desc: '',
              price: '฿480 / ฿7,500',
            },
          ],
        },
      ],
    },
    {
      id: 'beers',
      title: 'Beers',
      items: [
        {
          name: 'Chang / Singha / Leo',
          desc: '',
          price: '฿120',
        },
        {
          name: 'Tiger / Asahi / Heineken / San Miguel Light',
          desc: '',
          price: '฿150',
        },
        {
          name: 'Corona / Kirin',
          desc: '',
          price: '฿220',
        },
        {
          name: 'Liefman’s Peach',
          desc: '',
          price: '฿330',
        },
        {
          name: 'Vedette White',
          desc: '',
          price: '฿370',
        },
        {
          name: 'La Chouffe',
          desc: '',
          price: '฿470',
        },
        {
          name: 'Moose Cider',
          desc: '',
          price: '฿200',
        },
        {
          name: 'Heineken Alcohol Free',
          desc: '',
          price: '฿150',
        },
      ],
    },
    {
      id: 'soft-drinks',
      title: 'Soft Drinks, Juices, Smoothies & Other Drinks',
      subcategories: [
        {
          title: 'Soft Drinks',
          items: [
            {
              name: 'Rock Soda Water',
              desc: '',
              price: '฿100',
            },
            {
              name: 'Coca Cola / Diet Coke / Coke Zero / Sprite',
              desc: '',
              price: '฿100',
            },
            {
              name: 'Schweppes Tonic Water / Ginger Ale',
              desc: '',
              price: '฿100',
            },
            {
              name: 'Homemade Lemonade',
              desc: '',
              price: '฿150',
            },
            {
              name: 'Fever Tree Mediterranean Tonic / Indian Tonic',
              desc: '',
              price: '฿240',
            },
            {
              name: 'Fever Tree Elderflower / Ginger Beer',
              desc: '',
              price: '฿240',
            },
            {
              name: 'Redbull (Europe)',
              desc: '',
              price: '฿280',
            },
          ],
        },
        {
          title: 'Water',
          items: [
            {
              name: 'Evian Still Water / Sparkling Water',
              desc: '',
              price: '฿250',
            },
          ],
        },
        {
          title: 'Fruit & Healthy Juices',
          items: [
            {
              name: 'Fresh Coconut / Coconut Slushie',
              desc: '',
              price: '฿200',
            },
            {
              name: 'Carton Mango / Pineapple / Cranberry / Orange / Apple Juice',
              desc: '',
              price: '฿150',
            },
            {
              name: 'Pure Fruit (Choice of One Fruit)',
              desc: '',
              price: '฿250',
            },
          ],
        },
        {
          title: 'Coffees & Teas',
          note: 'Milk options available: Almond, Oat, Coconut, or Regular Milk.',
          items: [
            {
              name: 'Americano / Iced Americano / Espresso',
              desc: '',
              price: '฿120',
            },
            {
              name: 'Caffè Latte / Cappuccino',
              desc: '',
              price: '฿150',
            },
            {
              name: 'Double Americano / Double Espresso / Black Orange',
              desc: '',
              price: '฿150',
            },
            {
              name: 'Coconut Coffee',
              desc: '',
              price: '฿230',
            },
            {
              name: 'Affogato',
              desc: '',
              price: '฿250',
            },
            {
              name: 'Earl Grey / English Breakfast / Chamomile Tea',
              desc: '',
              price: '฿120',
            },
            {
              name: 'Jasmine Green Tea / Honey & Ginger',
              desc: '',
              price: '฿120',
            },
            {
              name: 'Thai Lemon Tea / Thai Iced Milk Tea',
              desc: '',
              price: '฿150',
            },
          ],
        },
        {
          title: 'Smoothies',
          items: [
            {
              name: 'Beach Bum (Mango, Pineapple, Fresh Lime)',
              desc: '',
              price: '฿250',
            },
            {
              name: 'Tropical Fruit (Watermelon, Mango, Pineapple, Orange)',
              desc: '',
              price: '฿250',
            },
            {
              name: 'Triple Booster (Banana, Pineapple, Mint)',
              desc: '',
              price: '฿250',
            },
          ],
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
      if (section.subcategories && section.subcategories.length > 0) {
        const filteredSubs = section.subcategories.map(sub => {
          const matchingItems = sub.items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
          );
          return { ...sub, items: matchingItems };
        }).filter(sub => sub.items.length > 0);
        return { ...section, subcategories: filteredSubs };
      } else {
        const matchingItems = section.items.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        return { ...section, items: matchingItems };
      }
    })
    .filter(section => {
      if (section.subcategories && section.subcategories.length > 0) {
        return section.subcategories.length > 0;
      }
      return section.items && section.items.length > 0;
    });

    const drinkSectionIds = ['champagne', 'wine', 'signature-cocktails', 'classic-cocktails', 'spirits', 'beers', 'soft-drinks'];

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
                  onClick={() => handleCategorySelect(pill.id, pill.label)}
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
                  onClick={() => handleCategorySelect(pill.id, pill.label)}
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
                onClick={() => handleCategorySelect(pill.id, pill.label)}
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
              onClick={() => handleCategorySelect('all')}
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
            {/* Drinks Disclaimer */}
            {activeCategory !== 'all' && drinkSectionIds.includes(activeCategory) && (
              <div className="text-center max-w-4xl mx-auto mt-6 mb-10 px-4">
                <p className="text-[#A38B68] font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-widest leading-relaxed">
                  All prices are in THB, inclusive of VAT and subject to a 10% service charge — Shot or Glass / Bottle prices.
                </p>
              </div>
            )}
            {filteredSections.map((section) => (
              <div key={section.id} className="space-y-10">
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

                {/* Conditionally render food card grid with images OR drink text-only menu list layout */}
                {drinkSectionIds.includes(section.id) ? (
                  <div className="max-w-4xl mx-auto space-y-10 pb-4">
                    {section.subcategories && section.subcategories.length > 0 ? (
                      <div className="space-y-10">
                        {section.subcategories.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-4">
                            <h3 className="text-center font-sans text-base sm:text-lg font-semibold text-[#A38B68] tracking-widest uppercase mb-3">
                              — {sub.title} —
                            </h3>
                            {sub.note && (
                              <p className="text-center text-[10px] sm:text-xs text-[#7A756C] font-light italic font-sans mb-4 -mt-1">
                                {sub.note}
                              </p>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5">
                              {sub.items.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 6 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.25 }}
                                  className="flex flex-col py-1.5 border-b border-[#E5DEC9]/40"
                                >
                                  <div className="flex justify-between items-baseline">
                                    <span className="font-sans text-[14px] sm:text-[16px] font-normal text-[#23211E]">
                                      {item.name}
                                    </span>
                                    <span className="flex-grow mx-2 border-b border-dotted border-[#C5BEB2]/60 self-center"></span>
                                    <span className="font-sans text-[13px] sm:text-[14px] font-normal text-[#A38B68] whitespace-nowrap">
                                      {item.price}
                                    </span>
                                  </div>
                                  {item.desc && (
                                    <p className="text-[11px] sm:text-[12px] text-[#77736C] font-light mt-1 font-sans leading-relaxed">
                                      {item.desc}
                                    </p>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5">
                        {section.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col py-1.5 border-b border-[#E5DEC9]/40"
                          >
                            <div className="flex justify-between items-baseline">
                              <span className="font-sans text-[14px] sm:text-[16px] font-normal text-[#23211E]">
                                {item.name}
                              </span>
                              <span className="flex-grow mx-2 border-b border-dotted border-[#C5BEB2]/60 self-center"></span>
                              <span className="font-sans text-[13px] sm:text-[14px] font-normal text-[#A38B68] whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>
                            {item.desc && (
                              <p className="text-[11px] sm:text-[12px] text-[#77736C] font-light mt-1 font-sans leading-relaxed">
                                {item.desc}
                              </p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4">
                    {section.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (idx % 5) * 0.05 }}
                        className="w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.75rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] max-w-[260px] bg-white rounded-xl p-2.5 sm:p-3 border border-[#E5DEC9] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-center"
                      >
                        <div>
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
                          <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#23211E] mb-1 group-hover:text-[#A38B68] transition-colors leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-[10px] sm:text-xs text-[#77736C] font-light leading-relaxed mb-2 font-sans">
                            {item.desc}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-[#F0EBE1] flex items-center justify-center">
                          <span className="text-[11px] font-sans font-semibold text-[#A38B68]">
                            {item.price}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {section.id === 'desserts' && (
                  <div className="text-center max-w-3xl mx-auto pt-4 mb-[10px] px-4">
                    <p className="text-[#7A756C] font-light text-xs sm:text-sm font-sans leading-relaxed">
                      Please be aware that our food may contain or come into contact with common allergens, such as dairy, eggs, wheat, soybeans, tree nuts, peanuts, fish, shellfish or wheat. While we take steps to minimize risk and safely handle the foods that contain potential allergens, please be advised that cross contamination may occur.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
