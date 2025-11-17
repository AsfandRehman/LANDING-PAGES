import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Saim Ali Ahmad",
  description: "Professional photos and moments from Saim Ali Ahmad's journey building ZSIDEO CONTENT LLC and other ventures.",
  openGraph: {
    title: "Gallery - Saim Ali Ahmad",
    description: "Professional photos and moments from Saim Ali Ahmad's journey building ZSIDEO CONTENT LLC and other ventures.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Saim Ali Ahmad",
    description: "Professional photos and moments from Saim Ali Ahmad's journey building ZSIDEO CONTENT LLC and other ventures.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
