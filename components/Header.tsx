"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { BUSINESS, MAIN_NAV } from "../lib/site";
import { LogoMark } from "./LogoMark";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`header${open ? " header-open" : ""}`}>
      <div className="container header-inner">
        <Link className="logo" href="/" onClick={closeMenu}>
          <span className="logo-mark" aria-hidden="true">
            <LogoMark />
          </span>
          <span>
            <strong>Chiptuning</strong>
            <small>gudermes</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Основная навигация">
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-phone" href={`tel:${BUSINESS.phone}`}>
          {BUSINESS.phoneDisplay}
        </a>

        <button
          type="button"
          className={`burger${open ? " burger-open" : ""}`}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id={menuId}
        className={`mobile-menu${open ? " mobile-menu-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-nav" aria-label="Мобильная навигация">
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-actions">
          <a
            className="button button-primary"
            href={`tel:${BUSINESS.phone}`}
            onClick={closeMenu}
          >
            {BUSINESS.phoneDisplay}
          </a>
          <a
            className="button button-whatsapp"
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
        </div>
      </div>

      {open ? (
        <button
          type="button"
          className="mobile-menu-backdrop"
          aria-label="Закрыть меню"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
}
