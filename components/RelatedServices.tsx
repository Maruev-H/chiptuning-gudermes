import Link from "next/link";
import { RELATED_BY_PAGE, type RelatedLink } from "../lib/site";

type RelatedServicesProps = {
  pageKey: keyof typeof RELATED_BY_PAGE;
  items?: RelatedLink[];
  title?: string;
};

export function RelatedServices({
  pageKey,
  items,
  title = "Другие услуги",
}: RelatedServicesProps) {
  const links = items ?? RELATED_BY_PAGE[pageKey];

  return (
    <section className="section related-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">ЕЩЁ ПОЛЕЗНО</span>
            <h2>{title}</h2>
          </div>
        </div>

        <div className="related-grid">
          {links.map((item) => (
            <Link className="related-card" key={item.href} href={item.href}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
