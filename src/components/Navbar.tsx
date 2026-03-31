"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[rgba(245,244,240,0.08)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-playfair text-[#F5F4F0] text-lg tracking-wide hover:text-[#C8A96E] transition-colors duration-300"
        >
          Simpático Records
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 md:gap-10">
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/moods">Moods</NavLink>
          <NavLink href="/styles">Styles</NavLink>
          <NavLink href="/tapes">Tapes</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`text-sm font-dm font-light tracking-widest uppercase transition-colors duration-300 ${
        active ? "text-[#C8A96E]" : "text-[#F5F4F0]/60 hover:text-[#F5F4F0]"
      }`}
    >
      {children}
    </Link>
  );
}
