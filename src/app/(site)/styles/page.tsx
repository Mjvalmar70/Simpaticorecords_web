"use client";

import { motion } from "framer-motion";

export default function StylesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-4">
            By Genre
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0]">
            Styles
          </h1>
          <div className="mt-6 w-12 h-[1px] bg-[#C8A96E]/40" />
          <p className="mt-6 font-dm font-light text-[#F5F4F0]/50 text-sm leading-relaxed max-w-md">
            Sound organised by texture, not by year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Placeholder cards */}
          {["Ambient", "Electronic", "Acoustic", "Experimental", "Classical", "Jazz"].map((style, i) => (
            <motion.div
              key={style}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className="aspect-[3/4] w-full border border-[rgba(245,244,240,0.06)] flex items-end p-6 transition-all duration-300 group-hover:border-t-[#C8A96E]"
                style={{
                  borderTopWidth: "1px",
                  background: `linear-gradient(135deg, #${Math.floor(Math.random()*16).toString(16)}${Math.floor(Math.random()*16).toString(16)}0a0a 0%, #0a0a0a 100%)`,
                }}
              >
                <h3 className="font-playfair text-[#F5F4F0] text-2xl group-hover:text-[#C8A96E] transition-colors duration-300">
                  {style}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
