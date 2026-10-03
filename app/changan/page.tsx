import Link from "next/link";
import { CtaButtons } from "../../components/CtaButtons";
import { JsonLd } from "../../components/JsonLd";
import { RelatedServices } from "../../components/RelatedServices";
import { buildLocalBusinessJsonLd, createPageMetadata } from "../../lib/seo";
import { BUSINESS, SITE_URL } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Русификация Changan в Гудермесе",
  description:
    "Русификация Changan в Гудермесе: мультимедиа, программные настройки, адаптация и диагностика автомобилей Changan на проспекте Терешковой.",
  path: "/changan/",
  ogTitle: "Русификация Changan в Гудермесе",
  ogDescription:
    "Русификация мультимедиа Changan и программные работы в Chiptuning.gudermes.",
});

export default function ChanganPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd(`${SITE_URL}/changan/`)} />

      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Chiptuning.gudermes</div>
            <h1>Русификация Changan в Гудермесе</h1>
            <p className="hero-text">
              Русификация мультимедиа и доступные программные работы для
              автомобилей Changan. Объём зависит от комплектации конкретного
              автомобиля.
            </p>
            <CtaButtons iconSuffix="changan-hero" />
          </div>
        </section>

        <section className="section">
          <div className="container content-grid">
            <div className="prose">
              <h2>Что можно сделать с Changan</h2>
              <p>
                Владельцы Changan часто обращаются за русификацией мультимедиа и
                связанными программными настройками. В Chiptuning.gudermes
                эти задачи решаются вместе с диагностикой и адаптацией, если они
                нужны именно вашему автомобилю.
              </p>
              <p>
                Конкретные модели заранее не перечисляем: комплектации и
                программные возможности отличаются. Поэтому удобнее коротко
                описать автомобиль и задачу по телефону или в WhatsApp.
              </p>

              <h2>Основные направления</h2>
              <ul className="check-list">
                <li>русификация мультимедиа;</li>
                <li>программные настройки доступных функций;</li>
                <li>адаптация электронных систем;</li>
                <li>диагностика автомобиля;</li>
                <li>другие программные работы с Changan по согласованию.</li>
              </ul>

              <h2>Как обычно проходит обращение</h2>
              <p>
                Сначала уточняем, что нужно: только русификация, диагностика или
                более широкий список работ. Затем на месте смотрим возможности
                конкретной комплектации и выполняем согласованные действия.
              </p>
              <p>
                Если после диагностики видно, что нужна помощь автоэлектрика или
                отдельные адаптации, это обсуждается отдельно — без лишних
                навязанных услуг.
              </p>

              <h2>Где выполняется работа</h2>
              <p>
                Chiptuning.gudermes находится на проспекте Терешковой, 1 в Гудермесе. Сюда
                удобно приехать, если нужна русификация Changan, проверка
                электроники или связанные программные работы.
              </p>
            </div>

            <aside className="side-card">
              <span className="section-kicker">СВЯЗАННЫЕ УСЛУГИ</span>
              <strong>Не только русификация</strong>
              <p>
                Для Changan также актуальны диагностика и работа автоэлектрика —
                если есть ошибки или нужна настройка систем.
              </p>
              <div className="side-links">
                <Link href="/diagnostika/">Диагностика →</Link>
                <Link href="/avtoelektrik/">Автоэлектрик →</Link>
                <Link href="/contacts/">Контакты и маршрут →</Link>
              </div>
              <CtaButtons
                className="contact-buttons"
                showWhatsAppLabel
                iconSuffix="changan-side"
              />
              <p className="side-note">{BUSINESS.fullAddress}</p>
            </aside>
          </div>
        </section>

        <RelatedServices pageKey="changan" />
      </main>
    </>
  );
}
