"use client"

import Link from "next/link"
import { useCursorStore } from "./lib/store"
import { motion, useInView, cubicBezier } from "framer-motion"
import { useRef } from "react"

export default function PremiumFooter() {
  const { setCursorHovered, unsetCursorHovered } = useCursorStore()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: cubicBezier(0.16, 1, 0.3, 1),
        duration: 0.8
      }
    }
  }

  return (
    <footer 
      ref={ref}
      className="w-full px-6 lg:px-12 py-20 bg-[#0a1126] text-white relative overflow-hidden border-t border-blue-900/50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent" />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.05 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-600 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Brand Signature */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              onMouseEnter={setCursorHovered} // ✅ CORRECT
onMouseLeave={unsetCursorHovered} // ✅ CORRECT

              className="text-5xl md:text-7xl font-bold tracking-tighter hover:text-blue-300 transition-colors duration-500 inline-block"
            >
              ZSIDEO
              <span className="text-blue-300">.</span>
            </Link>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-blue-300/70 mt-4"
          >
            Crafting visual excellence
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        >
          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-blue-300 text-sm uppercase tracking-widest mb-6">Explore</h3>
            <nav className="space-y-4">
              {['Work', 'Services', 'About', 'Journal'].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                   onMouseEnter={setCursorHovered} // ✅ CORRECT
onMouseLeave={unsetCursorHovered} // ✅ CORRECT

                    className="text-xl font-medium hover:text-blue-300 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-blue-300 text-sm uppercase tracking-widest mb-6">Connect</h3>
            <div className="space-y-6">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:hello@zsideo.com"
              onMouseEnter={setCursorHovered} // ✅ CORRECT
onMouseLeave={unsetCursorHovered} // ✅ CORRECT

                className="block text-xl font-medium hover:text-blue-300 transition-colors duration-300"
              >
                hello@zsideo.com
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+1234567890"
               onMouseEnter={setCursorHovered} // ✅ CORRECT
onMouseLeave={unsetCursorHovered} // ✅ CORRECT

                className="block text-xl font-medium hover:text-blue-300 transition-colors duration-300"
              >
                +1 (234) 567-890
              </motion.a>
            </div>
          </motion.div>

          {/* Social & CTA */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-blue-300 text-sm uppercase tracking-widest mb-6">Follow</h3>
              <div className="flex flex-wrap gap-4">
                {['Instagram', 'Behance', 'LinkedIn', 'Vimeo'].map((platform) => (
                  <motion.a
                    key={platform}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://${platform.toLowerCase()}.com/zsideo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={setCursorHovered} // ✅ CORRECT
onMouseLeave={unsetCursorHovered} // ✅ CORRECT

                    className="px-4 py-2 bg-blue-900/30 hover:bg-blue-900/50 rounded-full text-sm transition-colors duration-300 border border-blue-800/50"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pt-6"
            >
              <Link
                href="/letstalk"
                onMouseEnter={setCursorHovered} // ✅ CORRECT
onMouseLeave={unsetCursorHovered} // ✅ CORRECT

                className="inline-flex items-center gap-3 group relative"
              >
                <span className="text-xl font-medium">Start Your Project</span>
                <motion.span
                  animate={{
                    x: [0, 6, 0],
                    transition: { repeat: Infinity, duration: 2 }
                  }}
                  className="text-blue-300 text-xl"
                >
                  →
                </motion.span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-blue-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, transition: { delay: 0.6 } } : {}}
          className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-blue-300/50 text-sm">© {new Date().getFullYear()} ZSIDEO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-300/50 hover:text-blue-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300/50 hover:text-blue-300 text-sm transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
