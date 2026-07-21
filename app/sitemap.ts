import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ssakib.me";

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/store`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/packages`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resume`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
