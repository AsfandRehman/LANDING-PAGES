"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#challenges", label: "Home" },
  { href: "#solutions", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#process", label: "How it Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">StevePark</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Our Approach
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Client Success
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
            Book Call
          </button>
        </div>
      </div>
    </header>
  );
}
