import { motion } from 'framer-motion';
import { MapPin, Navigation, Plane, Car, Compass, Clock, Phone, Mail } from 'lucide-react';

export default function LocationPage() {
  const nearbyHighlights = [
    { title: 'Phuket International Airport (HKT)', distance: '25 Minutes', desc: 'Direct luxury private airport limousine transfer available 24/7.' },
    { title: 'Bang Tao Beach Promenade', distance: '0 Minutes (Direct Beach Access)', desc: 'Step directly onto 8 kilometers of white sand and sunset beach clubs.' },
    { title: 'Boat Avenue & Porto de Phuket', distance: '5 Minutes', desc: 'Vibrant dining hubs, boutique shopping, and organic night markets.' },
    { title: 'Phang Nga Bay Yacht Pier', distance: '30 Minutes', desc: 'Private catamaran departures to Phi Phi, Similan, and James Bond Islands.' },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-[#A38B68] font-semibold mb-3 block">
            Phuket, Thailand
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Location & <span className="italic text-gold-gradient font-serif">Surroundings</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          <p className="text-[#6E6A63] font-light text-base font-sans">
            Nestled along the golden shores of Bang Tao Beach in Cherngtalay—Phuket’s most prestigious beach retreat.
          </p>
        </div>

        {/* Map & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left Info Card */}
          <div className="lg:col-span-5 glass-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-[#A38B68]/30">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-semibold block mb-2">
                Sanctuary Address
              </span>
              <h2 className="font-serif text-3xl font-light text-[#23211E] mb-6">
                Elia Boutique Hotel
              </h2>

              <div className="space-y-4 text-xs text-[#6E6A63] font-light font-sans mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#A38B68] shrink-0 mt-0.5" />
                  <span>323/13 M.2 Cherngtalay, Bang Tao Beach, Thalang, Phuket 83110, Thailand</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#A38B68] shrink-0" />
                  <span>+66 (0) 76 300 800</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#A38B68] shrink-0" />
                  <span>concierge@eliaboutiquehotel.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[#A38B68] shrink-0" />
                  <span>Concierge & Room Butler: 24 Hours Daily</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#EFEAE2] border border-[#A38B68]/20 text-xs text-[#23211E]">
              <span className="font-semibold block mb-1">Opening November 2026</span>
              <span className="text-[#6E6A63] font-light">Advance VIP airport transfer and room bookings now open.</span>
            </div>
          </div>

          {/* Right Interactive Map Placeholder Box */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-card border border-[#A38B68]/30 relative min-h-[380px] flex items-center justify-center p-8 text-center bg-gradient-to-br from-[#EFEAE2] via-[#F7F4EF] to-[#EFEAE2]">
            <div className="max-w-md">
              <div className="w-16 h-16 rounded-full bg-[#23211E] text-[#F7F4EF] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Navigation size={28} className="text-[#A38B68]" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#23211E] mb-2">
                Bang Tao Beach Frontline
              </h3>
              <p className="text-xs text-[#6E6A63] font-light mb-6 font-sans">
                Conveniently accessible by private car, taxi, or airport transfer. 25 minutes south of Phuket International Airport (HKT).
              </p>
              <a
                href="https://maps.google.com/?q=Bang+Tao+Beach+Phuket+Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23211E] text-[#F7F4EF] font-semibold text-xs uppercase tracking-widest hover:bg-[#A38B68] transition-all shadow-md"
              >
                <MapPin size={14} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Nearby Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-[#A38B68]/20 hover:border-[#A38B68] transition-all"
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#A38B68] block mb-1">
                {item.distance}
              </span>
              <h4 className="font-serif text-lg font-medium text-[#23211E] mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
