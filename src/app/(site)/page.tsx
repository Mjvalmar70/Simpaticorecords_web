import Link from "next/link";
import Image from "next/image";
import HeroCursorTrail from "@/components/HeroCursorTrail";
import CollectionCard from "@/components/CollectionCard";
import { client } from "@/sanity/lib/client";
import { gradientBySlug, SPOTIFY_PLACEHOLDER } from "@/lib/data";
import type { Collection } from "@/lib/data";

async function getCollections() {
  return client.fetch(
    `*[_type == "collection"] | order(year desc) {
      title, year, featured, "slug": slug.current, spotifyUrl, shortDescription
    }`
  );
}

export default async function HomePage() {
  const raw = await getCollections();
  const collections: Collection[] = raw.map((c: Collection) => ({
    ...c,
    gradient: gradientBySlug[c.slug] ?? "linear-gradient(135deg, #0a0a0a 0%, #0a0a0a 100%)",
    image: `/images/collections/${c.year}.png`,
  }));

  const featured = collections[0]; // most recent
  const grid = collections.slice(1, 7); // next 6

  return (
    <div className="bg-[#0A0A0A]">
      <HeroCursorTrail spotifyUrl={SPOTIFY_PLACEHOLDER} />

      {/* Featured — most recent collection */}
      <section className="border-t border-[rgba(245,244,240,0.08)]">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src={`/images/collections/${featured.year}.png`}
            alt={featured.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-14 pb-10 md:pb-16">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">
              Latest Collection
            </p>
            <h2 className="font-playfair text-4xl md:text-6xl text-[#F5F4F0] mb-3">
              {featured.year}
            </h2>
            {featured.shortDescription && (
              <p className="font-dm font-light text-[#F5F4F0]/60 text-base max-w-md mb-8 leading-relaxed">
                {featured.shortDescription}
              </p>
            )}
            <div className="flex items-center gap-6">
              <Link
                href={`/collections/${featured.slug}`}
                className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0] border border-[#F5F4F0]/30 px-5 py-3 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-300"
              >
                View Collection
              </Link>
              {featured.spotifyUrl && (
                <a
                  href={featured.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm text-xs tracking-widest uppercase text-[#C8A96E] hover:text-[#F5F4F0] transition-colors duration-300"
                >
                  Listen on Spotify ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Archive grid — 6 collections */}
      <section className="py-24 px-6 md:px-10 border-t border-[rgba(245,244,240,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">
                The Archive
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F4F0]">
                Collections
              </h2>
            </div>
            <Link
              href="/collections"
              className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0]/40 hover:text-[#C8A96E] transition-colors duration-300"
            >
              View all {collections.length} years →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {grid.map((c, i) => (
              <CollectionCard key={c.slug} collection={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
