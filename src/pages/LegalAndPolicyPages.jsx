import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Navigation, ArrowLeft, AlertCircle } from 'lucide-react';

export default function LegalAndPolicyPages({ pageType, onNavigate }) {
  const getContent = () => {
    switch (pageType) {
      case 'policies':
        return {
          title: 'Hotel Policies & Guest Guidelines',
          subtitle: 'Ensuring Serenity, Privacy & Comfort for All 13 Suites',
          icon: ShieldCheck,
          sections: [
            {
              heading: 'Check-In & Check-Out Times',
              content: 'Check-in is from 14:00 (2:00 PM) onwards. Check-out is until 12:00 (12:00 PM). Early check-in and late check-out can be requested via your WhatsApp concierge and are subject to availability.',
            },
            {
              heading: 'Boutique Scale & Peaceful Atmosphere',
              content: 'To preserve the tranquil sanctuary of Elia Phuket, quiet hours commence from 23:00 (11:00 PM) in all accommodation and pool areas. Guests seeking late-night music and entertainment are warmly welcomed to enjoy the adjacent GOAT Beach Club.',
            },
            {
              heading: 'Smoking Policy',
              content: 'All indoor suite areas, loft bedrooms, and enclosed bathrooms are strictly non-smoking. Smoking is permitted only in designated outdoor garden areas and private open-air terraces.',
            },
            {
              heading: 'Pet Policy',
              content: 'Small, well-behaved domestic pets under 8 kg are welcomed in our Garden Beach Rooms upon advance registration. An additional cleaning deposit applies.',
            },
            {
              heading: 'Security & Valuables',
              content: 'Digital electronic safes are provided in each suite. The management accepts responsibility only for valuables deposited in front-desk master safety boxes.',
            },
          ],
        };

      case 'cancellation':
        return {
          title: 'Cancellation & Refund Policy',
          subtitle: 'Flexible & Transparent Booking Terms',
          icon: AlertCircle,
          sections: [
            {
              heading: 'Standard Flexible Rate Policy',
              content: 'Cancellations received up to 7 days prior to scheduled arrival (14:00 local Thai time) will receive a 100% full refund with zero cancellation penalty.',
            },
            {
              heading: 'Late Cancellation & No-Show',
              content: 'Cancellations made within 7 days of arrival, or failure to arrive on the booked date, will be charged the cost of the first 2 nights (or the full stay for 1-night reservations).',
            },
            {
              heading: 'Peak Festive Season Policy (Dec 20 – Jan 10)',
              content: 'During peak festive holiday dates, cancellations must be made at least 30 days prior to arrival for a full refund. Cancellations within 30 days are non-refundable.',
            },
            {
              heading: 'Non-Refundable & Promotional Rates',
              content: 'Promotional rates designated as "Non-Refundable" (such as Opening Specials) require full prepayment at the time of booking and cannot be refunded in cash, but can be rescheduled once with 14 days advance notice.',
            },
          ],
        };

      case 'privacy':
        return {
          title: 'Privacy Policy',
          subtitle: 'Protecting Guest Data & Confidentiality',
          icon: FileText,
          sections: [
            {
              heading: 'Data Collection & Purpose',
              content: 'Elia Phuket collects personal guest information (such as name, passport data, contact telephone, email address, and payment information) strictly to fulfill room reservations, tailor concierge services, and comply with Thai immigration laws.',
            },
            {
              heading: 'Protection of Guest Records',
              content: 'We employ modern TLS 256-bit encryption and strict access controls. We never sell, rent, or distribute guest data to third-party advertisers.',
            },
            {
              heading: 'Communications & Consent',
              content: 'Guests who opt-in to Elia Privé newsletters may unsubscribe at any time. Operational messages via WhatsApp or email are used solely for booking logistics and stay coordination.',
            },
          ],
        };

      case 'terms':
        return {
          title: 'Terms & Conditions of Service',
          subtitle: 'Contractual Agreement for Guests & Residents',
          icon: FileText,
          sections: [
            {
              heading: 'Agreement to Terms',
              content: 'By completing a reservation or accessing the premises of Elia Phuket, guests agree to abide by hotel regulations, safety protocols, and statutory regulations of Thailand.',
            },
            {
              heading: 'Payment Terms & Security Deposits',
              content: 'A valid credit card guarantee or bank transfer is required to confirm all reservations. A standard incidental security deposit may be pre-authorized upon check-in and released upon room inspection at departure.',
            },
            {
              heading: 'Damage to Property',
              content: 'Guests are responsible for any damages caused to suite furnishings, artwork, sound systems, or facilities beyond ordinary wear and tear.',
            },
          ],
        };

      case 'cookies':
        return {
          title: 'Cookie Policy',
          subtitle: 'How We Optimize Your Browsing Experience',
          icon: FileText,
          sections: [
            {
              heading: 'What Are Cookies?',
              content: 'Cookies are small text files stored on your device that enable our website to remember your preferences (such as preferred currency, dates, and session authentication).',
            },
            {
              heading: 'Types of Cookies Used',
              content: 'We utilize essential cookies for reservation functionality, analytical cookies (Google Analytics) to optimize page load speeds, and functional cookies for sound and theme preferences.',
            },
            {
              heading: 'Managing Cookie Preferences',
              content: 'You can adjust or disable cookie tracking at any time through your browser settings without impacting your ability to browse our rooms and contact concierge.',
            },
          ],
        };

      case 'directions':
      default:
        return {
          title: 'Directions & Arrival Guide',
          subtitle: 'How to Reach Elia Phuket from Airport & Key Points',
          icon: Navigation,
          sections: [
            {
              heading: 'From Phuket International Airport (HKT)',
              content: 'Elia Phuket is located approximately 18 km (40 minutes drive) south of Phuket International Airport. Take Route 4026 south, merge onto Route 402, and turn right toward Cherngtalay / Bang Tao Beach. Our private entrance is located directly along the Bang Tao beachfront road adjacent to GOAT Beach Club.',
            },
            {
              heading: 'Complimentary VIP Limousine Transfer',
              content: 'Guests booking directly for 3+ nights receive a complimentary private Mercedes limousine transfer. Our uniformed driver will meet you outside the arrivals hall holding a personalized Elia Phuket sign.',
            },
            {
              heading: 'Taxi & Local Buggy Navigation',
              content: 'Tell your driver: "Elia Boutique Hotel, Bang Tao Beach, near GOAT Beach Club". In Thai: "โรงแรม เอเลีย บูทีค โฮเทล หาดบางเทา".',
            },
            {
              heading: 'Nearby Landmarks & Distances',
              content: '• Bang Tao Beach: 0 meters (Beachfront)\n• GOAT Beach Club: Direct access next door\n• Boat Avenue & Porto de Phuket: 5 minutes drive\n• Laguna Phuket Golf Club: 7 minutes drive\n• Old Phuket Town: 35 minutes drive',
            },
          ],
        };
    }
  };

  const { title, subtitle, sections, icon: Icon } = getContent();

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8B6E3F] hover:text-[#23211E] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-[#A38B68]/15 text-[#A38B68] flex items-center justify-center mx-auto mb-4">
            <Icon size={28} />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#23211E] mb-3">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto font-sans">
            {subtitle}
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mt-6" />
        </div>

        {/* Content Blocks */}
        <div className="space-y-6">
          {sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-md"
            >
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#23211E] mb-3">
                {sec.heading}
              </h2>
              <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed whitespace-pre-line font-sans">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Concierge Help Box */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center text-xs text-[#6E6A63]">
          <p className="mb-3">
            Have questions regarding our policies, transport, or special requests?
          </p>
          <a
            href="https://wa.me/66932719103"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8B6E3F] hover:text-[#23211E] underline"
          >
            Contact 24/7 WhatsApp Concierge (+66 93 271 9103) →
          </a>
        </div>

      </div>
    </div>
  );
}
