import type { MetadataRoute } from "next";
import { tenantConfig } from "@/lib/tenant.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = tenantConfig.urls.siteUrl;
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacidade`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
