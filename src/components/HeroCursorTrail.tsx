"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const IMAGES = [
  "/images/collections/2025.png",
  "/images/moods/electronic-winter.png",
  "/images/styles/jazz.png",
  "/images/collections/2024.png",
  "/images/moods/electronic-autumn.png",
  "/images/styles/soul.png",
  "/images/collections/2023.png",
  "/images/moods/lazy-electronic-summer.png",
  "/images/styles/funky.png",
  "/images/collections/2022.png",
  "/images/moods/electronic-spring.png",
  "/images/styles/house.png",
  "/images/collections/2021.png",
  "/images/moods/running.png",
  "/images/styles/blues.png",
  "/images/collections/2020.png",
  "/images/moods/electronic-uptempo-winter.png",
  "/images/styles/hip-hop.png",
  "/images/collections/2019.png",
  "/images/moods/runningmal.png",
  "/images/styles/beautiful-songs.png",
  "/images/collections/2018.png",
  "/images/styles/modern-classical-music.png",
  "/images/collections/2017.png",
  "/images/styles/reggae.png",
];

const STATIC_PREVIEW = [
  "/images/collections/2025.png",
  "/images/moods/electronic-winter.png",
  "/images/collections/2020.png",
];

const MAX_TRAIL = 4;
const THROTTLE_MS = 320;
const FADE_MS = 1600;

interface TrailItem {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
}

let idCounter = 0;
let imageIndex = 0;

export default function HeroCursorTrail({ spotifyUrl }: { spotifyUrl: string }) {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastTime = useRef(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -40]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastTime.current < THROTTLE_MS) return;
    lastTime.current = now;

    const src = IMAGES[imageIndex % IMAGES.length];
    imageIndex++;

    // slight random rotation, max ±12deg
    const rotation = (Math.random() - 0.5) * 24;

    const item: TrailItem = { id: idCounter++, x: e.clientX, y: e.clientY, src, rotation };

    setTrail((prev) => [...prev.slice(-(MAX_TRAIL - 1)), item]);

    setTimeout(() => {
      setTrail((prev) => prev.filter((i) => i.id !== item.id));
    }, FADE_MS);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ cursor: "none" }}
    >
      {/* Trail — desktop only */}
      <div className="hidden md:block">
        <AnimatePresence>
          {trail.map((item, index) => {
            const age = trail.length - 1 - index; // 0 = newest
            const scale = 1 - age * 0.06;
            const opacity = 1 - age * 0.2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity, scale }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed pointer-events-none z-10"
                style={{
                  left: item.x - 110,
                  top: item.y - 110,
                  rotate: item.rotation,
                  width: 220,
                  height: 220,
                  borderRadius: 6,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Title — fades on scroll */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="relative z-20 text-center space-y-4 pointer-events-none"
      >
        <h1 className="font-playfair text-6xl md:text-8xl lg:text-[9rem] text-[#F5F4F0] tracking-tight leading-none">
          Simpático Records
        </h1>
        <p className="font-dm font-light text-[#F5F4F0]/40 text-sm md:text-base tracking-[0.25em] uppercase">
          One label. Not records.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        style={{ opacity: titleOpacity }}
        className="relative z-20 flex gap-6 mt-10 pointer-events-auto"
      >
        <Link
          href="/collections"
          className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0] border border-[#F5F4F0]/20 px-6 py-3 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-300"
          style={{ cursor: "default" }}
        >
          Browse Archives
        </Link>
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0]/50 flex items-center gap-2 hover:text-[#C8A96E] transition-colors duration-300"
          style={{ cursor: "default" }}
        >
          Listen on Spotify ↗
        </a>
      </motion.div>

      {/* Mobile static grid */}
      <div className="md:hidden relative z-20 mt-14 grid grid-cols-3 gap-3 w-full max-w-sm">
        {STATIC_PREVIEW.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="aspect-square relative overflow-hidden"
            style={{ borderRadius: 4 }}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
