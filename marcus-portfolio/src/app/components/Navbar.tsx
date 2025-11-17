// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

export default function Navbar({
  items = [
    { label: "Work", href: "#thumbnailshowcase" },
    { label: "Services", href: "#process" },
    { label: "About", href: "#about" },
  ],
  cta = { label: "Book a Call", href: "https://calendly.com/marcusedits/meeting" },
}: {
  items?: NavItem[];
  cta?: { label: string; href: string };
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b-2 border-red-600 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
      <Link href="/" className="flex items-center justify-center h-10 px-4 rounded bg-[#d30009]">
  <span className="text-white font-semibold text-lg">Marcus.</span>
</Link>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${pathname === item.href
                  ? "text-red-600"
                  : "text-neutral-700 hover:text-neutral-900"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href={cta.href}
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700"
          >
            {cta.label}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
}
