import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Sparkles,
  Clock,
  Waves,
  Phone,
  Check,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { allFaqs } from '../data/faqsData';

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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      {/* Schema.org FAQPage Structured Data for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: allFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#6E6A63] font-sans">
          <ol className="flex items-center gap-2">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-[#A38B68] transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>/</li>
            <li className="text-[#23211E] font-medium" aria-current="page">
              FAQ
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Elia Concierge & Guest Guide
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Frequently Asked <span className="italic text-gold-gradient font-serif">Questions</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-5" />

          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about staying at Elia Boutique Hotel Phuket — check-in, beach & GOAT Beach Club access, dining, wellness spa, transfers, and 24/7 concierge assistance.
          </p>
        </div>

        {/* 4 Quick Key Essentials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* Card 1: Check-in / Out */}
          <div className="p-4 rounded-2xl bg-white border border-[#A38B68]/25 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#A38B68]/15 text-[#8B6E3F] flex items-center justify-center shrink-0">
                <Clock size={16} />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#23211E]">Check-In / Out</span>
            </div>
            <div className="space-y-1 text-xs text-[#555047]">
              <div>Check-in: <strong className="text-[#23211E]">3:00 PM</strong></div>
              <div>Check-out: <strong className="text-[#23211E]">11:00 AM</strong></div>
            </div>
          </div>

          {/* Card 2: Wi-Fi Access */}
          <div className="p-4 rounded-2xl bg-white border border-[#A38B68]/25 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#A38B68]/15 text-[#8B6E3F] flex items-center justify-center shrink-0">
                <Sparkles size={16} />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#23211E]">Free Fast Wi-Fi</span>
            </div>
            <p className="text-xs text-[#555047]">
              Complimentary high-speed fiber throughout all suites & beach club.
            </p>
          </div>

          {/* Card 3: Beach Access */}
          <div className="p-4 rounded-2xl bg-white border border-[#A38B68]/25 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#A38B68]/15 text-[#8B6E3F] flex items-center justify-center shrink-0">
                <Waves size={16} />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#23211E]">Beach & GOAT Club</span>
            </div>
            <p className="text-xs text-[#555047]">
              Direct Bang Tao Beach location with complimentary GOAT Club access.
            </p>
          </div>

          {/* Card 4: 24/7 Concierge */}
          <div className="p-4 rounded-2xl bg-white border border-[#A38B68]/25 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#A38B68]/15 text-[#8B6E3F] flex items-center justify-center shrink-0">
                <WhatsAppIcon size={16} className="text-[#25D366]" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#23211E]">WhatsApp Host</span>
            </div>
            <a
              href="https://wa.me/66932719103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#8B6E3F] hover:text-[#23211E] flex items-center gap-1 transition-colors"
            >
              <span>+66 93 271 9103</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-16">
          {allFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#A38B68] shadow-md ring-1 ring-[#A38B68]/20'
                    : 'border-[#A38B68]/20 hover:border-[#A38B68]/40 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#23211E] hover:text-[#A38B68] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3.5">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-sans font-bold flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#23211E] text-[#F7F4EF]' : 'bg-[#A38B68]/15 text-[#8B6E3F]'
                      }`}
                    >
                      {faq.id}
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#A38B68] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="px-5 sm:px-6 pb-6 pt-0 border-t border-[#A38B68]/10"
                    >
                      <p className="text-[#555047] text-xs sm:text-sm font-light leading-relaxed font-sans mt-3.5">
                        {faq.answer}
                      </p>

                      {/* Interactive Highlights Badges */}
                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#A38B68]/10">
                          {faq.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#A38B68]/20 text-[11px] font-sans text-[#23211E]"
                            >
                              <Check size={12} className="text-[#A38B68]" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Direct Action Links for key questions */}
                      {faq.id === 10 && (
                        <div className="mt-4 flex flex-wrap gap-2.5">
                          <a
                            href="https://wa.me/66932719103"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:brightness-105 transition-all"
                          >
                            <WhatsAppIcon size={14} />
                            <span>WhatsApp Host</span>
                          </a>
                          <a
                            href="tel:+66932719103"
                            className="px-4 py-2 rounded-full bg-[#23211E] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#A38B68] transition-all"
                          >
                            <Phone size={13} />
                            <span>Call Reception</span>
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Concierge Assistance Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#23211E] text-[#FAF7F2] border border-[#A38B68]/40 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block mb-2 font-sans">
              Elia Concierge App & Direct Support
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-light mb-3">
              Have a Specific Question or Custom Request?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 font-light leading-relaxed mb-8">
              Our 24/7 host team is available via WhatsApp, phone, or email to assist with room selection, dietary requirements, airport transfers, boat charters, and island experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/66932719103?text=Hello%20Elia%20Phuket%20Concierge%2C%20I%20have%20a%20question%20about%20staying%20at%20Elia."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>WHATSAPP: +66 93 271 9103</span>
              </a>

              <button
                onClick={() => (onNavigate ? onNavigate('rooms') : null)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Calendar size={15} />
                <span>BOOK YOUR STAY</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
