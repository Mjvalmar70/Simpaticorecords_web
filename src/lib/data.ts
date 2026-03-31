export const SPOTIFY_PLACEHOLDER = "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M";

export const SPOTIFY_EMBED_PLACEHOLDER =
  "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0";

export const MANIFESTO =
  "We don't release records. We build archives. Each collection is a year — captured in texture, frequency, and the spaces between sounds. Simpático Records is not a label in the traditional sense. It is an ongoing document of what it sounds like to pay attention.";

export interface Collection {
  title: string;
  slug: string;
  year: number;
  shortDescription: string;
  featured: boolean;
  spotifyUrl: string;
  gradient: string;
  image?: string;
}

export interface Mood {
  title: string;
  slug: string;
  shortDescription: string;
  spotifyUrl: string;
  gradient: string;
  image?: string;
}

export const gradientBySlug: Record<string, string> = {
  "archive-2025": "linear-gradient(135deg, #1a1008 0%, #0a0a0a 100%)",
  "archive-2024": "linear-gradient(135deg, #0a1018 0%, #0a0a0a 100%)",
  "archive-2023": "linear-gradient(135deg, #120a18 0%, #0a0a0a 100%)",
  "archive-2022": "linear-gradient(135deg, #1a1008 0%, #2d1f0a 40%, #0a0a0a 100%)",
  "archive-2021": "linear-gradient(135deg, #0a1018 0%, #0d1e2a 40%, #0a0a0a 100%)",
  "archive-2020": "linear-gradient(135deg, #120a18 0%, #1e0d2a 40%, #0a0a0a 100%)",
  "archive-2019": "linear-gradient(135deg, #0a1208 0%, #0a0a0a 100%)",
  "archive-2018": "linear-gradient(135deg, #181008 0%, #0a0a0a 100%)",
  "archive-2017": "linear-gradient(135deg, #100818 0%, #0a0a0a 100%)",
  "archive-2016": "linear-gradient(135deg, #081018 0%, #0a0a0a 100%)",
  "archive-2015": "linear-gradient(135deg, #181808 0%, #0a0a0a 100%)",
  "archive-2014": "linear-gradient(135deg, #0a1010 0%, #0a0a0a 100%)",
  "archive-2013": "linear-gradient(135deg, #100a10 0%, #0a0a0a 100%)",
  "archive-2012": "linear-gradient(135deg, #0a0a18 0%, #0a0a0a 100%)",
  "archive-2011": "linear-gradient(135deg, #180a0a 0%, #0a0a0a 100%)",
  "archive-2008": "linear-gradient(135deg, #100a08 0%, #0a0a0a 100%)",
  "archive-2007": "linear-gradient(135deg, #0a0818 0%, #0a0a0a 100%)",
  "archive-2005": "linear-gradient(135deg, #081818 0%, #0a0a0a 100%)",
};

export const collections: Collection[] = [
  { title: "Archive 2025", slug: "archive-2025", year: 2025, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #1a1008 0%, #0a0a0a 100%)", image: "/images/collections/2025.png" },
  { title: "Archive 2024", slug: "archive-2024", year: 2024, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #0a1018 0%, #0a0a0a 100%)", image: "/images/collections/2024.png" },
  { title: "Archive 2023", slug: "archive-2023", year: 2023, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #120a18 0%, #0a0a0a 100%)", image: "/images/collections/2023.png" },
  { title: "Archive 2022", slug: "archive-2022", year: 2022, shortDescription: "The noise of everything starting again at once.", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #1a1008 0%, #2d1f0a 40%, #0a0a0a 100%)", image: "/images/collections/2022.png" },
  { title: "Archive 2021", slug: "archive-2021", year: 2021, shortDescription: "Recovery in minor key. Eleven tracks of gradual return.", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #0a1018 0%, #0d1e2a 40%, #0a0a0a 100%)", image: "/images/collections/2021.png" },
  { title: "Archive 2020", slug: "archive-2020", year: 2020, shortDescription: "A year of stillness. Found sounds from empty cities.", featured: true, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #120a18 0%, #1e0d2a 40%, #0a0a0a 100%)", image: "/images/collections/2020.png" },
  { title: "Archive 2019", slug: "archive-2019", year: 2019, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #0a1208 0%, #0a0a0a 100%)", image: "/images/collections/2019.png" },
  { title: "Archive 2018", slug: "archive-2018", year: 2018, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #181008 0%, #0a0a0a 100%)", image: "/images/collections/2018.png" },
  { title: "Archive 2017", slug: "archive-2017", year: 2017, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #100818 0%, #0a0a0a 100%)", image: "/images/collections/2017.png" },
  { title: "Archive 2016", slug: "archive-2016", year: 2016, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #081018 0%, #0a0a0a 100%)", image: "/images/collections/2016.png" },
  { title: "Archive 2015", slug: "archive-2015", year: 2015, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #181808 0%, #0a0a0a 100%)", image: "/images/collections/2015.png" },
  { title: "Archive 2014", slug: "archive-2014", year: 2014, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #0a1010 0%, #0a0a0a 100%)", image: "/images/collections/2014.png" },
  { title: "Archive 2013", slug: "archive-2013", year: 2013, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #100a10 0%, #0a0a0a 100%)", image: "/images/collections/2013.png" },
  { title: "Archive 2012", slug: "archive-2012", year: 2012, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #0a0a18 0%, #0a0a0a 100%)", image: "/images/collections/2012.png" },
  { title: "Archive 2011", slug: "archive-2011", year: 2011, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #180a0a 0%, #0a0a0a 100%)", image: "/images/collections/2011.png" },
  { title: "Archive 2010", slug: "archive-2010", year: 2010, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #0a1808 0%, #0a0a0a 100%)", image: "/images/collections/2010.png" },
  { title: "Archive 2009", slug: "archive-2009", year: 2009, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #08100a 0%, #0a0a0a 100%)", image: "/images/collections/2009.png" },
  { title: "Archive 2008", slug: "archive-2008", year: 2008, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #100a08 0%, #0a0a0a 100%)", image: "/images/collections/2008.png" },
  { title: "Archive 2007", slug: "archive-2007", year: 2007, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #0a0818 0%, #0a0a0a 100%)", image: "/images/collections/2007.png" },
  { title: "Archive 2005", slug: "archive-2005", year: 2005, shortDescription: "", featured: false, spotifyUrl: SPOTIFY_PLACEHOLDER, gradient: "linear-gradient(135deg, #081818 0%, #0a0a0a 100%)", image: "/images/collections/2005.png" },
];

export const moods: Mood[] = [
  {
    title: "Late Night Drive",
    slug: "late-night-drive",
    shortDescription: "Asphalt, amber lights, no destination.",
    spotifyUrl: SPOTIFY_PLACEHOLDER,
    gradient: "linear-gradient(160deg, #0d1a3a 0%, #1a2456 40%, #080c18 100%)",
  },
  {
    title: "Sunday Slow",
    slug: "sunday-slow",
    shortDescription: "Coffee cooling. Time moving differently.",
    spotifyUrl: SPOTIFY_PLACEHOLDER,
    gradient: "linear-gradient(160deg, #2a1a08 0%, #3d2410 40%, #1a0e04 100%)",
  },
  {
    title: "Coastal Static",
    slug: "coastal-static",
    shortDescription: "Salt air and signal loss.",
    spotifyUrl: SPOTIFY_PLACEHOLDER,
    gradient: "linear-gradient(160deg, #0a2025 0%, #0d3040 40%, #081418 100%)",
  },
];
