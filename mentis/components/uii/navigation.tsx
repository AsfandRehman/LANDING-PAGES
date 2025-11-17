'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import mentisLogo from '@/public/logos/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Method', href: '#method' },
    { name: 'Transformation', href: '#transformation' },
    { name: 'Proof', href: '#proof' },
    { name: 'Investment', href: '#packages' },
    { name: 'Community', href: '#community' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24
        ${scrolled
          ? 'bg-white/10 backdrop-blur-xl shadow-xl border-b border-white/10'
          : 'bg-gradient-to-b from-white/10 via-transparent to-transparent backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <Image
              src={mentisLogo}
              alt="Mentis Logo"
              className="h-20 w-auto object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-montserrat text-black drop-shadow hover:text-[#0A1F44] transition-colors duration-200 relative group"
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black/80 transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}

            <motion.button
              onClick={() => scrollToSection('#apply')}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.85 }}
              className="bg-blue-700 text-black px-6 py-2 rounded-xl font-montserrat font-semibold shadow-md hover:shadow-black/40 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Join Us
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-black hover:text-gray-700 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-full h-screen bg-black text-white z-[60] flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Centered Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-3xl font-montserrat text-white font-semibold hover:text-gray-300 transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                onClick={() => scrollToSection('#apply')}
                className="mt-6 bg-white text-black px-8 py-4 rounded-xl text-xl font-semibold hover:shadow-lg transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
