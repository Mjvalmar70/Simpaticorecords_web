"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Mood } from "@/lib/data";

interface Props {
  mood: Mood;
  index?: number;
}

export default function MoodCard({ mood, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/moods/${mood.slug}`} className="group block">
        <div
          className="relative aspect-square w-full overflow-hidden border border-[rgba(245,244,240,0.06)] group-hover:border-[#C8A96E] transition-all duration-300 group-hover:scale-[1.02]"
          style={{ background: mood.image ? undefined : mood.gradient }}
        >
          {mood.image && (
            <Image
              src={mood.image}
              alt={mood.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-[#C8A96E]/0 group-hover:bg-[#C8A96E]/5 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="font-playfair text-[#F5F4F0] text-lg group-hover:text-[#C8A96E] transition-colors duration-300">
            {mood.title}
          </h3>
          <p className="font-dm text-sm text-[#F5F4F0]/50 font-light leading-relaxed">
            {mood.shortDescription}
          </p>
          <p className="font-dm text-xs text-[#C8A96E]/70 font-light tracking-wider mt-2 group-hover:text-[#C8A96E] transition-colors duration-300">
            → Listen on Spotify
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
