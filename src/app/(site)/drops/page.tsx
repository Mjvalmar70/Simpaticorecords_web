const dropCadences = [
  {
    label: "Weekly Cuts",
    body:
      "Smaller edits, fast reactions, one tight idea at a time. The kind of drop that catches a moment before it disappears.",
  },
  {
    label: "Monthly Editions",
    body:
      "More considered sequences with a clear brief, a seasonal angle, or a mood that deserves a little more space.",
  },
  {
    label: "Afterlife",
    body:
      "Each drop stays useful. The strongest ones can fold into later playlists, archives, and bigger yearly selections.",
  },
];

const channels = ["Instagram", "X / Twitter", "Newsletter", "Future playlists"];

export default function DropsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          <div className="max-w-2xl">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
              New Releases
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0] leading-[0.98]">
              Drops
            </h1>
            <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
            <p className="mt-8 font-dm font-light text-[#F5F4F0]/65 text-base md:text-lg leading-relaxed max-w-xl">
              Smaller releases with their own timing, their own objective, and
              their own energy. A way to publish more often without waiting for
              the annual collections to arrive.
            </p>
          </div>

          <div className="border border-[rgba(245,244,240,0.08)] bg-[radial-gradient(circle_at_top,_rgba(200,169,110,0.14),_transparent_38%),linear-gradient(160deg,_rgba(18,16,12,1)_0%,_rgba(10,10,10,1)_100%)] p-8 md:p-10">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/35 mb-5">
              Publishing Logic
            </p>
            <p className="font-playfair text-2xl md:text-3xl text-[#F5F4F0] leading-tight mb-4">
              Fast enough to stay current.
              <br />
              Sharp enough to last.
            </p>
            <p className="font-dm font-light text-[#F5F4F0]/55 text-sm md:text-base leading-relaxed">
              The point is not more noise. The point is making room for smaller,
              living releases that can later feed the deeper archives.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dropCadences.map((item) => (
            <article
              key={item.label}
              className="border border-[rgba(245,244,240,0.08)] bg-[#0E0E0E] p-7 md:p-8"
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

        <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-8">
          <div className="border border-[rgba(245,244,240,0.08)] p-8 md:p-10">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
              Distribution
            </p>
            <p className="font-playfair text-3xl md:text-4xl text-[#F5F4F0] leading-tight mb-5">
              One release,
              <br />
              several surfaces.
            </p>
            <p className="font-dm font-light text-[#F5F4F0]/55 text-sm md:text-base leading-relaxed">
              Each drop is designed to travel well across the channels you want
              to automate, while still belonging to the same Simpático system.
            </p>
          </div>

          <div className="border border-[rgba(245,244,240,0.08)] bg-[#0C0C0C] p-8 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {channels.map((channel, index) => (
                <div
                  key={channel}
                  className="border border-[rgba(245,244,240,0.08)] px-5 py-6"
                >
                  <p className="font-dm text-[9px] tracking-[0.3em] uppercase text-[#F5F4F0]/25 mb-2">
                    Surface {index + 1}
                  </p>
                  <p className="font-playfair text-2xl text-[#F5F4F0]">
                    {channel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
