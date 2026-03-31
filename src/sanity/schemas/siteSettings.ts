import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "claim", title: "Claim", type: "string" }),
    defineField({ name: "aboutText", title: "About Text", type: "text", rows: 6 }),
    defineField({ name: "spotifyProfileUrl", title: "Spotify Profile URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "email", title: "Email", type: "string" }),
  ],
});
