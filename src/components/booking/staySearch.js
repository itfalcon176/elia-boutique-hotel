import { CLOUDBEDS_PROPERTY_CODE } from '../../data/cloudbedsRooms';
import { roomsData } from '../../data/roomsData';

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Env overrides the verified code. An empty env still books NG5F3P. */
export const PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || CLOUDBEDS_PROPERTY_CODE;

function validIsoDate(value) {
  if (!value || !ISO_DATE.test(value)) return '';
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year
    || date.getUTCMonth() !== month - 1
    || date.getUTCDate() !== day
  ) return '';
  return value;
}

export function readStayQuery(search = '') {
  const params = new URLSearchParams(search);
  return {
    checkin: validIsoDate(params.get('checkin')),
    checkout: validIsoDate(params.get('checkout')),
    roomId: (params.get('rid') || '').trim(),
  };
}

export function formatStayDate(iso) {
  if (!validIsoDate(iso)) return '';
  const [year, month, day] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function roomNameForId(roomId) {
  if (!roomId) return '';
  return roomsData.find((room) => room.cloudbedsRoomId === roomId)?.title || '';
}

/**
 * Cloudbeds anchors the stay calendar above the viewport.
 * Pin it when it does not fit, including a tall phone calendar,
 * and leave it alone once it already sits on screen.
 * The booking popup has its own layer, so this stays out of that panel.
 */
export function pinStayCalendar() {
  if (document.querySelector('.cb-immersive-experience-popup-content')) return;
  document.querySelectorAll('.cb-portal [class*="calendar-popover"]').forEach((popover) => {
    if (!(popover instanceof HTMLElement)) return;
    const rect = popover.getBoundingClientRect();
    const fits = rect.top >= 12
      && rect.bottom <= window.innerHeight - 8
      && rect.left >= 8
      && rect.right <= window.innerWidth - 8
      && rect.height > 0
      && rect.height <= window.innerHeight - 96;
    if (fits) {
      delete popover.dataset.eliaPinned;
      return;
    }
    popover.dataset.eliaPinned = '1';
  });
}

export function watchStayCalendar() {
  const observer = new MutationObserver(pinStayCalendar);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class'],
  });
  pinStayCalendar();
  return () => observer.disconnect();
}
