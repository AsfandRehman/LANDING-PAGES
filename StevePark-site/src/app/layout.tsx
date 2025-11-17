// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load fonts and bind them to the CSS variables you referenced in global.css
import { Inter, Playfair_Display } from "next/font/google";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StevePark",
  description:
    "Build impeccable credit and secure smart funding solutions for your dreams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      {/* body uses your CSS vars & Tailwind; make the layout full-height */}
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        {/* Global navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
