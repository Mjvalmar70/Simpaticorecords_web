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
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
            A note
          </p>
          <p className="font-playfair text-xl text-[#F5F4F0] leading-relaxed mb-6">
            If you are one of the people I gave a cassette, a CD or any physical mix to — get in touch.
          </p>
          <p className="font-dm font-light text-[#F5F4F0]/50 text-sm leading-relaxed mb-6">
            The archive wants to be complete. Send me the tracklist and the cover and I will make sure it lives here. The mail is coming soon — but it is on its way.
          </p>
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/20">
            Mail coming soon
          </p>
        </div>
      </div>
    </div>
  );
}

