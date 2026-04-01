import Link from "next/link";

const sections = [
  { number: "01", label: "Collections", title: "The Annual Archive", href: "/collections" },
  { number: "02", label: "Styles",      title: "Music by Genre",     href: "/styles" },
  { number: "03", label: "Moods",       title: "Music by Feeling",   href: "/moods" },
  { number: "04", label: "Tapes",       title: "The Physical Archive", href: "/tapes" },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
          The Archive
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0] leading-[0.98]">
          Archive
        </h1>
        <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40 mb-16" />

        <div>
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center justify-between border-t border-[rgba(245,244,240,0.08)] py-8 md:py-10 hover:bg-[rgba(200,169,110,0.04)] transition-colors duration-300 -mx-4 px-4"
            >
              <div className="flex items-center gap-6 md:gap-8">
                <span className="font-dm text-xs text-[#F5F4F0]/20 w-6 shrink-0">
                  {s.number}
                </span>
                <span className="font-dm text-[9px] tracking-[0.3em] uppercase text-[#C8A96E]/70 w-24 shrink-0">
                  {s.label}
                </span>
                <span className="font-playfair text-2xl md:text-3xl text-[#F5F4F0]">
                  {s.title}
                </span>
              </div>
              <span className="font-dm text-sm text-[#F5F4F0]/20 group-hover:text-[#C8A96E] transition-colors duration-300 shrink-0 ml-4">
                →
              </span>
            </Link>
          ))}
          <div className="border-t border-[rgba(245,244,240,0.08)]" />
        </div>
      </div>
    </div>
  );
}
