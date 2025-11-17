import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Saim Ali Ahmad – Official Biography",
  description: "Official biography of Saim Ali Ahmad, self-made millionaire by 19, founder and CEO of ZSIDEO CONTENT LLC. Learn about his entrepreneurial journey and achievements.",
  openGraph: {
    title: "About Saim Ali Ahmad – Official Biography",
    description: "Official biography of Saim Ali Ahmad, self-made millionaire by 19, founder and CEO of ZSIDEO CONTENT LLC.",
    type: "profile",
    images: [
      {
        url: "https://saimaliahmad.com/images/saim.jpg",
        width: 1200,
        height: 1500,
        alt: "Saim Ali Ahmad - Professional Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Saim Ali Ahmad – Official Biography",
    description: "Official biography of Saim Ali Ahmad, self-made millionaire by 19, founder and CEO of ZSIDEO CONTENT LLC.",
    images: ["https://saimaliahmad.com/images/saim.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
