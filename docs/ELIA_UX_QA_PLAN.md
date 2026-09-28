# Elia Boutique Hotel — UX / QA Plan

Preserve the current cream, gold and charcoal theme. Refine hierarchy, mobile booking and unfinished states. Do not redesign from scratch.

Final photography is still outstanding. The image system is ready for a shoot pass: hero first, then sleeping area, bathroom, terrace/outdoor, then details. Swap files in `public/accommodation/` and `room.gallery` without changing layout.

Status values used below: **DONE** · **PARTIAL** · **BLOCKED** · **PENDING EXTERNAL ASSET**

Do not mark DONE unless verified.

## Original handover requirements

| # | Requirement | Status | Verification |
| --- | --- | --- | --- |
| 1 | Accommodation: 4 room types with consistent hero, name, short description, occupancy, beds, key features, from-price, booking CTA. Replace vague View CTAs. Mobile swipe + fullscreen galleries. | **DONE** for presentation / CTAs / galleries. Photography crop/order is **PENDING EXTERNAL ASSET**. | Verified 2026-09-28 on `/accommodation` and all four `/rooms/*` pages at 320–430 and 1440. Cards show from-price, occupancy, bedding, feature chips, **View Room** / specific view labels, and **Book Your Stay**. Room galleries swipe and open fullscreen. Navbar dropdown now says **View Room**. Final crop/order not claimed. |
| 2 | Booking UI: keep Cloudbeds/Stripe untouched. Verify booking CTA visibility/sticky. Make Key Features & Inclusions scannable. | **DONE** for Elia UI. Cloudbeds + Stripe marked **DONE** from live-site confirmation, **not retested** in this pass. | Room pages show Key Features & Inclusions in a two-column checklist. Mobile sticky reserve bar verified on Garden Beach Room. Cloudbeds/Stripe files were not modified. Localhost Cloudbeds CORS remains expected. |
| 3 | WhatsApp as primary direct contact. Keep “WhatsApp Concierge”. Correct destination + contextual prefill. FAB must not block buttons. | **DONE** | Verified `wa.me/66932719103` with contextual messages. Wording unified. FAB hidden on booking, room, and location pages. Footer / header / forms use the shared helper. |
| 4 | GOAT / Food & Drink: explain relationship. Verify Breakfast, Dining, Room Service, Discover GOAT. Keep current menus. No invented GOAT API. Minibar pending. | **DONE** for live CTAs and copy. GOAT API **PENDING EXTERNAL ASSET**. Minibar menu **PENDING EXTERNAL ASSET**. | `/food-and-drinks` explains GOAT-as-neighbour. Breakfast / dining / room-service menus open. Discover GOAT Beach Club opens `/goat-beach-club`. Sunset drinks now has a dinner-menu CTA. Invented Late Night CTA removed. Minibar has no fake menu. |
| 5 | Facilities & Experiences: nav/hierarchy; pool, jacuzzi, cold plunge, sauna, massage, kids club, beachfront. Every experience CTA works. No dead/inactive states. | **DONE** | Facilities index includes the thermal circuit plus Kids Club and Beachfront. Detail routes resolve. Experiences WhatsApp / Bang Tao CTAs work. No inactive reserve buttons left on these pages. |
| 6 | Location & Contact: Call, Email, WhatsApp, Directions. Correct Google Maps. WhatsApp ahead of or alongside Call. Keep simple. | **DONE** | `/location` verified: WhatsApp first, then Call, Email, Directions. Maps short link `maps.app.goo.gl/D4kSwVVSjBbioifd8` and embed present. Contact form opens WhatsApp instead of a fake success state. |
| 7 | Footer: logo size/proportion/spacing on every route. Remove leftover whitespace. Keep brand, nav, contact, social, policies concise. | **DONE** | Footer wordmark uses `elia-footer-logo`. Extra bottom padding clears the FAB. Cookie Policy added. Social icons are 44px. Newsletter opens a real mailto. |
| 8 | Full link / CTA audit: dead, hash, placeholder, inactive, missing routes, broken externals, 404s. | **DONE** for user-facing CTAs. | Unknown URLs now render a working 404. Late Night dead CTA removed. Fake contact/newsletter submits replaced. In-page `#elia-main` and `#hotel-map` are valid. Unused orphan components (`LateNightPage`, `SuitesSection`, `LocationPage`) are not linked. |
| 9 | Mobile UX QA at 320 / 360 / 375 / 390 / 414 / 430 plus desktop. | **DONE** | Header, menu, language, tap targets (≥44px), galleries, footer, WhatsApp, and overflow checked. Horizontal overflow = 0 on sampled routes. 375 behaves with the 360/390 set. Desktop 1440 nav + Book Now verified. |
| 10 | Visual / UI QA without a new design system. | **DONE** for current assets. Photography crops **PENDING EXTERNAL ASSET**. | Theme, type, buttons, and radius unchanged. Hierarchy tightened only where CTAs or spacing were unfinished. |
| 11 | Accessibility / performance / SEO practical fixes. | **DONE** for safe fixes. | Skip link, page titles, room/menu metadata, lazy images, focus-visible, pinch-zoom viewport, 44px targets, descriptive gallery alt text. Unsupported video preload removed. Localhost Cloudbeds console errors are expected and were not treated as Elia bugs. |
| 12 | Final QA: build, lint, tests, route audit, responsive QA. | **DONE** | `npm run lint` warnings only (pre-existing unused imports). `npm run build` succeeded. SPA routes return 200; unknown path renders 404. No test suite is configured. |
| 13 | Documentation. | **DONE** | This plan and `docs/ELIA_CHANGELOG.md` updated with verified statuses. |

