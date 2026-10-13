import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://answerpress.io";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tarifs`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/medias`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/methodologie`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cas-clients`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guides`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...GUIDES.map((guide) => ({
      url: `${base}/guides/${guide.slug}`,
      lastModified: new Date(guide.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
