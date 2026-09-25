import CloudbedsBooking from '../components/booking/CloudbedsBooking';

export default function BookingPage() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen pt-24 pb-16">
      <div id="elia-booking-form" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <CloudbedsBooking />
      </div>
    </div>
  );
}
