import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const officialFaqs = [
  {
    question: 'Where is Elia Boutique Hotel?',
    answer: 'Elia is located beside Bang Tao Beach in Choeng Thale on Phuket\'s west coast.',
  },
  {
    question: 'Is Elia directly on Bang Tao Beach?',
    answer: 'Elia is positioned just moments from Bang Tao Beach, with the beachfront and GOAT Beach Club immediately beside the hotel.',
  },
  {
    question: 'How many rooms does Elia have?',
    answer: 'Elia is an intimate boutique hotel with only 13 rooms and suites.',
  },
  {
    question: 'What room types does Elia have?',
    answer: 'Elia has eight Garden Beach Rooms, two Garden Family Suites, two Loft Apartments and one One-Bedroom Loft Suite.',
  },
  {
    question: 'Is Elia suitable for families?',
    answer: 'Yes. Elia offers family suites, a kids club, a plunge pool and easy access to Bang Tao Beach. Cots can also be provided free of charge when booked in advance.',
  },
  {
    question: 'What is the maximum room occupancy?',
    answer: 'Garden Beach Rooms and Loft Apartments accommodate up to two adults and one child. Garden Family Suites and the One-Bedroom Loft Suite accommodate up to three adults and one child or two adults and two children.',
  },
  {
    question: 'Does Elia have a swimming pool?',
    answer: 'Elia has a plunge pool as part of its guest facilities.',
  },
  {
    question: 'Does Elia have a spa?',
    answer: 'Elia has an outdoor wellness area featuring a sauna, cold plunge and jacuzzi, together with massage treatments.',
  },
  {
    question: 'Do Elia guests have access to GOAT Beach Club?',
    answer: 'Yes. Elia guests receive complimentary access to GOAT Beach Club. Food, beverages, reserved seating and paid experiences are additional unless specifically included in your booking.',
  },
  {
    question: 'Does Elia serve breakfast?',
    answer: 'Breakfast is available through GOAT Beach Club, located immediately beside Elia.',
  },
  {
    question: 'Can I order food to my room?',
    answer: 'Yes. Room service is available from GOAT Beach Club.',
  },
  {
    question: 'Does Elia have a minibar?',
    answer: 'Yes. Guest rooms feature a minibar with selected drinks and snacks. Complimentary tea and coffee are also provided.',
  },
  {
    question: 'Does Elia provide Wi-Fi?',
    answer: 'Yes. Wi-Fi is available to Elia guests.',
  },
  {
    question: 'What time is check-in?',
    answer: 'Check-in is from 3:00 PM.',
  },
  {
    question: 'What time is check-out?',
    answer: 'Check-out is at 11:00 AM. Late checkout may be available on request and is subject to availability.',
  },
  {
    question: 'Can Elia arrange an airport transfer?',
    answer: 'Yes. Airport transfers and private transport can be arranged through Elia.',
  },
  {
    question: 'Can Elia arrange Phuket tours and activities?',
    answer: 'Yes. The concierge can assist with excursions, boat trips and other Phuket experiences.',
  },
  {
    question: 'How do I contact Elia?',
    answer: 'You can contact Elia by WhatsApp (+66 82 489 9371), telephone (+66 93 271 9103) or email at info@eliaphuket.com.',
  },
];

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="relative py-20 sm:py-28 bg-[#F7F4EF] text-[#23211E] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block font-sans">
            Information & Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23211E] mb-4">
            Elia Frequently Asked <span className="italic text-gold-gradient font-serif">Questions</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans">
            Everything you need to know about Elia Boutique Hotel, location, beach access, family stays, dining, wellness and GOAT Beach Club.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {officialFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#A38B68]/20 overflow-hidden shadow-sm transition-all duration-300 hover:border-[#A38B68]/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#23211E] hover:text-[#A38B68] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#A38B68] shrink-0" />
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
      </div>
    </section>
  );
}
