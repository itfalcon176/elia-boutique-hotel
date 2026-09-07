import { motion } from 'framer-motion';
import { Sparkles, Calendar, Check, ArrowRight, Sun, Heart, Waves } from 'lucide-react';
import { offersData } from '../data/offersData';

export default function SpecialOffersPage({ onNavigate, onOpenReservation }) {
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
              Special Offers
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner matching Section 17 of SEO Pack */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Direct Booking Packages
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            A Little More <span className="italic text-gold-gradient font-serif">Elia</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Discover our latest offers, seasonal stays and direct-booking packages.
          </p>
          <p className="text-[#6E6A63] font-light text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto mt-2">
            From longer stays beside the beach to limited seasonal experiences, this is where you'll find the best reasons to stay a little longer.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offersData.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#A38B68]/25 shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#23211E]/80 backdrop-blur-md text-[#FAF7F2] text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full border border-white/20">
                    {offer.discountBadge}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-bold block mb-1">
                    {offer.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#23211E] mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6A63] font-light leading-relaxed mb-5 font-sans">
                    {offer.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#A38B68]/15">
                    {offer.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#555047] font-light">
                        <Check size={14} className="text-[#A38B68] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-3.5 rounded-full bg-[#23211E] text-white hover:bg-[#A38B68] text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar size={14} />
                  <span>CHECK AVAILABILITY</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fallback Direct Booking Box matching Section 17 of SEO Pack */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-2">
            Nothing complicated. Just book direct.
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            Check our live availability for the latest Elia rates and packages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              CHECK AVAILABILITY
            </button>
            <button
              onClick={() => onNavigate('rooms')}
              className="px-7 py-3.5 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer"
            >
              EXPLORE OUR ROOMS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
