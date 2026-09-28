import { useEffect, useRef, useState } from 'react';
import { mountCloudbedsElement } from './mountCloudbedsElement';
import { useCloudbedsFailure } from '../../utils/useCloudbedsFailure';
import AvailabilityFallback from './AvailabilityFallback';

const PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || '';

export default function HeroDatePicker() {
  const hostRef = useRef(null);
  const [layout, setLayout] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches ? 'vertical' : 'horizontal'
  ));
  const bookingUrl = typeof window === 'undefined' ? '' : `${window.location.origin}/book-your-stay`;
  const failed = useCloudbedsFailure(hostRef);

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

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !PROPERTY_CODE || !bookingUrl) return undefined;
    return mountCloudbedsElement(host, 'cb-property-date-picker', {
      'property-code': PROPERTY_CODE,
      'button-label': 'Check Availability',
      layout,
      lang: 'en',
      currency: 'thb',
      'open-in-new-tab': 'false',
      'custom-url': bookingUrl,
      'class-name': 'elia-hero-picker',
    });
  }, [layout, bookingUrl]);

  if (!PROPERTY_CODE || !bookingUrl) return null;

  return (
    <div className="elia-stay-search w-full">
      <div
        ref={hostRef}
        className={`elia-hero-date-picker w-full select-text ${failed ? 'elia-cloudbeds-failed' : ''}`}
      />
      {failed && <AvailabilityFallback href="/book-your-stay" label="Check Availability" />}
    </div>
  );
}
