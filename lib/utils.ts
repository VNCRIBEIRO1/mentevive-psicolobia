import { tenantConfig } from "@/lib/tenant.config";

export const TENANT_SLUG = tenantConfig.slug;
export const WHATSAPP_LINK = tenantConfig.urls.whatsapp;
export const WHATSAPP_DISPLAY = tenantConfig.urls.whatsapp.replace("https://wa.me/", "+");
export const INSTAGRAM_URL = tenantConfig.social.instagram;
export const TIKTOK_URL = tenantConfig.social.tiktok;
export const PLATFORM_URL = tenantConfig.urls.platformUrl;
export const SITE_URL = tenantConfig.urls.siteUrl;
