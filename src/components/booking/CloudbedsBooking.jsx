import { useEffect, useState, useRef } from 'react';
import { ShieldCheck, RotateCw, Phone, Mail, AlertCircle } from 'lucide-react';

const DEFAULT_PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || 'h8cMpo';

/**
 * CloudbedsBooking Component
 *
 * Encapsulates the official Cloudbeds Booking Engine Plus - Immersive Experience 2.0 Web Component.
 * Inherits all typography, colors, and layout tokens from the existing Elia Boutique Hotel design system.
 *
 * @param {Object} props
 * @param {string} [props.propertyCode] - Cloudbeds property identifier (defaults to env or 'h8cMpo')
 * @param {string} [props.className] - Optional container CSS classes
 */
export default function CloudbedsBooking({
  propertyCode = DEFAULT_PROPERTY_CODE,
  className = '',
}) {
  const [isReady, setIsReady] = useState(() => {
    return typeof window !== 'undefined' &&
      window.customElements &&
      Boolean(window.customElements.get('cb-immersive-experience'));
  });
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.customElements) {
      return;
    }

    let isSubscribed = true;

    // Check if already registered
    if (window.customElements.get('cb-immersive-experience')) {
      setIsReady(true);
      setHasError(false);
      return;
    }

    // Timeout guard (12 seconds) in case of CDN block or network failure
    const timer = setTimeout(() => {
      if (isSubscribed && !window.customElements.get('cb-immersive-experience')) {
        setHasError(true);
      }
    }, 12000);

    // Wait for the custom element to be defined by the script in index.html
    window.customElements.whenDefined('cb-immersive-experience')
      .then(() => {
        if (isSubscribed) {
          clearTimeout(timer);
          setIsReady(true);
          setHasError(false);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          clearTimeout(timer);
          setHasError(true);
        }
      });

    return () => {
      isSubscribed = false;
      clearTimeout(timer);
    };
  }, [retryKey]);

  const handleRetry = () => {
    setHasError(false);
    setIsReady(false);
    setRetryKey((prev) => prev + 1);
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Error Fallback State */}
      {hasError ? (
        <div className="bg-white rounded-3xl border border-[#A38B68]/30 shadow-xl p-8 sm:p-12 text-center max-w-2xl mx-auto my-8">
          <div className="w-14 h-14 rounded-full bg-amber-50 border border-amber-200 text-[#826C4B] flex items-center justify-center mx-auto mb-5">
            <AlertCircle size={28} />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Unable to Load Reservation Engine
          </h3>

          <p className="text-[#6E6A63] text-sm font-sans font-light leading-relaxed mb-6 max-w-md mx-auto">
            We are unable to connect to the booking system right now. Please check your network connection, try again, or reach out to our concierge team directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23211E] hover:bg-[#A38B68] text-[#F7F4EF] text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
            >
              <RotateCw size={14} />
              <span>Try Again</span>
            </button>

            <a
              href={`https://hotels.cloudbeds.com/reservation/${propertyCode}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A38B68]/15 hover:bg-[#A38B68]/25 text-[#826C4B] text-xs uppercase tracking-widest font-semibold transition-all"
            >
              <span>Direct Link</span>
            </a>
          </div>

          <div className="pt-6 border-t border-[#A38B68]/20 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#6E6A63]">
            <a href="tel:+66932719103" className="inline-flex items-center gap-2 hover:text-[#A38B68] transition-colors">
              <Phone size={14} className="text-[#A38B68]" />
              <span>+66 93 271 9103</span>
            </a>
            <span className="hidden sm:inline text-black/20">•</span>
            <a href="mailto:info@eliaphuket.com" className="inline-flex items-center gap-2 hover:text-[#A38B68] transition-colors">
              <Mail size={14} className="text-[#A38B68]" />
              <span>info@eliaphuket.com</span>
            </a>
          </div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl sm:rounded-3xl border border-[#A38B68]/30 bg-white shadow-xl overflow-hidden"
        >
          {/* Subtle Security / Status Bar */}
          <div className="bg-[#FAF7F2] px-4 sm:px-6 py-3 border-b border-[#A38B68]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#6E6A63]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-[#23211E]">Live Availability & Direct Rates</span>
              <span className="hidden sm:inline text-black/30">•</span>
              <span className="hidden sm:inline text-[#826C4B]">Official Elia Booking Engine</span>
            </div>

            <div className="flex items-center gap-2 ml-auto text-[11px] text-[#6E6A63]">
              <ShieldCheck size={14} className="text-[#A38B68]" />
              <span className="hidden sm:inline">256-Bit SSL Encrypted Direct Reservation</span>
            </div>
          </div>

          {/* Booking Engine Mount Area */}
          <div className="relative w-full min-h-[680px] sm:min-h-[750px] p-2 sm:p-4 lg:p-6 bg-white">
            {/* Elegant Luxury Spinner while custom element initializes */}
            {!isReady && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#FAF7F2] p-8 text-center">
                <div className="relative w-14 h-14 mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-[#A38B68]/20" />
                  <div className="absolute inset-0 rounded-full border-2 border-t-[#A38B68] border-r-[#A38B68] border-b-transparent border-l-transparent animate-spin" />
                </div>
                <h3 className="font-serif text-xl font-light text-[#23211E] mb-2">
                  Loading Live Rates & Suites...
                </h3>
                <p className="text-[#6E6A63] text-xs max-w-sm font-sans font-light">
                  Connecting to the Elia Boutique Hotel reservation system.
                </p>
              </div>
            )}

            {/* Official Cloudbeds Immersive Experience 2.0 Web Component */}
            <cb-immersive-experience
              key={`cb-${propertyCode}-${retryKey}`}
              mode="standard"
              property-code={propertyCode}
              style={{ display: 'block', width: '100%', minHeight: '650px' }}
            />
          </div>

          {/* Footer Assistance Strip */}
          <div className="bg-[#FAF7F2] px-6 py-3.5 border-t border-[#A38B68]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6E6A63]">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#A38B68]" />
              <span>Best Rate Guaranteed • No Booking Fees • Instant Confirmation</span>
            </div>
            <div>
              <span>Need special assistance? <a href="tel:+66932719103" className="text-[#A38B68] font-medium hover:underline">+66 93 271 9103</a></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
