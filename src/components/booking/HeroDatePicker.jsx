import { useEffect, useRef, useState } from 'react';
import { mountCloudbedsElement } from './mountCloudbedsElement';
import { PROPERTY_CODE, watchStayCalendar } from './staySearch';

export default function HeroDatePicker() {
  const hostRef = useRef(null);
  const [layout, setLayout] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches ? 'vertical' : 'horizontal'
  ));
  const bookingUrl = typeof window === 'undefined' ? '' : `${window.location.origin}/book-your-stay`;

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const apply = () => setLayout(query.matches ? 'vertical' : 'horizontal');
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  useEffect(() => watchStayCalendar(), []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !PROPERTY_CODE || !bookingUrl) return undefined;
    return mountCloudbedsElement(host, 'cb-property-date-picker', {
      'property-code': PROPERTY_CODE,
      'button-label': 'Check availability',
      layout,
      lang: 'en',
      currency: 'thb',
      'open-in-new-tab': 'false',
      'custom-url': bookingUrl,
      'class-name': 'elia-hero-picker',
      'test-id': 'elia-hero-stay',
    });
  }, [layout, bookingUrl]);

  if (!PROPERTY_CODE || !bookingUrl) return null;

  return (
    <div className="elia-hero-date-picker w-full select-text">
      <div ref={hostRef} />
      <p className="mt-3 text-[12px] font-light leading-relaxed text-[#F3DFBF]/90">
        Check-in and check-out. Guests are chosen with availability.
      </p>
    </div>
  );
}
