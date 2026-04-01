import { contactEmailHref, siteContact } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(245,244,240,0.08)] py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-playfair text-[#F5F4F0]/40 text-sm">
          © {year} Simpático Records
        </span>

        <div className="flex items-center gap-6 text-xs font-dm font-light tracking-widest uppercase text-[#F5F4F0]/40">
          <a
            href={siteContact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8A96E] transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href={siteContact.spotifyProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8A96E] transition-colors duration-300"
          >
            Spotify
          </a>
          <a
            href={contactEmailHref}
            className="hover:text-[#C8A96E] transition-colors duration-300"
          >
            {siteContact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
