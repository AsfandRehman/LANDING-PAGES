'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function RealStarfield() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 20000)
    camera.position.z = 0

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // 🌌 Star setup
    const starCount = 20000
    const positions = []
    const sizes = []

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 10000
      const y = (Math.random() - 0.5) * 10000
      const z = -Math.random() * 15000

      positions.push(x, y, z)

      // 🎯 Closer stars are larger (z near 0)
      const normalizedZ = Math.abs(z) / 15000
      const size = THREE.MathUtils.lerp(10.5, 2.7, normalizedZ) // closer → 4.5px, farther → 0.7px
      sizes.push(size)
    }

    const starGeometry = new THREE.BufferGeometry()
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    starGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

    // ✨ Use glow texture
    const textureLoader = new THREE.TextureLoader()
    const starTexture = textureLoader.load('/textures/star.png') // must exist

const starMaterial = new THREE.PointsMaterial({
  map: starTexture,
  size: 10, // base size for better glow
  transparent: true,
  opacity: 1,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  sizeAttenuation: true,
  color: 0xffffff,
})


    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // 📜 Scroll logic
    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    // 🎞️ Animate — no rotation now
    const animate = () => {
      requestAnimationFrame(animate)
      camera.position.z = scrollY * 0.2
      renderer.render(scene, camera)
    }
    animate()

    // 🧩 Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 z-[-1]" />
}
