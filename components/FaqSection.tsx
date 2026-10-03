import type { FaqItem } from "../lib/site";

type FaqSectionProps = {
  items: FaqItem[];
  title?: string;
};

export function FaqSection({ items, title = "Частые вопросы" }: FaqSectionProps) {
  return (
    <section id="faq" className="faq-section">
      <div className="container narrow">
        <div className="section-heading">
          <div>
            <span className="section-kicker">FAQ</span>
            <h2>{title}</h2>
          </div>
        </div>

        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
