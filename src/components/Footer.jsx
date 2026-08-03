import { useState } from 'react';
import { Facebook, Instagram, Send, MapPin, Phone, Mail } from 'lucide-react';

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
    <footer id="location" className="bg-[#1C1B18] text-[#FAF7F2] pt-20 pb-12 border-t border-[#A38B68]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#FAF7F2]/10">
          {/* Col 1: Brand Logo & Ethos */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => onNavClick('home')} className="focus:outline-none cursor-pointer block text-left">
              <img
                src="/Logos/white-new.png"
                alt="Elia Boutique Hotel"
                className="h-14 sm:h-16 w-auto object-contain mb-4 transition-transform duration-300 hover:scale-105"
              />
            </button>
            <p className="text-[#FAF7F2]/70 text-xs font-light leading-relaxed max-w-sm font-sans">
              A bohemian-minimalist luxury sanctuary along the sands of Cherngtalay, Phuket. Inspired by serene Japanese slow living and vibrant beach club dining.
            </p>

            <div className="pt-4 flex items-center gap-4 text-[#FAF7F2]/70">
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
                href="https://www.instagram.com/eliaboutiquehotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A880] hover:border-[#C5A880] hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
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

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-base text-[#C5A880] font-medium uppercase tracking-widest mb-4">
              Explore Elia
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/70 font-light">
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-[#C5A880] transition-colors">
                  The Essence
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('suites')} className="hover:text-[#C5A880] transition-colors">
                  Suites & Villas
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('dining')} className="hover:text-[#C5A880] transition-colors">
                  Culinary Realm
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('menus')} className="hover:text-[#C5A880] transition-colors">
                  Interactive Menus
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('latenight')} className="text-[#C5A880] font-semibold hover:text-white transition-colors">
                  🌙 Late Night Menu (10 PM - 2 AM)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('spa')} className="hover:text-[#C5A880] transition-colors">
                  Wellness & Spa
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Hours */}
          <div>
            <h4 className="font-serif text-base text-[#C5A880] font-medium uppercase tracking-widest mb-4">
              Location & Hours
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/70 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>Cherngtalay, Bang Tao Beach, Phuket 83110, Thailand</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#C5A880] shrink-0" />
                <span>concierge@eliaboutiquehotel.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#C5A880] shrink-0" />
                <a href="tel:+66824899371" className="hover:text-[#C5A880] transition-colors">+66 82 489 9371</a>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-medium block">
                  Opening November 2026
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-serif text-base text-[#C5A880] font-medium uppercase tracking-widest mb-4">
              Privé Newsletter
            </h4>
            <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed mb-4">
              Subscribe for exclusive opening previews, private suite offers, and sunset event invitations.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#C5A880] text-xs font-light">
                ✓ You are subscribed to Elia Privé.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  required
                  type="email"
                  placeholder="Enter email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder-white/40 focus:outline-none focus:border-[#C5A880]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#C5A880] text-[#1C1B18] font-semibold text-xs uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send size={12} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF7F2]/50 font-light">
          <p>© {new Date().getFullYear()} Elia Boutique Hotel Phuket. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
