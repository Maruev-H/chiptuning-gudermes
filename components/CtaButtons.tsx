import { InstagramIcon } from "./icons/InstagramIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { BUSINESS } from "../lib/site";

type CtaButtonsProps = {
  className?: string;
  showWhatsAppLabel?: boolean;
  showInstagram?: boolean;
  iconSuffix?: string;
};

export function CtaButtons({
  className = "hero-actions",
  showWhatsAppLabel = false,
  showInstagram = true,
  iconSuffix = "cta",
}: CtaButtonsProps) {
  return (
    <div className={className}>
      <a className="button button-primary" href={`tel:${BUSINESS.phone}`}>
        Позвонить
      </a>
      <a
        className="button button-whatsapp"
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon />
        <span>{showWhatsAppLabel ? "Написать в WhatsApp" : "WhatsApp"}</span>
      </a>
      {showInstagram ? (
        <a
          className="button button-instagram"
          href={BUSINESS.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon gradientId={`ig-${iconSuffix}`} />
          <span>Instagram</span>
        </a>
      ) : null}
    </div>
  );
}
