import type { Metadata } from "next";
import { BUSINESS, SITE_URL } from "./site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
}: PageSeoInput): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      siteName: BUSINESS.name,
    },
  };
}

export function buildLocalBusinessJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: BUSINESS.addressLocality,
    },
  };
}

export function buildFaqJsonLd(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