## P0 — Critical

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| 1 | Mobile header: menu left, ELIA centre, compact language right | DONE | Verified at 320 and 390 |
| 2 | Simplify mobile navigation | DONE | Rooms accordion, WhatsApp Concierge + Book Now |
| 3 | Check-in / Check-out / Guests / Availability | DONE | Labels remain; Cloudbeds itself not retested |
| 4 | Cloudbeds booking review | DONE | Live site confirmed working. Not modified or retested here |
| 5 | Stripe / payment mobile states | DONE | Live site confirmed working. Not modified or retested here |

## P1 — High

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| 6 | ELIA logo sizing, especially footer | DONE | Header `h-8`–`h-10`; footer `elia-footer-logo` |
| 7 | Unexplained bottom whitespace | DONE | Translate leftovers hidden; footer padding cleared for FAB |
| 8 | WhatsApp as primary contact CTA | DONE | Shared helper, Concierge wording, FAB placement |
| 9 | Accommodation / gallery UX | DONE | Swipe + fullscreen; listing cards now complete |
| 10 | GOAT breakfast / dining / room-service links | DONE | `/menus`, `/menus/breakfast`, `/menus/dining`, `/menus/room-service` |
| 11 | Dead / inactive CTAs | DONE | Late Night CTA removed; 404 added; forms now have destinations |

## P2 — Polish

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| 12 | Mobile + desktop spacing | DONE | Checked 320–430 and 1440 on core routes |
| 13 | Typography, buttons, crops, hierarchy | PARTIAL | UI consistent; final photo crops wait on the shoot |
| 14 | Facilities, experiences, location, footer | DONE | Kids Club + Beachfront added to Facilities index |
| 15 | Accessibility, SEO, performance | DONE | Safe fixes applied and titles verified |
| 16 | Responsive images | PARTIAL | Lazy/async in place. Final srcset/crop pass after photoshoot |

## QA matrix

Tested locally against the production preview on `127.0.0.1:4173`.

- [x] Header: menu left, logo centre, language right on mobile
- [x] Language control is 44×44 and does not dominate the header
- [x] Room pages: gallery, lightbox, sticky reserve bar
- [x] Hero and room date pickers still present (Cloudbeds localhost CORS expected)
- [x] Cloudbeds / Stripe **not retested** — live site already confirmed
- [x] WhatsApp opens `66932719103` with a useful pre-filled message
- [x] GOAT menu routes load and return to Elia
- [x] Google Maps pin / directions link present (`maps.app.goo.gl/D4kSwVVSjBbioifd8`)
- [x] Footer finishes cleanly; FAB does not sit over location CTAs
- [x] No Elia-app console errors on menus / location / food-and-drinks / facilities
- [x] No horizontal overflow at 320, 360, 390, 414, 430, 1440 on sampled routes
- [x] Unknown URL `/this-page-does-not-exist` shows the 404 page
- [x] Skip-to-content link present

Local Cloudbeds console (expected, not an Elia bug):

`Access to XMLHttpRequest at https://us2.cloudbeds.com/booking/property_info from origin http://127.0.0.1:4173 has been blocked by CORS policy`

## Blockers / pending external

1. **Final photography** — PENDING EXTERNAL ASSET. Placeholder crops stay until the shoot lands.
2. **Elia minibar menu** — PENDING EXTERNAL ASSET. Copy remains; no invented menu.
3. **GOAT API feed** — PENDING EXTERNAL ASSET. Current menus stay as the on-site GOAT list.
4. **Late-night / extra GOAT menus** — PENDING EXTERNAL ASSET. Dead CTA removed until a supplied menu exists.

## Image swap when finals arrive

1. Drop hero and room files into `public/accommodation/` using the existing filenames where possible.
2. Keep `roomsData.gallery` order: hero, sleep, bath, terrace, detail.
3. Recheck mobile crops on Home, Accommodation, each room, GOAT, Facilities.
4. Compress without flattening contrast; serve width-appropriate variants.
