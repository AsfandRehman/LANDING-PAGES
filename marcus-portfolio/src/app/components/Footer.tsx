import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-top border-t-2 border-red-600 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Marcus Video Editing"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-600">
              Freelance short‑form video editor. Clean, fast, platform‑native edits for TikTok, Reels, and Shorts.
            </p>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-1 gap-6 md:col-span-2">
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                <li><Link href="#thumbnailshowcase" className="hover:text-neutral-900">Work</Link></li>
                <li><Link href="#process" className="hover:text-neutral-900">Services</Link></li>
                <li><Link href="#about" className="hover:text-neutral-900">About</Link></li>
              </ul>
            </div>
          </nav>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Follow</h4>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://www.instagram.com/marcusvideoediting" aria-label="Instagram" className="rounded-full border border-neutral-200 p-2 hover:bg-neutral-50">
                <Instagram className="h-4 w-4 text-neutral-800" />
              </a>
            </div>

            <Link
              href="https://calendly.com/marcusedits/meeting"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-red-700"
            >
              Book a Call
            </Link>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-neutral-200" />
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Marcus — All rights reserved.</p>
          <p>
            Built for <span className="font-semibold text-neutral-700">short‑form performance</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
