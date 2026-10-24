import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = [
    { path: "/", priority: 1 },
    { path: "/tratamientos", priority: 0.9 },
    { path: "/sobre-nosotros", priority: 0.6 },
    { path: "/contacto", priority: 0.7 },
  ];
  return [
    ...base.map((p) => ({
      url: `${SITE.url}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...TREATMENTS.map((t) => ({
      url: `${SITE.url}/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: t.featured ? 0.8 : 0.7,
      images: t.image ? [t.image] : undefined,
    })),
  ];
}
