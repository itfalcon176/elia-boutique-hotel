import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle, Navigation, Sparkles } from 'lucide-react';
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

export default function ContactPage({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#6E6A63] font-sans">
          <ol className="flex items-center gap-2">
            <li>
              <button onClick={() => onNavigate && onNavigate('home')} className="hover:text-[#A38B68] transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>/</li>
            <li className="text-[#23211E] font-medium" aria-current="page">
              Location
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <MapPin size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Location & Contact
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Location & Contact at <span className="italic text-gold-gradient font-serif">Elia</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-2">
            Bang Tao Beach, Phuket
          </h2>
          <p className="text-[#8B6E3F] font-serif italic text-lg">
            Directly by the sea. Always here to assist.
          </p>
        </div>

        {/* 4 Core Action Buttons Row matching Section 16 of SEO Pack */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <a
            href="https://wa.me/66824899371"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white border border-[#A38B68]/30 shadow-md hover:shadow-xl hover:border-[#A38B68] transition-all flex flex-col items-center text-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center group-hover:scale-110 transition-transform">
              <WhatsAppIcon size={24} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#23211E] block mb-1">
                WHATSAPP
              </span>
              <span className="text-xs text-[#8B6E3F] font-medium">+66 82 489 9371</span>
            </div>
          </a>

          <a
            href="tel:+66932719103"
            className="p-6 rounded-3xl bg-white border border-[#A38B68]/30 shadow-md hover:shadow-xl hover:border-[#A38B68] transition-all flex flex-col items-center text-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#23211E] block mb-1">
                CALL
              </span>
              <span className="text-xs text-[#8B6E3F] font-medium">+66 93 271 9103</span>
            </div>
          </a>

          <a
            href="mailto:info@eliaphuket.com"
            className="p-6 rounded-3xl bg-white border border-[#A38B68]/30 shadow-md hover:shadow-xl hover:border-[#A38B68] transition-all flex flex-col items-center text-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#23211E] block mb-1">
                EMAIL
              </span>
              <span className="text-xs text-[#8B6E3F] font-medium">info@eliaphuket.com</span>
            </div>
          </a>

          <a
            href="https://maps.google.com/?q=Bang+Tao+Beach+Phuket"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white border border-[#A38B68]/30 shadow-md hover:shadow-xl hover:border-[#A38B68] transition-all flex flex-col items-center text-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Navigation size={24} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#23211E] block mb-1">
                GET DIRECTIONS
              </span>
              <span className="text-xs text-[#8B6E3F] font-medium">Bang Tao Beach</span>
            </div>
          </a>
        </div>

        {/* Address Card & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left: Address Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#A38B68]/30 shadow-xl space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-bold block mb-1">
                Hotel Address
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E]">
                Elia Boutique Hotel Phuket
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#A38B68]/20 space-y-2 text-xs text-[#555047] font-light leading-relaxed">
              <p className="font-medium text-[#23211E] text-sm font-serif">82/9 Moo 3</p>
              <p>Bang Tao Beach</p>
              <p>Choeng Thale, Thalang District</p>
              <p>Phuket 83110, Thailand</p>
            </div>

            <div className="space-y-3.5 text-xs text-[#555047] font-light">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#A38B68] shrink-0" />
                <p>
                  <strong className="text-[#23211E] font-medium">WhatsApp Concierge:</strong>{' '}
                  <a href="https://wa.me/66824899371" target="_blank" rel="noopener noreferrer" className="hover:text-[#A38B68] underline">
                    +66 82 489 9371
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#A38B68] shrink-0" />
                <p>
                  <strong className="text-[#23211E] font-medium">Front Desk Telephone:</strong>{' '}
                  <a href="tel:+66932719103" className="hover:text-[#A38B68]">
                    +66 93 271 9103
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#A38B68] shrink-0" />
                <p>
                  <strong className="text-[#23211E] font-medium">Email Inquiries:</strong>{' '}
                  <a href="mailto:info@eliaphuket.com" className="hover:text-[#A38B68] underline">
                    info@eliaphuket.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#A38B68]/15 text-[11px] text-[#8B6E3F]">
                <Clock size={14} className="shrink-0" />
                <span>Front Desk & Concierge: 24 Hours Daily</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#hotel-map"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FAF7F2] hover:bg-[#23211E] text-[#23211E] hover:text-[#F7F4EF] border border-[#A38B68]/40 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm group"
              >
                <Navigation size={14} className="text-[#A38B68] group-hover:text-[#F7F4EF] transition-colors" />
                <span>View Map & Directions Below</span>
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#A38B68]/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#A38B68]/20 text-[#A38B68] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-serif text-3xl font-light text-[#23211E] mb-2">
                  Message Sent
                </h3>
                <p className="text-[#6E6A63] text-xs sm:text-sm font-light max-w-sm mx-auto mb-6 font-sans">
                  Thank you, <strong className="text-[#23211E] font-semibold">{name}</strong>. Our team will get back to you shortly.
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
                    Send a Message
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E]">
                    We'd Love to Hear From You
                  </h3>
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
                        placeholder="Your name"
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
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+66..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you plan your stay?"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#23211E] hover:bg-[#A38B68] text-[#F7F4EF] font-semibold text-xs uppercase tracking-[0.22em] transition-all shadow-md cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Dedicated Full Width Map Section */}
        <div id="hotel-map" className="mb-20 scroll-mt-28">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#A38B68]/30 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#A38B68]/20">
              <div>
                <div className="inline-flex items-center gap-2 text-[#A38B68] mb-1">
                  <MapPin size={14} />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
                    Interactive Location Map
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E]">
                  Elia Phuket on Bang Tao Beach
                </h3>
                <p className="text-xs text-[#6E6A63] font-light mt-0.5">
                  82/9 Moo 3, Bang Tao Beach, Choeng Thale, Thalang, Phuket 83110
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Bang+Tao+Beach,+Phuket,+Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23211E] hover:bg-[#A38B68] text-[#F7F4EF] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md group shrink-0"
              >
                <Navigation size={14} className="text-[#C5A880] group-hover:text-white transition-colors" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[21/9] min-h-[380px] sm:min-h-[460px] border border-[#A38B68]/20 shadow-inner">
              <iframe
                title="Elia Boutique Hotel Phuket Location Map"
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
          </div>
        </div>

        {/* FAQs Underneath Contact */}
        <div className="pt-12 border-t border-[#A38B68]/20">
          <FaqsSection />
        </div>

      </div>
    </div>
  );
}
