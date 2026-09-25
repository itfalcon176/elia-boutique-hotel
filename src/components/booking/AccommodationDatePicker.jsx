import { CLOUDBEDS_PROPERTY_CODE } from '../../data/cloudbedsRooms';

/**
 * Official Cloudbeds accommodation calendar for one room type.
 * The component renders the reserve button. Continue opens the hosted
 * booking engine with the selected dates and this room's type id.
 */
export default function AccommodationDatePicker({ roomId, roomName, buttonLabel }) {
  const label = buttonLabel || (roomName ? `Reserve Your ${roomName}` : '');

  if (!CLOUDBEDS_PROPERTY_CODE || !roomId || !label) return null;

  return (
    <div className="elia-room-date-picker w-full">
      <cb-accommodation-date-picker
        key={roomId}
        property-code={CLOUDBEDS_PROPERTY_CODE}
        rid={roomId}
        button-label={label}
        lang="en"
        currency="thb"
        class-name="elia-room-book-button"
      />
    </div>
  );
}
