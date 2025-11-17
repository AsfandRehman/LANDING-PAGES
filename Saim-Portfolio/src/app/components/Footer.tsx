"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

type Social = { href: string; icon: React.ComponentType<{ className?: string }> };

type FooterProps = {
  name?: string; // person’s name
  tagline?: string; // short line under the name
  nav?: { label: string; href: string }[];
  socials?: Social[];
  email?: string;
};

export default function PortfolioFooter({
  name = "Saim Ali Ahmad",
  tagline = "Operator-led growth & content systems",
  nav = [
    { label: "About", href: "/about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "#contact" },
     { label: "Blogs", href: "/blogs" },
  ],
  socials = [
   
    { href: "https://www.instagram.com/saimzsideo/", icon: Instagram },
   
  ],
  email = "",
}: FooterProps) {
  return (
    <footer
      className="
        relative isolate overflow-hidden bg-[#0b0b10] text-white
        -mt-px  
      "
    >
      {/* Seamless top glow to blend with previous section */}
      <div
        className="
          pointer-events-none absolute -top-24 left-1/2 h-48 w-[140%]
          -translate-x-1/2 rounded-[100%]
          bg-[radial-gradient(ellipse_at_center,_rgba(255,0,128,0.18),_transparent_60%)]
          blur-0
        "
      />

      {/* Subtle background sweep matching your theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B10] via-[#0B0B10] to-[#0A0A0F]" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12">
        {/* Personal block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-6"
        >
          <h3 className="text-[22px] font-semibold tracking-tight">
            <span className="text-blue-500">
              {name}
            </span>
          </h3>
          <p className="mt-3 max-w-md text-sm text-white/60">{tagline}</p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                aria-label="Social link"
                className="
                  inline-flex h-10 w-10 items-center justify-center rounded-full
                  bg-white/[0.03] ring-1 ring-white/10
                  transition hover:ring-[#FF0080]/60 hover:shadow-[0_0_20px_rgba(255,0,128,0.35)]
                "
              >
                <Icon className="h-4.5 w-4.5 text-white/60" />
              </Link>
            ))}

            {email && (
              <a
                href={`mailto:${email}`}
                className="
                  ml-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm
                  ring-1 ring-white/10 text-white/80 hover:text-white
                  transition bg-white/[0.03] hover:ring-[#FF0080]/60
                "
              >
                <Mail className="h-4 w-4" />
                {email}
              </a>
            )}
          </div>
        </motion.div>

        {/* Explore */}
        <motion.nav
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-3"
          aria-label="Footer"
        >
          <h4 className="mb-3 text-sm font-medium text-white/80">Explore</h4>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Availability / small notes */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-3"
        >
          <h4 className="mb-3 text-sm font-medium text-white/80">Status</h4>
          <p className="text-sm text-white/60">Accepting select projects.</p>
          <p className="mt-1 text-sm text-white/40">Avg response under 24h.</p>
        </motion.div>
      </div>

      {/* Bottom line (no border, just space) */}
      <div className="relative z-10 px-6 pb-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  );
}
