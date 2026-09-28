import { whatsappUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function NotFoundPage({ onNavigate }) {
  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#A38B68] font-semibold mb-3">
          Page not found
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-light mb-4">
          This page is not ready
        </h1>
        <p className="text-sm text-[#6E6A63] font-light leading-relaxed mb-8">
          The link you followed does not lead to a live Elia page. Return home, view the rooms, or message WhatsApp Concierge.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="min-h-12 px-7 py-3 rounded-full bg-[#23211E] text-[#F7F4EF] text-xs uppercase tracking-[0.18em] font-semibold cursor-pointer"
          >
            Return Home
          </button>
          <button
            type="button"
            onClick={() => onNavigate('rooms')}
            className="min-h-12 px-7 py-3 rounded-full border border-[#A38B68] text-[#8B6E3F] text-xs uppercase tracking-[0.18em] font-semibold cursor-pointer"
          >
            View Rooms
          </button>
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-12 px-7 py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-[0.16em] font-semibold inline-flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={15} />
            WhatsApp Concierge
          </a>
        </div>
      </div>
    </div>
  );
}
