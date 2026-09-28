import { useEffect, useRef } from 'react';
import { mountCloudbedsElement } from './mountCloudbedsElement';
import { PROPERTY_CODE } from './staySearch';

/**
 * Official Cloudbeds accommodation calendar for one room type.
 * Continue stays on this website and carries the selected dates and room id.
 * Cloudbeds opens that booking page in a new tab. Guests are not on this calendar.
 */
export default function AccommodationDatePicker({ roomId, buttonLabel }) {
  const hostRef = useRef(null);
  const label = buttonLabel || 'Check dates';
  const bookingUrl = typeof window === 'undefined' ? '' : `${window.location.origin}/book-your-stay`;

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !PROPERTY_CODE || !roomId || !label || !bookingUrl) return undefined;
    return mountCloudbedsElement(host, 'cb-accommodation-date-picker', {
      'property-code': PROPERTY_CODE,
      rid: roomId,
      'button-label': label,
      lang: 'en',
      currency: 'thb',
      'custom-url': bookingUrl,
      'class-name': 'elia-room-book-button',
    });
  }, [roomId, label, bookingUrl]);

  if (!PROPERTY_CODE || !roomId || !label || !bookingUrl) return null;

  return <div ref={hostRef} className="elia-room-date-picker w-full" />;
}
