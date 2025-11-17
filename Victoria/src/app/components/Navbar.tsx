'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: 'About Me', href: '/about' },
  { name: 'Music and Videos', href: '/media' },
  { name: 'Tour', href: '/tour' },
  { name: 'Store', href: '/store' },
  { name: 'Socials', href: '/socials' },
  { name: 'Community', href: '/community' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 transition-all duration-200 ${scrolled ? 'bg-black/40 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      role="navigation"
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-cormorant tracking-wide text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <span className="font-cinzel text-3xl">V</span>
          ictoria{' '}
          <span className="font-cinzel text-3xl">R</span>
          ose
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white font-gothic tracking-wide text-base md:text-xl hover:underline underline-offset-4 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${active ? 'underline' : ''
                  }`}
              >
                {item.name}
              </Link>

            );
          })}

          {/* Contact CTA */}
          <Link
            href="/contact"
            className="ml-2 rounded-full border border-white px-5 py-1.5 text-xl font-gothic text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Contact
          </Link>

        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <span className="sr-only">Open menu</span>
          {/* Simple hamburger / close icon */}
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''
                }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-opacity ${open ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-white transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="mt-3 space-y-1 rounded-xl border border-white/10 bg-black/70 p-2 backdrop-blur-md">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-base font-gothic tracking-wide text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${active
                      ? 'bg-white/10 underline underline-offset-4'
                      : 'hover:bg-white/10'
                      }`}
                  >
                    {item.name}
                  </Link>

                );
              })}
              <Link
                href="/contact"
                className="mt-1 block rounded-lg border border-white px-3 py-2 text-center text-base font-gothic text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Contact
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
