"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-30 right-30 rounded-b-2xl z-50 bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white font-bold rounded-md p-2">
            U
          </div>
          <span className="text-xl font-bold text-gray-900">ZSideo Web</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">
              Home
            </Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>

        {/* Contact button */}
        <Link
          href="#"
          className="hidden md:inline-block px-5 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
