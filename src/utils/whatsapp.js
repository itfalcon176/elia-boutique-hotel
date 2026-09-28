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
  massage:
    'Hello Elia Phuket Concierge, I would like to book a massage treatment.',
  family:
    'Hello Elia Phuket Concierge, I would like to inquire about a family stay.',
  experiences:
    'Hello Elia Phuket Concierge, I would like to plan custom Phuket experiences.',
  faq: 'Hello Elia Phuket Concierge, I have a question about staying at Elia.',
};

export function roomEnquiryMessage(roomTitle) {
  return `Hello Elia Phuket Concierge, I would like to check availability for the ${roomTitle}.`;
}

export function experienceEnquiryMessage(title) {
  return `Hello Elia Phuket Concierge, I would like to inquire about: ${title}`;
}

export function facilityEnquiryMessage(title) {
  return `Hello Elia Phuket Concierge, I would like to inquire about the ${title}.`;
}

export function contactFormMessage({ name, email, phone, message }) {
  const phoneLine = phone ? ` Phone: ${phone}.` : '';
  return `Hello Elia Phuket Concierge, my name is ${name}. Email: ${email}.${phoneLine} Message: ${message}`;
}

export function newsletterMailto(email) {
  return `mailto:info@eliaphuket.com?subject=${encodeURIComponent('Elia Privé')}&body=${encodeURIComponent(
    `Please add ${email} to the Elia Privé guest circle.`
  )}`;
}
