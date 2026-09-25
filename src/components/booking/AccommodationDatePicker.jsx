import { CLOUDBEDS_PROPERTY_CODE } from '../../data/cloudbedsRooms';

/**
 * Official Cloudbeds accommodation calendar for one room type.
 * Continue stays on this website and carries the selected dates and room id.
 */
export default function AccommodationDatePicker({ roomId, roomName, buttonLabel }) {
  const label = buttonLabel || (roomName ? `Reserve Your ${roomName}` : '');
  const bookingUrl = typeof window === 'undefined' ? '' : `${window.location.origin}/book-your-stay`;

  if (!CLOUDBEDS_PROPERTY_CODE || !roomId || !label || !bookingUrl) return null;

  return (
    <div className="elia-room-date-picker w-full">
      <cb-accommodation-date-picker
        key={roomId}
        property-code={CLOUDBEDS_PROPERTY_CODE}
        rid={roomId}
        button-label={label}
        lang="en"
        currency="thb"
        custom-url={bookingUrl}
        class-name="elia-room-book-button"
      />
    </div>
  );
}
