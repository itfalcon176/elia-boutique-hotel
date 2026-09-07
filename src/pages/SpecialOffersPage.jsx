import { motion } from 'framer-motion';
import { Tag, Sparkles, Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { offersData } from '../data/offersData';

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

export default function SpecialOffersPage({ onOpenReservation }) {
  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Tag size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Exclusive Packages & Direct Rates
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Special <span className="italic text-gold-gradient font-serif">Offers</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Discover our curated opening privileges, extended slow-living packages, direct booking benefits, and romantic honeymoon getaways on Bang Tao Beach.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="space-y-12">
          {offersData.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#A38B68]/25 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                {/* Image & Tag */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:h-full min-h-[300px] overflow-hidden group">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-[#23211E]/85 backdrop-blur-md text-[#C5A880] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-[#A38B68]/40">
                    {offer.tag}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <span className="text-[#C5A880] text-[10px] uppercase tracking-wider block font-semibold">Promo Code</span>
                    <span className="font-mono text-sm tracking-widest font-bold">{offer.code}</span>
                  </div>
                </div>

                {/* Offer Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-bold block mb-1">
                      {offer.badge}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-2">
                      {offer.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8B6E3F] font-medium mb-3">
                      {offer.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#6E6A63] font-light leading-relaxed mb-6 font-sans">
                      {offer.description}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-3 border-t border-[#A38B68]/15">
                      <span className="text-[10px] uppercase tracking-wider text-[#23211E] font-bold block">
                        Package Inclusions:
                      </span>
                      {offer.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#555047] font-light">
                          <Check size={14} className="text-[#A38B68] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-[#6E6A63]/80 italic mb-6">
                      * {offer.terms}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#A38B68]/15">
                    <button
                      onClick={onOpenReservation}
                      className="w-full sm:flex-1 py-3 rounded-full bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar size={14} />
                      <span>Claim Package Offer</span>
                    </button>

                    <a
                      href={`https://wa.me/66932719103?text=${encodeURIComponent(`Hello Elia Phuket, I would like to book the special offer: ${offer.title} (${offer.code})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-6 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 text-xs uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon size={15} />
                      <span>WhatsApp Promo</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
