import { useEffect, useRef, useState } from 'react';
import { AlertCircle, RotateCw } from 'lucide-react';

const PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || '';

function popupSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (width < 640) {
    return { width: '100%', height: '100%' };
  }
  if (width < 1024) {
    return {
      width: `${Math.min(700, Math.round(width * 0.92))}px`,
      height: `${Math.min(760, Math.round(height * 0.86))}px`,
    };
  }
  return {
    width: `${Math.min(880, Math.round(width * 0.86))}px`,
    height: `${Math.min(740, Math.round(height * 0.84))}px`,
  };
}

function isPopupOpen() {
  return Boolean(document.querySelector('.cb-immersive-experience-popup-content'));
}

function clickBookNowButton(host) {
  const button = host?.querySelector('button');
  if (!button) return false;
  button.click();
  return true;
}

function isVisible(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle(element);
  return rect.width > 8 && rect.height > 8 && style.display !== 'none' && style.visibility !== 'hidden';
}

function dismissTopLayer() {
  const dialog = [...document.querySelectorAll('[role="dialog"]')].filter(isVisible).at(-1);
  if (dialog) {
    const cancel = [...dialog.querySelectorAll('button')].find((button) => {
      const label = `${button.getAttribute('aria-label') || ''} ${button.textContent || ''}`.trim();
      return /^(cancel|close)$/i.test(label);
    });
    if (cancel) {
      cancel.click();
      return;
    }
    const expanded = document.querySelector('#cb-bookingengine [aria-expanded="true"]');
    if (isVisible(expanded)) {
      expanded.click();
      return;
    }
  }
  document.querySelector('.cb-bookingengine-root [class*="close-button"]')?.click();
}

/**
 * Opens Cloudbeds Immersive Experience on this page.
 * Guests stay on the Elia website. Room choice happens inside the panel.
 */
export default function CloudbedsBookNow() {
  const hostRef = useRef(null);
  const returnFocusRef = useRef(null);
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    if (!PROPERTY_CODE) return undefined;

    let cancelled = false;

    const lockScroll = () => document.body.classList.add('elia-booking-scroll-lock');
    const unlockScroll = () => {
      if (!isPopupOpen()) document.body.classList.remove('elia-booking-scroll-lock');
    };

    const restoreFocus = () => {
      const target = returnFocusRef.current;
      returnFocusRef.current = null;
      unlockScroll();
      if (target instanceof HTMLElement && document.contains(target)) target.focus();
    };

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
      const host = hostRef.current;
      host?.setAttribute('width', size.width);
      host?.setAttribute('height', size.height);
      window.openImmersiveExperiencePopup({
        propertyCode: PROPERTY_CODE,
        closeLabel: 'Close',
        width: size.width,
        height: size.height,
        onClose: () => {
          if (!cancelled) setPhase('idle');
          restoreFocus();
        },
      });
      return true;
    };

    const open = async () => {
      if (cancelled || isPopupOpen()) return;
      const opener = document.activeElement;
      if (opener instanceof HTMLElement) returnFocusRef.current = opener;
      lockScroll();
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

    const dismissError = () => {
      unlockScroll();
      if (!cancelled) setPhase('idle');
    };

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      if (isPopupOpen()) {
        event.preventDefault();
        dismissTopLayer();
        return;
      }
      if (document.body.classList.contains('elia-booking-scroll-lock')) {
        event.preventDefault();
        dismissError();
      }
    };

    const onPopState = () => {
      document.querySelector('.cb-bookingengine-root [class*="close-button"]')?.click();
      document.body.classList.remove('elia-booking-scroll-lock');
    };

    hideTrigger();
    const observer = new MutationObserver(hideTrigger);
    if (hostRef.current) {
      observer.observe(hostRef.current, { childList: true, subtree: true });
    }

    let sawPopup = false;
    const popupObserver = new MutationObserver(() => {
      if (isPopupOpen()) {
        sawPopup = true;
        return;
      }
      if (!sawPopup) return;
      sawPopup = false;
      if (!cancelled) setPhase('idle');
      restoreFocus();
    });
    popupObserver.observe(document.body, { childList: true, subtree: true });

    const onSearchClick = (event) => {
      const target = event.target;
      const card = target instanceof Element ? target.closest('.cb-search-card') : null;
      if (!card) return;
      const button = card.querySelector('.cb-search-button');
      if (!(button instanceof HTMLButtonElement) || !button.disabled) return;
      const rect = button.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
      document.querySelector('#cb-bookingengine [aria-label="Check-in"]')?.click();
    };

    window.addEventListener('elia-open-booking', open);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', onSearchClick);
    return () => {
      cancelled = true;
      observer.disconnect();
      popupObserver.disconnect();
      document.body.classList.remove('elia-booking-scroll-lock');
      window.removeEventListener('elia-open-booking', open);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onSearchClick);
    };
  }, []);

  if (!PROPERTY_CODE) return null;

  const size = typeof window !== 'undefined' ? popupSize() : { width: '880px', height: '740px' };

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
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#181715]/35 px-4"
          role={phase === 'error' ? 'alertdialog' : 'status'}
          aria-live={phase === 'error' ? 'assertive' : 'polite'}
          aria-modal={phase === 'error' ? 'true' : undefined}
          aria-label={phase === 'error' ? 'Reservation panel unavailable' : 'Opening availability'}
        >
          <div className="w-full max-w-sm rounded-3xl border border-[#A38B68]/30 bg-[#F7F4EF] px-6 py-7 text-center shadow-[0_20px_60px_rgba(35,33,30,0.18)]">
            {phase === 'opening' ? (
              <>
                <div className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-[#A38B68]/25 border-t-[#A38B68] animate-spin" />
                <p className="font-serif text-2xl font-light text-[#23211E]">Opening availability</p>
                <p className="mt-2 text-xs font-light leading-relaxed text-[#6E6A63]">
                  Live rates open here, on this page.
                </p>
              </>
            ) : (
              <>
                <AlertCircle size={28} className="mx-auto mb-3 text-[#826C4B]" />
                <p className="font-serif text-2xl font-light text-[#23211E]">Reservation panel unavailable</p>
                <p className="mt-2 text-xs font-light leading-relaxed text-[#6E6A63]">
                  The booking panel could not open on this page. Please try again.
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
                  <button
                    type="button"
                    onClick={() => {
                      document.body.classList.remove('elia-booking-scroll-lock');
                      setPhase('idle');
                    }}
                    className="min-h-11 py-2 text-[11px] uppercase tracking-[0.14em] text-[#6E6A63] cursor-pointer"
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
