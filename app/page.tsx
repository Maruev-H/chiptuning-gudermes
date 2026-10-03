import Link from "next/link";
import { AddressBlock, MapLinks } from "../components/MapLinks";
import { CtaButtons } from "../components/CtaButtons";
import { FaqSection } from "../components/FaqSection";
import { JsonLd } from "../components/JsonLd";
import { RelatedServices } from "../components/RelatedServices";
import { createPageMetadata, buildFaqJsonLd, buildLocalBusinessJsonLd } from "../lib/seo";
import { BUSINESS, FAQ_ITEMS, HOME_SERVICES, SITE_URL } from "../lib/site";

export const metadata = createPageMetadata({
  title: "Chiptuning.gudermes — автосервис и автоэлектрик в Гудермесе",
  description:
    "Chiptuning.gudermes на проспекте Терешковой в Гудермесе: автоэлектрик, диагностика автомобиля, чип-тюнинг, адаптация двигателя и АКПП, русификация Changan.",
  path: "/",
  ogTitle: "Chiptuning.gudermes — автосервис и автоэлектрик в Гудермесе",
  ogDescription:
    "Chiptuning.gudermes: диагностика, автоэлектрика, чип-тюнинг и программные работы в Гудермесе.",
});

export default function HomePage() {
  const businessLd = buildLocalBusinessJsonLd(`${SITE_URL}/`);
  const faqLd = buildFaqJsonLd(FAQ_ITEMS);

  return (
    <>
      <JsonLd data={businessLd} />
      <JsonLd data={faqLd} />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Chiptuning.gudermes • проспект Терешковой, 1</div>
              <h1>
                Автосервис и
                <span> автоэлектрик</span>
                <br />
                в Гудермесе
              </h1>
              <p className="hero-text">
                Чип-тюнинг, диагностика автомобилей, адаптация двигателя и АКПП,
                русификация Changan и другие работы.
              </p>

              <CtaButtons iconSuffix="home-hero" />
              <AddressBlock />
            </div>

            <div className="hero-card">
              <div className="card-glow" />
              <div className="diagnostic-screen">
                <div className="screen-top">
                  <span>DIAGNOSTICS</span>
                  <span className="online">● ONLINE</span>
                </div>
                <div className="screen-value">READY</div>
                <div className="screen-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="screen-bottom">
                  <span>ENGINE</span>
                  <span>ECU</span>
                  <span>TCU</span>
                </div>
              </div>
              <div className="hero-card-caption">
                <strong>Диагностика → настройка → проверка</strong>
                <span>Специализация — электроника автомобиля и программные работы</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="container trust-grid">
            <div>
              <strong>Автоэлектрик</strong>
              <span>электроника и блоки управления</span>
            </div>
            <div>
              <strong>Диагностика</strong>
              <span>поиск причин неисправностей</span>
            </div>
            <div>
              <strong>Чип-тюнинг</strong>
              <span>настройка ПО автомобиля</span>
            </div>
            <div>
              <strong>Гудермес</strong>
              <span>проспект Терешковой, 1</span>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">УСЛУГИ</span>
                <h2>Что можно сделать в сервисе</h2>
              </div>
              <p>
                Chiptuning.gudermes специализируется на электронных системах
                автомобиля: диагностика, автоэлектрика, чип-тюнинг и программные
                адаптации.
              </p>
            </div>

            <div className="services-grid services-grid-9">
              {HOME_SERVICES.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link href={service.href}>Подробнее →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container about-grid">
            <div>
              <span className="section-kicker">КАК ПРОХОДИТ РАБОТА</span>
              <h2>Сначала разбираемся в проблеме, потом выполняем работу</h2>
              <p>
                Если нужна диагностика автомобиля в Гудермесе или помощь
                автоэлектрика, удобнее начать с проверки электронных систем.
                Так проще понять, что действительно требуется: ремонт, адаптация,
                настройка или программные работы.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <b>01</b>
                <div>
                  <strong>Диагностика</strong>
                  <span>Считываем ошибки и проверяем параметры систем автомобиля.</span>
                </div>
              </div>
              <div className="step">
                <b>02</b>
                <div>
                  <strong>Работа</strong>
                  <span>Выполняем согласованные с владельцем работы и настройки.</span>
                </div>
              </div>
              <div className="step">
                <b>03</b>
                <div>
                  <strong>Проверка</strong>
                  <span>После работы проверяем результат и состояние системы.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section detail-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">ДОПОЛНИТЕЛЬНО</span>
                <h2>Адаптации и сервисные работы</h2>
              </div>
              <p>
                Часть услуг удобнее обсуждать вместе с диагностикой и настройкой
                электроники. Ниже — работы, которые часто выполняют вместе с основными.
              </p>
            </div>

            <div className="detail-grid">
              <article id="adaptaciya-dvigatelya" className="detail-card">
                <h3>Адаптация двигателя</h3>
                <p>
                  После работ с электронными системами, датчиками или блоками
                  управления двигателю иногда нужна адаптация. Это программная
                  процедура, которая помогает системе корректнее учитывать
                  изменения и стабильнее работать в повседневных режимах.
                </p>
              </article>

              <article id="adaptaciya-akpp" className="detail-card">
                <h3>Адаптация АКПП</h3>
                <p>
                  Адаптация автоматической коробки передач может понадобиться
                  после обслуживания, ремонта или сброса параметров. Цель —
                  помочь коробке снова корректно подстраиваться под стиль езды
                  и режимы работы автомобиля.
                </p>
              </article>

              <article id="chistka-forsunok" className="detail-card">
                <h3>Чистка форсунок</h3>
                <p>
                  Если есть жалобы на нестабильную работу двигателя, расход или
                  запуски, имеет смысл проверить топливную систему. Чистка
                  форсунок в Гудермесе выполняется после оценки состояния —
                  без лишних работ «на всякий случай».
                </p>
              </article>

              <article id="zamena-svechey" className="detail-card">
                <h3>Замена свечей</h3>
                <p>
                  Замена свечей зажигания и проверка системы зажигания —
                  понятная сервисная работа, которую часто совмещают с
                  диагностикой, если есть пропуски, вибрации или проблемы с запуском.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section seo-section">
          <div className="container narrow">
            <span className="section-kicker">CHIPTUNING.GUDERMES</span>
            <h2>Работа с электроникой автомобиля на проспекте Терешковой</h2>
            <p>
              Chiptuning.gudermes находится на проспекте Терешковой в Гудермесе. Здесь можно
              обратиться за помощью автоэлектрика, сделать диагностику автомобиля,
              обсудить чип-тюнинг, адаптацию двигателя и АКПП или русификацию Changan.
            </p>
            <p>
              Ключевая специализация — электронные системы автомобиля: компьютерная
              диагностика, программные настройки, адаптации и связанные сервисные
              работы. Если нужно уточнить задачу по вашему авто, удобнее позвонить
              или написать в WhatsApp.
            </p>
            <div className="seo-links">
              <Link href="/avtoelektrik/">Автоэлектрик</Link>
              <Link href="/diagnostika/">Диагностика</Link>
              <Link href="/chip-tuning/">Чип-тюнинг</Link>
              <Link href="/contacts/">Адрес и маршрут</Link>
            </div>
          </div>
        </section>

        <FaqSection items={FAQ_ITEMS} />

        <section id="contacts" className="contact-section">
          <div className="container contact-grid">
            <div>
              <span className="section-kicker">КОНТАКТЫ</span>
              <h2>Записаться или задать вопрос</h2>
              <p>
                Позвоните или напишите в WhatsApp. Если удобнее приехать сразу,
                постройте маршрут до сервиса на проспекте Терешковой.
              </p>
              <CtaButtons
                className="contact-buttons"
                showWhatsAppLabel
                iconSuffix="home-contacts"
              />
            </div>

            <div className="address-card">
              <span>АДРЕС</span>
              <strong>{BUSINESS.fullAddress}</strong>
              <small>
                {BUSINESS.latitude}, {BUSINESS.longitude}
              </small>
              <MapLinks />
              <a
                className="two-gis"
                href={BUSINESS.twoGisUrl}
                target="_blank"
                rel="noreferrer"
              >
                Открыть карточку в 2ГИС →
              </a>
              <Link className="two-gis" href="/contacts/">
                Страница контактов →
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices pageKey="home" />
      </main>
    </>
  );
}
