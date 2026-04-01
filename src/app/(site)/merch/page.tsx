const merchTracks = [
  {
    label: "Objects",
    body:
      "Small physical pieces that feel like extensions of the playlists: printed matter, edition-based items, things worth keeping on a shelf.",
  },
  {
    label: "Wearables",
    body:
      "Caps, tees, and understated pieces that carry the mood of the label without looking like standard promo merch.",
  },
  {
    label: "Special Runs",
    body:
      "Limited batches tied to a drop, a season, or a specific release cycle. Fewer items, better reasons for them to exist.",
  },
];

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="max-w-2xl">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
              Physical Layer
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0] leading-[0.98]">
              Merch
            </h1>
            <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
            <p className="mt-8 font-dm font-light text-[#F5F4F0]/65 text-base md:text-lg leading-relaxed max-w-xl">
              Not generic merchandise. More like a physical extension of the
              world around the playlists, drops, and annual archives.
            </p>
          </div>

          <div className="relative overflow-hidden border border-[rgba(245,244,240,0.08)] p-8 md:p-10 bg-[linear-gradient(145deg,_rgba(15,15,15,1)_0%,_rgba(10,10,10,1)_55%,_rgba(24,18,10,1)_100%)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/70 to-transparent" />
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/35 mb-5">
              Intent
            </p>
            <p className="font-playfair text-2xl md:text-3xl text-[#F5F4F0] leading-tight mb-4">
              Make fewer things.
              <br />
              Make them worth owning.
            </p>
            <p className="font-dm font-light text-[#F5F4F0]/55 text-sm md:text-base leading-relaxed">
              The space is here for editions, apparel, and objects that feel
              considered, not obligatory. The same curation standard, just in a
              physical format.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {merchTracks.map((item) => (
            <article
              key={item.label}
              className="border border-[rgba(245,244,240,0.08)] bg-[#0D0D0D] p-7 md:p-8"
            >
              <p className="font-dm text-[9px] tracking-[0.3em] uppercase text-[#C8A96E]/70 mb-3">
                {item.label}
              </p>
              <p className="font-dm font-light text-[#F5F4F0]/60 text-sm md:text-base leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <section className="border border-[rgba(245,244,240,0.08)] p-8 md:p-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-12 items-start">
          <div>
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
              Coming Through
            </p>
            <p className="font-playfair text-3xl md:text-4xl text-[#F5F4F0] leading-tight">
              A proper merch shelf,
              <br />
              built slowly.
            </p>
          </div>

          <div className="space-y-5">
            <p className="font-dm font-light text-[#F5F4F0]/55 text-sm md:text-base leading-relaxed">
              This area gives the project room to grow beyond playlists alone:
              capsule items, release-linked pieces, and a cleaner way to present
              future physical products when they are ready.
            </p>
            <p className="font-dm font-light text-[#F5F4F0]/40 text-sm md:text-base leading-relaxed">
              For now, the structure is in place so the moment the first objects
              are ready, they already have a home.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
