import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, Wifi, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { allFaqs, top10GuestFaqs, additionalGuestFaqs } from '../components/FaqsSection';

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

export default function FaqsPage({ onNavigate, onOpenReservation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ['All', 'Top 10 Essentials', 'Booking & Policies', 'Dining & Services', 'Property Rules', 'Family & Children', 'Beach & Loungers'];

  const filteredFaqs = selectedCategory === 'All'
    ? allFaqs
    : allFaqs.filter((item) => item.category === selectedCategory || (selectedCategory === 'Top 10 Essentials' && item.id <= 10));

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              FAQ
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Elia Concierge & Guest Guide
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Elia Frequently Asked <span className="italic text-gold-gradient font-serif">Questions</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Elia Boutique Hotel Phuket, including check-in/out, beach access, GOAT Beach Club, facilities, cancellation, family stays, and concierge services.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 mb-10 px-1 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#23211E] text-[#F7F4EF] shadow-md scale-105 border border-[#A38B68]'
                  : 'bg-white text-[#555047] border border-[#A38B68]/20 hover:bg-[#EFECE6] hover:text-[#23211E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-16">
          {filteredFaqs.map((faq, idx) => {
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
                      {faq.id}
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

                      {faq.wifiNote && (
                        <div className="mt-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/25 inline-flex items-center gap-4 text-xs font-sans">
                          <div className="flex items-center gap-1.5 text-[#23211E]">
                            <Wifi size={14} className="text-[#A38B68]" />
                            <span><strong>Network:</strong> {faq.wifiNote.network}</span>
                          </div>
                          <div className="h-3 w-[1px] bg-[#A38B68]/30" />
                          <div className="text-[#23211E]">
                            <span><strong>Password:</strong> {faq.wifiNote.password}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 24/7 Concierge Host Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#23211E] to-[#181715] text-[#FAF7F2] border border-[#A38B68]/40 shadow-2xl text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block">
            Elia Concierge App & Support
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
            Have a Specific Question or Request?
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/80 font-light max-w-md mx-auto font-sans leading-relaxed">
            Our 24/7 host is available via WhatsApp, telephone, or email to assist with room preferences, boat charters, transfers, and dining reservations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/66824899371"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:brightness-110 flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>WhatsApp: +66 82 489 9371</span>
            </a>
            <button
              onClick={onOpenReservation}
              className="px-6 py-3.5 rounded-full bg-[#C5A880] text-[#141312] text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 shadow-md cursor-pointer transition-all"
            >
              BOOK YOUR STAY
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
