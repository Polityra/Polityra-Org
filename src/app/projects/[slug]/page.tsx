import type { Metadata } from "next";
import Image from "next/image";
import { FolderOpenDot, MousePointer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found", robots: { index: false, follow: false } };
  }

  return pageMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-shell inner-page project-detail-page">
      <Link className="back-link" href="/projects">
        <span aria-hidden="true">
          <ArrowLeft color="white" size={12} />
        </span> All projects
      </Link>
      <header className="project-detail-heading">
        <p className="eyebrow"><span className="status-dot" /> {project.category}</p>
        {project.logo ? (
          <Image
            className="detail-project-logo"
            src={project.logo}
            alt={`${project.name} logo`}
            width={320}
            height={150}
            priority
          />
        ) : (
          <p className="detail-wordmark">{project.name}</p>
        )}
        <h1>{project.name}</h1>
        <p className="page-intro">{project.fullDescription}</p>
        {project.repository && (
          <a
            className="button button-primary"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            View repository <span aria-hidden="true">
              <FolderOpenDot color="black" size={12} />
            </span>
          </a>
        )}
      </header>

      <div className="project-detail-grid">
        <section className="detail-block">
          <div className="section-index">01 / FOCUS</div>
          <h2>What it explores</h2>
          <p>{project.note}</p>
          <ul className="focus-list">
            {project.focusAreas.map((area) => (
              <li key={area}>
                <span aria-hidden="true">
                  <FolderOpenDot color="black" size={12} />
                </span> {area}
              </li>
            ))}
          </ul>
        </section>
        <aside className="detail-aside">
          <div className="section-index">02 / FOR</div>
          <h2>Who it is for</h2>
          <p>{project.audience}</p>
          {!project.repository && (
            <div className="destination-note">
              <span className="eyebrow">Public destination</span>
              <p>
                A public repository, demo, or documentation link has not been
                supplied for this project.
              </p>
            </div>
          )}
        </aside>
      </div>
      <div className="detail-bottom-cta">
        <p>Explore the wider Polityra ecosystem.</p>
        <Link className="text-link" href="/projects">
          Browse all projects <span aria-hidden="true">
            <FolderOpenDot color="white" size={12} />
          </span>
        </Link>
      </div>
    </div>
  );
}
