import {
  WHATSAPP_DIGITS,
  WHATSAPP_DISPLAY,
  whatsappHref,
} from '../utils/whatsappConcierge';

export const eatDrinkWhatsapp = {
  display: WHATSAPP_DISPLAY,
  digits: WHATSAPP_DIGITS,
};

export function eatDrinkWhatsappHref(message) {
  return whatsappHref(message);
}

export const eatDrinkRoutes = {
  home: 'home',
  goat: 'goat-beach-club',
  rooms: 'rooms',
  food: 'eat-drink',
};

export const eatDrinkData = {
  hero: {
    eyebrow: 'Beachfront Dining & Bar',
    titleLead: 'Dining by GOAT Beach Club at',
    titleAccent: 'Elia',
    heading: 'Your table is just next door.',
    paragraphs: [
      "Elia's food and drink experience comes courtesy of GOAT Beach Club, our beachfront neighbour and an integral part of staying with us.",
      'From the first coffee of the morning to the final drink of the evening, everything happens just a few steps from your room.',
    ],
  },
  sections: [
    {
      id: 'breakfast',
      eyebrow: 'Morning Rituals • 7:00 AM – 12:00 PM (Mid-day)',
      title: 'Breakfast by the Beach',
      paragraphs: [
        'No enormous hotel buffet. Served daily from 7:00 AM to mid-day (12:00 PM) at GOAT Beach Club.',
        'Start your morning at GOAT with freshly prepared breakfast, proper barista coffee and the sea in front of you.',
      ],
      note: "Take your time. You're already where you need to be.",
      image: '/images/Breakfast.webp',
      imageAlt: 'Beachfront breakfast at GOAT Beach Club Bang Tao',
      imageSide: 'end',
      actions: [
        {
          kind: 'whatsapp',
          label: 'Book a table',
          emphasis: 'primary',
          message: 'Hello Elia Phuket, I would like to book a breakfast table at GOAT Beach Club.',
        },
        {
          kind: 'navigate',
          label: 'Discover GOAT',
          emphasis: 'secondary',
          page: eatDrinkRoutes.goat,
        },
      ],
    },
    {
      id: 'dining',
      eyebrow: 'Midday Flavours',
      title: 'Lunch Without Leaving the Beach',
      paragraphs: [
        'Barefoot lunches, Mediterranean-inspired dishes, fresh flavours and long afternoons by Bang Tao Beach.',
        "Staying at Elia means the restaurant isn't somewhere you have to travel to. It's part of the experience.",
      ],
      image: '/images/dining.png',
      imageAlt: 'Barefoot lunch at GOAT Beach Club Bang Tao',
      imageSide: 'start',
      actions: [
        {
          kind: 'whatsapp',
          label: 'Book a table',
          emphasis: 'primary',
          message: 'Hello Elia Phuket, I would like to book a table for lunch at GOAT Beach Club.',
        },
      ],
    },
    {
      id: 'sunset',
      eyebrow: 'Golden Hour & Evening',
      title: 'Sunset Drinks & Dinner',
      paragraphs: [
        'As afternoon turns into evening, stay for cocktails, dinner and the atmosphere of Bang Tao after sunset.',
        'Then walk home. Your room is only moments away.',
      ],
      image: '/images/cocktail.png',
      imageAlt: 'Sunset drinks and cocktails at GOAT Beach Club Bang Tao',
      imageSide: 'end',
      actions: [
        {
          kind: 'whatsapp',
          label: 'Book a table',
          emphasis: 'primary',
          message: 'Hello Elia Phuket, I would like to book a table for dinner at GOAT Beach Club.',
        },
        {
          kind: 'navigate',
          label: 'Discover GOAT',
          emphasis: 'secondary',
          page: eatDrinkRoutes.goat,
        },
      ],
    },
  ],
  roomService: {
    eyebrow: 'In-Suite Convenience',
    title: 'Room Service',
    paragraphs: [
      'Some days, staying in wins. Order from GOAT and enjoy restaurant-quality food from the comfort of your Elia room or terrace.',
    ],
    actions: [
      {
        kind: 'whatsapp',
        label: 'WhatsApp',
        emphasis: 'primary',
        message: 'Hello Elia Phuket, I would like to ask about room service from GOAT Beach Club.',
      },
    ],
  },
  minibar: {
    eyebrow: 'In-Room Amenities',
    title: 'The Elia Minibar',
    liveMenu: false,
    paragraphs: [
      'Tea and coffee in the room are complimentary.',
    ],
    placeholderTitle: 'Not a live menu',
    placeholder:
      'A minibar menu is not published on this page yet. Ask reception, or message the concierge, for what is in your room today.',
    actions: [
      {
        kind: 'whatsapp',
        label: 'WhatsApp',
        emphasis: 'secondary',
        message: 'Hello Elia Phuket, I would like to ask what is in the minibar.',
      },
    ],
  },
  closing: {
    title: 'Experience Beachfront Dining at Elia & GOAT',
    body: 'Complimentary access to GOAT Beach Club is included for all Elia guests throughout their stay on Bang Tao Beach.',
    actions: [
      {
        kind: 'navigate',
        label: 'Discover GOAT Beach Club',
        emphasis: 'primary',
        page: eatDrinkRoutes.goat,
      },
      {
        kind: 'navigate',
        label: 'Explore our rooms',
        emphasis: 'secondary',
        page: eatDrinkRoutes.rooms,
      },
    ],
  },
};
