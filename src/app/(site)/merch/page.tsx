"use client";

import { motion } from "framer-motion";

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] mb-6">
          Coming Soon
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-[#F5F4F0] mb-6">
          Merch
        </h1>
        <div className="w-12 h-[1px] bg-[#C8A96E]/40 mx-auto mb-6" />
        <p className="font-dm font-light text-[#F5F4F0]/40 text-sm">
          Something is being made.
        </p>
      </motion.div>
    </div>
  );
}
