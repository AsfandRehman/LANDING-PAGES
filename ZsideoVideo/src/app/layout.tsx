// app/layout.tsx
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Videographers in every U.S. state',
  description: 'Your site&apos;s description here.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Matter font */}
        <link
          rel="preload"
          href="/fonts/Matter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         
      </head>
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
