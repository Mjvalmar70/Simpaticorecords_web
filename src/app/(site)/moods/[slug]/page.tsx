import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { toEmbedUrl } from "@/lib/data";
import SpotifyEmbed from "@/components/SpotifyEmbed";

async function getMood(slug: string) {
  return client.fetch(
    `*[_type == "mood" && slug.current == $slug][0] {
      title, shortDescription, spotifyUrl,
      "slug": slug.current
    }`,
    { slug }
  );
}

async function getOtherMoods(slug: string) {
  return client.fetch(
    `*[_type == "mood" && slug.current != $slug] | order(_createdAt asc) {
      title, "slug": slug.current
    }`,
    { slug }
  );
}

interface Props {
  params: { slug: string };
}

export default async function MoodDetailPage({ params }: Props) {
  const mood = await getMood(params.slug);
  if (!mood) notFound();

  const others = await getOtherMoods(params.slug);
  const imageSrc = `/images/moods/${mood.slug}.png`;
  const embedUrl = mood.spotifyUrl ? toEmbedUrl(mood.spotifyUrl) : null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Link
            href="/moods"
            className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/30 hover:text-[#C8A96E] transition-colors duration-300"
          >
            ← Moods
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: image */}
          <div className="aspect-square w-full relative border border-[rgba(245,244,240,0.06)] overflow-hidden bg-[#111]">
            <Image
              src={imageSrc}
              alt={mood.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: info + embed */}
          <div className="space-y-8">
            <div>
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">
                Mood
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl text-[#F5F4F0] mb-4">
                {mood.title}
              </h1>
              <div className="w-8 h-[1px] bg-[#C8A96E]/40 mb-6" />
              {mood.shortDescription && (
                <p className="font-dm font-light text-[#F5F4F0]/60 text-base leading-relaxed">
                  {mood.shortDescription}
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
                  title={mood.title}
                  externalUrl={mood.spotifyUrl}
                />
              </div>
            )}
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[rgba(245,244,240,0.08)]">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/30 mb-8">
              Other Moods
            </p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {others.map((m: { slug: string; title: string }) => (
                <Link
                  key={m.slug}
                  href={`/moods/${m.slug}`}
                  className="group flex-shrink-0 flex flex-col items-center gap-2"
                >
                  <div className="relative w-20 h-20 overflow-hidden border border-[rgba(245,244,240,0.06)] group-hover:border-[#C8A96E] transition-colors duration-300">
                    <Image
                      src={`/images/moods/${m.slug}.png`}
                      alt={m.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="80px"
                    />
                  </div>
                  <span className="font-dm text-[10px] tracking-[0.15em] text-[#F5F4F0]/40 group-hover:text-[#C8A96E] transition-colors duration-300 text-center max-w-[80px] leading-tight">
                    {m.title}
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
