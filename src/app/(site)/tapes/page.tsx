"use client";

import { useState } from "react";
import Link from "next/link";

export default function TapesPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    what: "",
    memory: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <Link href="/archive" className="inline-block font-dm text-[10px] tracking-[0.3em] uppercase text-[#F5F4F0]/25 hover:text-[#C8A96E] transition-colors duration-300 mb-6">← Archive</Link>
        <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
          The Physical Archive
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0] leading-[0.98]">
          The Tapes
        </h1>
        <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
        <p className="mt-10 font-dm font-light text-[#F5F4F0]/60 text-base md:text-lg leading-relaxed">
          Before the playlists, there were the tapes. Cassettes made for friends.
          CDs burned at the end of the year. Physical things with tracklists,
          handwriting, and reasons that made sense at the time. This is where
          they live.
        </p>

        {/* Second block */}
        <div className="mt-20 border-t border-[rgba(245,244,240,0.08)] pt-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#F5F4F0] leading-tight mb-6">
            Do you still have the tape?
          </h2>
          <p className="font-dm font-light text-[#F5F4F0]/55 text-base leading-relaxed max-w-2xl">
            If you&apos;ve kept one of the old compilations — on cassette, CD, or
            anything else — we&apos;d like to know. Send us a note. Tell us what you
            have, when it&apos;s from, and anything you remember about it. We&apos;ll take
            it from there.
          </p>
        </div>

        {/* Form */}
        <div className="mt-14">
          {status === "success" ? (
            <p className="font-playfair text-2xl text-[#F5F4F0] leading-relaxed">
              We got it. We&apos;ll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-playfair text-sm text-[#F5F4F0]/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#C8A96E]/30 focus:border-[#C8A96E] outline-none py-3 font-dm font-light text-[#F5F4F0] text-base placeholder:text-[#F5F4F0]/20 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-playfair text-sm text-[#F5F4F0]/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#C8A96E]/30 focus:border-[#C8A96E] outline-none py-3 font-dm font-light text-[#F5F4F0] text-base placeholder:text-[#F5F4F0]/20 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-playfair text-sm text-[#F5F4F0]/70 mb-2">
                  What do you have?
                </label>
                <textarea
                  required
                  value={form.what}
                  onChange={(e) => setForm({ ...form, what: e.target.value })}
                  rows={3}
                  className="w-full bg-transparent border-b border-[#C8A96E]/30 focus:border-[#C8A96E] outline-none py-3 font-dm font-light text-[#F5F4F0] text-base placeholder:text-[#F5F4F0]/20 transition-colors duration-300 resize-none"
                  placeholder="A cassette from 2003. A CD with no label. Anything."
                />
              </div>

              <div>
                <label className="block font-playfair text-sm text-[#F5F4F0]/70 mb-2">
                  A memory
                </label>
                <textarea
                  value={form.memory}
                  onChange={(e) => setForm({ ...form, memory: e.target.value })}
                  rows={3}
                  className="w-full bg-transparent border-b border-[#C8A96E]/30 focus:border-[#C8A96E] outline-none py-3 font-dm font-light text-[#F5F4F0] text-base placeholder:text-[#F5F4F0]/20 transition-colors duration-300 resize-none"
                  placeholder="Optional. Where were you when you listened to it?"
                />
              </div>

              {status === "error" && (
                <p className="font-dm text-sm text-red-400/70">
                  Something went wrong. Try again or write directly to hello@simpaticorecords.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-dm text-sm tracking-widest uppercase text-[#C8A96E] border border-[#C8A96E]/40 hover:border-[#C8A96E] px-8 py-4 transition-colors duration-300 disabled:opacity-40"
              >
                {status === "loading" ? "Sending..." : "Send it →"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
