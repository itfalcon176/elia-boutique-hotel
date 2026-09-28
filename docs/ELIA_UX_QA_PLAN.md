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

Tested locally at 390×844 and 1440×900. Cloudbeds/Stripe live path still needs the production domain.

- [x] Header: menu left, logo centre, language right on mobile
- [x] Language dropdown does not dominate the header or menu
- [x] Room pages: gallery swipe, lightbox, sticky reserve bar
- [x] Hero and room date pickers show Check-in / Check-out / Guests / Availability
- [ ] Cloudbeds search → room → rate → guest details — **blocked on localhost CORS** (`us2.cloudbeds.com` only allows `*.cloudbeds.com`)
- [ ] Stripe: success, failed card, back navigation, confirmation — **blocked until Cloudbeds loads on eliaphuket.com**
- [x] WhatsApp opens with a useful pre-filled message
- [x] GOAT menu routes load and return to Elia
- [x] Google Maps pin / directions link present (`maps.app.goo.gl/D4kSwVVSjBbioifd8`)
- [x] Footer finishes cleanly, no extra white band (footer bottom == page height)
- [x] No Elia-app console errors on menus / location / food-and-drinks
- [x] Cloudbeds CORS errors on localhost are expected; pickers now fall back to Check Availability
- [x] No horizontal overflow at 390 and 1440
- [x] Room gallery images load
- [x] Skip-to-content link present

Local Cloudbeds console (expected, not an Elia bug):

`Access to XMLHttpRequest at https://us2.cloudbeds.com/booking/property_info from origin http://127.0.0.1:5173 has been blocked by CORS policy`

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
