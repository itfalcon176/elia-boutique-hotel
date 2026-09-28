# Elia Boutique Hotel — UX / QA Plan

Preserve the current cream, gold and charcoal theme. Refine hierarchy, mobile booking and unfinished states. Do not redesign from scratch.

Final photography is still outstanding. The image system is ready for a shoot pass: hero first, then sleeping area, bathroom, terrace/outdoor, then details. Swap files in `public/accommodation/` and `room.gallery` without changing layout.

## P0 — Critical

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| 1 | Mobile header: menu left, ELIA centre, compact language right | Done | Desktop keeps logo / nav / Book Now + language |
| 2 | Simplify mobile navigation | Done | Rooms accordion, text secondary links, language removed from drawer |
| 3 | Check-in / Check-out / Guests / Availability | Done | Labels above Cloudbeds pickers; booking page copy updated |
| 4 | Cloudbeds booking review | In progress | Widget mounts with property `NG5F3P`. Full guest-detail → Stripe path needs a live reservation |
| 5 | Stripe / payment mobile states | Reviewed in code | Panel is fullscreen on small screens; failed-payment WhatsApp fallback added. Live card test still required |

## P1 — High

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| 6 | ELIA logo sizing, especially footer | Done | Header `h-8`–`h-10`; footer `elia-footer-logo` |
| 7 | Unexplained bottom whitespace | Done | Google Translate leftovers hidden; `main` no longer forced to `min-h-screen`; footer padding tightened |
| 8 | WhatsApp as primary contact CTA | Done | Header menu, FAB, footer, contact, booking fallbacks. FAB sits above the room sticky bar |
| 9 | Accommodation / gallery UX | Done | Swipe + fullscreen gallery; extra room photos wired; outdoor copy hidden when missing |
| 10 | GOAT breakfast / dining / room-service links | Done | `/menus`, `/menus/breakfast`, `/menus/dining`, `/menus/room-service` |
| 11 | Dead / inactive CTAs | Done | Orphaned `/menus` route restored; Rooms “undefined outdoor” fixed |

## P2 — Polish

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| 12 | Mobile + desktop spacing | Partial | Header, footer, menus, rooms |
| 13 | Typography, buttons, crops, hierarchy | Partial | Compact language, calmer menu, explicit booking labels |
| 14 | Facilities, experiences, location, footer | Partial | Footer + location WhatsApp first; facilities pages unchanged in structure |
| 15 | Accessibility, SEO, performance | Partial | Skip link, scalable viewport, menu SEO titles, lazy images |
| 16 | Responsive images | Partial | Lazy/async on room cards and gallery thumbs. Final hero/srcset pass after photoshoot |

## QA matrix

Test at 390×844 (iPhone), 412×915 (Android), 768×1024, 1280×800, 1440×900.

- [ ] Header: menu left, logo centre, language right on mobile
- [ ] Language dropdown does not dominate the header or menu
- [ ] Room pages: gallery swipe, lightbox, sticky reserve bar
- [ ] Hero and room date pickers show Check-in / Check-out / Guests / Availability
- [ ] Cloudbeds search → room → rate → guest details
- [ ] Stripe: success, failed card, back navigation, confirmation
- [ ] WhatsApp opens with a useful pre-filled message
- [ ] GOAT menu routes load and return to Elia
- [ ] Google Maps pin / directions
- [ ] Footer finishes cleanly, no extra white band
- [ ] No console or network errors on core pages
- [ ] No horizontal overflow
- [ ] Images load without layout jump
- [ ] Keyboard: skip link, Escape closes gallery and booking overlay

## Blockers

1. **Final photography** — placeholder crops stay until the shoot lands.
2. **Live Stripe** — Cloudbeds owns card capture. A real mobile booking (including a failed card) still needs a test reservation and hotel-side confirmation.
3. **Elia minibar menu** — not supplied; copy remains, no invented menu.
4. **GOAT API feed** — current menus are the on-site GOAT list. Replace with API when available.

## Image swap when finals arrive

1. Drop hero and room files into `public/accommodation/` using the existing filenames where possible.
2. Keep `roomsData.gallery` order: hero, sleep, bath, terrace, detail.
3. Recheck mobile crops on Home, Accommodation, each room, GOAT, Facilities.
4. Compress without flattening contrast; serve width-appropriate variants.
