import { useEffect, useRef } from 'react';

const PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || '';

const POPUP_WIDTH = 'min(1080px, 94vw)';
const POPUP_HEIGHT = 'min(900px, 92vh)';

function clickBookNowButton(host) {
  const button = host?.querySelector('button');
  if (!button) return false;
  button.click();
  return true;
}

/**
 * One official Cloudbeds Book Now control for the whole site.
 * It is not shown. Existing Elia buttons open it.
 */
export default function CloudbedsBookNow() {
  const hostRef = useRef(null);

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

    const open = async () => {
      const host = hostRef.current;
      if (!host || cancelled) return;

      const deadline = Date.now() + 8000;
      while (!cancelled && Date.now() < deadline) {
        hideTrigger();
        if (clickBookNowButton(host)) return;
        await new Promise((resolve) => {
          window.setTimeout(resolve, 120);
        });
      }

      if (cancelled) return;

      if (typeof window.openImmersiveExperiencePopup === 'function') {
        window.openImmersiveExperiencePopup({
          propertyCode: PROPERTY_CODE,
          closeLabel: 'Close',
          width: POPUP_WIDTH,
          height: POPUP_HEIGHT,
        });
        return;
      }

      window.open(
        `https://hotels.cloudbeds.com/reservation/${PROPERTY_CODE}`,
        '_blank',
        'noopener,noreferrer',
      );
    };

    const onOpen = () => {
      open();
    };

    hideTrigger();
    const observer = new MutationObserver(hideTrigger);
    if (hostRef.current) {
      observer.observe(hostRef.current, { childList: true, subtree: true });
    }

    window.addEventListener('elia-open-booking', onOpen);
    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener('elia-open-booking', onOpen);
    };
  }, []);

  if (!PROPERTY_CODE) return null;

  return (
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
        width={POPUP_WIDTH}
        height={POPUP_HEIGHT}
      />
    </div>
  );
}
