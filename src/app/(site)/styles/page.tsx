import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import type { Style } from "@/lib/data";

async function getStyles() {
  return client.fetch(
    `*[_type == "style"] | order(title asc) {
      title, shortDescription, spotifyUrl,
      "slug": slug.current
    }`
  );
}

export default async function StylesPage() {
  const styles = await getStyles();

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
            By Genre
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0]">
            Styles
          </h1>
          <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
          <p className="mt-6 font-dm font-light text-[#F5F4F0]/50 text-sm leading-relaxed max-w-md">
            Sound organised by texture, not by year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {styles.map((style: Style) => (
            <Link key={style.slug} href={`/styles/${style.slug}`} className="group cursor-pointer">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-[rgba(245,244,240,0.06)] group-hover:border-[#C8A96E] transition-colors duration-300 bg-[#111]">
                <Image
                  src={`/images/styles/${style.slug}.png`}
                  alt={style.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
                {style.spotifyUrl && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-dm text-xs tracking-widest text-[#C8A96E] font-light">
                      → Listen on Spotify
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="font-playfair text-[#F5F4F0] text-lg group-hover:text-[#C8A96E] transition-colors duration-300">
                  {style.title}
                </h3>
                {style.shortDescription && (
                  <p className="font-dm text-sm text-[#F5F4F0]/50 font-light mt-1 leading-relaxed">
                    {style.shortDescription}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
