import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = 2025; // set explicitly to match your design; or use: new Date().getFullYear()

  return (
    <footer className="bg-black text-zinc-300 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Logo, blurb, contacts, © */}
          <div>
            <div className="flex items-center gap-3">
              {/* Replace with your lion/partner mark */}
              <Image
                src="/logo.svg"
                alt="Roarex"
                width={44}
                height={44}
                className="opacity-90"
              />
              <div className="leading-tight">
                <p className="text-sm text-white font-semibold tracking-wide">
                  TIGER FINTECH
                  <span className="text-[10px] align-top"> &nbsp;×&nbsp;</span>
                  BAJAJ CAPITAL
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm text-zinc-400">
              BajajCapital is India&apos;s premier investment services group
              engaged inter-alia in the distribution of mutual funds.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-zinc-700">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-white/90">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-zinc-700">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-white/90">support@roarexcard.in</span>
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl">©</span>
                <span className="text-5xl font-semibold bg-gradient-to-r from-[#F3B665] via-[#E1D77A] to-[#45E2C1] bg-clip-text text-transparent">
                  {year}
                </span>
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Roarex Credit Card. All rights reserved.
              </p>
            </div>
          </div>

          {/* Middle: Explore */}
          <div>
            <h4 className="text-white text-lg font-semibold tracking-wide">
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:text-white">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Address */}
          <div>
            <h4 className="text-white text-lg font-semibold tracking-wide">
              Address
            </h4>
            <address className="not-italic mt-4 text-sm leading-6 text-zinc-400 max-w-sm">
              Roarex Financial Services Pvt. Ltd.
              <br />
              4th Floor, Apex Towers,
              <br />
              Plot No. 27, Sector 18,
              <br />
              Bandra Kurla Complex, Mumbai – 400051
              <br />
              Maharashtra, India
            </address>
          </div>
        </div>

        {/* Bottom micro-nav */}
        <div className="mt-10 border-t border-zinc-800 pt-6">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-zinc-400">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-white">
                Help Center
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
