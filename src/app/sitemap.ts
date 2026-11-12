import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/projects",
    "/principles",
    "/community",
    "/contact",
  ];

  return [
    ...pages.map((page) => ({
      url: `${siteUrl}${page}`,
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
