// components/Footer.tsx
import Link from "next/link";
import styles from "./Footer.module.css";

type NavLink = { label: string; href: string };
type FooterProps = {
  brand: { name: string; tagline: string; logo: string };
  legal: {
    copyrightName: string;
    links: { label: string; href: string }[];
    badgeNote: string;
  };
};

export default function Footer({ brand, legal }: FooterProps) {
  const addressLines = [""];
  const email = "";
  const phone = "+92 300 0000000";

  const socials = [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/company/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "X (Twitter)", href: "https://x.com/" },
  ];

  const primaryNav: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "How it Works", href: "/#steps" },
    { label: "FAQ", href: "/#faq" },
    { label: "Reviews", href: "/#testimonial" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-red-500/20 bg-black text-gray-300">
      {/* Animated hairline accent (red) */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 -top-px h-px ${styles.hairline}`}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,45,85,0.6), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative rounded-2xl border border-red-500/20 bg-red-950/10 p-8 md:p-10 backdrop-blur-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-red-500/30 bg-red-600/20" />
                <span className="text-lg font-semibold text-white">
                  {brand.name || "Rav-Fuel"}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-gray-400">
                {brand.tagline}
              </p>

              {/* CTA */}
              <Link
                href="/book-call"
                className="relative inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-[0_8px_24px_rgba(255,45,85,0.45)] transition-transform duration-200 hover:scale-[1.03]"
              >
                <span className="relative z-10">Book a Strategy Call</span>
              </Link>

              <p className="text-xs text-red-400">{legal.badgeNote}</p>
            </div>

            {/* Programs (site nav) */}
            <nav aria-label="Programs">
              <h3 className="mb-3 text-sm font-semibold text-white/90">
                Programs
              </h3>
              <ul className="space-y-2">
                {primaryNav.map((item) => (
                  <li key={item.href} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(255,45,85,0.8)]" />
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 transition hover:text-red-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Explore / Legal Links */}
            <nav aria-label="Explore">
              <h3 className="mb-3 text-sm font-semibold text-white/90">
                Explore
              </h3>
              <ul className="space-y-2">
                {legal.links.map((item) => (
                  <li key={item.href} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(255,45,85,0.8)]" />
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 transition hover:text-red-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact + Socials */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white/90">
                Contact
              </h3>
              <address className="not-italic text-sm text-gray-300">
                {addressLines.filter(Boolean).map((line) => (
                  <div key={line}>{line}</div>
                ))}
                {phone && (
                  <div className="mt-2">
                    <a
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="transition hover:text-red-400"
                    >
                      {phone}
                    </a>
                  </div>
                )}
                {email && (
                  <div>
                    <a
                      href={`mailto:${email}`}
                      className="transition hover:text-red-400"
                    >
                      {email}
                    </a>
                  </div>
                )}
              </address>

              <h4 className="mt-5 mb-2 text-xs font-semibold text-white/90">
                Follow
              </h4>
              <ul className="flex flex-wrap gap-4">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 transition hover:text-red-400"
                      aria-label={s.label}
                      title={s.label}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

          <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-400 md:flex-row md:items-center">
            <p>
              © {year} {legal.copyrightName || brand.name || "Rav-Fuel"}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
