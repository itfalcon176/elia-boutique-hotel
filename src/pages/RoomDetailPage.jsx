import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BedDouble,
  Users,
  Maximize,
  Waves,
  Check,
  Calendar,
  Sparkles,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { roomsData, getRoomBySlug } from '../data/roomsData';

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

export default function RoomDetailPage({ roomSlug, onNavigate, onOpenReservation }) {
  const room = getRoomBySlug(roomSlug) || roomsData[0];

  // Other room suggestions
  const otherRooms = roomsData.filter((r) => r.id !== room.id);

  const whatsappMessage = encodeURIComponent(
    `Hello Elia Phuket Concierge, I would like to check availability for the ${room.title}.`
  );
  const whatsappUrl = `https://wa.me/66932719103?text=${whatsappMessage}`;

  return (
    <div className="pt-24 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
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
            <li>
              <button onClick={() => onNavigate('rooms')} className="hover:text-[#A38B68] transition-colors cursor-pointer">
                Accommodation
              </button>
            </li>
            <li>/</li>
            <li className="text-[#23211E] font-medium" aria-current="page">
              {room.title}
            </li>
          </ol>
        </nav>

        {/* Room Header Title */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A38B68]/15 text-[#8B6E3F] text-[10px] uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={12} />
              <span>{room.tag}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#23211E]">
              {room.title}
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A38B68] font-semibold mt-1 font-sans">
              {room.subtitle}
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-[10px] uppercase tracking-widest text-[#6E6A63] block">Rates starting from</span>
            <span className="font-serif text-2xl sm:text-3xl text-[#23211E] font-medium">{room.pricePerNight}</span>
          </div>
        </div>

        {/* Hero Photo Gallery & Accommodation Category Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Main Photo Display (lg:col-span-9) */}
          <div className="lg:col-span-9 relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-2xl border border-[#A38B68]/30 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={room.id}
                src={room.mainImage}
                alt={`${room.title} at Elia Boutique Hotel Phuket`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs backdrop-blur-md bg-black/40 px-4 py-2.5 rounded-xl border border-white/20">
              <div>
                <span className="font-serif text-sm sm:text-base font-normal tracking-wide block">{room.title}</span>
                <span className="text-[10px] text-white/80">{room.countLabel} • {room.size}</span>
              </div>
              <span className="text-[#C5A880] uppercase tracking-wider text-[10px] font-semibold">Bang Tao Beach, Phuket</span>
            </div>
          </div>

          {/* Thumbnails Sidebar - 4 Accommodations (lg:col-span-3) */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
            {roomsData.map((r) => {
              const isActive = r.id === room.id;
              return (
                <button
                  key={r.id}
                  onClick={() => {
                    onNavigate(`rooms/${r.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[105px] w-32 sm:w-40 lg:w-full shrink-0 border-2 transition-all cursor-pointer text-left group ${
                    isActive
                      ? 'border-[#A38B68] ring-2 ring-[#A38B68]/40 shadow-lg scale-[1.02]'
                      : 'border-transparent opacity-75 hover:opacity-100 hover:border-[#A38B68]/40'
                  }`}
                  aria-label={`View ${r.title}`}
                >
                  <img
                    src={r.mainImage}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-2.5">
                    <span className="text-[11px] font-medium text-white line-clamp-1 leading-tight">
                      {r.title}
                    </span>
                    <span className="text-[9px] text-[#F3DFBF] uppercase tracking-wider">
                      {r.countLabel}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute top-2 right-2 bg-[#A38B68] text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow">
                      Active
                    </div>
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Detailed Room Specs, Description & Action Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Quick Specs Grid Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-white border border-[#A38B68]/30 shadow-md">
              <div className="flex items-center gap-3">
                <Maximize size={22} className="text-[#A38B68]" />
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#6E6A63] font-semibold block">Total Size</span>
                  <span className="text-sm font-semibold text-[#23211E]">{room.size}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users size={22} className="text-[#A38B68]" />
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#6E6A63] font-semibold block">Max Occupancy</span>
                  <span className="text-sm font-semibold text-[#23211E]">{room.maxOccupancyText}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <BedDouble size={22} className="text-[#A38B68]" />
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#6E6A63] font-semibold block">Bed Layout</span>
                  <span className="text-xs font-semibold text-[#23211E]">{room.bedConfig}</span>
                </div>
              </div>
            </div>

            {/* Room Story / Full Description */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#A38B68]/25 shadow-md">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-bold block mb-2 font-sans">
                {room.countLabel ? `${room.countLabel.toUpperCase()} • ${room.locationType ? room.locationType.toUpperCase() : 'BOUTIQUE'}` : 'ACCOMMODATION'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-2">
                {room.headline || room.title}
              </h2>
              <p className="text-[#555047] text-sm sm:text-base font-light font-sans leading-relaxed mb-6">
                {room.fullDesc}
              </p>

              {/* Private Outdoor Area Box */}
              {room.outdoorArea && (
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#A38B68]/30 flex items-start gap-3.5">
                  <Waves size={20} className="text-[#A38B68] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#23211E] mb-1">
                      Private Outdoor Area
                    </h4>
                    <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                      {room.outdoorArea}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Room Key Highlights */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#A38B68]/25 shadow-md">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-bold block mb-2 font-sans">
                Room Highlights
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-6">
                Key Features & Inclusions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2]">
                    <Check size={16} className="text-[#A38B68] shrink-0 mt-0.5" />
                    <span className="text-xs font-light text-[#23211E] leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Action & Reservation Sticky Card (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#23211E] text-[#FAF7F2] border border-[#A38B68]/40 shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block mb-2">
                Direct Reservation
              </span>
              <h3 className="font-serif text-2xl font-light mb-1">
                Reserve {room.title}
              </h3>
              <p className="text-xs text-[#FAF7F2]/70 font-light mb-6">
                Intimate boutique hotel with only 13 rooms on Bang Tao Beach.
              </p>

              <div className="py-4 border-y border-white/10 mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#FAF7F2]/70">Max Occupancy</span>
                  <span className="font-medium text-white">{room.maxOccupancyText}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#FAF7F2]/70">Bed Setup</span>
                  <span className="font-medium text-white">{room.bedConfig}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#FAF7F2]/70">Room Size</span>
                  <span className="font-medium text-white">{room.size}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#FAF7F2]/70">Beach Club</span>
                  <span className="font-medium text-[#C5A880]">GOAT Access Included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C5A880] to-[#9E8259] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar size={15} />
                  <span>CHECK AVAILABILITY</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <WhatsAppIcon size={16} className="text-[#25D366]" />
                  <span>WHATSAPP CONCIERGE</span>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] text-[#FAF7F2]/60 font-light">
                <ShieldCheck size={14} className="text-[#C5A880] shrink-0" />
                <span>50% deposit on booking • Balance before arrival</span>
              </div>
            </div>

            {/* Explore Other Rooms Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#A38B68]/30 shadow-md">
              <h4 className="font-serif text-lg font-medium text-[#23211E] mb-4">
                Other Room Categories
              </h4>
              <div className="space-y-3">
                {otherRooms.map((other) => (
                  <button
                    key={other.id}
                    onClick={() => {
                      onNavigate(`rooms/${other.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full p-3 rounded-xl bg-[#FAF7F2] hover:bg-[#EFECE6] border border-[#A38B68]/15 flex items-center gap-3 text-left transition-all cursor-pointer group"
                  >
                    <img src={other.mainImage} alt={other.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="font-serif text-xs font-semibold text-[#23211E] group-hover:text-[#A38B68]">
                        {other.title}
                      </div>
                      <div className="text-[10px] text-[#6E6A63] font-light">
                        {other.size} • {other.maxOccupancyText}
                      </div>
                    </div>
                    <ArrowRight size={13} className="text-[#A38B68]" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
