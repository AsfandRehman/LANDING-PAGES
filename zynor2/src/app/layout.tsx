// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteName = "Zynor";
const siteUrl = "https://zynor.ai";
const siteTitle = "Zynor | AI-Driven Software Solutions";
const siteDescription =
  "Zynor is a full-stack software house delivering next-generation web, mobile, and AI-powered solutions. We craft scalable, modern products that drive growth and innovation for global businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Zynor",
    "software house",
    "AI development",
    "web development",
    "mobile app development",
    "cloud automation",
    "IT consultancy",
    "custom software solutions",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,

  // --- Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${siteName} Logo`,
      },
    ],
  },

  // --- Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.png"],
    creator: "@zynor_ai", // replace if you have real handle
  },

  // --- Icons
  icons: {
    icon: "/favicon.ico", // from app/
    shortcut: "/favicon.ico",
    apple: "/logo.png",
    other: [
      {
        rel: "icon",
        url: "/logo.png",
      },
    ],
  },

  // --- Robots / SEO directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // --- Manifest (optional)
  manifest: "/site.webmanifest",

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
