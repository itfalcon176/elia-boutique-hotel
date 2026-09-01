import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CalendarCheck, 
  Phone, 
  Mail, 
  CheckCircle2
} from 'lucide-react';
import CloudbedsBooking from '../components/booking/CloudbedsBooking';

export default function BookingPage() {
  const directPrivileges = [
    {
      icon: ShieldCheck,
      title: 'Best Rate Guaranteed',
      desc: 'Exclusive lowest pricing available when booking directly with us.',
    },
    {
      icon: Sparkles,
      title: 'Complimentary Welcome Amenity',
      desc: 'Signature Nomad Club sunset cocktail & handcrafted arrival treats.',
    },
    {
      icon: Clock,
      title: 'Flexible Stay Terms',
      desc: 'Priority complimentary early check-in & late check-out upon availability.',
    },
    {
      icon: CalendarCheck,
      title: 'Direct Concierge Assistance',
      desc: 'Immediate coordination for transfers, daybeds, and dining reservations.',
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 text-[#826C4B] text-[11px] uppercase tracking-[0.25em] font-semibold mb-4">
            <CheckCircle2 size={13} className="text-[#A38B68]" />
            <span>Official Direct Booking Engine</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Book Your <span className="italic text-gold-gradient font-serif">Stay</span>
          </h1>

          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-5" />

          <p className="text-[#6E6A63] font-light text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Check availability and reserve your perfect stay at Elia Boutique Hotel Bang Tao Beach. Enjoy seamless instant confirmation, our guaranteed best available rates, and exclusive direct booking privileges.
          </p>
        </motion.div>

        {/* Direct Booking Privileges Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {directPrivileges.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-[#FFFFFF]/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-[#A38B68]/20 shadow-[0_4px_20px_rgba(35,33,30,0.03)] hover:border-[#A38B68]/50 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h2 className="font-serif text-base font-normal text-[#23211E] mb-1">
                  {item.title}
                </h2>
                <p className="text-[#6E6A63] text-xs font-light leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Official Cloudbeds Immersive Experience 2.0 Web Component Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full"
        >
          <CloudbedsBooking />
        </motion.div>

        {/* Concierge & Bespoke Stay Assistance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-br from-[#23211E] to-[#171614] text-[#F7F4EF] rounded-3xl p-8 sm:p-12 border border-[#A38B68]/30 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-2 font-sans">
                Dedicated Concierge Service
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3">
                Need Help with <span className="italic text-gold-gradient font-serif">Bespoke Requests</span>?
              </h2>
              <p className="text-[#FAF7F2]/75 text-xs sm:text-sm font-light font-sans leading-relaxed max-w-2xl">
                Planning an extended retreat, exclusive private event takeover, or require tailored suite accommodations? Our reservations concierge team is available 24/7 to personalize every detail of your visit.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="tel:+66932719103"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C5A880] text-[#1C1B18] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-md"
              >
                <Phone size={14} />
                <span>Call +66 93 271 9103</span>
              </a>

              <a
                href="mailto:info@eliaphuket.com?subject=Elia%20Boutique%20Hotel%20Reservation%20Inquiry"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-xs uppercase tracking-widest transition-all"
              >
                <Mail size={14} />
                <span>Email Concierge</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
