// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Rewards", href: "/rewards" },
  { label: "Benefits", href: "/benefits" },
  { label: "FAQ's", href: "/faqs" },
];

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      className="group relative px-3 py-2 text-sm text-zinc-300 hover:text-white transition"
    >
      <span className={`relative z-10 ${isActive ? "text-white" : ""}`}>
        {item.label}
      </span>
      {/* animated gradient underline */}
      <span
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#00C7BE] via-[#53E0CF] to-[#FF8C00] transition-[width] duration-300 ${
          isActive ? "w-8" : "group-hover:w-8"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // floating, no background; sits on top of hero
    <header className="absolute top-0 left-0 w-full z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6"
        aria-label="Main"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={28}
            height={28}
            className="opacity-90"
            priority
          />
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-black bg-[#FF8C00] hover:translate-y-[-1px] transition will-change-transform shadow-[0_8px_24px_-12px_rgba(255,140,0,0.4)]"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 hover:text-white bg-transparent"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile sheet overlay */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/85 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/apply"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-black bg-[#FF8C00]"
                onClick={() => setOpen(false)}
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* subtle top glow bar that matches hero theme */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </header>
  );
}
