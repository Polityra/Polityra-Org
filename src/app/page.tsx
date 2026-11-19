import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

import { FolderOpenDot, MessagesCircle, TableOfContents, MousePointerClick, MoveDown, GitCompareArrows } from "lucide-react";

export const metadata = pageMetadata({
  title: "Polityra — Open-Source Projects for Research & Technology",
  description:
    "Polityra is an independent open-source organization building projects for geopolitical research, strategic analysis, AI-assisted websites, and accessible technology.",
  path: "/",
  home: true,
});

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy page-shell">
          <h1>Building technology.<br /><span>Opening possibilities.</span></h1>
          <p className="hero-description">
            Polityra is an open-source organization creating tools for
            research, website building, and more. We believe useful technology
            should be accessible to everyone.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              Explore projects <span aria-hidden="true">
                <FolderOpenDot size={16} />
              </span>
            </Link>
            <Link className="button button-secondary" href="/community">
              Get involved
            </Link>
          </div>
          <a className="hero-discover" href="#introduction">
            Discover Polityra <span aria-hidden="true">
              <MoveDown size={12} />
            </span>
          </a>
        </div>
      </section>

      <section className="intro-section section-shell" id="introduction">
        <div className="section-index">About Polityra</div>
        <div className="intro-grid">
          <h2>Different projects.<br /><span>A shared purpose.</span></h2>
          <div>
            <p className="section-lead">
              Polityra brings independent open-source projects together under
              one organization.
            </p>
            <p className="body-copy">
              Each project addresses a different need and follows its own
              direction. What connects them is a belief that people should be
              able to understand the tools they use, take part in their
              development, and build on shared work.
            </p>
            <Link className="text-link" href="/about">
              More about Polityra <span aria-hidden="true">
                <TableOfContents color="white" size={12} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="projects-section section-shell">
        <div className="section-heading">
          <div>
            <div className="section-index">Our projects</div>
            <h2>What we&apos;re working on.</h2>
          </div>
          <Link className="text-link" href="/projects">
            View all projects <span aria-hidden="true">
              <FolderOpenDot color="white" size={12} />
            </span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="home-section-note">
          These are separate initiatives with different goals. Their project
          pages describe their intended direction and link to public resources
          where available.
        </p>
      </section>

      <section className="home-editorial-section">
        <div className="section-shell home-editorial-grid">
          <div className="home-editorial-heading">
            <div className="section-index">Why open source</div>
            <h2>Work that others can learn from.</h2>
          </div>
          <div className="home-editorial-copy">
            <p>
              Open source makes it possible to look beyond the finished
              product. People can read the code, understand how a project
              works, suggest changes, and use that knowledge in their own work.
            </p>
            <p>
              Openness also calls for clear communication. We aim to describe
              what projects can do today without confusing it with what they
              may do in the future. Security, privacy, and responsible
              development matter throughout that work.
            </p>
            <Link className="text-link" href="/principles">
              Read our principles <span aria-hidden="true">
                <MousePointerClick color="white" size={12} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-work-section section-shell">
        <div className="home-work-intro">
          <div className="section-index">A closer look</div>
          <h2>Different questions need different tools.</h2>
          <p>
            Our projects explore different areas of technology. Each has its
            own audience, while sharing Polityra&apos;s open-source approach.
          </p>
        </div>
        <div className="home-work-list">
          <article>
            <h3>Research and analysis</h3>
            <div>
              <p>
                Open Polityra is intended to support research into complex
                developments, from geopolitical and economic analysis to
                security and resilience. Its scope includes scenarios,
                forecasting, reports, and source management.
              </p>
              <p>
                These are areas the project aims to address, not a claim that
                every capability is available today.
              </p>
              <Link className="text-link" href="/projects/open-polityra">
                About Open Polityra <span aria-hidden="true">
                  <FolderOpenDot color="white" size={12} />
                </span>
              </Link>
            </div>
          </article>
          <article>
            <h3>Website creation</h3>
            <div>
              <p>
                Polityra CMS is a separate project focused on making websites
                easier to create and manage with AI-assisted workflows. Its
                direction emphasizes giving people control over their sites and
                infrastructure.
              </p>
              <p>
                The project is described here by its intended direction;
                public releases and feature availability have not been
                confirmed.
              </p>
              <Link className="text-link" href="/projects/polityra-cms">
                About Polityra CMS <span aria-hidden="true">
                  <FolderOpenDot color="white" size={12} />
                </span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home-editorial-section">
        <div className="section-shell home-editorial-grid">
          <div className="home-editorial-heading">
            <div className="section-index">Taking part</div>
            <h2>Contributions come in many forms.</h2>
          </div>
          <div className="home-editorial-copy">
            <p>
              Writing code is one way to help, but it isn&apos;t the only one.
              Research, design, documentation, testing, and community support
              all help make projects more useful and easier to understand.
            </p>
            <p>
              If you&apos;re interested in contributing, start by exploring
              the public Open Polityra repository and its current guidance.
              Polityra CMS also has a public repository; visit its project
              page for the verified link.
            </p>
            <Link className="text-link" href="/community">
              Ways to contribute <span aria-hidden="true">
                <FolderOpenDot color="white" size={12} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contribute-section section-shell">
        <div className="contribute-panel">
          <div className="contribute-content">
            <div>
              <h2>See what we&apos;re building.</h2>
              <p>
                Explore the projects, learn about their aims, or visit Polityra
                on GitHub to see its public repositories.
              </p>
            </div>
            <a className="button button-primary" href="https://github.com/Polityra" target="_blank" rel="noopener noreferrer">
              Visit GitHub <span aria-hidden="true">
                <GitCompareArrows color="black" size={12} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
