// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://stratos.studio"; // TODO: update to your live domain

const ogImage = `${SITE_URL}/og/og-image.jpg`; // recommended 1200x630

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stratos — Content Elevated",
    template: "%s | Stratos",
  },
  description:
    "Stratos builds a done-for-you content engine with premium, white-glove execution—strategy, creation, and growth handled end to end.",
  keywords: [
    "Stratos",
    "Content Engine",
    "Done-For-You Content",
    "Premium Service",
    "Brand Growth",
    "Short-Form Video",
    "Content Strategy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Stratos — Content Elevated",
    description:
      "A premium, done-for-you content engine. Strategy, creation, and growth handled end to end.",
    siteName: "Stratos",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Stratos — Content Elevated",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratos — Content Elevated",
    description:
      "A premium, done-for-you content engine. Strategy, creation, and growth handled end to end.",
    images: [ogImage],
    creator: "@stratos", // TODO: update to your handle
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer
          brand={{ name: "Stratos", tagline: "A premium, done-for-you content engine.", logo: "/logo.svg" }}
          legal={{
            copyrightName: "Stratos",
            links: [
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
            ],
            badgeNote: "Private Client Program",
          }}
        />
      </body>
    </html>
  );
}
