import { useEffect, useState } from 'react';
import WhatsAppConciergeIcon from './WhatsAppConciergeIcon';
import {
  WHATSAPP_CONCIERGE_LABEL,
  WHATSAPP_DISPLAY,
  whatsappHrefForPage,
} from '../utils/whatsappConcierge';

function isBookingOverlayVisible() {
  if (document.body.classList.contains('elia-booking-scroll-lock')) return true;
  if (document.querySelector('.cb-immersive-experience-popup-content')) return true;
  if (document.querySelector('[aria-label="Opening availability"]')) return true;
  if (document.querySelector('[aria-label="Reservation panel unavailable"]')) return true;
  return false;
}

function isMobileMenuOpen() {
  return Boolean(document.getElementById('elia-mobile-menu'));
}

function useOverlayHidden() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sync = () => {
      setHidden(isMobileMenuOpen() || isBookingOverlayVisible());
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return hidden;
}

function useRoomBottomClearance(activePage) {
  const [clearance, setClearance] = useState(false);

  useEffect(() => {
    const isRoomPage = activePage?.startsWith('rooms/');
    const query = window.matchMedia('(max-width: 1023px)');
    const apply = () => setClearance(isRoomPage && query.matches);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, [activePage]);

  return clearance;
}

export default function FloatingWhatsAppConcierge({ activePage }) {
  const overlayHidden = useOverlayHidden();
  const roomBottomClearance = useRoomBottomClearance(activePage);

  if (activePage === 'book-your-stay') return null;
  if (overlayHidden) return null;

  const href = whatsappHrefForPage(activePage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-4 z-[45] inline-flex items-center gap-2 rounded-full border border-[#A38B68]/35 bg-[#F7F4EF]/95 px-3 py-2.5 text-[#23211E] shadow-[0_12px_32px_rgba(35,33,30,0.18)] backdrop-blur-md transition-all hover:border-[#A38B68] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A38B68] sm:right-5 sm:px-4 sm:py-3 ${
        roomBottomClearance
          ? 'bottom-[calc(5.75rem+env(safe-area-inset-bottom))]'
          : 'bottom-[calc(1rem+env(safe-area-inset-bottom))]'
      }`}
      aria-label={`${WHATSAPP_CONCIERGE_LABEL} (${WHATSAPP_DISPLAY})`}
      title={`${WHATSAPP_CONCIERGE_LABEL} — ${WHATSAPP_DISPLAY}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
        <WhatsAppConciergeIcon size={20} />
      </span>
      <span className="hidden min-[420px]:inline text-[10px] font-semibold uppercase tracking-[0.16em] text-[#23211E]">
        {WHATSAPP_CONCIERGE_LABEL}
      </span>
    </a>
  );
}
