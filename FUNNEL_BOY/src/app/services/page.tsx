"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import WhatWeDoSection from "../components/whatWeDo";
import ProcessScroller from "../components/ServiceScroll";

type Props = { yellowOverlay?: boolean };

export default function Services3D({ yellowOverlay = false }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leftTitleRef = useRef<HTMLHeadingElement>(null);
  const rightTitleRef = useRef<HTMLHeadingElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const pulsarRef = useRef<THREE.Group | null>(null);

  const [mounted, setMounted] = useState(false);

  // Helper: get [data-line] blocks for staggered/curved animations
  const lineNodes = (el: HTMLElement | null) =>
    el
      ? (Array.from(
          el.querySelectorAll<HTMLElement>("[data-line]")
        ) as HTMLElement[])
      : [];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // --- THREE: scene / camera / renderer (transparent) ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      -1000,
      1000
    );
    camera.position.set(0, 0, 10);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current ?? undefined,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // --- Pulsar (concentric rings) ---
    const pulsar = new THREE.Group();
    scene.add(pulsar);
    pulsarRef.current = pulsar;

    const baseColor = "#ff3147";
    const darkColor = "#7b0011";
    const ringCount = 6;

    const makeRing = (
      inner: number,
      outer: number,
      color: string,
      opacity = 0.8
    ) => {
      const geo = new THREE.RingGeometry(inner, outer, 128, 1);
      const cols: number[] = [];
      const c = new THREE.Color(color);
      const vCount = geo.attributes.position.count;
      for (let i = 0; i < vCount; i++) {
        const isOuter = i >= vCount / 2;
        const a = isOuter ? 0.06 : opacity;
        cols.push(c.r, c.g, c.b, a);
      }
      geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 4));
      const mat = new THREE.MeshBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      return new THREE.Mesh(geo, mat);
    };

    const core = new THREE.Mesh(
      new THREE.CircleGeometry(34, 128),
      new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    core.position.set(0, 0, 1);
    pulsar.add(core);

    for (let i = 0; i < ringCount; i++) {
      const ring = makeRing(
        50 + i * 16,
        50 + i * 16 + 12,
        i === 0 ? baseColor : darkColor,
        i === 0 ? 0.9 : 0.35
      );
      ring.position.set(0, 0, -i * 0.01);
      pulsar.add(ring);
    }

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(120, 64),
      new THREE.MeshBasicMaterial({
        color: darkColor,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    pulsar.add(shadow);

    // --- Anchor the pulsar to the DOM "dot" beside WEBSITES ---
    const placePulsarFromAnchor = () => {
      const anchor = anchorRef.current;
      const parent = mountRef.current;
      const cam = cameraRef.current;
      const group = pulsarRef.current;
      if (!anchor || !parent || !cam || !group) return;

      const rect = anchor.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const cx = rect.left - parentRect.left + rect.width / 2;
      const cy = rect.top - parentRect.top + rect.height / 2;

      const wx = cx - parentRect.width / 2;
      const wy = parentRect.height / 2 - cy;
      group.position.set(wx, wy, 0);
    };

    placePulsarFromAnchor();

    // --- GSAP loops on pulsar ---
    gsap.to(core.scale, {
      x: 1.12,
      y: 1.12,
      duration: 1.4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
    gsap.to(core.material as THREE.MeshBasicMaterial, {
      opacity: 0.7,
      duration: 1.4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
    pulsar.children.forEach((child, i) => {
      if (child === core) return;
      gsap.to(child.scale, {
        x: 1.08,
        y: 1.08,
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.08,
      });
      const mat =
        child instanceof THREE.Mesh
          ? (child.material as THREE.MeshBasicMaterial)
          : null;
      if (mat) {
        gsap.to(mat, {
          opacity: mat.opacity * 0.8,
          duration: 2.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.08,
        });
      }
    });

    // --- Pointer parallax ---
    const onPointer = (e: PointerEvent) => {
      const parent = mountRef.current;
      const group = pulsarRef.current;
      if (!parent || !group) return;
      const r = parent.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(group.position, {
        x: "+=" + nx * 8,
        y: "-=" + ny * 6,
        duration: 0.5,
        ease: "sine.out",
      });
    };
    window.addEventListener("pointermove", onPointer);

    // --- Resize (guard for type + server) ---
    const onResize = () => {
      const parent = mountRef.current;
      const renderer = rendererRef.current;
      const cam = cameraRef.current;
      if (!parent || !renderer || !cam) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      renderer.setSize(width, height);
      cam.left = -width / 2;
      cam.right = width / 2;
      cam.top = height / 2;
      cam.bottom = -height / 2;
      cam.updateProjectionMatrix();
      placePulsarFromAnchor();
    };
    window.addEventListener("resize", onResize);

    // Re-position when the text layout changes
    const ro =
      typeof window !== "undefined" && "ResizeObserver" in window
        ? new ResizeObserver(() => placePulsarFromAnchor())
        : null;
    if (ro) {
      if (leftTitleRef.current) ro.observe(leftTitleRef.current);
      if (rightTitleRef.current) ro.observe(rightTitleRef.current);
    }

    // --- Render loop ---
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      renderer.render(scene, camera);
    };
    loop();

    setMounted(true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      ro?.disconnect();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  // --- GSAP text: swirl-in from sides, then idle float ---
  useLayoutEffect(() => {
    if (!mounted) return;

    const L = lineNodes(leftTitleRef.current);
    const R = lineNodes(rightTitleRef.current);

    // Helper to create a curved/swirl entrance without plugins (keyframes)
    const swirlIn = (
      targets: HTMLElement[],
      side: "left" | "right",
      delay = 0
    ) => {
      const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
      const fromX = side === "left" ? -vw * 0.6 : vw * 0.6;
      const fromRot = side === "left" ? -18 : 18;
      gsap.fromTo(
        targets,
        {
          x: fromX,
          y: 80,
          rotate: fromRot,
          opacity: 0,
          transformOrigin: side === "left" ? "120% 50%" : "-20% 50%",
        },
        {
          keyframes: [
            {
              x: side === "left" ? -60 : 60,
              y: -30,
              rotate: -fromRot * 0.5,
              opacity: 1,
              duration: 0.55,
              ease: "power2.out",
            },
            { x: 0, y: 0, rotate: 0, duration: 0.65, ease: "power3.out" },
          ],
          stagger: 0.08,
          delay,
        }
      );
    };

    swirlIn(L, "left", 0.05);
    swirlIn(R, "right", 0.18);

    // Gentle idle float for life
    const idle1 = gsap.to(L, {
      yPercent: -2,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.12,
    });
    const idle2 = gsap.to(R, {
      yPercent: -2,
      duration: 3.4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.12,
    });

    return () => {
      idle1.kill();
      idle2.kill();
      gsap.killTweensOf(L);
      gsap.killTweensOf(R);
    };
  }, [mounted]);

  return (
    <section
      ref={mountRef}
      className="relative min-h-[100svh] overflow-hidden bg-transparent"
      aria-label="Services Hero 3D"
    >
      {/* Transparent WebGL */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />

      {/* Optional yellow overlay */}
      {yellowOverlay && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 60%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0) 60%), radial-gradient(120% 120% at 50% -20%, #FFD400 0%, #FFB800 40%, #FFC400 70%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto grid h-[100svh] max-w-[1500px] grid-cols-12 items-start gap-6 px-6 pt-10">
        {/* Micro-nav */}
        <div className="col-span-12 mb-4 flex items-center gap-4 text-white/70">
          <span className="text-[12px] tracking-[0.28em]">BUZZWORTHY</span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="text-[12px] tracking-[0.28em]">SERVICES</span>
        </div>

        {/* Left title */}
        <div className="col-span-12 md:col-span-6">
          <h1
            ref={leftTitleRef}
            className="font-extrabold leading-[0.9] tracking-tight select-none will-change-transform"
          >
            <span
              data-line
              className="block text-[clamp(40px,12vw,150px)] text-[#ff3147]"
            >
              CREATIVE
            </span>
            <span className="relative inline-flex items-center gap-4">
              {/* anchor for the 3D disc */}
              <span
                ref={anchorRef}
                aria-hidden
                className="inline-block h-[32px] w-[32px]"
              />
              <span
                data-line
                className="block text-[clamp(40px,12vw,150px)] text-white"
              >
                WEBSITES
              </span>
            </span>
          </h1>
        </div>

        {/* Right title */}
        <div className="col-span-12 md:col-span-6 md:mt-[10vh]">
          <h2
            ref={rightTitleRef}
            className="text-right font-extrabold leading-[0.9] tracking-tight select-none will-change-transform"
          >
            <span
              data-line
              className="block text-white text-[clamp(28px,9.5vw,120px)]"
            >
              THAT HELP YOUR
            </span>
            <span
              data-line
              className="block text-white text-[clamp(28px,9.5vw,120px)]"
            >
              BUSINESS
            </span>
          </h2>
        </div>

        {/* Bottom captions */}
        <div className="col-span-12 mt-auto mb-6 flex items-center justify-between text-white/75">
          <span className="text-[11px] tracking-[0.28em] uppercase">
            Scroll not required — just vibes ✦
          </span>
          <span className="text-[11px] tracking-[0.28em] uppercase">
            3D • GSAP • Transparent
          </span>
        </div>
      </div>
      <WhatWeDoSection />
      <ProcessScroller />
    </section>
  );
}
