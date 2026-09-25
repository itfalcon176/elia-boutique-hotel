import { useEffect, useState } from 'react';
import { CLOUDBEDS_PROPERTY_CODE } from '../../data/cloudbedsRooms';

/**
 * Official Cloudbeds single-property date picker.
 * Search continues on the hosted booking engine with the selected dates.
 */
export default function RoomPropertyDatePicker() {
  const [layout, setLayout] = useState('horizontal');

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const apply = () => setLayout(query.matches ? 'vertical' : 'horizontal');
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const pinCalendar = () => {
      if (document.querySelector('.cb-immersive-experience-popup-content')) return;
      document.querySelectorAll('.cb-portal [class*="calendar-popover"]').forEach((popover) => {
        if (!(popover instanceof HTMLElement) || popover.dataset.eliaPinned === '1') return;
        const rect = popover.getBoundingClientRect();
        if (rect.height > window.innerHeight * 0.85) return;
        if (rect.top >= 12 && rect.bottom <= window.innerHeight - 8) return;
        popover.dataset.eliaPinned = '1';
      });
    };

    const observer = new MutationObserver(pinCalendar);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
    pinCalendar();
    return () => observer.disconnect();
  }, []);

  if (!CLOUDBEDS_PROPERTY_CODE) return null;

  return (
    <div className="elia-room-property-picker w-full">
      <cb-property-date-picker
        key={layout}
        property-code={CLOUDBEDS_PROPERTY_CODE}
        button-label="Check Availability"
        layout={layout}
        lang="en"
        currency="thb"
        open-in-new-tab="false"
        class-name="elia-room-property-search"
      />
    </div>
  );
}
