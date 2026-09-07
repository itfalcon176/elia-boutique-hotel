import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle, Utensils, BedDouble, ChevronDown, Sparkles, Navigation } from 'lucide-react';
import FaqsSection from '../components/FaqsSection';

const WhatsAppIcon = ({ size = 20, ...props }) => (
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

export default function ContactPage() {
  const [tab, setTab] = useState('stay');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [roomType, setRoomType] = useState('Garden Beach Rooms');
  const [guests, setGuests] = useState('2 Guests');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/66932719103?text=${encodeURIComponent(
    `Hello Elia Phuket, I would like to inquire about a reservation (${tab === 'stay' ? 'Suite Stay' : 'Dining Table'}).`
  )}`;

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              24/7 Personal Concierge
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Contact & <span className="italic text-gold-gradient font-serif">Inquiries</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Our personal concierge team is available around the clock. Connect with us via WhatsApp, Telephone, or Email for reservations, customized island itineraries, and airport transfers.
          </p>
        </div>

        {/* 3 Contact Channels Cards (Strictly: WhatsApp · Telephone · Email) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Channel 1: WhatsApp */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-3xl bg-white border border-[#25D366]/40 shadow-lg hover:shadow-2xl hover:border-[#25D366] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <WhatsAppIcon size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#25D366] font-bold block mb-1">
                Fastest Response (Instant)
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-2">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                Connect directly with our 24/7 front desk host for instant booking confirmations and live inquiries.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#A38B68]/15 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#23211E]">+66 93 271 9103</span>
              <span className="text-xs text-[#25D366] font-bold group-hover:translate-x-1 transition-transform">
                Chat Now →
              </span>
            </div>
          </a>

          {/* Channel 2: Telephone */}
          <a
            href="tel:+66932719103"
            className="p-8 rounded-3xl bg-white border border-[#A38B68]/30 shadow-lg hover:shadow-2xl hover:border-[#A38B68] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-1">
                Direct Telephone Line
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-2">
                Voice Concierge
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                Speak directly with our reservation managers in English, Thai, or Russian.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#A38B68]/15 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#23211E]">+66 93 271 9103</span>
              <span className="text-xs text-[#A38B68] font-bold group-hover:translate-x-1 transition-transform">
                Call Now →
              </span>
            </div>
          </a>

          {/* Channel 3: Email */}
          <a
            href="mailto:info@eliaphuket.com"
            className="p-8 rounded-3xl bg-white border border-[#A38B68]/30 shadow-lg hover:shadow-2xl hover:border-[#A38B68] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#A38B68] font-bold block mb-1">
                Electronic Mail
              </span>
              <h3 className="font-serif text-2xl font-light text-[#23211E] mb-2">
                Email Desk
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                For detailed event buyouts, honeymoon itineraries, long-stay proposals, and media inquiries.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#A38B68]/15 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#23211E]">info@eliaphuket.com</span>
              <span className="text-xs text-[#A38B68] font-bold group-hover:translate-x-1 transition-transform">
                Send Email →
              </span>
            </div>
          </a>

        </div>

        {/* Main Grid: Location / Map on Left + Reservation Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left: Location & Directions Card (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#A38B68]/30 shadow-xl space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-bold block mb-1">
                Our Beachfront Address
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-2">
                Find Elia Phuket
              </h2>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                Located on the tranquil shores of Bang Tao Beach in the Cherngtalay district of Phuket.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-4 text-xs text-[#555047] font-light">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF7F2]">
                <MapPin size={18} className="text-[#A38B68] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#23211E] block font-medium">Hotel Address</strong>
                  <span>Bang Tao Beach, Cherngtalay, Thalang District, Phuket 83110, Thailand</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF7F2]">
                <Navigation size={18} className="text-[#A38B68] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#23211E] block font-medium">Airport Distance</strong>
                  <span>25 Minutes (18 km) south of Phuket International Airport (HKT)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF7F2]">
                <Clock size={18} className="text-[#A38B68] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#23211E] block font-medium">Front Desk & Concierge</strong>
                  <span>Open 24 Hours / 7 Days a week</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-[#A38B68]/30 relative shadow-inner">
              <iframe
                title="Elia Phuket Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15804.821360555353!2d98.2831!3d7.9942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050307c87c716e9%3A0x7ce087f8aa982cf1!2sBang%20Tao%20Beach!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <a
              href="https://maps.google.com/?q=Bang+Tao+Beach+Phuket"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#FAF7F2] hover:bg-[#23211E] hover:text-white text-[#23211E] text-xs uppercase tracking-[0.2em] font-semibold border border-[#A38B68]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <Navigation size={13} />
            </a>
          </div>

          {/* Right: Reservation & Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#A38B68]/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#A38B68]/20 text-[#A38B68] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-serif text-3xl font-light text-[#23211E] mb-2">
                  Request Received
                </h3>
                <p className="text-[#6E6A63] text-xs sm:text-sm font-light max-w-sm mx-auto mb-6 font-sans">
                  Thank you, <strong className="text-[#23211E] font-semibold">{name}</strong>. Our personal concierge host will reach out to your email or WhatsApp within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-[#23211E] text-[#F7F4EF] font-semibold text-xs uppercase tracking-widest hover:bg-[#A38B68] transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-bold block mb-1">
                    Online Inquiry
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E]">
                    Send a Reservation Request
                  </h3>
                </div>

                {/* Tab Switcher: Stay vs Table */}
                <div className="flex items-center gap-3 mb-6 bg-[#FAF7F2] p-1.5 rounded-full border border-[#A38B68]/25">
                  <button
                    type="button"
                    onClick={() => setTab('stay')}
                    className={`flex-1 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      tab === 'stay'
                        ? 'bg-[#23211E] text-[#F7F4EF] shadow'
                        : 'text-[#23211E]/70 hover:text-[#23211E]'
                    }`}
                  >
                    <BedDouble size={14} />
                    <span>Suite Stay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTab('table')}
                    className={`flex-1 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      tab === 'table'
                        ? 'bg-[#23211E] text-[#F7F4EF] shadow'
                        : 'text-[#23211E]/70 hover:text-[#23211E]'
                    }`}
                  >
                    <Utensils size={14} />
                    <span>Dining Table (GOAT)</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Alexander Vance"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alexander@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 555 0192"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Preferred Date *
                      </label>
                      <input
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="6+ VIP">6+ Guests (VIP / Family)</option>
                      </select>
                    </div>
                  </div>

                  {tab === 'stay' && (
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Preferred Room Category
                      </label>
                      <select
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      >
                        <option value="Garden Beach Rooms">Garden Beach Rooms (Direct Beach Path)</option>
                        <option value="Garden Family Suites">Garden Family Suites (Multi-Room Oasis)</option>
                        <option value="Loft Apartments">Loft Apartments (Double-Height Mezzanine)</option>
                        <option value="One-Bedroom Loft Suite">One-Bedroom Loft Suite (Flagship Penthouse)</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your flight arrival, dietary preferences, or anniversary celebration notes..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#23211E] hover:bg-[#A38B68] text-[#F7F4EF] font-semibold text-xs uppercase tracking-[0.22em] transition-all shadow-md cursor-pointer"
                  >
                    Submit Reservation Request
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>

        {/* FAQs Section Underneath Contact */}
        <div className="mt-12 pt-12 border-t border-[#A38B68]/20">
          <FaqsSection />
        </div>

      </div>
    </div>
  );
}
