'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Sparkles,
  GraduationCap,
  Mic2,
  Users,
  Briefcase,
  UserCircle,
} from 'lucide-react'
import Image from 'next/image'

const personas = [
  {
    title: 'Content Creators',
    desc: 'Turn your face into a content machine — automate videos, promos, and shorts.',
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
    image: '/images/personas/creator.png',
    side: 'left',
  },
  {
    title: 'Educators',
    desc: 'Create 24/7 teaching clones to deliver lessons, explain topics, and answer FAQs.',
    icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
    image: '/images/personas/educator.png',
    side: 'right',
  },
  {
    title: 'Startup Founders',
    desc: 'Onboard users, pitch products, and explain features — even in your sleep.',
    icon: <Mic2 className="w-6 h-6 text-indigo-400" />,
    image: '/images/personas/founder.png',
    side: 'left',
  },
  {
    title: 'Coaches & Mentors',
    desc: 'Automate your expertise and reach hundreds at once with a personal AI twin.',
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    image: '/images/personas/coach.png',
    side: 'right',
  },
  {
    title: 'Agencies & Brands',
    desc: 'Create scalable spokespersons and on-brand content with real human presence.',
    icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
    image: '/images/personas/agency.png',
    side: 'left',
  },
  {
    title: 'Anyone With a Face',
    desc: 'If you can take photos, we can make your AI talk — welcome to the future.',
    icon: <UserCircle className="w-6 h-6 text-indigo-400" />,
    image: '/images/personas/anyone.png',
    side: 'right',
  },
]

export default function WhoThisIsForSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const highlightY = useTransform(scrollYProgress, [0, 1], [0, 1200])

  return (
    <section
      id="personas"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/textures/stars.jpg"
          alt="stars background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-light text-white mb-4">Who This Is For</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            AI cloning isn’t just for techies. It’s built for creators, founders, teachers — and you.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center spine (hidden on mobile) */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white/10 h-full z-0" />
          <motion.div
            style={{ y: highlightY }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-28 bg-gradient-to-b from-indigo-400 via-indigo-300 to-indigo-500 rounded-full z-10"
          />

          <div className="relative flex flex-col gap-28 z-20">
            {personas.map((item, idx) => (
              <motion.div
                key={idx}
                className={`
                  flex flex-col md:flex-row items-center gap-10
                  ${
                    item.side === 'left'
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                  }
                `}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card */}
                <div className="w-full md:w-1/2">
                  <PersonaCard
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                  />
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={600}
                      className="rounded-xl object-contain w-full h-auto aspect-[1/1]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PersonaCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 text-white w-full shadow-xl backdrop-blur-lg hover:border-indigo-400 transition-all duration-300">
      <div className="mb-4 flex items-center justify-center">
        <div className="bg-white/10 p-3 rounded-full border border-white/10 backdrop-blur-sm">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-xl text-center mb-2">{title}</h3>
      <p className="text-base text-center text-white/80 leading-relaxed">{desc}</p>
    </div>
  )
}
