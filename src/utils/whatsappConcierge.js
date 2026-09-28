import { getRoomBySlug } from '../data/roomsData';
import { getFacilityBySlug } from '../data/wellnessData';

export const WHATSAPP_DIGITS = '66932719103';
export const WHATSAPP_DISPLAY = '+66 93 271 9103';
export const WHATSAPP_CONCIERGE_LABEL = 'WhatsApp Concierge';

export function whatsappHref(message) {
  const base = `https://wa.me/${WHATSAPP_DIGITS}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: 'Hello Elia Phuket Concierge, I would like some assistance.',
  booking: 'Hello Elia Phuket Concierge, I would like help with a booking or availability.',
  location: 'Hello Elia Phuket Concierge, I would like help with directions and location.',
  roomsListing: 'Hello Elia Phuket Concierge, I would like help choosing accommodation.',
  roomDetail: (roomTitle) =>
    `Hello Elia Phuket Concierge, I would like to check availability for the ${roomTitle}.`,
  facility: (facilityTitle) =>
    `Hello Elia Phuket Concierge, I would like to inquire about the ${facilityTitle}.`,
  facilitiesHub: 'Hello Elia Phuket Concierge, I would like to know more about your facilities.',
  dining: 'Hello Elia Phuket, I would like help with dining at GOAT Beach Club.',
  faq: 'Hello Elia Phuket Concierge, I have a question about staying at Elia.',
  experiences: 'Hello Elia Phuket, I would like to inquire about experiences and curations.',
  family: 'Hello Elia Phuket, I would like to inquire about a family stay.',
  wellnessMassage: 'Hello Elia Phuket, I would like to book a massage treatment.',
};

export function whatsappMessageForPage(activePage) {
  if (!activePage || activePage === 'home') return whatsappMessages.general;
  if (activePage === 'book-your-stay') return whatsappMessages.booking;
  if (activePage.startsWith('rooms/')) {
    const slug = activePage.replace('rooms/', '');
    const room = getRoomBySlug(slug);
    return whatsappMessages.roomDetail(room?.title || 'room');
  }
  if (activePage.startsWith('facilities/')) {
    const slug = activePage.replace('facilities/', '');
    const facility = getFacilityBySlug(slug);
    return whatsappMessages.facility(facility?.title || 'facility');
  }
  if (activePage === 'rooms') return whatsappMessages.roomsListing;
  if (activePage === 'wellness' || activePage === 'facilities') return whatsappMessages.facilitiesHub;
  if (activePage === 'eat-drink' || activePage === 'goat-beach-club') return whatsappMessages.dining;
  if (activePage === 'contact' || activePage === 'location' || activePage === 'directions') {
    return whatsappMessages.location;
  }
  if (activePage === 'faq' || activePage === 'faqs') return whatsappMessages.faq;
  if (activePage === 'experiences') return whatsappMessages.experiences;
  if (activePage === 'family-hotel-phuket' || activePage === 'family') return whatsappMessages.family;
  if (activePage === 'offers' || activePage === 'special-offers') return whatsappMessages.booking;
  return whatsappMessages.general;
}

export function whatsappHrefForPage(activePage) {
  return whatsappHref(whatsappMessageForPage(activePage));
}
