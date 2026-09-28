# Elia Boutique Hotel — Changelog

## 2026-09-28 — Remaining handover completion

Theme, branding and page architecture are unchanged. Cloudbeds and Stripe were not modified.

### Accommodation

- All four room types remain on `/accommodation` and in the header menu.
- Listing cards now show occupancy, bedding, from-price, a short feature set, **View Room** (or a specific view label) and **Book Your Stay**.
- Homepage room cards show bed configuration and from-price on the active card.
- Header dropdown CTA is **View Room** instead of **View →**.
- Room galleries keep swipe and fullscreen lightbox. Final crop/order stays pending.

### Booking UI

- Cloudbeds / Stripe implementation left untouched.
- Key Features & Inclusions remain a scannable checklist on each room page.
- Mobile sticky reserve bar remains on room pages.

### WhatsApp

- Shared helper is now the source for number, display, maps, phone, email and messages.
- Wording is **WhatsApp Concierge** on header, footer, facilities, experiences, FAQs, location and legal pages.
- Contact form opens WhatsApp with the typed message instead of a fake “sent” state.
- Floating concierge control stays hidden on booking, room and location pages so it cannot cover primary actions.

### GOAT / Food & Drink

- GOAT remains explained as Elia’s beachfront neighbour.
- Breakfast, dining, room-service and Discover GOAT Beach Club CTAs verified.
- Sunset drinks now has a dinner-menu CTA.
- Room-service menu has a WhatsApp Concierge order link.
- Invented Late Night menu CTA removed until a real menu is supplied.
- Minibar stays copy-only. No GOAT API was invented.

### Facilities & Experiences

- Facilities index now includes Kids Club and Beachfront alongside the thermal circuit and massage.
- Experience cards use working WhatsApp Concierge or Bang Tao destinations.

### Location, footer and 404

- Location keeps WhatsApp first, then Call, Email and Directions, with the existing Google Maps short link and embed.
- Footer logo, policy links (including Cookie Policy) and 44px social targets tightened.
- Newsletter subscribe opens a real mailto to `info@eliaphuket.com`.
- Unknown routes render a working 404 instead of silently showing Home.

### QA

- Lint: warnings only (pre-existing unused imports in unused/legacy files).
- Production build succeeded.
- Responsive checks at 320, 360, 375/390, 414, 430 and 1440: no horizontal overflow on sampled routes.
- Cloudbeds localhost CORS remains expected and was not treated as an Elia defect.

### Still pending external assets

- Final photography crop / order / focal-point pass.
- Elia minibar menu.
- GOAT API-fed menu.
- Any additional GOAT menus (including late night) once supplied.

## 2026-09-28 — Calm premium mobile refinement

Theme, branding and page architecture are unchanged. Work is a hierarchy and booking-path polish.

### P0

- Mobile header is now **menu · ELIA · compact language**.
- Mobile drawer no longer includes the large language grid or four SEO cards.
- Accommodation stays an accordion with the four room types.
- Book Now and WhatsApp Concierge are the two primary mobile actions.
- Stay search labels spell out Check-in, Check-out, Guests and Availability.
- Cloudbeds search button copy is “Check Availability”.
- Booking page explains the Cloudbeds → guest details → Stripe sequence and adds WhatsApp help if payment fails.
- If Cloudbeds is blocked (localhost CORS or network), date pickers hide the raw “Network Error” chip and show a Check Availability button.

### P1

- Header and footer wordmarks are smaller, with clearer clear-space.
- Google Translate leftover frames that created a white band under the footer are hidden.
- Page shells no longer stack `min-h-screen` + footer empty space.
- WhatsApp is the primary contact treatment in the menu, footer, location page and a floating concierge control that sits above the room sticky bar.
- Room pages have a swipeable gallery and fullscreen lightbox, ready for the photoshoot order.
- Extra family / loft / suite photographs are wired into galleries.
- GOAT breakfast, dining and room-service CTAs open `/menus/...` instead of dead ends.
- Rooms no longer render “Outdoor Area: undefined”.

### P2

- Desktop nav has more space between items.
- Viewport allows pinch-zoom.
- Skip-to-content link and menu SEO titles added.
- Below-fold room images use lazy loading.
