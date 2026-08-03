import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What are the operating hours for the Late Night Menu?',
      answer: 'Our Late Night Menu is served daily from 10:00 PM until 02:00 AM at the Sunset Lounge & Beach Bar. It features gourmet sliders, truffle fries, soft shell crab tacos, artisanal cheeses, craft cocktails, and premium shisha.',
    },
    {
      question: 'When is Elia Boutique Hotel officially opening?',
      answer: 'Elia Boutique Hotel is scheduled to open its doors in November 2026. Private advance reservations for suites, beachfront dining, and exclusive events are currently open.',
    },
    {
      question: 'Where is Elia Boutique Hotel located?',
      answer: 'We are situated along Bang Tao Beach in Cherngtalay, Phuket, Thailand — just 25 minutes from Phuket International Airport (HKT).',
    },
    {
      question: 'Is there a dress code for the Beachfront Restaurant and Late Night Lounge?',
      answer: 'We embrace a "Barefoot Luxury" dress code. Resort chic and elegant beach attire are welcome throughout the day and evening.',
    },
    {
      question: 'How can I make a table or suite reservation?',
      answer: 'You can reserve online using the "Reservations" button on our website, or contact our concierge directly via email at concierge@eliaboutiquehotel.com.',
    },
  ];

  return (
    <section id="faqs" className="relative py-24 sm:py-32 bg-[#F7F4EF] text-[#23211E] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Information & Assistance
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E] mb-4">
            Frequently Asked <span className="italic text-gold-gradient font-serif">Questions</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Everything you need to know about Elia Boutique Hotel, dining, and late-night offerings.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#A38B68]/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-medium text-[#23211E] hover:text-[#A38B68] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-[#A38B68] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={20}
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
                      className="px-6 pb-6 pt-0 border-t border-[#A38B68]/10"
                    >
                      <p className="text-[#6E6A63] text-sm font-light leading-relaxed font-sans mt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
