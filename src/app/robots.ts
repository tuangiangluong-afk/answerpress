import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "PerplexityBot",
    "Applebot-Extended",
    "Google-Extended",
    "cohere-ai",
    "CCBot",
    "Diffbot",
    "FacebookBot",
    "Bytespider",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      ...aiBots.map((bot) => ({
        userAgent: bot,
        allow: ["/", "/llms.txt", "/llms-full.txt", "/guides/", "/methodologie", "/medias", "/cas-clients", "/tarifs"],
        disallow: ["/api/"],
      })),
    ],
    sitemap: "https://answerpress.io/sitemap.xml",
    host: "https://answerpress.io",
  };
}
