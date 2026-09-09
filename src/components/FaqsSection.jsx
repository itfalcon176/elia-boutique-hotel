import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { top10GuestFaqs, additionalGuestFaqs, allFaqs } from '../data/faqsData';

export { top10GuestFaqs, additionalGuestFaqs, allFaqs };

export default function FaqsSection({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="relative py-20 sm:py-28 bg-[#F7F4EF] text-[#23211E] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block font-sans">
            Top Guest FAQs
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E] mb-4">
            Frequently Asked <span className="italic text-gold-gradient font-serif">Questions</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Key information for your stay at Elia Boutique Hotel Phuket, dining at GOAT Beach Club, hotel facilities, and concierge services.
          </p>
        </div>

        {/* Top 10 Accordion List */}
        <div className="space-y-3.5 mb-10">
          {top10GuestFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#A38B68]/20 overflow-hidden shadow-sm transition-all duration-300 hover:border-[#A38B68]/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#23211E] hover:text-[#A38B68] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#A38B68]/15 text-[#8B6E3F] text-xs font-sans font-semibold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#A38B68] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-6 pt-0 border-t border-[#A38B68]/10"
                    >
                      <p className="text-[#6E6A63] text-xs sm:text-sm font-light leading-relaxed font-sans mt-3.5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* View All FAQs Link */}
        {onNavigate && (
          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('faq')}
              className="px-8 py-3 rounded-full bg-[#23211E] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              EXPLORE ALL 20 GUEST FAQS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
