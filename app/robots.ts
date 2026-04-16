import type { MetadataRoute } from "next";
import { tenantConfig } from "@/lib/tenant.config";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = tenantConfig.urls.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
