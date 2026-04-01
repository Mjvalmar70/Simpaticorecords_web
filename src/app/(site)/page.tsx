import Link from "next/link";
import Image from "next/image";
import HeroCursorTrail from "@/components/HeroCursorTrail";
import CollectionCard from "@/components/CollectionCard";
import { client } from "@/sanity/lib/client";
import { gradientBySlug, SPOTIFY_PLACEHOLDER } from "@/lib/data";
import type { Collection } from "@/lib/data";
import { contactEmailHref, siteContact } from "@/lib/site";

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

      <section className="py-24 px-6 md:px-10 border-t border-[rgba(245,244,240,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">
              New Spaces
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F4F0] mb-5">
              More than the yearly archive.
            </h2>
            <p className="font-dm font-light text-[#F5F4F0]/60 text-base leading-relaxed">
              Simpático is opening room for faster releases and physical pieces,
              so the project can move between annual collections, smaller drops,
              and a future merch shelf without losing coherence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Link
              href="/drops"
              className="group relative overflow-hidden border border-[rgba(245,244,240,0.08)] p-8 md:p-10 min-h-[320px] flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,_rgba(200,169,110,0.14),_transparent_30%),linear-gradient(160deg,_rgba(16,14,10,1)_0%,_rgba(10,10,10,1)_100%)]"
            >
              <div>
                <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
                  Drops
                </p>
                <h3 className="font-playfair text-4xl text-[#F5F4F0] mb-5">
                  Smaller releases.
                  <br />
                  Quicker rhythm.
                </h3>
                <p className="font-dm font-light text-sm md:text-base leading-relaxed text-[#F5F4F0]/58 max-w-md">
                  Weekly or monthly launches with a clear objective, ready to
                  feed Instagram, X, the newsletter, and later playlists of
                  their own.
                </p>
              </div>
              <span className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0]/40 group-hover:text-[#C8A96E] transition-colors duration-300">
                Open Drops →
              </span>
            </Link>

            <Link
              href="/merch"
              className="group relative overflow-hidden border border-[rgba(245,244,240,0.08)] p-8 md:p-10 min-h-[320px] flex flex-col justify-between bg-[linear-gradient(145deg,_rgba(13,13,13,1)_0%,_rgba(10,10,10,1)_58%,_rgba(28,20,10,1)_100%)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/75 to-transparent" />
              <div>
                <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
                  Merch
                </p>
                <h3 className="font-playfair text-4xl text-[#F5F4F0] mb-5">
                  A physical side
                  <br />
                  of the label.
                </h3>
                <p className="font-dm font-light text-sm md:text-base leading-relaxed text-[#F5F4F0]/58 max-w-md">
                  Editions, apparel, and objects that feel like part of the same
                  editorial world instead of generic merch.
                </p>
              </div>
              <span className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0]/40 group-hover:text-[#C8A96E] transition-colors duration-300">
                Open Merch →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10 border-t border-[rgba(245,244,240,0.08)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-stretch">
          <div className="max-w-2xl">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-3">
              Contact
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl text-[#F5F4F0] leading-[1.05] mb-5">
              Bring a project, a note,
              <br />
              or a playlist worth keeping.
            </h2>
            <p className="font-dm font-light text-base md:text-lg leading-relaxed text-[#F5F4F0]/60 max-w-xl">
              The mail is now part of the page too. If you want to talk curation,
              guest selections, merch, or something that feels aligned with the
              world of Simpático Records, write directly.
            </p>
          </div>

          <div className="relative overflow-hidden border border-[rgba(245,244,240,0.08)] bg-[radial-gradient(circle_at_top_left,_rgba(200,169,110,0.16),_transparent_32%),linear-gradient(160deg,_rgba(15,15,15,1)_0%,_rgba(10,10,10,1)_100%)] p-8 md:p-10 flex flex-col justify-between min-h-[320px]">
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#C8A96E]/70 to-transparent" />

            <div>
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/35 mb-4">
                Write Directly
              </p>
              <a
                href={contactEmailHref}
                className="inline-block font-playfair text-3xl md:text-4xl leading-tight text-[#F5F4F0] hover:text-[#C8A96E] transition-colors duration-300 break-all"
              >
                {siteContact.email}
              </a>
              <p className="font-dm font-light text-sm md:text-base leading-relaxed text-[#F5F4F0]/55 mt-5 max-w-md">
                Best for collaborations, press, selector invites, or ideas that
                deserve a thoughtful reply.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-[rgba(245,244,240,0.08)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <a
                href={contactEmailHref}
                className="inline-flex items-center justify-center font-dm text-xs tracking-widest uppercase text-[#0A0A0A] bg-[#C8A96E] px-5 py-3 hover:bg-[#F5F4F0] transition-colors duration-300"
              >
                Send Email
              </a>
              <a
                href={siteContact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-xs tracking-widest uppercase text-[#F5F4F0]/45 hover:text-[#C8A96E] transition-colors duration-300"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
