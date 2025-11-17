// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from '@/app/components/Footer';
import { generalSans } from './fonts';

export const metadata: Metadata = {
  title: 'Zsideo | Next.js Web & App Solutions',
  description: 'Designify builds stunning, high-performance websites and modern web apps using Next.js, Tailwind CSS, and cutting-edge frontend design.',
  keywords: [
    'Next.js web development',
    'Tailwind CSS agency',
    'frontend developer',
    'website design company',
    'modern UX UI',
    'React developer',
    'SEO optimized websites',
    'design agency',
    'web apps',
    'responsive websites',
  ],
  robots: 'index, follow',
  authors: [{ name: 'Designify Team', url: 'https://designify.com' }],
  creator: 'Designify',
  publisher: 'Designify',
  metadataBase: new URL('https://designify.com'), // Replace with your actual domain
  openGraph: {
    title: 'Designify | Next.js Web & App Solutions',
    description: 'We build visually striking websites and high-performing web apps with Next.js & Tailwind for brands that want to stand out.',
    url: 'https://designify.com',
    siteName: 'Designify',
    type: 'website',
    images: [
      {
        url: 'https://designify.com/og-image.jpg', // Replace with real OG image
        width: 1200,
        height: 630,
        alt: 'Designify Hero Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designify | Next.js Web & App Solutions',
    description: 'Cutting-edge websites and web apps built with performance and design in mind.',
    creator: '@designifyhq', // Replace with your Twitter handle
    images: ['https://designify.com/og-image.jpg'], // Replace with real image
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body className="font-[var(--font-general)] overflow-x-hidden bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
