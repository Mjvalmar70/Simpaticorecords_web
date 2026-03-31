interface Props {
  embedUrl: string;
  title?: string;
  externalUrl: string;
}

export default function SpotifyEmbed({ embedUrl, title = "Spotify player", externalUrl }: Props) {
  return (
    <div className="space-y-4">
      <iframe
        src={embedUrl}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-none"
        title={title}
      />
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-dm text-xs tracking-widest uppercase text-[#C8A96E] border border-[#C8A96E]/40 px-4 py-2 hover:bg-[#C8A96E]/10 transition-colors duration-300"
      >
        Open on Spotify ↗
      </a>
    </div>
  );
}
