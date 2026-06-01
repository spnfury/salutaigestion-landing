import type { MetadataRoute } from "next";
import { articles, SITE } from "./blog/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE}/blog/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE,
      lastModified: "2026-05-31",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/blog`,
      lastModified: "2026-05-31",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
