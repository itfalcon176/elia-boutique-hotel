import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, Wifi, Clock, Waves, Utensils, Heart, Shield, Phone } from 'lucide-react';

export const top10GuestFaqs = [
  {
    id: 1,
    category: 'Top 10 Essentials',
    question: 'What time is check-in and check-out?',
    answer: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Late checkout may be available on request, subject to availability.',
  },
  {
    id: 2,
    category: 'Top 10 Essentials',
    question: 'Is Elia Hotel directly on the beach?',
    answer: 'Yes. Elia is located directly on Bang Tao Beach, with the rooms only a short walk from the sand. Guests also receive complimentary access to GOAT Beach Club.',
  },
  {
    id: 3,
    category: 'Top 10 Essentials',
    question: 'Is breakfast included?',
    answer: 'Breakfast is served at GOAT Beach Club next to the hotel.',
  },
  {
    id: 4,
    category: 'Top 10 Essentials',
    question: 'Does Elia have a swimming pool and spa facilities?',
    answer: 'Yes. Elia has a plunge pool, outdoor spa area with sauna, cold plunge and jacuzzi, plus in-house massage facilities.',
  },
  {
    id: 5,
    category: 'Top 10 Essentials',
    question: 'Can I book massages through the hotel?',
    answer: 'Yes. Massages can be booked directly through the Elia Concierge App or via reception.',
  },
  {
    id: 6,
    category: 'Top 10 Essentials',
    question: 'Does Elia arrange airport transfers and taxis?',
    answer: 'Yes. Airport transfers, taxis and private transport can be arranged through the Elia Concierge App or reception.',
  },
  {
    id: 7,
    category: 'Top 10 Essentials',
    question: 'Can Elia help arrange tours and excursions in Phuket?',
    answer: 'Yes. Our concierge can assist with island trips, boat tours, activities, restaurants and other Phuket experiences.',
  },
  {
    id: 8,
    category: 'Top 10 Essentials',
    question: 'Is Elia suitable for families and children?',
    answer: 'Yes. Elia is family-friendly and has a Kids Club. Cots are available free of charge when booked in advance, and extra beds are available on request.',
  },
  {
    id: 9,
    category: 'Top 10 Essentials',
    question: 'Is Wi-Fi free, and is it available throughout the hotel?',
    answer: 'Yes. Complimentary Wi-Fi is available for hotel guests throughout the property. Network: Elia | Password: Elia',
    wifiNote: { network: 'Elia', password: 'Elia' },
  },
  {
    id: 10,
    category: 'Top 10 Essentials',
    question: 'How can I contact reception during my stay?',
    answer: 'Guests can contact reception through the Elia Concierge App, by WhatsApp (+66 82 489 9371), or by telephone (+66 93 271 9103 / in-room phone).',
  },
];

export const additionalGuestFaqs = [
  {
    id: 11,
    category: 'Booking & Policies',
    question: 'What is the payment policy for direct bookings?',
    answer: 'For standard direct reservations, 50% of the accommodation total is payable when booking. The remaining balance is payable before arrival in accordance with your booking confirmation.',
  },
  {
    id: 12,
    category: 'Booking & Policies',
    question: 'What is the cancellation policy?',
    answer: 'Cancellations made in accordance with your confirmed rate plan are eligible for refund or date modifications. Payment and cancellation terms displayed during checkout are synchronised with Cloudbeds.',
  },
  {
    id: 13,
    category: 'Family & Children',
    question: 'How do children charges and extra beds work?',
    answer: 'Children staying within standard room occupancy are welcomed. Cots are provided free of charge when requested in advance. Additional fold-up beds can be arranged for family suites upon request.',
  },
  {
    id: 14,
    category: 'Property Rules',
    question: 'Are pets allowed at Elia?',
    answer: 'To preserve the peaceful, tranquil atmosphere for all resident guests, pets are generally not permitted on the property unless special advance arrangements have been confirmed with hotel management.',
  },
  {
    id: 15,
    category: 'Property Rules',
    question: 'Is parking available on site?',
    answer: 'Yes. Complimentary private parking is available for resident guests. Please notify our concierge in advance if you require parking or private driver staging.',
  },
  {
    id: 16,
    category: 'Property Rules',
    question: 'What is the smoking policy?',
    answer: 'All indoor guest suites and enclosed facilities are strictly non-smoking. Designated outdoor smoking areas are available on private terraces and open-air garden zones.',
  },
  {
    id: 17,
    category: 'Dining & Services',
    question: 'Can I order room service?',
    answer: 'Yes. Room service is available courtesy of GOAT Beach Club. Enjoy restaurant-quality food and drinks delivered directly to your room or private terrace.',
  },
  {
    id: 18,
    category: 'Dining & Services',
    question: 'What is in the minibar, and is tea/coffee free?',
    answer: 'Each room includes a carefully selected minibar with chilled drinks, beers, wines and quality snacks. Premium tea and coffee are complimentary in every room.',
  },
  {
    id: 19,
    category: 'Housekeeping & Comfort',
    question: 'What housekeeping services are provided?',
    answer: 'Daily housekeeping and evening turndown service are provided for all suites. Fresh bath towels, eco-linen changes, and beach towels are refreshed daily.',
  },
  {
    id: 20,
    category: 'Beach & Loungers',
    question: 'How do beach loungers work at Elia and GOAT Beach Club?',
    answer: 'Ground-floor Garden Beach Rooms and Suites feature private loungers and umbrellas on their own terraces. In addition, all Elia guests receive complimentary access to GOAT Beach Club loungers right on Bang Tao Beach.',
  },
];

export const allFaqs = [...top10GuestFaqs, ...additionalGuestFaqs];

export default function FaqsSection() {
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

                      {faq.wifiNote && (
                        <div className="mt-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/25 inline-flex items-center gap-4 text-xs font-sans">
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

        {/* View All FAQs Link */}
        <div className="text-center pt-2">
          <p className="text-xs text-[#6E6A63] font-light mb-3">
            Looking for cancellation, payment, pets, parking, or housekeeping information?
          </p>
        </div>
      </div>
    </section>
  );
}
