import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle, Utensils, BedDouble } from 'lucide-react';

export default function ContactPage() {
  const [tab, setTab] = useState('table');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('22:00');
  const [guests, setGuests] = useState('2 Guests');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Personal Concierge Service
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Contact & <span className="italic text-gold-gradient font-serif">Reservations</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Have a question or looking to reserve a suite or table? Our 24/7 personal concierge team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Concierge Card */}
          <div className="lg:col-span-5 glass-card p-8 sm:p-10 rounded-3xl border border-[#A38B68]/30">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-2">
              Direct Contact
            </span>
            <h2 className="font-serif text-3xl font-light text-[#23211E] mb-6">
              Reach Out to Us
            </h2>

            <div className="space-y-6 text-xs text-[#6E6A63] font-light font-sans mb-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#A38B68] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#23211E] block">Location</span>
                  <span>Bang Tao Beach, Thalang District, Phuket 83110, Thailand</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} className="text-[#A38B68] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#23211E] block">Direct Line</span>
                  <a href="tel:+66932719103" className="hover:text-[#A38B68] transition-colors">+66 93 271 9103</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="text-[#A38B68] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#23211E] block">Email Concierge</span>
                  <a href="mailto:info@eliaphuket.com" className="hover:text-[#A38B68] transition-colors">info@eliaphuket.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} className="text-[#A38B68] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#23211E] block">Dining & Late Night Hours</span>
                  <span>All-Day: 12:00 PM – 10:00 PM • Late Night: 10:00 PM – 02:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Reservation Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-[#A38B68]/30">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#A38B68]/20 text-[#A38B68] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-serif text-3xl font-light text-[#23211E] mb-2">
                  Request Received
                </h3>
                <p className="text-[#6E6A63] text-xs font-light max-w-sm mx-auto mb-6 font-sans">
                  Thank you, <strong className="text-[#23211E] font-semibold">{name}</strong>. Our personal concierge will reach out to confirm your reservation details shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-[#23211E] text-[#F7F4EF] font-semibold text-xs uppercase tracking-widest hover:bg-[#A38B68] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-6 text-center">
                  Online Reservation Request
                </h3>

                <div className="flex items-center gap-3 mb-6 bg-[#EFEAE2] p-1 rounded-full border border-[#A38B68]/20">
                  <button
                    type="button"
                    onClick={() => setTab('table')}
                    className={`flex-1 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all ${
                      tab === 'table' ? 'bg-[#23211E] text-[#F7F4EF]' : 'text-[#23211E]/70'
                    }`}
                  >
                    <Utensils size={14} />
                    <span>Table</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTab('stay')}
                    className={`flex-1 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all ${
                      tab === 'stay' ? 'bg-[#23211E] text-[#F7F4EF]' : 'text-[#23211E]/70'
                    }`}
                  >
                    <BedDouble size={14} />
                    <span>Suite</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Date
                      </label>
                      <input
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Time Slot
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="18:30">06:30 PM (Sunset)</option>
                        <option value="20:00">08:00 PM (Dinner)</option>
                        <option value="22:00">10:00 PM (Late Night 🌙)</option>
                        <option value="23:30">11:30 PM (Late Night 🌙)</option>
                        <option value="01:00">01:00 AM (Midnight 🌙)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Party Size
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="6+ Guests">6+ Guests (VIP)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your preferences, dietary requirements, or anniversary notes..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#23211E] hover:bg-[#A38B68] text-[#F7F4EF] font-semibold text-xs uppercase tracking-[0.25em] transition-all shadow-md"
                  >
                    Submit Reservation Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
