import { CtaButtons } from "../../components/CtaButtons";
import { InstagramIcon } from "../../components/icons/InstagramIcon";
import { WhatsAppIcon } from "../../components/icons/WhatsAppIcon";
import { JsonLd } from "../../components/JsonLd";
import { MapLinks } from "../../components/MapLinks";
import { RelatedServices } from "../../components/RelatedServices";
import { buildLocalBusinessJsonLd, createPageMetadata } from "../../lib/seo";
import { BUSINESS, MAP_LINKS, SITE_URL } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Контакты Chiptuning.gudermes — адрес и телефон",
  description:
    "Контакты Chiptuning.gudermes: проспект Терешковой, 1, Гудермес, телефон 8 938 023-28-93, WhatsApp, Instagram, маршрут в Яндекс Картах, Google Maps и 2ГИС.",
  path: "/contacts/",
  ogTitle: "Контакты Chiptuning.gudermes",
  ogDescription:
    "Адрес, телефон и маршрут до Chiptuning.gudermes на проспекте Терешковой в Гудермесе.",
});

export default function ContactsPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd(`${SITE_URL}/contacts/`)} />

      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Chiptuning.gudermes</div>
            <h1>Контакты</h1>
            <p className="hero-text">
              Адрес, телефон и удобные способы добраться до Chiptuning.gudermes на
              проспекте Терешковой.
            </p>
            <CtaButtons showWhatsAppLabel iconSuffix="contacts-hero" />
          </div>
        </section>

        <section className="section">
          <div className="container contacts-page-grid">
            <div className="address-card contacts-main-card">
              <span>АДРЕС</span>
              <strong>{BUSINESS.fullAddress}</strong>
              <small>
                Координаты: {BUSINESS.latitude}, {BUSINESS.longitude}
              </small>

              <div className="contacts-phone-block">
                <span>ТЕЛЕФОН</span>
                <a className="contacts-phone" href={`tel:${BUSINESS.phone}`}>
                  {BUSINESS.phoneDisplay}
                </a>
              </div>

              <MapLinks />

              <div className="map-buttons">
                <a
                  className="button button-primary"
                  href={`tel:${BUSINESS.phone}`}
                >
                  Позвонить
                </a>
                <a
                  className="button button-whatsapp"
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </a>
                <a
                  className="button button-instagram"
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon gradientId="ig-contacts-map" />
                  <span>Instagram</span>
                </a>
                <a
                  className="button button-secondary"
                  href={MAP_LINKS.yandex}
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс Карты
                </a>
                <a
                  className="button button-secondary"
                  href={MAP_LINKS.google}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Maps
                </a>
                <a
                  className="button button-secondary"
                  href={MAP_LINKS.twoGis}
                  target="_blank"
                  rel="noreferrer"
                >
                  2ГИС
                </a>
              </div>
            </div>

            <div className="prose contacts-aside">
              <h2>Как добраться</h2>
              <p>
                Chiptuning.gudermes находится в Гудермесе по адресу: проспект Терешковой, 1.
                Для построения маршрута используйте Яндекс Карты, Google Maps или
                карточку в 2ГИС.
              </p>
              <p>
                Если нужно уточнить задачу заранее — диагностика, автоэлектрик,
                чип-тюнинг или русификация Changan — напишите в WhatsApp или
                позвоните. Так проще сориентировать по времени и подготовке.
              </p>
              <ul className="check-list">
                <li>
                  <a href={MAP_LINKS.yandex} target="_blank" rel="noreferrer">
                    Маршрут в Яндекс Картах
                  </a>
                </li>
                <li>
                  <a href={MAP_LINKS.google} target="_blank" rel="noreferrer">
                    Маршрут в Google Maps
                  </a>
                </li>
                <li>
                  <a href={MAP_LINKS.twoGisRoute} target="_blank" rel="noreferrer">
                    Маршрут в 2ГИС
                  </a>
                </li>
                <li>
                  <a href={MAP_LINKS.twoGis} target="_blank" rel="noreferrer">
                    Карточка организации в 2ГИС
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedServices pageKey="contacts" />
      </main>
    </>
  );
}
