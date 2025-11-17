// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://zsideo.com";

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
    default: "ZSIDEO — Portal-Grade Coaching & Design",
    template: "%s | ZSIDEO",
  },
  description:
    "ZSIDEO delivers portal-grade design, glass UI, and smooth UX for coaching and business growth.",
  keywords: [
    "ZSIDEO",
    "Coaching",
    "Business Growth",
    "Glass UI",
    "Portal Design",
    "Smooth UX",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "ZSIDEO — Portal-Grade Coaching & Design",
    description:
      "Portal-grade design, glass UI, and smooth UX. Start your coaching journey with ZSIDEO.",
    siteName: "ZSIDEO",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "ZSIDEO Coaching Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZSIDEO — Portal-Grade Coaching & Design",
    description:
      "Portal-grade design, glass UI, and smooth UX. Start your coaching journey with ZSIDEO.",
    images: [ogImage],
    creator: "@zsideo", // <-- update with your handle if available
  },
  icons: {
     icon: [
    { url: "/images/favicon.png", sizes: "512x512", type: "image/png" }, // new big version
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
          brand={{ name: "ZSIDEO", tagline: "We build outcomes.", logo: "/logo.svg" }}
          legal={{
            copyrightName: "ZSIDEO",
            links: [
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
            ],
            badgeNote: "Secured • ISO 27001",
          }}
        />
      </body>
    </html>
  );
}
