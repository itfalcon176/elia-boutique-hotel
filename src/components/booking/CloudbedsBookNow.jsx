import { useEffect, useRef, useState } from 'react';
import { AlertCircle, RotateCw } from 'lucide-react';

const PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || '';

function popupSize() {
  const width = window.innerWidth;
  if (width < 640) {
    return { width: '96vw', height: '94dvh' };
  }
  if (width < 1024) {
    return { width: 'min(760px, 94vw)', height: 'min(860px, 92dvh)' };
  }
  return { width: 'min(1040px, 90vw)', height: 'min(880px, 90dvh)' };
}

function isPopupOpen() {
  if (document.querySelector('.cb-bookingengine-root, #cb-bookingengine, .cb-portal')) return true;
  return [...document.querySelectorAll('button')].some((button) =>
    /^close$/i.test((button.textContent || '').trim()),
  );
}

function clickBookNowButton(host) {
  const button = host?.querySelector('button');
  if (!button) return false;
  button.click();
  return true;
}

/**
 * Hidden official Cloudbeds Book Now control.
 * Existing Elia buttons open this same popup. Room preselection is not
 * applied because this project has no Cloudbeds room ids or abbreviations.
 */
export default function CloudbedsBookNow() {
  const hostRef = useRef(null);
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    if (!PROPERTY_CODE) return undefined;

    let cancelled = false;

    const hideTrigger = () => {
      const host = hostRef.current;
      if (!host) return;
      host.querySelectorAll('button').forEach((button) => {
        button.tabIndex = -1;
        button.setAttribute('aria-hidden', 'true');
      });
    };

    const openOfficialPopup = () => {
      if (typeof window.openImmersiveExperiencePopup !== 'function') return false;
      const size = popupSize();
      window.openImmersiveExperiencePopup({
        propertyCode: PROPERTY_CODE,
        closeLabel: 'Close',
        width: size.width,
        height: size.height,
      });
      return true;
    };

    const open = async () => {
      if (cancelled || isPopupOpen()) return;
      setPhase('opening');

      const deadline = Date.now() + 8000;
      while (!cancelled && Date.now() < deadline) {
        hideTrigger();
        try {
          if (openOfficialPopup() || clickBookNowButton(hostRef.current)) {
            const seenAt = Date.now();
            while (!cancelled && Date.now() - seenAt < 4000) {
              if (isPopupOpen()) {
                setPhase('idle');
                return;
              }
              await new Promise((resolve) => window.setTimeout(resolve, 120));
            }
            setPhase(isPopupOpen() ? 'idle' : 'error');
            return;
          }
        } catch (error) {
          if (isPopupOpen()) {
            setPhase('idle');
            return;
          }
          if (!String(error?.message || '').includes('already open')) {
            break;
          }
        }
        await new Promise((resolve) => window.setTimeout(resolve, 120));
      }

      if (!cancelled) setPhase(isPopupOpen() ? 'idle' : 'error');
    };

    hideTrigger();
    const observer = new MutationObserver(hideTrigger);
    if (hostRef.current) {
      observer.observe(hostRef.current, { childList: true, subtree: true });
    }

    window.addEventListener('elia-open-booking', open);
    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener('elia-open-booking', open);
    };
  }, []);

  if (!PROPERTY_CODE) return null;

  const size = typeof window !== 'undefined' ? popupSize() : { width: 'min(1040px, 90vw)', height: 'min(880px, 90dvh)' };

  return (
    <>
      <div
        aria-hidden="true"
        inert={true}
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clipPath: 'inset(50%)',
          whiteSpace: 'nowrap',
        }}
      >
        <cb-book-now-button
          ref={hostRef}
          property-code={PROPERTY_CODE}
          label="Book Now"
          close-label="Close"
          width={size.width}
          height={size.height}
        />
      </div>

      {phase !== 'idle' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#181715]/35 px-4">
          <div className="w-full max-w-sm rounded-3xl border border-[#A38B68]/30 bg-[#F7F4EF] px-6 py-7 text-center shadow-[0_20px_60px_rgba(35,33,30,0.18)]">
            {phase === 'opening' ? (
              <>
                <div className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-[#A38B68]/25 border-t-[#A38B68] animate-spin" />
                <p className="font-serif text-2xl font-light text-[#23211E]">Opening availability</p>
                <p className="mt-2 text-xs font-light leading-relaxed text-[#6E6A63]">
                  The Elia reservation panel is connecting to live rates.
                </p>
              </>
            ) : (
              <>
                <AlertCircle size={28} className="mx-auto mb-3 text-[#826C4B]" />
                <p className="font-serif text-2xl font-light text-[#23211E]">Reservation panel unavailable</p>
                <p className="mt-2 text-xs font-light leading-relaxed text-[#6E6A63]">
                  Live availability could not be opened in the page. You can continue on the secure booking page or try again.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPhase('idle');
                      window.dispatchEvent(new Event('elia-open-booking'));
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#23211E] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F7F4EF] cursor-pointer"
                  >
                    <RotateCw size={14} />
                    Try again
                  </button>
                  <a
                    href={`https://hotels.cloudbeds.com/reservation/${PROPERTY_CODE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#A38B68]/40 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#826C4B]"
                  >
                    Open secure booking page
                  </a>
                  <button
                    type="button"
                    onClick={() => setPhase('idle')}
                    className="py-2 text-[11px] uppercase tracking-[0.14em] text-[#6E6A63] cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
