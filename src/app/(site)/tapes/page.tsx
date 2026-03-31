export default function TapesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
          The Originals
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0]">
          Tapes
        </h1>
        <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
        <p className="mt-8 font-dm font-light text-[#F5F4F0]/40 text-sm leading-relaxed max-w-md">
          Before playlists. Before streaming. Before digital. The originals — cassettes, then CDs — are coming here.
        </p>

        <div className="mt-16 border border-[rgba(245,244,240,0.06)] p-8 md:p-10 max-w-lg">
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-6">
            A note to those who were there
          </p>
          <p className="font-playfair text-2xl text-[#F5F4F0] leading-relaxed mb-6">
            Somewhere out there, one of these is yours.
          </p>
          <p className="font-dm font-light text-[#F5F4F0]/50 text-sm leading-relaxed mb-4">
            A cassette. A CD. A handwritten tracklist inside a case you probably still have in a drawer somewhere. I made it for you — and I remember most of them, but not all.
          </p>
          <p className="font-dm font-light text-[#F5F4F0]/50 text-sm leading-relaxed mb-8">
            If that was you, I want it back. Not the tape — just the memory of it. Write me the tracklist. Send me the cover. Let it live here where it belongs, alongside everything else.
          </p>
          <p className="font-dm font-light text-[#F5F4F0]/30 text-sm leading-relaxed">
            The mail is almost here.{" "}
            <span className="text-[#C8A96E]/60">Watch this space.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

