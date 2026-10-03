import Link from "next/link";
import { CtaButtons } from "../../components/CtaButtons";
import { JsonLd } from "../../components/JsonLd";
import { RelatedServices } from "../../components/RelatedServices";
import { buildLocalBusinessJsonLd, createPageMetadata } from "../../lib/seo";
import { BUSINESS, SITE_URL } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Диагностика автомобиля в Гудермесе — компьютерная диагностика",
  description:
    "Диагностика автомобиля в Гудермесе: автодиагностика, компьютерная диагностика двигателя и АКПП, поиск ошибок и неисправностей на проспекте Терешковой.",
  path: "/diagnostika/",
  ogTitle: "Диагностика автомобиля в Гудермесе",
  ogDescription:
    "Компьютерная диагностика и автодиагностика автомобиля в Гудермесе.",
});

export default function DiagnostikaPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd(`${SITE_URL}/diagnostika/`)} />

      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Chiptuning.gudermes</div>
            <h1>Диагностика автомобиля в Гудермесе</h1>
            <p className="hero-text">
              Компьютерная диагностика помогает понять, что происходит с
              электронными системами автомобиля: считать ошибки, проверить
              параметры и выбрать следующий шаг без лишних догадок.
            </p>
            <CtaButtons iconSuffix="diag-hero" />
          </div>
        </section>

        <section className="section">
          <div className="container content-grid">
            <div className="prose">
              <h2>Что такое компьютерная диагностика</h2>
              <p>
                Автодиагностика — это проверка электронных систем автомобиля с
                помощью диагностического оборудования. На практике это помогает
                увидеть коды ошибок, оценить показания датчиков и понять, в
                какую сторону смотреть дальше.
              </p>
              <p>
                Если вам нужна диагностика автомобиля в Гудермесе, удобно начать
                именно с этого: по результату становится яснее, достаточно ли
                программной адаптации, нужна ли проверка проводки, или вопрос
                лежит в другой зоне.
              </p>

              <h2>Как проходит проверка</h2>
              <ol className="steps-list">
                <li>
                  Подключаем оборудование и считываем ошибки электронных систем.
                </li>
                <li>
                  Смотрим параметры работы двигателя, коробки и связанных модулей.
                </li>
                <li>
                  Объясняем результат понятным языком и обсуждаем возможные шаги.
                </li>
              </ol>

              <h2>Что можно проверить</h2>
              <ul className="check-list">
                <li>диагностика двигателя;</li>
                <li>диагностика АКПП;</li>
                <li>поиск ошибок и неисправностей;</li>
                <li>проверка электронных систем автомобиля;</li>
                <li>оценка состояния перед чип-тюнингом или адаптацией.</li>
              </ul>

              <h2>Важно понимать заранее</h2>
              <p>
                Компьютерная диагностика — сильный инструмент, но она не находит
                абсолютно любую неисправность сама по себе. Иногда нужна
                дополнительная проверка узлов, осмотр или уточнение симптомов
                при движении. Задача диагностики — дать понятную картину и
                сократить путь к решению.
              </p>
              <p>
                Chiptuning.gudermes находится на проспекте Терешковой в Гудермесе. Можно
                записаться по телефону или через WhatsApp и коротко описать,
                что происходит с автомобилем.
              </p>
            </div>

            <aside className="side-card">
              <span className="section-kicker">ДАЛЬШЕ ПО СМЫСЛУ</span>
              <strong>После диагностики</strong>
              <p>
                По результатам часто переходят к работе автоэлектрика,
                адаптации систем или чип-тюнингу — если это действительно нужно.
              </p>
              <div className="side-links">
                <Link href="/avtoelektrik/">Автоэлектрик →</Link>
                <Link href="/chip-tuning/">Чип-тюнинг →</Link>
                <Link href="/contacts/">Запись и маршрут →</Link>
              </div>
              <CtaButtons
                className="contact-buttons"
                showWhatsAppLabel
                iconSuffix="diag-side"
              />
              <p className="side-note">{BUSINESS.fullAddress}</p>
            </aside>
          </div>
        </section>

        <RelatedServices pageKey="diagnostika" />
      </main>
    </>
  );
}
