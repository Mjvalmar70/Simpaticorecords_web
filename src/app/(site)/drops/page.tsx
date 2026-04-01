"use client";

import { useState } from "react";

export default function DropsPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tag: "drops" }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-2xl mx-auto space-y-20">

        <section>
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
            New Releases
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0] leading-[0.98]">
            Drops
          </h1>
          <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
          <p className="mt-8 font-dm font-light text-[#F5F4F0]/60 text-base md:text-lg leading-relaxed">
            A weekly or fortnightly edit. A few tracks, a moment, a reason to
            listen. Smaller than a collection. More precise than a playlist.
          </p>
        </section>

        <section className="border-t border-[rgba(245,244,240,0.08)] pt-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F4F0] leading-tight mb-4">
            Get the drop.
          </h2>
          <p className="font-dm font-light text-[#F5F4F0]/50 text-base leading-relaxed mb-10">
            New selections delivered when they&apos;re ready. No noise.
          </p>

          {status === "success" ? (
            <p className="font-playfair text-xl text-[#F5F4F0]/80">You&apos;re on the list.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-[#C8A96E]/30 focus:border-[#C8A96E] outline-none py-3 font-dm font-light text-[#F5F4F0] text-base placeholder:text-[#F5F4F0]/20 transition-colors duration-300"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="font-dm text-sm tracking-widest uppercase text-[#C8A96E] border border-[#C8A96E]/40 hover:border-[#C8A96E] px-8 py-3 transition-colors duration-300 disabled:opacity-40 shrink-0"
              >
                {status === "loading" ? "..." : "Subscribe →"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="font-dm text-sm text-red-400/70 mt-3">
              Something went wrong. Try again later.
            </p>
          )}
        </section>

      </div>
    </div>
  );
}
