"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Collection } from "@/lib/data";

interface Props {
  collection: Collection;
  index?: number;
}

export default function CollectionCard({ collection, index = 0 }: Props) {
  const displayTitle = String(collection.year);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link href={`/collections/${collection.slug}`} className="group block">
        <div
          className="relative aspect-[3/4] w-full overflow-hidden"
          style={{ background: collection.image ? undefined : collection.gradient }}
        >
          {/* Cover image */}
          {collection.image && (
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400" />

          {/* Year — top right */}
          <div className="absolute top-3 right-4 z-10">
            <span className="font-dm text-xs tracking-[0.2em] text-[#C8A96E] font-light">
              {collection.year}
            </span>
          </div>

          {/* Featured badge */}
          {collection.featured && (
            <div className="absolute top-3 left-4 z-10">
              <span className="text-[9px] font-dm font-light tracking-[0.2em] uppercase text-[#C8A96E] border border-[#C8A96E]/40 px-2 py-1">
                Featured
              </span>
            </div>
          )}

          {/* Title + Spotify — slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="font-playfair text-[#F5F4F0] text-3xl leading-none mb-2">
              {displayTitle}
            </h3>
            <p className="font-dm text-xs tracking-widest text-[#C8A96E] font-light">
              → Listen on Spotify
            </p>
          </div>

          {/* Bottom gradient (always visible) */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </Link>
    </motion.div>
  );
}
