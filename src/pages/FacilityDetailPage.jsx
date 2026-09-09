import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Flame,
  Droplets,
  Bath,
  Waves,
  Heart,
  Bell,
  Check,
  Calendar,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Phone,
} from 'lucide-react';
import { wellnessData, getFacilityBySlug } from '../data/wellnessData';

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

export default function FacilityDetailPage({ facilitySlug, onNavigate, onOpenReservation }) {
  const facility = getFacilityBySlug(facilitySlug) || wellnessData.facilities[0];
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const gallery = facility.galleryImages || [facility.image];
  const otherFacilities = wellnessData.facilities.filter((f) => f.id !== facility.id);

  const whatsappMessage = encodeURIComponent(
    `Hello Elia Phuket Concierge, I would like to inquire about the ${facility.title}.`
  );
  const whatsappUrl = `https://wa.me/66932719103?text=${whatsappMessage}`;

  return (
    <div className="pt-24 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Breadcrumbs */}
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
            <li>
              <button
                onClick={() => onNavigate('facilities')}
                className="hover:text-[#A38B68] transition-colors cursor-pointer"
              >
                Facilities
              </button>
            </li>
            <li>/</li>
            <li className="text-[#23211E] font-medium" aria-current="page">
              {facility.title}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A38B68]/15 text-[#8B6E3F] text-[10px] uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={12} />
              <span>{facility.tag}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#23211E]">
              {facility.title}
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A38B68] font-semibold mt-1 font-sans">
              {facility.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-white border border-[#A38B68]/30 text-xs font-mono font-medium text-[#23211E] shadow-sm">
              {facility.spec}
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#23211E] text-white text-xs font-sans font-semibold tracking-wider uppercase shadow-sm">
              {facility.access}
            </span>
          </div>
        </div>

        {/* Photo Gallery & Quick Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main Photo Display (9 Cols) */}
          <div className="lg:col-span-9 relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-2xl border border-[#A38B68]/30 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePhotoIdx}
                src={gallery[activePhotoIdx] || facility.image}
                alt={`${facility.title} at Elia Boutique Hotel Bang Tao Phuket`}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Photo Navigation Overlay */}
            {gallery.length > 1 && (
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  {gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activePhotoIdx === idx ? 'w-8 bg-[#C5A880]' : 'w-2 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActivePhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length)
                    }
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#23211E] hover:bg-[#23211E] hover:text-white transition-all shadow-md cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActivePhotoIdx((prev) => (prev + 1) % gallery.length)}
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#23211E] hover:bg-[#23211E] hover:text-white transition-all shadow-md cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Facility Switcher Sidebar (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white border border-[#A38B68]/20 shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-2 font-sans">
                Operating Hours & Specs
              </span>
              <div className="space-y-2 text-xs text-[#555047] font-light">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#A38B68]" />
                  <span>{facility.timing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#A38B68]" />
                  <span>In-House Guests Only</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-4 rounded-2xl bg-white border border-[#A38B68]/20 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-3 font-sans">
                  Explore All Facilities
                </span>
                <div className="space-y-1.5">
                  {wellnessData.facilities.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => onNavigate(`facilities/${f.slug}`)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                        f.slug === facility.slug
                          ? 'bg-[#23211E] text-white font-semibold'
                          : 'bg-[#FAF7F2] text-[#555047] hover:bg-[#A38B68]/15 hover:text-[#23211E]'
                      }`}
                    >
                      <span>{f.shortTitle || f.title}</span>
                      <ArrowRight size={12} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#A38B68]/15">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:brightness-105 transition-all shadow-sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Ask Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive Description & Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Description (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-1 font-sans">
                Experience Details
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#23211E]">
                Restorative Sanctuary on Bang Tao Beach
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#555047] font-light leading-relaxed font-sans">
              <p>{facility.description}</p>
            </div>

            {/* Checklist of Features */}
            {facility.details && facility.details.length > 0 && (
              <div className="pt-4">
                <h3 className="font-serif text-lg font-medium text-[#23211E] mb-3">
                  Highlights & Features
                </h3>
                <ul className="space-y-2.5">
                  {facility.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light font-sans">
                      <div className="w-5 h-5 rounded-full bg-[#A38B68]/20 flex items-center justify-center text-[#8B6E3F] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Step-by-Step Experience Guide */}
            {facility.howToEnjoy && facility.howToEnjoy.length > 0 && (
              <div className="p-6 rounded-2xl bg-white border border-[#A38B68]/25 shadow-sm space-y-3">
                <h3 className="font-serif text-lg font-medium text-[#23211E]">
                  How to Enjoy the Protocol
                </h3>
                <div className="space-y-2">
                  {facility.howToEnjoy.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light font-sans">
                      <span className="w-5 h-5 rounded-full bg-[#23211E] text-white text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Key Health Benefits Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-1 font-sans">
                Wellness Principles
              </span>
              <h2 className="font-serif text-2xl font-light text-[#23211E]">
                Key Health & Restorative Benefits
              </h2>
            </div>

            <div className="space-y-3">
              {facility.benefits && facility.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#A38B68]/20 shadow-sm hover:border-[#A38B68] transition-colors"
                >
                  <h4 className="font-serif text-base font-medium text-[#23211E] mb-1 text-[#8B6E3F]">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contrast Therapy Circuit Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#23211E] to-[#181715] text-white space-y-3 shadow-lg">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                The Elia Contrast Circuit
              </span>
              <h4 className="font-serif text-lg font-light">
                Sauna • Cold Plunge • Jacuzzi • Rest
              </h4>
              <p className="text-xs text-white/75 font-light leading-relaxed">
                Cycle through 15 mins Nordic cedar heat (85°C), 2-3 mins cold immersion (8°C), and 10 mins magnesium hydrotherapy for peak dopamine and vitality.
              </p>
              <button
                onClick={() => onNavigate('facilities')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] hover:text-white font-semibold pt-1 cursor-pointer transition-colors"
              >
                <span>VIEW FULL CONTRAST GUIDE</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        {facility.faqs && facility.faqs.length > 0 && (
          <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-white border border-[#A38B68]/25 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold mb-2 block font-sans">
                Helpful Information
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#23211E]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {facility.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#A38B68]/20">
                  <h4 className="font-serif text-base font-medium text-[#23211E] mb-2 flex items-start gap-2">
                    <HelpCircle size={16} className="text-[#A38B68] shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#23211E] via-[#2D2A26] to-[#1C1A18] text-[#FAF7F2] text-center shadow-xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block mb-2 font-sans">
            Elia Boutique Hotel Phuket
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-3">
            Experience {facility.title} Steps From the Beach
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/80 font-light max-w-xl mx-auto leading-relaxed mb-6 font-sans">
            Enjoy full complimentary access to our outdoor sauna, cold plunge, jacuzzi, plunge pool, and GOAT Beach Club throughout your stay.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all cursor-pointer shadow-lg"
            >
              BOOK YOUR STAY
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>WHATSAPP CONCIERGE</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
