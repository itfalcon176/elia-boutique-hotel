import { useState } from 'react';
import { Facebook, Instagram, Send, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const TiktokIcon = ({ size = 18, ...props }) => (
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
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

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

export default function Footer({ onNavClick }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#181715] text-[#FAF7F2] pt-20 pb-12 border-t border-[#A38B68]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#FAF7F2]/10">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => onNavClick('home')} className="focus:outline-none cursor-pointer block text-left">
              <img
                src="/Logos/white-new.png"
                alt="Elia Boutique Hotel"
                className="h-12 sm:h-14 w-auto object-contain mb-3 transition-transform duration-300 hover:scale-105"
              />
            </button>
            <p className="text-[#FAF7F2]/75 text-xs font-light leading-relaxed max-w-sm font-sans">
              An intimate beachfront sanctuary of only 13 bespoke suites along the golden shores of Bang Tao Beach, Phuket. Relaxed luxury, slow tropical living, and direct access to GOAT Beach Club.
            </p>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-3 text-[#FAF7F2]/80">
              <a
                href="https://wa.me/66932719103"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#25D366] hover:border-[#25D366] hover:bg-white/10 transition-all"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/eliaboutiquehotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590545618953"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@elia.boutique.hote"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/10 transition-all"
                aria-label="TikTok"
              >
                <TiktokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm text-[#C5A880] font-medium uppercase tracking-widest mb-4">
              Explore Elia
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/70 font-light">
              <li>
                <button onClick={() => onNavClick('rooms')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Rooms & Suites (All 4 Types)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('eat-drink')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Eat & Drink (GOAT Beach Club)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('wellness')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Wellness, Spa & Thermal Circuit
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('experiences')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Phuket Experiences & Boat Trips
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('gallery')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  About the 13-Room Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('special-offers')} className="text-[#C5A880] font-medium hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                  <span>Special Offers & Packages</span>
                  <ArrowUpRight size={12} />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (WhatsApp / Phone / Email ONLY) (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm text-[#C5A880] font-medium uppercase tracking-widest mb-4">
              Contact Concierge
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/75 font-light">
              <a
                href="https://wa.me/66932719103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors font-medium text-white"
              >
                <WhatsAppIcon size={15} className="text-[#25D366] shrink-0" />
                <span>WhatsApp Concierge</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-[#C5A880] shrink-0" />
                <a href="tel:+66932719103" className="hover:text-[#C5A880] transition-colors">+66 93 271 9103</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-[#C5A880] shrink-0" />
                <a href="mailto:info@eliaphuket.com" className="hover:text-[#C5A880] transition-colors">info@eliaphuket.com</a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-[#FAF7F2]/60">
                <MapPin size={15} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>Bang Tao Beach, Thalang, Phuket 83110</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm text-[#C5A880] font-medium uppercase tracking-widest mb-4">
              Direct Stay Privileges
            </h4>
            <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed mb-4">
              Join our private guest circle for direct booking rates, early previews, and complimentary sunset cocktails.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#C5A880] text-xs font-light">
                ✓ Thank you for subscribing to Elia Privé.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  required
                  type="email"
                  placeholder="Your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder-white/40 focus:outline-none focus:border-[#C5A880]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#C5A880] text-[#141312] font-semibold text-xs uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Subscribe</span>
                  <Send size={12} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Sub-Links (FAQ, Policies, Privacy, Terms, Cookies, Directions, etc.) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF7F2]/60 font-light">
          <p>© {new Date().getFullYear()} Elia Boutique Hotel Phuket. All Rights Reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px]">
            <button onClick={() => onNavClick('faqs')} className="hover:text-white transition-colors cursor-pointer">
              FAQ
            </button>
            <button onClick={() => onNavClick('policies')} className="hover:text-white transition-colors cursor-pointer">
              Hotel Policies
            </button>
            <button onClick={() => onNavClick('cancellation')} className="hover:text-white transition-colors cursor-pointer">
              Cancellation Policy
            </button>
            <button onClick={() => onNavClick('privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onNavClick('terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <button onClick={() => onNavClick('cookies')} className="hover:text-white transition-colors cursor-pointer">
              Cookies
            </button>
            <button onClick={() => onNavClick('directions')} className="hover:text-white transition-colors cursor-pointer">
              Directions
            </button>
            <button onClick={() => onNavClick('contact')} className="hover:text-white transition-colors cursor-pointer">
              Contact
            </button>
            <button onClick={() => onNavClick('special-offers')} className="text-[#C5A880] font-medium hover:text-white transition-colors cursor-pointer">
              Special Offers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
