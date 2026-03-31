import { defineField, defineType } from "sanity";

export default defineType({
  name: "collection",
  title: "Collection",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "year", title: "Year", type: "number", validation: (Rule) => Rule.required().min(2000).max(2100) }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "spotifyUrl", title: "Spotify URL", type: "url" }),
    defineField({ name: "embedCode", title: "Spotify Embed URL", type: "text", rows: 2 }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Year, Newest First", name: "yearDesc", by: [{ field: "year", direction: "desc" }] }],
});
