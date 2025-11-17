'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0e0c2d] via-[#15124b] to-[#1b155f] text-white pt-20 pb-10 mt-32 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14"
      >
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-anton tracking-wide text-white mb-4">Mentis</h2>
          <p className="text-sm text-gray-300 leading-relaxed font-montserrat">
            A trading academy for those who demand clarity, structure, and serious results. No fluff. Just skill.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-sm uppercase text-indigo-300 font-semibold mb-4 tracking-wide">Explore</h3>
          <ul className="space-y-3 text-sm font-montserrat">
            {[
              { href: '#methods', label: 'Courses' },
              { href: '#community', label: 'Community' },
              { href: '#method', label: 'Methods' },
              { href: '#packages', label: 'Packages' },
              { href: '#apply', label: 'apply' },
              { href: '#proof', label: 'proof' }
            ].map((item, index) => (
              <motion.li
                key={item.href}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link href={item.href} className="hover:text-white transition duration-200">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Closing Statement */}
        <div>
          <h3 className="text-sm uppercase text-indigo-300 font-semibold mb-4 tracking-wide">Built Different</h3>
          <p className="text-sm text-gray-300 leading-relaxed font-montserrat">
            Mentis isn’t a course. It’s a system. Built by traders, for traders ready to master execution, psychology, and scale.
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-400 font-montserrat">
        © {new Date().getFullYear()} Mentis Trading Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
