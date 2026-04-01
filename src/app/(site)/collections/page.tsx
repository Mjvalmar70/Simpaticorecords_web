import Link from "next/link";
import CollectionCard from "@/components/CollectionCard";
import { client } from "@/sanity/lib/client";
import { gradientBySlug, type Collection } from "@/lib/data";

async function getCollections() {
  return client.fetch(
    `*[_type == "collection"] | order(year desc) {
      title, year, featured,
      "slug": slug.current,
      spotifyUrl, shortDescription
    }`
  );
}

export default async function CollectionsPage() {
  const raw = await getCollections();
  const collections: Collection[] = raw.map((c: Collection) => ({
    ...c,
    gradient: gradientBySlug[c.slug] ?? "linear-gradient(135deg, #0a0a0a 0%, #0a0a0a 100%)",
    image: `/images/collections/${c.year}.png`,
  }));

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Link href="/archive" className="inline-block font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/25 hover:text-[#C8A96E] transition-colors duration-300 mb-6">← Archive</Link>
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
            The Archive
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0]">
            The Archive
          </h1>
          <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {collections.map((collection: Collection, i: number) => (
            <CollectionCard key={collection.slug} collection={collection} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
