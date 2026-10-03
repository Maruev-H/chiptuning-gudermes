import { GoogleMapsIcon } from "./icons/GoogleMapsIcon";
import { TwoGisIcon } from "./icons/TwoGisIcon";
import { YandexMapsIcon } from "./icons/YandexMapsIcon";
import { BUSINESS, MAP_LINKS } from "../lib/site";

type MapLinksProps = {
  showLabel?: boolean;
  className?: string;
  twoGisHref?: string;
};

export function MapLinks({
  showLabel = true,
  className = "route-menu",
  twoGisHref = MAP_LINKS.twoGisRoute,
}: MapLinksProps) {
  return (
    <div className={className}>
      {showLabel ? (
        <strong className="route-label">Построить маршрут</strong>
      ) : null}
      <div className="route-buttons">
        <a
          className="route-button"
          href={MAP_LINKS.yandex}
          target="_blank"
          rel="noreferrer"
        >
          <YandexMapsIcon />
          <span>Яндекс Карты</span>
        </a>
        <a
          className="route-button"
          href={MAP_LINKS.google}
          target="_blank"
          rel="noreferrer"
        >
          <GoogleMapsIcon />
          <span>Google Maps</span>
        </a>
        <a
          className="route-button"
          href={twoGisHref}
          target="_blank"
          rel="noreferrer"
        >
          <TwoGisIcon />
          <span>2ГИС</span>
        </a>
      </div>
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
