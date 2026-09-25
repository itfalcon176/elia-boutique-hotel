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
