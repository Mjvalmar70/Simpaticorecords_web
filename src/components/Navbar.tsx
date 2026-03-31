"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
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
            className="font-playfair text-[#F5F4F0] text-lg tracking-wide hover:text-[#C8A96E] transition-colors duration-300 shrink-0"
          >
            Simpático Records
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 md:gap-10">
            <NavLink href="/collections">Collections</NavLink>
            <NavLink href="/moods">Moods</NavLink>
            <NavLink href="/styles">Styles</NavLink>
            <NavLink href="/tapes">Tapes</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] shrink-0"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-px bg-[#F5F4F0] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#F5F4F0] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#F5F4F0] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10 transition-all duration-400 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <MobileNavLink href="/collections">Collections</MobileNavLink>
        <MobileNavLink href="/moods">Moods</MobileNavLink>
        <MobileNavLink href="/styles">Styles</MobileNavLink>
        <MobileNavLink href="/tapes">Tapes</MobileNavLink>
        <MobileNavLink href="/about">About</MobileNavLink>
      </div>
    </>
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

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-playfair text-3xl tracking-wide transition-colors duration-300 ${
        active ? "text-[#C8A96E]" : "text-[#F5F4F0] hover:text-[#C8A96E]"
      }`}
    >
      {children}
    </Link>
  );
}
