import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SocialFloat } from "../components/SocialFloat";
import { BUSINESS, SITE_URL } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chiptuning.gudermes — автосервис и автоэлектрик в Гудермесе",
    template: "%s",
  },
  description:
    "Chiptuning.gudermes на проспекте Терешковой в Гудермесе: автоэлектрик, диагностика автомобиля, чип-тюнинг, адаптация двигателя и АКПП, русификация Changan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    title: "Chiptuning.gudermes — автосервис и автоэлектрик в Гудермесе",
    description:
      "Диагностика, автоэлектрика, чип-тюнинг и программные работы с автомобилем в Гудермесе.",
    siteName: BUSINESS.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
        <SocialFloat />
      </body>
    </html>
  );
}
