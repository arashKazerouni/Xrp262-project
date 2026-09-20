import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://xrp262.com", changeFrequency: "weekly", priority: 1 }];
}
