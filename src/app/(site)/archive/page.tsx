import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    label: "Collections",
    title: "The Annual Archive",
    subtitle: "2005–2025",
    body: "Twenty years of selections. One per year. Each a document of where the music was.",
    href: "/collections",
    image: "/images/collections/2020.png",
  },
  {
    label: "Styles",
    title: "Music by Genre",
    subtitle: null,
    body: "Organised by form. Jazz, soul, house, hip-hop, folk. The long taxonomy of how music gets made.",
    href: "/styles",
    image: "/images/styles/jazz.png",
  },
  {
    label: "Moods",
    title: "Music by Feeling",
    subtitle: null,
    body: "Organised by what it does to you. Not genre — weather. The kind of playlists that know what time it is.",
    href: "/moods",
    image: "/images/moods/electronic-winter.png",
  },
  {
    label: "Tapes",
    title: "The Physical Archive",
    subtitle: null,
    body: "Before the playlists, there were the tapes. Cassettes and CDs made for friends, with handwriting and reasons.",
    href: "/tapes",
    image: "/images/collections/2005.png",
  },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
          The Archive
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0] leading-[0.98]">
          Everything
        </h1>
        <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40 mb-20" />

        <div className="space-y-0">
          {sections.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className="group block border-t border-[rgba(245,244,240,0.08)] py-12 md:py-16 hover:border-[rgba(200,169,110,0.25)] transition-colors duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">
                <div className="flex gap-8 md:gap-12 items-start">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="pt-1">
                    <p className="font-dm text-[9px] tracking-[0.3em] uppercase text-[#C8A96E]/70 mb-2">
                      {section.label}
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F4F0] leading-tight mb-1">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="font-dm text-sm text-[#F5F4F0]/30 mb-3">
                        {section.subtitle}
                      </p>
                    )}
                    <p className="font-dm font-light text-[#F5F4F0]/50 text-sm md:text-base leading-relaxed max-w-lg mt-4">
                      {section.body}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center">
                  <span className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/20 group-hover:text-[#C8A96E] transition-colors duration-300">
                    Enter →
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <div className="border-t border-[rgba(245,244,240,0.08)]" />
        </div>
      </div>
    </div>
  );
}
