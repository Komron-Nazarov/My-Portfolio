import type { Metadata } from "next";
import { getProjects } from "@/lib/project-data";
import ProjectIndexClient from "../components/ProjectIndexClient";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Work", description: "Selected products and systems by Komron Nazarov.", alternates: { canonical: "/projects" } };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectIndexClient projects={projects} />;
}
