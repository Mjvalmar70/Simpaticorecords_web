import Link from "next/link";
import HeroCursorTrail from "@/components/HeroCursorTrail";
import CollectionCard from "@/components/CollectionCard";
import MoodCard from "@/components/MoodCard";
import { client } from "@/sanity/lib/client";
import { gradientBySlug, MANIFESTO, SPOTIFY_PLACEHOLDER } from "@/lib/data";
import type { Collection, Mood } from "@/lib/data";

async function getHomeData() {
  const [rawCollections, rawMoods] = await Promise.all([
    client.fetch(`*[_type == "collection"] | order(year desc) { title, year, featured, "slug": slug.current, spotifyUrl, shortDescription }`),
    client.fetch(`*[_type == "mood"] | order(_createdAt asc) { title, shortDescription, spotifyUrl, "slug": slug.current }`),
  ]);
  return { rawCollections, rawMoods };
}

export default async function HomePage() {
  const { rawCollections, rawMoods } = await getHomeData();

  const collections: Collection[] = rawCollections.map((c: Collection) => ({
    ...c,
    gradient: gradientBySlug[c.slug] ?? "linear-gradient(135deg, #0a0a0a 0%, #0a0a0a 100%)",
    image: `/images/collections/${c.year}.png`,
  }));

  const moods: Mood[] = rawMoods.map((m: Mood) => ({
    ...m,
    gradient: "linear-gradient(160deg, #0a0a0a 0%, #111 100%)",
    image: `/images/moods/${m.slug}.png`,
  }));

  return (
    <div className="bg-[#0A0A0A]">
      <HeroCursorTrail spotifyUrl={SPOTIFY_PLACEHOLDER} />

      {/* Archive — Collections */}
      <section className="py-24 px-6 md:px-10 border-t border-[rgba(245,244,240,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">Archive</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F4F0]">Collections</h2>
            </div>
            <Link href="/collections" className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0]/40 hover:text-[#C8A96E] transition-colors duration-300">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {collections.slice(0, 6).map((c, i) => (
              <CollectionCard key={c.slug} collection={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Archive — Moods */}
      <section className="py-24 px-6 md:px-10 border-t border-[rgba(245,244,240,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">Archive</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F4F0]">Moods</h2>
            </div>
            <Link href="/moods" className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0]/40 hover:text-[#C8A96E] transition-colors duration-300">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {moods.map((m, i) => (
              <MoodCard key={m.slug} mood={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Archive — Styles (placeholder) */}
      <section className="py-24 px-6 md:px-10 border-t border-[rgba(245,244,240,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">Archive</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F4F0]">Styles</h2>
            </div>
            <Link href="/styles" className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0]/40 hover:text-[#C8A96E] transition-colors duration-300">
              View All →
            </Link>
          </div>
          <p className="font-dm font-light text-[#F5F4F0]/30 text-sm">Coming soon.</p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6 md:px-10 border-t border-[rgba(245,244,240,0.08)]">
        <div className="max-w-7xl mx-auto max-w-2xl">
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-8">Manifesto</p>
          <blockquote className="font-playfair text-2xl md:text-3xl text-[#F5F4F0]/80 leading-relaxed italic">
            &ldquo;{MANIFESTO}&rdquo;
          </blockquote>
          <div className="mt-10 w-12 h-[1px] bg-[#C8A96E]/40" />
        </div>
      </section>
    </div>
  );
}
