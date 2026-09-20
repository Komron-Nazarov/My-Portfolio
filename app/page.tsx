import PortfolioExperience from "./components/PortfolioExperience";
import { getProjects } from "@/lib/project-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getProjects(true);
  return <PortfolioExperience projectItems={projects} />;
}
