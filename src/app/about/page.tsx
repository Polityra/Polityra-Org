import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FolderOpenDot, MessagesCircle, TableOfContents, MousePointerClick, MoveDown, GitCompareArrows } from "lucide-react";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Learn about Polityra, an independent open-source organization building useful technology and knowledge for everyone.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="page-shell inner-page">
      <header className="page-heading">
        <p className="eyebrow"><span className="status-dot" /> About Polityra</p>
        <h1>Open technology.<br /><span>Built for everyone.</span></h1>
        <p className="page-intro">
          Polityra is an independent organization creating open-source
          projects that make useful technology, tools, and knowledge more
          accessible.
        </p>
      </header>

      <section className="content-section split-content">
        <div className="section-index">01 / OUR PURPOSE</div>
        <div className="content-copy">
          <h2>Build things people can use, understand, and build on.</h2>
          <p>
            We believe useful technology and knowledge should be approachable
            to more people. Polityra exists to develop open projects, invite
            collaboration, and make shared work available for others to
            explore and extend.
          </p>
        </div>
      </section>

      <section className="content-section mission-vision">
        <article>
          <span className="eyebrow">Our mission</span>
          <h2>Make useful technology more accessible.</h2>
          <p>
            Build and support open-source projects that make useful
            technology, tools, and knowledge more accessible to everyone.
          </p>
        </article>
        <article>
          <span className="eyebrow">Our vision</span>
          <h2>A more open, collaborative ecosystem.</h2>
          <p>
            Help create an ecosystem where people can explore ideas, use
            powerful tools, contribute to development, and build on shared
            work.
          </p>
        </article>
      </section>

      <section className="content-section split-content">
        <div className="section-index">02 / ORGANIZATION & PROJECTS</div>
        <div className="content-copy">
          <h2>One umbrella. Distinct initiatives.</h2>
          <p>
            Polityra is the parent organization. Open Polityra and Polityra
            CMS are separate projects, each with its own purpose and direction.
            They are not features of one shared product.
          </p>
          <Link className="text-link" href="/projects">
            Meet the projects <span aria-hidden="true">
              <FolderOpenDot color="white" size={12} />
            </span>
          </Link>
        </div>
      </section>

      <section className="closing-callout">
        <p className="eyebrow">Curious about how we work?</p>
        <h2>Our principles guide every project.</h2>
        <Link className="button button-secondary" href="/principles">
          Read our principles <span aria-hidden="true">
            <MessagesCircle color="white" size={12} />
          </span>
        </Link>
      </section>
    </div>
  );
}
