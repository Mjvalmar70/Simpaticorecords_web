import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { toEmbedUrl } from "@/lib/data";
import SpotifyEmbed from "@/components/SpotifyEmbed";

async function getStyle(slug: string) {
  return client.fetch(
    `*[_type == "style" && slug.current == $slug][0] {
      title, shortDescription, spotifyUrl,
      "slug": slug.current
    }`,
    { slug }
  );
}

async function getOtherStyles(slug: string) {
  return client.fetch(
    `*[_type == "style" && slug.current != $slug] | order(title asc) {
      title, "slug": slug.current
    }`,
    { slug }
  );
}

interface Props {
  params: { slug: string };
}

export default async function StyleDetailPage({ params }: Props) {
  const [style, others] = await Promise.all([
    getStyle(params.slug),
    getOtherStyles(params.slug),
  ]);
  if (!style) notFound();

  const imageSrc = `/images/styles/${style.slug}.png`;
  const embedUrl = style.spotifyUrl ? toEmbedUrl(style.spotifyUrl) : null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Link
            href="/styles"
            className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/30 hover:text-[#C8A96E] transition-colors duration-300"
          >
            ← Styles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: image */}
          <div className="aspect-[3/4] w-full relative border border-[rgba(245,244,240,0.06)] overflow-hidden bg-[#111]">
            <Image
              src={imageSrc}
              alt={style.title}
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
                Style
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl text-[#F5F4F0] mb-4">
                {style.title}
              </h1>
              <div className="w-8 h-[1px] bg-[#C8A96E]/40 mb-6" />
              {style.shortDescription && (
                <p className="font-dm font-light text-[#F5F4F0]/60 text-base leading-relaxed">
                  {style.shortDescription}
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
                  title={style.title}
                  externalUrl={style.spotifyUrl}
                />
              </div>
            )}
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[rgba(245,244,240,0.08)]">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/30 mb-8">
              Other Styles
            </p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {others.map((s: { slug: string; title: string }) => (
                <Link
                  key={s.slug}
                  href={`/styles/${s.slug}`}
                  className="group flex-shrink-0 flex flex-col items-center gap-2"
                >
                  <div className="relative w-20 h-20 overflow-hidden border border-[rgba(245,244,240,0.06)] group-hover:border-[#C8A96E] transition-colors duration-300">
                    <Image
                      src={`/images/styles/${s.slug}.png`}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="80px"
                    />
                  </div>
                  <span className="font-dm text-[10px] tracking-[0.15em] text-[#F5F4F0]/40 group-hover:text-[#C8A96E] transition-colors duration-300 text-center max-w-[80px] leading-tight">
                    {s.title}
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
