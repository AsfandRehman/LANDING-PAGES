"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

/**
 * Transparent Services Hero
 * - Three.js + GSAP
 * - Pulsing red concentric rings (left), additive glow, mouse parallax
 * - Huge headline like the reference: “CREATIVE WEBSITES / THAT HELP YOUR BUSINESS”
 * - Fully transparent background (canvas alpha)
 * - One single file, no extra components
 */

export default function ServicesHero3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Sizes
    const container = mountRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);

    // Renderer (transparent)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current || undefined,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights (very subtle, most mats are MeshBasic anyway)
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    // Group for the pulsar
    const pulsar = new THREE.Group();
    scene.add(pulsar);

    // Helper: ring factory (concentric discs with soft falloff)
    const makeRing = (
      inner: number,
      outer: number,
      color: string,
      opacity = 0.8
    ) => {
      const geo = new THREE.RingGeometry(inner, outer, 128, 1);
      // make soft edges by vertex colors
      const cols: number[] = [];
      const c = new THREE.Color(color);
      const vCount = geo.attributes.position.count;
      for (let i = 0; i < vCount; i++) {
        // inner vertices first half, outer next half
        const isOuter = i >= vCount / 2;
        const alpha = isOuter ? 0.05 : opacity; // fade edge
        cols.push(c.r, c.g, c.b, alpha);
      }
      geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 4));
      const mat = new THREE.MeshBasicMaterial({
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      return new THREE.Mesh(geo, mat);
    };

    // Build concentric stack
    const baseColor = "#ff3147"; // vivid red
    const darkColor = "#7b0011"; // deep red shadow
    const rings: THREE.Mesh[] = [];
    const ringCount = 6;

    for (let i = 0; i < ringCount; i++) {
      const rInner = 0.45 + i * 0.28;
      const rOuter = rInner + 0.2;
      const ring = makeRing(
        rInner,
        rOuter,
        i === 0 ? baseColor : darkColor,
        i === 0 ? 0.95 : 0.3
      );
      ring.rotation.x = THREE.MathUtils.degToRad(90); // face forward
      ring.position.set(-4.5, 1.4, -i * 0.05); // slight depth stack
      pulsar.add(ring);
      rings.push(ring);
    }

    // Center disc (solid-ish) with additive material for glow
    const core = new THREE.Mesh(
      new THREE.CircleGeometry(0.55, 128),
      new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    core.rotation.x = THREE.MathUtils.degToRad(90);
    core.position.set(-4.5, 1.4, 0.1);
    pulsar.add(core);

    // subtle shadow behind pulsar
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(2.6, 64),
      new THREE.MeshBasicMaterial({
        color: darkColor,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    shadow.rotation.x = THREE.MathUtils.degToRad(90);
    shadow.position.set(-4.5, 1.4, -0.1);
    pulsar.add(shadow);

    // ====== GSAP Animations ======
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tlRef.current = tl;

    // Intro: fade in canvas, pop rings
    tl.fromTo(
      container,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" },
      0
    );

    // Text entrance (stagger lines)
    if (textRef.current) {
      const lines = textRef.current.querySelectorAll("[data-line]");
      tl.fromTo(
        lines,
        { yPercent: 40, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
        },
        0.1
      );
    }

    // Core throb
    tl.fromTo(
      core.scale,
      { x: 0.6, y: 0.6, z: 0.6 },
      { x: 1, y: 1, z: 1, duration: 0.8 },
      0.05
    );

    // Ripple pulse looping on rings
    rings.forEach((ring, i) => {
      const baseScale = 1 + i * 0.05;
      gsap.fromTo(
        ring.scale,
        { x: baseScale * 0.8, y: baseScale * 0.8, z: 1 },
        {
          x: baseScale * 1.4,
          y: baseScale * 1.4,
          z: 1,
          duration: 2.6,
          repeat: -1,
          ease: "sine.inOut",
          yoyo: true,
          delay: i * 0.12,
        }
      );
      gsap.fromTo(
        ring.material as THREE.MeshBasicMaterial,
        { opacity: i === 0 ? 0.95 : 0.28 },
        {
          opacity: i === 0 ? 0.6 : 0.15,
          duration: 2.6,
          repeat: -1,
          ease: "sine.inOut",
          yoyo: true,
          delay: i * 0.12,
        }
      );
    });

    // Slow rotation for the whole cluster
    gsap.to(pulsar.rotation, {
      z: "+=0.6",
      duration: 12,
      ease: "none",
      repeat: -1,
    });

    // Mouse parallax
    const onPointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / width) * 2 - 1;
      const ny = (e.clientY / height) * 2 - 1;
      gsap.to(pulsar.position, {
        x: -4.5 + nx * 0.6,
        y: 1.4 - ny * 0.4,
        duration: 0.6,
        ease: "sine.out",
      });
    };
    window.addEventListener("pointermove", onPointerMove);

    // Resize
    const onResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize);

    // Render loop
    let rafId = 0;
    const render = () => {
      rafId = requestAnimationFrame(render);
      renderer.render(scene, camera);
    };
    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      tl.kill();
      rings.forEach((r) => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      shadow.geometry.dispose();
      (shadow.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={mountRef}
      className="relative min-h-[100svh] overflow-hidden bg-transparent"
      aria-label="Services Hero 3D"
    >
      {/* Transparent WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 z-0 block h-full w-full"
      />

      {/* Content Layer */}
      <div
        ref={textRef}
        className="relative z-10 mx-auto flex h-[100svh] max-w-[1400px] flex-col px-6 pt-10"
      >
        {/* Top micro-nav */}
        <div className="mb-8 flex items-center gap-4 text-white/70">
          <span className="text-[12px] tracking-[0.28em]">BUZZWORTHY</span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="text-[12px] tracking-[0.28em]">SERVICES</span>
        </div>

        {/* Headline rows */}
        <div className="mt-10 grid flex-1 grid-cols-12 items-start gap-4">
          {/* Left stack: CREATIVE / WEBSITES with red accent */}
          <div className="col-span-12 md:col-span-6">
            <h1 className="font-extrabold leading-[0.9] tracking-tight">
              <span
                data-line
                className="block text-[clamp(36px,12vw,140px)] text-[#ff3147]"
              >
                CREATIVE
              </span>
              <span
                data-line
                className="block text-[clamp(36px,12vw,140px)] text-white"
              >
                WEBSITES
              </span>
            </h1>
          </div>

          {/* Right stack: THAT HELP YOUR BUSINESS */}
          <div className="col-span-12 md:col-span-6 md:mt-[8vh]">
            <h2 className="text-right font-extrabold leading-[0.9] tracking-tight">
              <span
                data-line
                className="block text-white text-[clamp(28px,9.5vw,110px)]"
              >
                THAT HELP YOUR
              </span>
              <span
                data-line
                className="block text-white text-[clamp(28px,9.5vw,110px)]"
              >
                BUSINESS
              </span>
            </h2>
          </div>
        </div>

        {/* Bottom helpers */}
        <div className="mb-8 flex items-center justify-between text-white/70">
          <span className="text-[11px] tracking-[0.28em] uppercase">
            Scroll not required — just vibes ✦
          </span>
          <span className="text-[11px] tracking-[0.28em] uppercase">
            3D • GSAP • Transparent
          </span>
        </div>
      </div>

      {/* Optional radial vignette for contrast (still transparent outside) */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.14)_0%,transparent_55%)]" />
    </section>
  );
}
