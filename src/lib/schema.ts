/**
 * JSON-LD builders. Everything is derived from `config.ts` so the download URL,
 * the macOS floor, and the contact address stay single-sourced with the copy
 * that states them on the page.
 *
 * Entities are given stable `@id`s and cross-referenced, so a crawler reads one
 * product published by one organization rather than three loose records — which
 * is what eventually separates this NoMail from the unrelated products sharing
 * the name.
 */
import { SITE, DOWNLOAD_ARM64, MIN_MACOS, CONTACT_EMAIL, ALL_RELEASES } from "../config";
import { withBase } from "./url";

const abs = (path: string): string => new URL(withBase(path), SITE).href;

export const ORG_ID = `${SITE}/#organization`;
export const SITE_ID = `${SITE}/#website`;
export const APP_ID = `${SITE}/#app`;

export function organization() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "NoMail",
    url: abs("/"),
    email: CONTACT_EMAIL,
    logo: abs("/icon.png"),
    sameAs: [ALL_RELEASES.replace(/\/releases$/, "")],
  };
}

export function website() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: "NoMail",
    url: abs("/"),
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

/** The product itself. `version`/`date` come from the newest changelog entry. */
export function softwareApplication(version?: string, date?: string) {
  return {
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: "NoMail",
    description:
      "A keyboard-first, local-first email client for macOS with custom views, a Markdown composer, and on-device AI.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Email Client",
    operatingSystem: `${MIN_MACOS} or later`,
    url: abs("/"),
    downloadUrl: abs("/download/"),
    installUrl: DOWNLOAD_ARM64,
    screenshot: abs("/og.png"),
    license: "https://fsl.software",
    ...(version ? { softwareVersion: version } : {}),
    ...(date ? { datePublished: date } : {}),
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    publisher: { "@id": ORG_ID },
  };
}

/** Google reads a limited HTML subset in answers; the visible page keeps its
 *  links, the schema takes the plain text. */
export function faqPage(items: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
      },
    })),
  };
}

/** Wraps entities into the single `@graph` document a page embeds. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
