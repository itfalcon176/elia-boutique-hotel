import { useEffect, useRef, useState } from 'react';
import { mountCloudbedsElement } from './mountCloudbedsElement';
import { PROPERTY_CODE, watchStayCalendar } from './staySearch';

/**
 * Official Cloudbeds single-property date picker for one room page.
 * Search stays on this website and carries that room's Cloudbeds id.
 * The widget exposes check-in and check-out only. Guests are chosen
 * on the booking page.
 */
export default function RoomPropertyDatePicker({ roomId }) {
  const hostRef = useRef(null);
  const [layout, setLayout] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches ? 'vertical' : 'horizontal'
  ));
  const bookingUrl = typeof window === 'undefined' || !roomId
    ? ''
    : `${window.location.origin}/book-your-stay?rid=${encodeURIComponent(roomId)}`;

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const apply = () => setLayout(query.matches ? 'vertical' : 'horizontal');
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  useEffect(() => watchStayCalendar(), []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !PROPERTY_CODE || !bookingUrl) return undefined;
    return mountCloudbedsElement(host, 'cb-property-date-picker', {
      'property-code': PROPERTY_CODE,
      'button-label': 'Check availability',
      layout,
      lang: 'en',
      currency: 'thb',
      'open-in-new-tab': 'false',
      'custom-url': bookingUrl,
      'class-name': 'elia-room-property-search',
      'test-id': 'elia-room-stay',
    });
  }, [layout, bookingUrl]);

  if (!PROPERTY_CODE || !bookingUrl) return null;

  return (
    <div className="elia-room-property-picker w-full">
      <div ref={hostRef} />
      <p className="mt-3 text-[12px] font-light leading-relaxed text-[#6E6A63]">
        Check-in and check-out for this room. Availability opens on the booking page, where guests are chosen.
      </p>
    </div>
  );
}
