import WhatsAppIcon from './WhatsAppIcon';
import { whatsappUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function WhatsAppConcierge({
  message = WHATSAPP_MESSAGES.default,
  hidden = false,
}) {
  if (hidden) return null;

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="elia-whatsapp-fab"
      aria-label="WhatsApp Concierge"
      title="WhatsApp Concierge"
    >
      <WhatsAppIcon size={22} />
      <span className="elia-whatsapp-fab-label">Concierge</span>
    </a>
  );
}
