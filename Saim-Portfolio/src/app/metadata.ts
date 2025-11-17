// app/metadata.ts
import type { Metadata } from "next";
import { SITE } from "../../lib/seo";

const title = `${SITE.name} — Portfolio`;
const description = SITE.description;

export const metadata: Metadata = {
  // Ensures canonical and OG become absolute
  metadataBase: new URL(SITE.url),

  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description,
  applicationName: SITE.name,

  // Let Next resolve "/" against metadataBase → absolute canonical
  alternates: {
    canonical: "/",
  },

  // ✅ Explicitly allow indexing & rich previews
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "profile",
    url: SITE.url,
    title,
    description,
    siteName: SITE.name,
    locale: SITE.locale, // e.g., "en_US"
    images: [{ url: SITE.image }],

  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [SITE.image],
  },

  icons: {
    icon: [
      { url: "images/1.ico" },
      { url: "images/1.ico", sizes: "192x192", type: "image/png" },
      { url: "images/1.ico", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "images/1.ico" }],
  },

  verification: {
    // Prefer injecting via env in production:
    // google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default metadata;
