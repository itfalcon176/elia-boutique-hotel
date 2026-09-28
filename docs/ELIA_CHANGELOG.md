# Elia Boutique Hotel — Changelog

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

### Still open

- Live Stripe / Cloudbeds payment on a real device.
- Final photography crop pass.
- Elia minibar menu when supplied.
- GOAT API-fed menu when available.
