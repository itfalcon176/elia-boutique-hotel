import { useEffect, useRef } from 'react';
import { CLOUDBEDS_PROPERTY_CODE } from '../../data/cloudbedsRooms';
import { mountCloudbedsElement } from './mountCloudbedsElement';

/**
 * Official Cloudbeds accommodation calendar for one room type.
 * Continue stays on this website and carries the selected dates and room id.
 */
export default function AccommodationDatePicker({ roomId, roomName, buttonLabel }) {
  const hostRef = useRef(null);
  const rawLabel = buttonLabel || (roomName ? `Reserve Your ${roomName}` : '');
  const label = rawLabel.replace(/ /g, '\u00A0');
  const bookingUrl = typeof window === 'undefined' ? '' : `${window.location.origin}/book-your-stay`;

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !CLOUDBEDS_PROPERTY_CODE || !roomId || !label || !bookingUrl) return undefined;
    return mountCloudbedsElement(host, 'cb-accommodation-date-picker', {
      'property-code': CLOUDBEDS_PROPERTY_CODE,
      rid: roomId,
      'button-label': label,
      lang: 'en',
      currency: 'thb',
      'custom-url': bookingUrl,
      'class-name': 'elia-room-book-button',
    });
  }, [roomId, label, bookingUrl]);

  if (!CLOUDBEDS_PROPERTY_CODE || !roomId || !label || !bookingUrl) return null;

  return <div ref={hostRef} className="elia-room-date-picker w-full" />;
}
