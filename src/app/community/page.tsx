import { pageMetadata } from "@/lib/seo";

import { FolderOpenDot } from "lucide-react";

export const metadata = pageMetadata({
  title: "Get involved",
  description:
    "Explore ways to contribute to Polityra projects through development, research, design, documentation, testing, and community support.",
  path: "/community",
});

const contributionPaths = [
  {
    number: "01",
    title: "Software development",
    text: "Help build, improve, and maintain open-source project code.",
  },
  {
    number: "02",
    title: "Research & analysis",
    text: "Contribute careful research, source review, and analytical thinking.",
  },
  {
    number: "03",
    title: "UI/UX & visual design",
    text: "Make project experiences clearer, more usable, and more accessible.",
  },
  {
    number: "04",
    title: "Documentation & writing",
    text: "Help people understand a project's purpose, use, and development.",
  },
  {
    number: "05",
    title: "Testing & quality",
    text: "Find rough edges, report issues, and help projects become more reliable.",
  },
  {
    number: "06",
    title: "Community support",
    text: "Welcome contributors, share knowledge, and help conversations stay constructive.",
  },
];

export default function CommunityPage() {
  return (
    <div className="page-shell inner-page">
      <header className="page-heading">
        <p className="eyebrow"><span className="status-dot" /> Get involved</p>
        <h1>There is more than<br /><span>one way to contribute.</span></h1>
        <p className="page-intro">
          Open projects benefit from many kinds of experience. Find a way to
          take part that fits your skills and interests.
        </p>
      </header>
      <section className="contribution-grid">
        {contributionPaths.map((path) => (
          <article className="contribution-card" key={path.number}>
            <span className="principle-number">{path.number}</span>
            <h2>{path.title}</h2>
            <p>{path.text}</p>
          </article>
        ))}
      </section>
      <section className="community-next">
        <div>
          <p className="eyebrow">A practical first step</p>
          <h2>Start with the project you care about.</h2>
          <p>
            Open Polityra has a public repository where you can explore the
            project and its current contribution guidance. For Polityra CMS,
            a public repository or community destination has not been supplied.
          </p>
        </div>
        <a
          className="button button-primary"
          href="https://github.com/Polityra/Open-Polityra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Open Polityra on GitHub <span aria-hidden="true">
            <FolderOpenDot color="black" size={12} />
          </span>
        </a>
      </section>
    </div>
  );
}
