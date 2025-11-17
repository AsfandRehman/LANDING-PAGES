// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Particle Loader Demo',
  description: 'Captions.ai style particle animation on first load',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
