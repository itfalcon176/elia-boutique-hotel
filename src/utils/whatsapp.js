export const WHATSAPP_NUMBER = '66932719103';
export const WHATSAPP_DISPLAY = '+66 93 271 9103';
export const PHONE_HREF = 'tel:+66932719103';
export const EMAIL_HREF = 'mailto:info@eliaphuket.com';
export const MAPS_HREF = 'https://maps.app.goo.gl/D4kSwVVSjBbioifd8';

const DEFAULT_MESSAGE =
  'Hello Elia Phuket Concierge, I would like some assistance with my stay.';

export function whatsappUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  default: DEFAULT_MESSAGE,
  booking:
    'Hello Elia Phuket Concierge, I need help checking availability or completing a reservation.',
  payment:
    'Hello Elia Phuket Concierge, I need help with a payment or booking confirmation.',
  breakfast:
    'Hello Elia Phuket Concierge, I would like to ask about breakfast at GOAT Beach Club.',
  dining:
    'Hello Elia Phuket Concierge, I would like to ask about dining at GOAT Beach Club.',
  roomService:
    'Hello Elia Phuket Concierge, I would like to order room service from GOAT Beach Club.',
  location:
    'Hello Elia Phuket Concierge, I would like directions and arrival assistance.',
};

export function roomEnquiryMessage(roomTitle) {
  return `Hello Elia Phuket Concierge, I would like to check availability for the ${roomTitle}.`;
}
