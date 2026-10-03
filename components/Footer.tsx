import Link from "next/link";
import { BUSINESS } from "../lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{BUSINESS.name}</strong>
          <span>Чип-тюнинг, диагностика и автоэлектрика</span>
        </div>
        <div className="footer-links">
          <Link href="/contacts/">Контакты</Link>
          <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>
        </div>
      </div>
    </footer>
  );
}
