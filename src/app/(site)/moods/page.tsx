import Link from "next/link";
import MoodCard from "@/components/MoodCard";
import { client } from "@/sanity/lib/client";
import type { Mood } from "@/lib/data";

async function getMoods() {
  return client.fetch(
    `*[_type == "mood"] | order(_createdAt asc) {
      title, shortDescription, spotifyUrl,
      "slug": slug.current
    }`
  );
}

export default async function MoodsPage() {
  const raw = await getMoods();
  const moods: Mood[] = raw.map((m: Mood) => ({
    ...m,
    gradient: "linear-gradient(160deg, #0a0a0a 0%, #111 100%)",
    image: `/images/moods/${m.slug}.png`,
  }));

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Link href="/archive" className="inline-block font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/25 hover:text-[#C8A96E] transition-colors duration-300 mb-6">← Archive</Link>
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
            Curated
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0]">
            Moods
          </h1>
          <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
          <p className="mt-6 font-dm font-light text-[#F5F4F0]/50 text-sm leading-relaxed max-w-md">
            Not every moment has a year. Some have a feeling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {moods.map((mood: Mood, i: number) => (
            <MoodCard key={mood.slug} mood={mood} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
