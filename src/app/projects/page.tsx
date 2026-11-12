import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Explore Polityra's independent open-source projects, including Open Polityra for research and Polityra CMS for website creation.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="page-shell inner-page">
      <header className="page-heading">
        <p className="eyebrow"><span className="status-dot" /> The ecosystem</p>
        <h1>Independent ideas.<br /><span>Shared openness.</span></h1>
        <p className="page-intro">
          Every Polityra project has its own purpose and direction. Explore
          what each initiative is working toward.
        </p>
      </header>
      <section className="project-list-section">
        <div className="section-index">CURRENT INITIATIVES / {String(projects.length).padStart(2, "0")}</div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <p className="projects-note">
        Project descriptions distinguish intended scope from verified
        availability. Follow each project&apos;s listed links for its public
        destination.
      </p>
    </div>
  );
}
