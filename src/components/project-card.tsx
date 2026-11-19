import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { FolderOpenDot, GitCompareArrows } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="eyebrow">{project.category}</span>
        {project.logo ? (
          <div className="project-logo">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={230}
              height={110}
              sizes="(max-width: 700px) 180px, 230px"
            />
          </div>
        ) : (
          <div className="project-wordmark" aria-label={project.name}>
            {project.name}
          </div>
        )}
      </div>
      <div className="project-card-copy">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-card-links">
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Explore project <span aria-hidden="true">
            <FolderOpenDot color="white" size={12} />
          </span>
        </Link>
        {project.repository && (
          <a
            className="text-link text-link-muted"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">
              <GitCompareArrows color="white" size={12} />
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
