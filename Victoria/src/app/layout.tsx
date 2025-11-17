// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script"; // ✅ ADD THIS
// app/layout.tsx
import GlobalAudio from "./components/GlobalAudio"; // ✅ add import



import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victoria Rose",
  description: "Official website of Victoria Rose",
};

const SENDER_KEY = "26d6f4efa99316"; // ✅ your key

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preload" href="/music/audio3.mp3" as="audio" />

        <link
          rel="preload"
          href="/fonts/BLKCHCRY.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* ✅ Sender bootstrap (official) */}
        <Script
          id="sender-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (w, er) {
                w.Sender = er;
                if (!w[er]) {
                  var fn = function(){ (fn.q = fn.q || []).push(arguments); };
                  fn.l = Date.now();
                  w[er] = fn;
                }
                w[er]('${SENDER_KEY}');
              })(window, 'sender');`,
          }}
        />

        {/* ✅ Sender library ONCE at app root; explicit=true so we control render */}
        <Script
          id="sender-lib"
          strategy="afterInteractive"
          src="https://cdn.sender.net/accounts_resources/universal.js?explicit=true"
        />
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        <GlobalAudio src="/music/audio3.mp3" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
