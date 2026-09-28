import { useState } from 'react';
import { Facebook, Instagram, Send, Phone, Mail, ArrowUpRight } from 'lucide-react';
import SharedWhatsAppIcon from './WhatsAppIcon';
import { whatsappUrl, WHATSAPP_MESSAGES, PHONE_HREF, EMAIL_HREF, MAPS_HREF, WHATSAPP_DISPLAY } from '../utils/whatsapp';

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

const WhatsAppIcon = SharedWhatsAppIcon;

export default function Footer({ onNavClick, onOpenReservation }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#181715] text-[#FAF7F2] pt-14 pb-8 border-t border-[#A38B68]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#FAF7F2]/10">

          {/* Col 1: Brand & Identity (4 cols) matching Section 20 */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => onNavClick('home')} className="focus:outline-none cursor-pointer block text-left">
              <img
                src="/Logos/logo nwww.png"
                alt="Elia Boutique Hotel Phuket"
                className="elia-footer-logo mb-4 transition-transform duration-300 hover:scale-105"
              />
            </button>
            <h3 className="font-serif text-sm text-white font-medium uppercase tracking-widest">
              ELIA BOUTIQUE HOTEL PHUKET
            </h3>
            <p className="text-[#FAF7F2]/80 text-xs font-light leading-relaxed max-w-sm font-sans">
              13 rooms by the sea on Bang Tao Beach, Phuket.
            </p>
            <p className="text-[#C5A880] text-xs font-serif italic">
              The beach. At your door.
            </p>
            <div className="pt-2 text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A880] transition-colors block"
                title="View on Google Maps"
              >
                <p>82/9 หมู่ 3, Bang Tao Beach</p>
                <p>Choeng Thale, Thalang District</p>
                <p>Phuket 83110, Thailand</p>
              </a>
              <a href="mailto:info@eliaphuket.com" className="hover:text-[#C5A880] underline block pt-1">
                info@eliaphuket.com
              </a>
            </div>

            {/* Social Links */}
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              <WhatsAppIcon size={15} />
              WhatsApp Concierge
            </a>
            <div className="pt-1 flex items-center gap-3 text-[#FAF7F2]/80">
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/10 transition-all"
                aria-label="WhatsApp"
                title={`Chat on WhatsApp (${WHATSAPP_DISPLAY})`}
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
                <button onClick={() => onOpenReservation?.()} className="text-[#C5A880] font-medium hover:underline transition-all">
                  Direct Reservations
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('rooms')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Accommodation
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('wellness')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Facilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('eat-drink')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Food and Drinks
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('menus')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  GOAT Menus
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('family-hotel-phuket')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Families
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('experiences')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Experiences
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('goat-beach-club')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  GOAT Beach Club
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('bang-tao-beach-phuket')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Bang Tao Beach
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('gallery')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  About Elia
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (WhatsApp / Phone / Email ONLY) (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm text-[#C5A880] font-medium uppercase tracking-widest mb-4">
              Contact & Links
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/70 font-light mb-6">
              <li>
                <button onClick={() => onNavClick('faq')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('contact')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
                  Location
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('offers')} className="text-[#C5A880] font-medium hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                  <span>Special Offers</span>
                  <ArrowUpRight size={12} />
                </button>
              </li>
            </ul>

            <div className="space-y-3 text-xs text-[#FAF7F2]/75 font-light pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <WhatsAppIcon size={15} className="text-[#C5A880] shrink-0" />
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A880] transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-[#C5A880] shrink-0" />
                <a href={PHONE_HREF} className="hover:text-[#C5A880] transition-colors">{WHATSAPP_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-[#C5A880] shrink-0" />
                <a href={EMAIL_HREF} className="hover:text-[#C5A880] transition-colors">info@eliaphuket.com</a>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Privileges (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm text-[#C5A880] font-medium uppercase tracking-widest mb-4">
              Direct Stay Privileges
            </h4>
            <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed mb-4">
              Join our private guest circle for direct booking rates, early previews, and complimentary GOAT Beach Club access.
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

        {/* Footer Sub-Links matching Section 20 */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF7F2]/60 font-light">
          <p>© {new Date().getFullYear()} Elia Boutique Hotel Phuket. 13 rooms by the sea.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px]">
            <button onClick={() => onNavClick('privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onNavClick('terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <button onClick={() => onNavClick('policies')} className="hover:text-white transition-colors cursor-pointer">
              Booking Conditions
            </button>
            <button onClick={() => onNavClick('cancellation')} className="hover:text-white transition-colors cursor-pointer">
              Cancellation Policy
            </button>
            <button onClick={() => onNavClick('faq')} className="hover:text-white transition-colors cursor-pointer">
              FAQ
            </button>
            <button onClick={() => onNavClick('contact')} className="hover:text-white transition-colors cursor-pointer">
              Location
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
