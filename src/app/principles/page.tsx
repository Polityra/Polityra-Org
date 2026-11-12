import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Principles",
  description:
    "Learn about the principles behind Polityra's open-source work, from accessibility and collaboration to security and responsible innovation.",
  path: "/principles",
});

const principles = [
  {
    number: "01",
    title: "Open source",
    text: "We build projects transparently and welcome community participation. Shared work should be inspectable and useful beyond its original creators.",
  },
  {
    number: "02",
    title: "Accessibility",
    text: "Technology and knowledge should be approachable and useful to a broad audience, not only people who already know how to navigate them.",
  },
  {
    number: "03",
    title: "Transparency",
    text: "Describe what a project does clearly. Be honest about what is available today, what is planned, and what remains uncertain.",
  },
  {
    number: "04",
    title: "Collaboration",
    text: "Good work can come from developers, researchers, designers, testers, writers, and people who support communities.",
  },
  {
    number: "05",
    title: "Independence",
    text: "Each project can have its own goals, identity, and technical direction while remaining part of a shared open-source ecosystem.",
  },
  {
    number: "06",
    title: "Security & responsibility",
    text: "Consider privacy, security, and the wider effects of technology throughout the way projects are designed and developed.",
  },
  {
    number: "07",
    title: "Practical innovation",
    text: "Experiment with new ideas in service of meaningful problems and useful outcomes, not novelty for its own sake.",
  },
];

export default function PrinciplesPage() {
  return (
    <div className="page-shell inner-page">
      <header className="page-heading">
        <p className="eyebrow"><span className="status-dot" /> How we work</p>
        <h1>Principles for<br /><span>building in the open.</span></h1>
        <p className="page-intro">
          These commitments shape how Polityra approaches its projects,
          communicates progress, and works with contributors.
        </p>
      </header>
      <section className="principles-list">
        {principles.map((principle) => (
          <article className="principle-row" key={principle.number}>
            <span className="principle-number">{principle.number}</span>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>
      <section className="closing-callout">
        <p className="eyebrow">Take part</p>
        <h2>Help shape what comes next.</h2>
        <Link className="button button-secondary" href="/community">
          Ways to contribute <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}
