import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { gradientBySlug, toEmbedUrl } from "@/lib/data";
import SpotifyEmbed from "@/components/SpotifyEmbed";

async function getCollection(slug: string) {
  return client.fetch(
    `*[_type == "collection" && slug.current == $slug][0] {
      title, year, featured, shortDescription, spotifyUrl,
      "slug": slug.current
    }`,
    { slug }
  );
}

async function getOtherCollections(slug: string) {
  return client.fetch(
    `*[_type == "collection" && slug.current != $slug] | order(year desc) [0..11] {
      title, year, "slug": slug.current
    }`,
    { slug }
  );
}

interface Props {
  params: { slug: string };
}

export default async function CollectionDetailPage({ params }: Props) {
  const [collection, others] = await Promise.all([
    getCollection(params.slug),
    getOtherCollections(params.slug),
  ]);
  if (!collection) notFound();
  const gradient = gradientBySlug[collection.slug] ?? "linear-gradient(135deg, #0a0a0a 0%, #0a0a0a 100%)";
  const imageSrc = `/images/collections/${collection.year}.png`;
  const embedUrl = collection.spotifyUrl ? toEmbedUrl(collection.spotifyUrl) : null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Link
            href="/collections"
            className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/30 hover:text-[#C8A96E] transition-colors duration-300"
          >
            ← Collections
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: visual */}
          <div
            className="aspect-[3/4] w-full relative border border-[rgba(245,244,240,0.06)] overflow-hidden"
            style={{ background: gradient }}
          >
            <Image
              src={imageSrc}
              alt={collection.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-playfair text-[130px] md:text-[180px] font-bold text-[#F5F4F0]/[0.04] select-none leading-none">
                {collection.year}
              </span>
            </div>
            {collection.featured && (
              <div className="absolute top-5 left-5">
                <span className="text-[9px] font-dm font-light tracking-[0.2em] uppercase text-[#C8A96E] border border-[#C8A96E]/40 px-2 py-1">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Right: info + embed */}
          <div className="space-y-8">
            <div>
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">
                {collection.year}
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl text-[#F5F4F0] mb-4">
                {collection.title}
              </h1>
              <div className="w-8 h-[1px] bg-[#C8A96E]/40 mb-6" />
              {collection.shortDescription && (
                <p className="font-dm font-light text-[#F5F4F0]/60 text-base leading-relaxed">
                  {collection.shortDescription}
                </p>
              )}
            </div>

            {embedUrl && (
              <div className="pt-4">
                <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/30 mb-4">
                  Listen
                </p>
                <SpotifyEmbed
                  embedUrl={embedUrl}
                  title={collection.title}
                  externalUrl={collection.spotifyUrl}
                />
              </div>
            )}
          </div>
        </div>

        {/* Other collections — horizontal thumbnails */}
        {others.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[rgba(245,244,240,0.08)]">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/30 mb-8">
              Other Archives
            </p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {others.map((c: { slug: string; title: string; year: number }) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className="group flex-shrink-0 flex flex-col items-center gap-2"
                >
                  <div className="relative w-20 h-20 overflow-hidden border border-[rgba(245,244,240,0.06)] group-hover:border-[#C8A96E] transition-colors duration-300">
                    <Image
                      src={`/images/collections/${c.year}.png`}
                      alt={String(c.year)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="80px"
                    />
                  </div>
                  <span className="font-dm text-[10px] tracking-[0.15em] text-[#F5F4F0]/40 group-hover:text-[#C8A96E] transition-colors duration-300">
                    {c.year}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
