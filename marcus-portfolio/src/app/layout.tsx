// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcusedits.com"),
  title: "Marcus - Short-Form Video Editor | TikTok, Reels, YouTube Shorts",
  description: "Freelance short-form video editor specializing in TikTok, Instagram Reels, and YouTube Shorts. Clean, fast, platform-native edits that drive engagement.",
  keywords: ["video editor", "TikTok editor", "short-form video", "Reels editor", "YouTube Shorts"],
  authors: [{ name: "Marcus" }],
  openGraph: {
    title: "Marcus - Short-Form Video Editor",
    description: "Crafting scroll-stopping short-form videos for TikTok, Reels, and YouTube Shorts.",
    images: ["/logo.png"],
    url: "https://marcusedits.com", // replace with actual domain
    siteName: "Marcus Video Editing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus - Short-Form Video Editor",
    description: "Crafting scroll-stopping short-form videos for TikTok, Reels, and YouTube Shorts.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};
export const viewport: Viewport = { colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-scrollbar overflow-x-hidden">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <Navbar  />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
