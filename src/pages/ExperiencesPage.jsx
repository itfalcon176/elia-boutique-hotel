import { motion } from 'framer-motion';
import { Compass, Waves, Anchor, MapPin, Car, ArrowRight } from 'lucide-react';
import { whatsappUrl, WHATSAPP_MESSAGES, experienceEnquiryMessage } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ExperiencesPage({ onNavigate, onOpenReservation }) {
  const experiences = [
    {
      title: 'Bang Tao Beach',
      tagline: 'Right Outside Your Door',
      desc: "Start with what's directly outside. One of Phuket's best-known west-coast beaches, Bang Tao offers a long stretch of sand, warm Andaman Sea and some spectacular sunsets.",
      icon: Waves,
      image: '/images/cocktail.png',
      actionText: 'Discover Bang Tao',
      actionPage: 'bang-tao-beach-phuket',
    },
    {
      title: 'Phuket By Sea',
      tagline: 'Islands & Private Charters',
      desc: "From island-hopping and private boats to days exploring the waters around Phuket, speak to the Elia concierge and we'll help arrange your day.",
      icon: Anchor,
      image: '/images/dining.png',
      actionText: 'WhatsApp Concierge',
      isWhatsApp: true,
    },
    {
      title: 'Discover Phuket',
      tagline: 'Culture, Town & Nature',
      desc: "Temples, viewpoints, Old Phuket Town, restaurants, markets and hidden corners. Tell us what kind of day you're after and we'll help you find it.",
      icon: MapPin,
      image: '/images/suite.png',
      actionText: 'WhatsApp Concierge',
      isWhatsApp: true,
    },
    {
      title: 'Getting Around',
      tagline: 'Transfers & Private Transport',
      desc: 'Need an airport transfer, taxi or private transport? Arrange it through Elia and spend less of your holiday organising your holiday.',
      icon: Car,
      image: '/images/latenight.png',
      actionText: 'WhatsApp Concierge',
      isWhatsApp: true,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#6E6A63] font-sans">
          <ol className="flex items-center gap-2">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-[#A38B68] transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>/</li>
            <li className="text-[#23211E] font-medium" aria-current="page">
              Experiences
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Compass size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Curated Island Journeys
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Experience <span className="italic text-gold-gradient font-serif">Phuket</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-4">
            Stay close. Explore further.
          </h2>

          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            You could quite happily spend your entire holiday between Elia, GOAT and Bang Tao Beach. But Phuket has a habit of tempting you out.
          </p>
          <p className="text-[#6E6A63] font-light text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto mt-2">
            Our team can help arrange transfers, excursions, boat trips and local experiences, as well as point you toward the places genuinely worth seeing.
          </p>
        </div>

        {/* 4 Core Pillars Grid matching Section 12 of SEO Pack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {experiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#A38B68]/25 shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#23211E]/80 backdrop-blur-md flex items-center justify-center border border-white/20 text-[#A38B68]">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-bold block mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6A63] font-light leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  {item.isWhatsApp ? (
                    <a
                      href={whatsappUrl(experienceEnquiryMessage(item.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-12 py-3 rounded-full bg-[#FAF7F2] hover:bg-[#23211E] hover:text-white text-[#23211E] text-xs uppercase tracking-[0.2em] font-semibold border border-[#A38B68]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon size={14} className="text-[#25D366]" />
                      <span>{item.actionText}</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onNavigate(item.actionPage)}
                      className="w-full py-3 rounded-full bg-[#FAF7F2] hover:bg-[#23211E] hover:text-white text-[#23211E] text-xs uppercase tracking-[0.2em] font-semibold border border-[#A38B68]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight size={13} />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Concierge Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Personalised Phuket Itineraries
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            Tell our concierge what kind of day you're after — private island-hopping, temple visits, airport transfers or restaurant bookings — and we'll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              BOOK YOUR STAY
            </button>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.experiences)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer flex items-center gap-2 justify-center"
            >
              <WhatsAppIcon size={14} />
              <span>WHATSAPP CONCIERGE</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
