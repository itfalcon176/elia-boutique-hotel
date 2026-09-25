const PROPERTY_CODE = import.meta.env.VITE_CLOUDBEDS_PROPERTY_CODE || '';

/**
 * Official Cloudbeds accommodation calendar.
 * Book now opens a date picker for one room type. Continue sends the guest
 * to the hosted booking engine with that room and the selected dates.
 */
export default function AccommodationDatePicker({ roomId, buttonLabel = 'Book now' }) {
  if (!PROPERTY_CODE || !roomId) return null;

  return (
    <div className="elia-room-date-picker w-full">
      <cb-accommodation-date-picker
        key={roomId}
        property-code={PROPERTY_CODE}
        rid={roomId}
        button-label={buttonLabel}
        lang="en"
        currency="thb"
        show-lowest-rate="true"
        class-name="elia-room-book-button"
      />
    </div>
  );
}
