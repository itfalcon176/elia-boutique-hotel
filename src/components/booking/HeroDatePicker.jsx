import { useEffect, useState } from 'react';

const PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || '';

export default function HeroDatePicker() {
  const [layout, setLayout] = useState('horizontal');
  const bookingUrl = typeof window === 'undefined' ? '' : `${window.location.origin}/book-your-stay`;

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const apply = () => setLayout(query.matches ? 'vertical' : 'horizontal');
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const pinCalendar = () => {
      document.querySelectorAll('.cb-portal [class*="calendar-popover"]').forEach((popover) => {
        if (!(popover instanceof HTMLElement) || popover.dataset.eliaPinned === '1') return;
        const rect = popover.getBoundingClientRect();
        if (rect.height > window.innerHeight * 0.85) return;
        if (rect.top >= 12 && rect.bottom <= window.innerHeight - 8) return;
        popover.dataset.eliaPinned = '1';
        popover.style.top = '88px';
        popover.style.left = '50%';
        popover.style.right = 'auto';
        popover.style.bottom = 'auto';
        popover.style.transform = 'translateX(-50%)';
        popover.style.maxHeight = 'calc(100dvh - 104px)';
        popover.style.overflow = 'auto';
      });
    };

    const observer = new MutationObserver(pinCalendar);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });
    return () => observer.disconnect();
  }, []);

  if (!PROPERTY_CODE || !bookingUrl) return null;

  return (
    <div className="elia-hero-date-picker w-full select-text">
      <cb-property-date-picker
        key={layout}
        property-code={PROPERTY_CODE}
        button-label="Search"
        layout={layout}
        lang="en"
        currency="thb"
        open-in-new-tab="false"
        custom-url={bookingUrl}
        class-name="elia-hero-picker"
      />
    </div>
  );
}
