// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SmoothScroll from "./Components/SmoothScroll";

// Google Font
const inter = Inter({ subsets: ["latin"] });

// --- SEO + Social Meta (Funel Boy) ---
export const metadata: Metadata = {
  title: "Funel Boy | Business Growth Solutions Agency",
  description:
    "Funel Boy helps businesses grow with web development, SEO, social media marketing, and automation that turns clicks into customers.",
  metadataBase: new URL("https://www.funelboy.com"), // ← update to your live domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Funel Boy – Business Growth Solutions",
    description:
      "An agency built for growth. We offer web development, SEO, social media, and automation services that drive real results.",
    url: "https://www.funelboy.com", // ← update to your live domain
    siteName: "Funel Boy",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // put a 1200×630 image in /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Funel Boy – Business Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funel Boy | Business Growth Solutions Agency",
    description:
      "Grow with web dev, SEO, social media, and automation. Funel Boy turns clicks into customers.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" }, // standard .ico
      { url: "/images/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.ico", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/images/favicon.ico"], // leading slash matters
    apple: ["/images/apple-touch-icon.png"], // e.g. 180×180 in /public/images/
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        {/* Wrap the whole page in SmoothScroll */}
        <SmoothScroll lerp={0.12} wheelMultiplier={1.2} smoothTouch>
          <Navbar />

          <main className="flex-1">{children}</main>


          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
