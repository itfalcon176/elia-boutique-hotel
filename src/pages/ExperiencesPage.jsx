import { motion } from 'framer-motion';
import { Compass, Palmtree, Waves, Anchor, Car, MapPin, Heart, Check, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { experiencesData } from '../data/experiencesData';

const WhatsAppIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function ExperiencesPage({ onOpenReservation }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Palmtree':
        return <Palmtree size={20} className="text-[#A38B68]" />;
      case 'Waves':
        return <Waves size={20} className="text-[#A38B68]" />;
      case 'Anchor':
        return <Anchor size={20} className="text-[#A38B68]" />;
      case 'Compass':
        return <Compass size={20} className="text-[#A38B68]" />;
      case 'Car':
        return <Car size={20} className="text-[#A38B68]" />;
      case 'MapPin':
        return <MapPin size={20} className="text-[#A38B68]" />;
      case 'Heart':
        return <Heart size={20} className="text-[#A38B68]" />;
      default:
        return <Compass size={20} className="text-[#A38B68]" />;
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Compass size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Curated Island Journeys & Lifestyle
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Curated <span className="italic text-gold-gradient font-serif">Experiences</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            {experiencesData.hero.description}
          </p>
        </div>

        {/* Digital Concierge Bridge Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#23211E] to-[#181715] text-[#FAF7F2] border border-[#A38B68]/40 shadow-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold">
              <MessageCircle size={12} />
              <span>Direct Concierge Integration</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-light text-white">
              {experiencesData.conciergeAppNote.title}
            </h2>
            <p className="text-[#FAF7F2]/80 text-xs sm:text-sm font-light leading-relaxed font-sans">
              {experiencesData.conciergeAppNote.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={experiencesData.conciergeAppNote.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <WhatsAppIcon size={16} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+66932719103"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={14} className="text-[#C5A880]" />
              <span>Call Concierge</span>
            </a>
          </div>
        </motion.div>

        {/* Experience Categories Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold mb-2 block font-sans">
              Curated Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#23211E]">
              Phuket Beyond Accommodation
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-3 mb-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiencesData.categories.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`bg-white rounded-3xl overflow-hidden border border-[#A38B68]/25 shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 ${
                  item.featured ? 'ring-1 ring-[#A38B68]/30' : ''
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#23211E]/80 backdrop-blur-md flex items-center justify-center border border-white/20">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-bold block mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#23211E] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6E6A63] font-light leading-relaxed mb-5 font-sans">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#A38B68]/15">
                      {item.items.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#555047] font-light">
                          <Check size={14} className="text-[#A38B68] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/66932719103?text=${encodeURIComponent(`Hello Elia Phuket, I would like to inquire about: ${item.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#23211E] hover:text-white text-[#23211E] text-[11px] uppercase tracking-[0.2em] font-semibold border border-[#A38B68]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book via Concierge</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
