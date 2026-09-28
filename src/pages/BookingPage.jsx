import { useState } from 'react';
import CloudbedsBooking from '../components/booking/CloudbedsBooking';
import { formatStayDate, readStayQuery, roomNameForId } from '../components/booking/staySearch';

export default function BookingPage() {
  const [stay] = useState(() => readStayQuery(typeof window === 'undefined' ? '' : window.location.search));
  const checkinLabel = formatStayDate(stay.checkin);
  const checkoutLabel = formatStayDate(stay.checkout);
  const roomName = roomNameForId(stay.roomId);
  const hasStay = Boolean(checkinLabel && checkoutLabel);

  return (
    <div className="bg-[#F7F4EF] min-h-screen pt-24 pb-16">
      <div id="elia-booking-form" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {hasStay && (
          <p className="mb-4 text-center font-sans text-sm font-light leading-relaxed text-[#6E6A63]">
            {`Availability for ${checkinLabel} to ${checkoutLabel}${roomName ? ` · ${roomName}` : ''}. Guests and payment continue below.`}
          </p>
        )}
        <CloudbedsBooking />
      </div>
    </div>
  );
}
