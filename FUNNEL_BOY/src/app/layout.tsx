import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import AppShell from "./components/AppShell";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Your App",
  description: "Your app description here",
};
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick weights you need
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
