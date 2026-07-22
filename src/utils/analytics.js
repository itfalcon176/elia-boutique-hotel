const GA_MEASUREMENT_ID = 'G-322V82FQW8';

// Monkey patch history state methods to track pushState and replaceState calls globally
if (typeof window !== 'undefined' && !window.__analytics_patched__) {
  window.__analytics_patched__ = true;
  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;

  window.history.pushState = function (...args) {
    const result = originalPushState.apply(this, args);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return result;
  };

  window.history.replaceState = function (...args) {
    const result = originalReplaceState.apply(this, args);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return result;
  };
}

/**
 * Initializes Google Analytics 4.
 * Injects the gtag script and sets configuration.
 */
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Avoid duplicate injection (e.g. in React StrictMode)
  if (document.getElementById('google-analytics-script')) return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  // Load the script element
  const script = document.createElement('script');
  script.id = 'google-analytics-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // Control page views manually for SPA route changes
  });
};

/**
 * Track a page view event.
 */
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};
