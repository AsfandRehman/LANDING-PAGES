// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * ENV + constants
 * - Keep personal site and company site distinct for cleaner entity signals.
 * - Set these in your .env: NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_COMPANY_URL
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://saimaliahmad.com";
const COMPANY_URL =
  process.env.NEXT_PUBLIC_COMPANY_URL?.replace(/\/$/, "") || "https://zsideocontentllc.com";

const SITE_NAME = "Saim Ali Ahmad – Official Website";
const PERSON_NAME = "Saim Ali Ahmad";
const TITLE = "Saim Ali Ahmad – Official Website";
const DESCRIPTION =
  "Official website of Saim Ali Ahmad, founder & CEO of ZSIDEO CONTENT LLC. Self-made millionaire by 19, operator at 20. Verified results across US, CA, UK, AU, and AE.";

const ogImage = `${SITE_URL}/images/saim.jpg`; // Using existing professional image
const email = "saim@zsideocontentllc.com"; // Public brand email

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0B10" },
    { media: "(prefers-color-scheme: light)", color: "#0B0B10" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${PERSON_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/", // resolved against metadataBase -> absolute canonical
    languages: { "en-US": "/" },
  },
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
    url: SITE_URL,
    title: TITLE,
    description:
      "Self-made millionaire by 19, operator at 20. Founder of ZSIDEO CONTENT LLC and multiple service-based businesses.",
    siteName: SITE_NAME,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Saim Ali Ahmad – Official Website",
      },
    ],
    locale: "en_US",
    firstName: "Saim",
    lastName: "Ahmad",
    username: "saim-ali-ahmad",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Self-made millionaire by 19, operator at 20. Founder of ZSIDEO CONTENT LLC and multiple service-based businesses.",
    images: [ogImage],
    creator: "@saimzsideo",
    site: "@saimzsideo",
  },
  icons: {
    icon: [{ url: "/images/1.png" }],
    shortcut: ["/images/1.png"],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN", // TODO: Add actual verification token
    me: [`mailto:${email}`],
  },
  category: "portfolio",
  other: {
    "format-detection": "telephone=no, address=no, email=no",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ---- JSON-LD: Person ----
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saim Ali Ahmad",
    "alternateName": ["Saim Ahmad"],
    "url": SITE_URL,
    "image": `${SITE_URL}/images/saim.jpg`,
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "ZSIDEO CONTENT LLC",
      "url": COMPANY_URL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "homeLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressCountry": "PK"
      }
    },
    "sameAs": [
      "https://www.instagram.com/saimzsideo/",
      "https://www.youtube.com/@saimzsideo"
    ],
    "knowsAbout": [
      "Short-form content strategy",
      "Digital marketing",
      "Web development",
      "AI solutions",
      "Business operations",
      "Entrepreneurship"
    ],
    "description": "Self-made millionaire by 19, founder and CEO of ZSIDEO CONTENT LLC. Operates multiple service-based businesses in content creation, AI solutions, and digital marketing.",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Entrepreneur",
      "occupationLocation": {
        "@type": "City",
        "name": "Dubai"
      }
    }
  };

  // ---- JSON-LD: WebSite (with SearchAction) ----
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Saim Ali Ahmad — Portfolio",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Canonical and identity links (rel=me helps entity resolution) */}
        <link rel="canonical" href={SITE_URL} />
        <link rel="me" href="https://www.instagram.com/saimzsideo/" />
        <link rel="me" href="https://www.youtube.com/@saimzsideo" />

        {/* Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5MTGS98F');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body className={`${inter.variable} font-sans bg-[#0B0B10] text-white`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MTGS98F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black/80 focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
        <Footer />

        {/* Analytics or other scripts can go here */}
        <Script id="ga" strategy="afterInteractive">
          {`/* GA or other analytics here */`}
        </Script>
      </body>
    </html>
  );
}
