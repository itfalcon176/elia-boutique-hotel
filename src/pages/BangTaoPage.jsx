import { motion } from 'framer-motion';
import { MapPin, Navigation, Mail, Phone, Clock, Sun, Waves, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

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

export default function BangTaoPage({ onNavigate, onOpenReservation }) {
  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
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
            <li className="text-[#23211E] font-medium" aria-current="page">
              Bang Tao Beach, Phuket
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <MapPin size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Location & Coastline
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Stay on <span className="italic text-gold-gradient font-serif">Bang Tao Beach, Phuket</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Bang Tao is one of Phuket's signature west-coast destinations: a long sweep of sand surrounded by restaurants, beach clubs and the relaxed energy that makes this part of the island so easy to fall into.
          </p>
          <p className="text-[#6E6A63] font-light text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto mt-2">
            And Elia puts you right beside it.
          </p>
        </div>

        {/* Beach Highlights Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-bold block font-sans">
              West Coast Phuket
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#23211E] leading-tight">
              Bang Tao Beach
            </h2>
            <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed font-sans">
              Wake up and walk to the sea. Spend the morning swimming, take a long lunch, return to your room, head back out for sunset and decide what happens next.
            </p>
            <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed font-sans">
              Bang Tao works particularly well for travellers who want plenty happening around them without staying in one of Phuket's busier resort centres.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenReservation}
                className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
              >
                BOOK YOUR STAY
              </button>
              <button
                onClick={() => onNavigate('rooms')}
                className="px-7 py-3.5 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer"
              >
                EXPLORE ROOMS
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#A38B68]/30">
            <img
              src="/images/cocktail.png"
              alt="Bang Tao Beach beside Elia Boutique Hotel Phuket"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white text-xs">
              <span className="font-serif text-xl block mb-1">Bang Tao Beach, Phuket</span>
              <span className="text-[#C5A880] text-[10px] uppercase tracking-widest">Steps from your private terrace</span>
            </div>
          </div>
        </div>

        {/* Elia's Location Card + Interactive Map */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#A38B68]/30 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#A38B68] font-bold block mb-1">
                  Property Address
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E]">
                  Elia's Location
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#A38B68]/20 space-y-3 text-xs text-[#555047] font-light">
                <div>
                  <strong className="text-[#23211E] text-sm font-medium font-serif block mb-1">
                    Elia Boutique Hotel Phuket
                  </strong>
                  <p>82/9 Moo 3, Bang Tao Beach</p>
                  <p>Choeng Thale, Thalang District</p>
                  <p>Phuket 83110, Thailand</p>
                </div>

                <div className="pt-2 border-t border-[#A38B68]/15 space-y-1">
                  <p>
                    <strong className="text-[#23211E] font-medium">Email:</strong>{' '}
                    <a href="mailto:info@eliaphuket.com" className="hover:text-[#A38B68] underline">
                      info@eliaphuket.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#23211E] font-medium">WhatsApp:</strong>{' '}
                    <a href="https://wa.me/66932719103" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] font-medium">
                      +66 93 271 9103
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#23211E] font-medium">Telephone:</strong>{' '}
                    <a href="tel:+66932719103" className="hover:text-[#A38B68]">
                      +66 93 271 9103
                    </a>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://maps.app.goo.gl/D4kSwVVSjBbioifd8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#23211E] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A38B68] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Navigation size={14} />
                  <span>OPEN MAP</span>
                </a>

                <a
                  href="https://wa.me/66932719103?text=Hello%20Elia%20Phuket%2C%20I%20would%20like%20to%20inquire%20about%20directions%20and%20location."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <WhatsAppIcon size={14} />
                  <span>WHATSAPP US</span>
                </a>

                <button
                  onClick={onOpenReservation}
                  className="px-6 py-3 rounded-full border border-[#A38B68] text-[#8B6E3F] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A38B68]/10 transition-all cursor-pointer"
                >
                  BOOK YOUR STAY
                </button>
              </div>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[4/3] min-h-[260px] sm:min-h-[340px] border border-[#A38B68]/30 shadow-inner">
              <iframe
                title="Elia Boutique Hotel Bang Tao Beach Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1335163944177!2d98.2837060761358!3d7.985144892040057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050392384ea56ab%3A0x121edcebcc33814c!2sELIA%20Boutique%20Hotel%20Phuket!5e0!3m2!1sen!2sth!4v1710000000000!5m2!1sen!2sth"
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

      </div>
    </div>
  );
}
