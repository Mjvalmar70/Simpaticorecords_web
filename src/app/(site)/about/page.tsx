"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="aspect-[3/4] w-full border border-[rgba(245,244,240,0.06)] relative"
              style={{
                background:
                  "linear-gradient(160deg, #120818 0%, #0a0a12 50%, #180a08 100%)",
              }}
            >
              {/* Abstract visual element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-3 text-center">
                  <p className="font-playfair text-[#C8A96E]/20 text-7xl">SR</p>
                  <div className="w-8 h-[1px] bg-[#C8A96E]/20 mx-auto" />
                  <p className="font-dm text-[9px] tracking-[0.4em] uppercase text-[#F5F4F0]/10">
                    Est. MMXX
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-10 md:pt-8"
          >
            <div>
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
                About
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl text-[#F5F4F0] leading-tight">
                One Label.
                <br />
                Not Records.
              </h1>
            </div>

            <div className="w-12 h-[1px] bg-[#C8A96E]/40" />

            <div className="space-y-8">
              {[
                { label: "What I Do", body: "We make collections you return to. Music that holds a room, a season, a drive, a version of you. Compilations, small drops, and \u201cbest of the year\u201d edits \u2014 always." },
                { label: "Background", body: "From as far back as I can remember, I\u2019ve been making compilations. First in my head, then on tape, CDs, on the Cloud, and now playlists. Always chasing the same thing. Same obsession, different formats." },
                { label: "My Approach", body: "Curate like an editor. Design like a publisher. Sequence like it matters. Three pillars: Moods\u00a0/\u00a0Styles\u00a0/\u00a0Annual Collections. Every release is a tight cut: no filler, no noise. Just the tracks that stay." },
              ].map(({ label, body }) => (
                <div key={label}>
                  <p className="font-dm text-[9px] tracking-[0.3em] uppercase text-[#C8A96E]/60 mb-2">{label}</p>
                  <p className="font-dm font-light text-[#F5F4F0]/60 text-base leading-relaxed">{body}</p>
                </div>
              ))}

              <div>
                <p className="font-dm text-[9px] tracking-[0.3em] uppercase text-[#C8A96E]/60 mb-2">Career</p>
                <div className="space-y-1 font-dm font-light text-[#F5F4F0]/40 text-sm leading-relaxed">
                  <p>Before: cassettes → CDs → downloads → playlists</p>
                  <p>Now: Featured compilations + seasonal drops</p>
                  <p>Next: guest selectors, radio pages, and a proper merch shelf</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[rgba(245,244,240,0.08)] space-y-3">
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/30">
                Contact
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:hello@simpaticorecords.com"
                  className="font-dm text-sm text-[#F5F4F0]/50 hover:text-[#C8A96E] transition-colors duration-300"
                >
                  hello@simpaticorecords.com
                </a>
                <a
                  href="https://instagram.com/simpaticorecords"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm text-sm text-[#F5F4F0]/50 hover:text-[#C8A96E] transition-colors duration-300"
                >
                  @simpaticorecords ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
