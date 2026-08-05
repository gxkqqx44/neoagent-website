import type { MetadataRoute } from "next";

const siteUrl = "https://neoagent.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy-policy", "/terms", "/data-deletion", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "yearly",
    priority: route === "" ? 1 : 0.5,
  }));
}
