"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useCursorStore } from "./lib/store"
import Image from "next/image"

const navLinks = [
  { href: "/testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Let's Talk" },
]

export default function Navbar() {
  const { setCursorHovered, unsetCursorHovered } = useCursorStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent"
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 w-full z-30 px-4 sm:px-6 py-3 text-white flex items-center justify-between"
        style={{ WebkitBackdropFilter: scrolled ? "blur(10px)" : "blur(0px)" }}
      >
        <Link
          href="/"
          onMouseEnter={setCursorHovered}
          onMouseLeave={unsetCursorHovered}
          className="flex items-center h-10 mt-4"
        >
          <Image
            src="/images/logo.png"
            alt="ZSIDEO Logo"
            width={120}
            height={36}
            priority
          />
        </Link>
      </motion.nav>

      {/* Menu Button */}
      <div
        className="fixed top-5 right-6 z-[10000] flex items-center gap-2 cursor-pointer transition-transform duration-500"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onMouseEnter={setCursorHovered}
        onMouseLeave={unsetCursorHovered}
      >
        <motion.span
          className="text-black font-medium"
          animate={{ y: scrolled ? -30 : 0, opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          Menu
        </motion.span>

        <div className="flex flex-col justify-center gap-[5px]">
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
        </div>
      </div>

      {/* AnimatePresence handles menu/backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black z-[9997]"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-screen w-[50vw] min-w-[300px] z-[9998] bg-white p-12 shadow-xl overflow-y-auto flex items-center justify-center"
            >
              <motion.ul className="flex flex-col items-center gap-10 text-3xl font-light text-black">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href={link.href}>
                      <span className="relative z-10 transition-all duration-300 group-hover:text-gray-500">
                        {link.label}
                      </span>
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
