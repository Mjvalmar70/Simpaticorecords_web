const defaultContactEmail = "hello@simpaticorecords.com";
const defaultInstagramUrl = "https://instagram.com/simpaticorecords";
const defaultSpotifyProfileUrl = "https://open.spotify.com/user/simpaticorecords";

export const siteContact = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? defaultContactEmail,
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? defaultInstagramUrl,
  spotifyProfileUrl:
    process.env.NEXT_PUBLIC_SPOTIFY_PROFILE_URL ?? defaultSpotifyProfileUrl,
};

export const contactEmailHref = `mailto:${siteContact.email}`;
