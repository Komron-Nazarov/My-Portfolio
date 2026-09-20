import "server-only";
import { createClient } from "@supabase/supabase-js";
import { projects as fallbackProjects } from "@/app/data/projects";
import type { Project } from "@/app/types/project";

type DatabaseProject = Partial<Project> & {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
};

function mergeProject(row: DatabaseProject): Project {
  const fallback = fallbackProjects.find((item) => item.slug === row.slug);
  return {
    slug: row.slug,
    title: row.title,
    kind: row.kind || fallback?.kind || "Product system",
    description: row.description,
    ruDescription: row.ruDescription || fallback?.ruDescription,
    tjDescription: row.tjDescription || fallback?.tjDescription,
    longDescription: row.longDescription || fallback?.longDescription || row.description,
    challenge: row.challenge || fallback?.challenge || "Translate a real product requirement into a clear, maintainable system.",
    solution: row.solution || fallback?.solution || "A focused architecture connecting interface, application logic and data around the primary user flow.",
    contribution: row.contribution || fallback?.contribution,
    role: row.role || fallback?.role,
    year: row.year || fallback?.year,
    image: row.image,
    stack: Array.isArray(row.stack) ? row.stack : [],
    github: row.github || fallback?.github,
    demo: row.demo || fallback?.demo,
    preview: row.preview || fallback?.preview,
    featured: row.featured ?? fallback?.featured ?? false,
  };
}

function client() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

export async function getProjects(featuredOnly = false): Promise<Project[]> {
  const supabase = client();
  if (!supabase) return featuredOnly ? fallbackProjects.filter((item) => item.featured) : fallbackProjects;
  try {
    let query = supabase.from("projects").select("*");
    if (featuredOnly) query = query.eq("featured", true);
    const { data, error } = await query
      .order("created_at", { ascending: false })
      .abortSignal(AbortSignal.timeout(2500));
    if (error || !data?.length) throw error || new Error("No projects");
    return (data as DatabaseProject[]).map(mergeProject);
  } catch {
    return featuredOnly ? fallbackProjects.filter((item) => item.featured) : fallbackProjects;
  }
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const projects = await getProjects(false);
  return projects.find((item) => item.slug === slug) || fallbackProjects.find((item) => item.slug === slug);
}
