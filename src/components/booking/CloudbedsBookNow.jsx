import { useEffect } from 'react';

const PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || '';

const reservationUrl = (roomId) => {
  if (!PROPERTY_CODE) return '';
  const url = new URL(`https://us2.cloudbeds.com/reservation/${PROPERTY_CODE}`);
  if (roomId) url.searchParams.set('rid', roomId);
  return url.toString();
};

function openEliaReservation(event) {
  const roomId = typeof event?.detail?.roomId === 'string' ? event.detail.roomId : '';
  const url = reservationUrl(roomId);
  if (!url) return;
  const tab = window.open(url, '_blank');
  if (tab) {
    tab.opener = null;
    return;
  }
  window.location.assign(url);
}

/**
 * Opens the hosted Elia Cloudbeds reservation page.
 * The in-page immersive panel cannot load this property from the hotel
 * domain, so booking uses the official reservation URL instead.
 */
export default function CloudbedsBookNow() {
  useEffect(() => {
    if (!PROPERTY_CODE) return undefined;
    window.addEventListener('elia-open-booking', openEliaReservation);
    return () => window.removeEventListener('elia-open-booking', openEliaReservation);
  }, []);

  return null;
}
