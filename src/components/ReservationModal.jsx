import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, BedDouble, Utensils } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('table');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('22:00');
  const [guests, setGuests] = useState('2 Guests');
  const [suiteType, setSuiteType] = useState('Swim-Up Junior Suite');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-[#A38B68]/30 bg-[#F7F4EF] text-[#23211E] shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#23211E]/60 hover:text-[#23211E] p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <X size={22} />
          </button>

          {submitted ? (
            <div className="text-center py-10 my-auto">
              <div className="w-16 h-16 rounded-full bg-[#A38B68]/20 text-[#A38B68] border border-[#A38B68]/40 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={36} />
              </div>
              <h3 className="font-serif text-3xl font-light text-[#23211E] mb-2">
                Reservation Confirmed
              </h3>
              <p className="text-[#6E6A63] text-xs font-light max-w-sm mx-auto mb-6 font-sans">
                Thank you, <strong className="text-[#23211E] font-semibold">{name}</strong>. Your reservation request for {date} at {time} has been received. Our concierge team will contact you via email shortly.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-[#23211E] text-[#F7F4EF] font-semibold text-xs uppercase tracking-widest hover:bg-[#A38B68] shadow-md transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* Modal Header */}
              <div className="text-center mb-6">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A38B68] font-semibold block mb-1">
                  Elia Boutique Hotel • Phuket
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E]">
                  Make a Reservation
                </h3>
              </div>

              {/* Type Switcher */}
              <div className="flex items-center gap-3 mb-6 bg-[#EFEAE2] p-1 rounded-full border border-[#A38B68]/20">
                <button
                  type="button"
                  onClick={() => setTab('table')}
                  className={`flex-1 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all ${
                    tab === 'table'
                      ? 'bg-[#23211E] text-[#F7F4EF] shadow-sm'
                      : 'text-[#23211E]/70 hover:text-[#23211E]'
                  }`}
                >
                  <Utensils size={14} />
                  <span>Reserve Table</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTab('stay')}
                  className={`flex-1 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all ${
                    tab === 'stay'
                      ? 'bg-[#23211E] text-[#F7F4EF] shadow-sm'
                      : 'text-[#23211E]/70 hover:text-[#23211E]'
                  }`}
                >
                  <BedDouble size={14} />
                  <span>Book Suite</span>
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
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs placeholder-[#6E6A63]/60 focus:outline-none focus:border-[#23211E]"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs placeholder-[#6E6A63]/60 focus:outline-none focus:border-[#23211E]"
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

                  {tab === 'table' ? (
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
                  ) : (
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#6E6A63] font-semibold block mb-1">
                        Suite Type
                      </label>
                      <select
                        value={suiteType}
                        onChange={(e) => setSuiteType(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs focus:outline-none focus:border-[#23211E]"
                      >
                        <option value="Swim-Up Junior Suite">Swim-Up Suite</option>
                        <option value="Deluxe Ocean View Suite">Deluxe Ocean Suite</option>
                        <option value="Rooftop Sunset Pool Suite">Rooftop Pool Suite</option>
                        <option value="Private 4-Bedroom Villa">Private Villa</option>
                      </select>
                    </div>
                  )}

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
                    Special Requests (Dietary, Anniversary, Late Arrival)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any special requests or dietary preferences..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A38B68]/30 text-[#23211E] text-xs placeholder-[#6E6A63]/60 focus:outline-none focus:border-[#23211E] resize-none"
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
