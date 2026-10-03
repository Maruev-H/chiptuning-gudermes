import { BUSINESS, MAP_LINKS } from "../lib/site";

type MapLinksProps = {
  showLabel?: boolean;
  className?: string;
};

export function MapLinks({ showLabel = true, className = "route-menu" }: MapLinksProps) {
  return (
    <div className={className}>
      {showLabel ? <span className="route-label">Построить маршрут:</span> : null}
      <a href={MAP_LINKS.yandex} target="_blank" rel="noreferrer">
        Яндекс Карты
      </a>
      <a href={MAP_LINKS.google} target="_blank" rel="noreferrer">
        Google Maps
      </a>
      <a href={MAP_LINKS.twoGisRoute} target="_blank" rel="noreferrer">
        2ГИС
      </a>
    </div>
  );
}

export function AddressBlock() {
  return (
    <div className="hero-address">
      <span className="pin" aria-hidden="true">
        ●
      </span>
      <div>
        <strong>{BUSINESS.fullAddress}</strong>
        <MapLinks />
      </div>
    </div>
  );
}
