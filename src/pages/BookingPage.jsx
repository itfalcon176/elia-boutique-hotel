import CloudbedsBooking from '../components/booking/CloudbedsBooking';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { whatsappUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function BookingPage() {
  return (
    <div className="bg-[#F7F4EF] pt-24 pb-16">
      <div id="elia-booking-form" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mb-6 text-center sm:text-left">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#A38B68] font-semibold mb-2">
            Direct reservation
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#23211E]">
            Check-in, check-out, guests & availability
          </h1>
          <p className="mt-2 text-sm text-[#6E6A63] font-light max-w-2xl">
            Choose your dates and guests, review live rates, then continue to guest details and secure Stripe payment. You stay on the Elia website throughout.
          </p>
        </div>
        <CloudbedsBooking />
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-[#A38B68]/25 bg-white px-5 py-4">
          <p className="text-xs text-[#6E6A63] font-light">
            If a payment fails, use the back control in the booking panel to try again. Need help? Our concierge can complete the reservation with you.
          </p>
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.payment)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white shrink-0"
          >
            <WhatsAppIcon size={15} />
            WhatsApp Concierge
          </a>
        </div>
      </div>
    </div>
  );
}
