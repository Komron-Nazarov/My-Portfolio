import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { getProject } from "@/lib/project-data";
import ProjectCaseClient from "@/app/components/ProjectCaseClient";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const project = await getProject(slug); if (!project) return {};
  return { title: project.title, description: project.description, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: `${project.title} — Komron Nazarov`, description: project.description, images: [{ url: project.image }] } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; const project = await getProject(slug); if (!project) notFound();
  return <ProjectCaseClient project={project} />;
}
