'use client'
import Image from 'next/image'

export default function StarBackgroundImage() {
  return (
    <div className="fixed inset-0 z-[-2]">
      <Image
        src="/textures/stars.jpg"
        fill
        alt="star bg"
        className="object-cover opacity-40 mix-blend-screen pointer-events-none"
        priority
      />
    </div>
  )
}
