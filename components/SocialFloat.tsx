import { InstagramIcon } from "./icons/InstagramIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { BUSINESS } from "../lib/site";

export function SocialFloat() {
  return (
    <div className="floating-social">
      <a
        className="floating-btn floating-whatsapp"
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в WhatsApp"
      >
        <WhatsAppIcon className="floating-icon" />
      </a>
      <a
        className="floating-btn floating-instagram"
        href={BUSINESS.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Открыть Instagram"
      >
        <InstagramIcon className="floating-icon" gradientId="float-ig" />
      </a>
    </div>
  );
}
