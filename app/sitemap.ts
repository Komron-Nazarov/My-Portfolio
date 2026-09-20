import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/project-data";

const siteUrl = "https://kn-portfolio-one.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const now = new Date("2026-09-20T00:00:00.000Z");
  const pages: MetadataRoute.Sitemap = [
    ["", "weekly", 1], ["/projects", "weekly", .9], ["/privacy", "yearly", .3], ["/terms", "yearly", .3],
  ].map(([path, changeFrequency, priority]) => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: changeFrequency as "weekly" | "monthly" | "yearly", priority: priority as number }));
  return [...pages, ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .7 }))];
}
