export default function AvailabilityFallback({ href, label = 'Check Availability' }) {
  return (
    <a
      href={href}
      className="elia-availability-fallback"
    >
      {label}
    </a>
  );
}
