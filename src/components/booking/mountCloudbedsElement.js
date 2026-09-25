const PICKER_SELECTOR = 'cb-property-date-picker, cb-accommodation-date-picker';

function clearStaleBookingEngine() {
  document.querySelectorAll('#cb-bookingengine').forEach((node) => {
    if (!node.closest(PICKER_SELECTOR)) node.remove();
  });
}

function isPainted(element) {
  if (!element || !element.isConnected) return false;
  const box = element.getBoundingClientRect();
  return box.height > 24 && element.childElementCount > 0;
}

/**
 * Cloudbeds paints a custom element only when it connects.
 * React client navigation can insert the tag while the previous
 * booking engine is still tearing down, so the new widget stays blank
 * until a full reload. Create it after navigation and retry if it
 * never paints.
 */
export function mountCloudbedsElement(host, tagName, attributes) {
  let stopped = false;
  let timer = 0;

  const create = () => {
    const element = document.createElement(tagName);
    Object.entries(attributes).forEach(([key, value]) => {
      if (value != null && value !== '') element.setAttribute(key, String(value));
    });
    return element;
  };

  const mount = () => {
    if (stopped || !host.isConnected) return;
    clearStaleBookingEngine();
    host.replaceChildren(create());
  };

  const ensure = (attempt) => {
    if (stopped || !host.isConnected) return;
    const current = host.querySelector(tagName);
    if (isPainted(current)) return;
    if (attempt > 0) mount();
    if (attempt >= 5) return;
    timer = window.setTimeout(() => ensure(attempt + 1), attempt === 0 ? 900 : 700);
  };

  mount();
  ensure(0);

  return () => {
    stopped = true;
    window.clearTimeout(timer);
    host.replaceChildren();
  };
}
