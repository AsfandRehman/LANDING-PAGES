"use client";
import Link from 'next/link';
import { FaSpotify, FaApple, FaSoundcloud, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const SOCIAL_LINKS = [
  { href: "https://open.spotify.com/artist/5NwB5227uSQpnLXBz59de8?si=ca34d4a958074c4f", icon: FaSpotify },
  { href: "https://music.apple.com/us/artist/victoria-rose/1553948077", icon: FaApple },
  { href: "https://soundcloud.com/victoriarosales", icon: FaSoundcloud },
  { href: "https://www.instagram.com/victoriarosemusic_/", icon: FaInstagram },
  { href: "https://www.tiktok.com/@victoriaroserecords", icon: FaTiktok },
  { href: "https://x.com/victoriaroserec", icon: FaTwitter },
  { href: "https://www.youtube.com/@victoriarose9348", icon: FaYoutube },
];

export default function FloatingCtaBar() {
  return (
    <div className="w-full mt-12 md:mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full text-sm uppercase tracking-widest font-semibold transition border border-red-700 bg-red-800 text-white hover:bg-red-600">
            Listen Now
          </button>
         <Link
         href="/community"
         
         > <button className="px-6 py-2 rounded-full text-sm uppercase tracking-widest font-semibold transition border border-white text-white hover:bg-white hover:text-black">
            Join My Mailing List
          </button></Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-2xl text-white opacity-80">
          {SOCIAL_LINKS.map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity hover:scale-110 transform"
              aria-label={`Follow on ${href}`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
