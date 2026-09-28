import { useEffect, useState } from 'react';

export function useCloudbedsFailure(hostRef) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const check = () => {
      const alert = host.querySelector('[role="alert"]');
      const text = (alert?.textContent || '').toLowerCase();
      if (alert && /network|error|unable|failed/.test(text)) {
        setFailed(true);
      }
    };

    const observer = new MutationObserver(check);
    observer.observe(host, { childList: true, subtree: true, characterData: true });
    const timer = window.setTimeout(check, 2800);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return failed;
}
