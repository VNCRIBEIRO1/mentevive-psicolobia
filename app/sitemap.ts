import type { MetadataRoute } from "next";
import { tenantConfig } from "@/lib/tenant.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = tenantConfig.urls.siteUrl;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
