import Link from "next/link";
import { CtaButtons } from "../../components/CtaButtons";
import { JsonLd } from "../../components/JsonLd";
import { RelatedServices } from "../../components/RelatedServices";
import { buildLocalBusinessJsonLd, createPageMetadata } from "../../lib/seo";
import { BUSINESS, SITE_URL } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Автоэлектрик в Гудермесе — диагностика и настройка электроники",
  description:
    "Автоэлектрик в Гудермесе: компьютерная диагностика, поиск электронных неисправностей, работа с блоками управления, адаптация систем и настройка заслонок.",
  path: "/avtoelektrik/",
  ogTitle: "Автоэлектрик в Гудермесе",
  ogDescription:
    "Диагностика и настройка электроники автомобиля на проспекте Терешковой в Гудермесе.",
});

export default function AvtoelektrikPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd(`${SITE_URL}/avtoelektrik/`)} />

      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Chiptuning.gudermes</div>
            <h1>Автоэлектрик в Гудермесе</h1>
            <p className="hero-text">
              Помощь с электронными системами автомобиля: диагностика,
              поиск неисправностей, работа с блоками управления и программные
              настройки. Chiptuning.gudermes находится на проспекте Терешковой.
            </p>
            <CtaButtons iconSuffix="avto-hero" />
          </div>
        </section>

        <section className="section">
          <div className="container content-grid">
            <div className="prose">
              <h2>Чем занимается автоэлектрик</h2>
              <p>
                Когда автомобиль ведёт себя нестабильно, загораются ошибки или
                появляются проблемы с запуском, датчиками и электронными модулями,
                сначала имеет смысл проверить электрику и программную часть.
                Автоэлектрик в Гудермесе помогает разобраться, где искать причину,
                а не менять детали наугад.
              </p>
              <p>
                Работа обычно начинается с компьютерной диагностики. По её
                результатам понятнее, нужна ли дальнейшая проверка проводки,
                блоков управления, адаптация систем или другие программные работы.
              </p>

              <h2>Какие задачи решаем</h2>
              <ul className="check-list">
                <li>компьютерная диагностика электронных систем;</li>
                <li>поиск электронных неисправностей;</li>
                <li>работа с блоками управления;</li>
                <li>адаптация электронных систем;</li>
                <li>настройка дроссельных заслонок;</li>
                <li>диагностика двигателя;</li>
                <li>диагностика АКПП;</li>
                <li>программные работы по согласованию с владельцем.</li>
              </ul>

              <article id="nastrojka-zaslonok" className="anchor-block">
                <h2>Настройка и адаптация дроссельных заслонок</h2>
                <p>
                  Если есть жалобы на плавающие обороты, рывки при старте или
                  нестабильную реакцию на педаль газа, проверяют дроссельный узел.
                  В зависимости от состояния автомобиля может понадобиться
                  диагностика, очистка и адаптация дроссельной заслонки.
                </p>
              </article>

              <h2>Когда стоит обратиться</h2>
              <p>
                Имеет смысл записаться, если появились ошибки на панели, пропала
                стабильность работы двигателя, странно ведёт себя коробка,
                некорректно работают электронные функции или нужна программная
                настройка после обслуживания. Точный объём работ зависит от
                конкретного автомобиля и симптомов.
              </p>
              <p>
                Не обещаем «найти всё по одному подключению» без осмотра.
                Диагностика и проверка электроники помогают сузить круг причин,
                а дальше уже понятно, какие действия действительно нужны.
              </p>
            </div>

            <aside className="side-card">
              <span className="section-kicker">НА МЕСТЕ</span>
              <strong>{BUSINESS.fullAddress}</strong>
              <p>
                Можно позвонить, написать в WhatsApp или сразу построить маршрут
                до Chiptuning.gudermes.
              </p>
              <CtaButtons
                className="contact-buttons"
                showWhatsAppLabel
                iconSuffix="avto-side"
              />
              <div className="side-links">
                <Link href="/diagnostika/">Диагностика автомобиля →</Link>
                <Link href="/changan/">Русификация Changan →</Link>
                <Link href="/contacts/">Адрес и карты →</Link>
              </div>
            </aside>
          </div>
        </section>

        <RelatedServices pageKey="avtoelektrik" />
      </main>
    </>
  );
}
