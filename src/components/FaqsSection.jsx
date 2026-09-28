import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { top10GuestFaqs, additionalGuestFaqs, allFaqs } from '../data/faqsData';
import { whatsappUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export { top10GuestFaqs, additionalGuestFaqs, allFaqs };

const HOME_FAQS = [
  {
    question: 'What time is check-in and check-out?',
    answer:
      'Check-in is from 2:00 PM and check-out is by 12:00 PM. Early check-in or late check-out is subject to availability.',
  },
  {
    question: 'Is Elia Hotel directly on the beach?',
    answer: top10GuestFaqs[1].answer,
  },
  {
    question: 'Is breakfast included and where is it served?',
    answer: top10GuestFaqs[2].answer,
  },
  {
    question: 'Does Elia have a swimming pool and spa facilities?',
    answer: top10GuestFaqs[3].answer,
  },
  {
    question: 'Can I book massages through the hotel?',
    answer: top10GuestFaqs[4].answer,
  },
  {
    question: 'Does Elia arrange airport transfers?',
    answer: top10GuestFaqs[5].answer,
  },
];

function FaqIntro() {
  return (
    <>
      <span className="block font-sans text-[11px] uppercase tracking-[0.26em] font-normal text-[#C5B7A0]">
        Good to know
      </span>
      <h2 className="mt-5 font-serif font-normal text-[2.35rem] lg:text-[3.15rem] leading-[1.12] tracking-[-0.02em] text-[#1A1612]">
        Your questions,
        <br />
        <span className="italic font-serif font-normal text-gold-gradient">answered.</span>
      </h2>
      <p className="mt-4 font-sans text-[15px] leading-[1.55] font-normal text-[#6E6860] max-w-[20rem]">
        A few helpful details before your stay.
      </p>
    </>
  );
}

function FaqHelp() {
  return (
    <div>
      <h3 className="font-serif font-normal text-[1.45rem] lg:text-[1.6rem] leading-snug text-[#1A1612]">
        Still have a question?
      </h3>
      <p className="mt-2 font-sans text-[15px] leading-relaxed font-normal text-[#6E6860]">
        Our concierge is here to help.
      </p>
      <a
        href={whatsappUrl(WHATSAPP_MESSAGES.default)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-full lg:w-auto lg:min-w-[15.5rem] h-[3.25rem] px-6 rounded-full border border-[#1A1612] text-[#1A1612] font-sans text-[12px] font-medium uppercase tracking-[0.12em] inline-flex items-center justify-center gap-2.5"
      >
        <WhatsAppIcon size={15} />
        WhatsApp Concierge
      </a>
    </div>
  );
}

function FaqList({ openIndex, onToggle }) {
  return (
    <div>
      {HOME_FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question} className="border-b border-[#E4DED3]">
            <button
              type="button"
              onClick={() => onToggle(idx)}
              aria-expanded={isOpen}
              className="w-full py-5 text-left flex items-start justify-between gap-6 cursor-pointer"
            >
              <span className="font-sans text-[15px] lg:text-[16px] font-medium leading-snug text-[#1A1612]">
                {faq.question}
              </span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 font-sans text-[18px] leading-none text-[#C5A880]"
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 font-sans text-[14px] leading-[1.65] font-normal text-[#6E6860] max-w-[34rem]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function FaqsSection({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(0);

  const onToggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faqs" className="bg-[#FAF7F2] text-[#1A1612]">
      <div className="lg:hidden max-w-[22.75rem] min-[390px]:max-w-[24rem] mx-auto px-6 py-16">
        <FaqIntro />
        <div className="mt-10">
          <FaqList openIndex={openIndex} onToggle={onToggle} />
        </div>
        <div className="mt-12">
          <FaqHelp />
        </div>
        {onNavigate && (
          <button
            type="button"
            onClick={() => onNavigate('faq')}
            className="mt-8 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-[#C5A880] cursor-pointer"
          >
            View all 20 FAQs →
          </button>
        )}
      </div>

      <div className="hidden lg:block max-w-7xl mx-auto px-8 xl:px-12 py-24">
        <div className="grid grid-cols-12 gap-16 xl:gap-24 items-start">
          <div className="col-span-5">
            <FaqIntro />
            <div className="mt-16">
              <FaqHelp />
            </div>
          </div>
          <div className="col-span-7 pt-2">
            <FaqList openIndex={openIndex} onToggle={onToggle} />
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('faq')}
                className="mt-8 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-[#C5A880] cursor-pointer"
              >
                View all 20 FAQs →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
