import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Find the verified public ways to connect with Polityra and its open-source projects.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-shell inner-page contact-page">
      <header className="page-heading">
        <p className="eyebrow"><span className="status-dot" /> Contact</p>
        <h1>Connect through<br /><span>open work.</span></h1>
        <p className="page-intro">
          Polityra has not published a general contact address or contact
          form. The public GitHub organization is the verified starting point
          for exploring its projects.
        </p>
      </header>
      <section className="contact-card">
        <span className="section-index">PUBLIC DESTINATION / GITHUB</span>
        <div>
          <h2>Explore Polityra on GitHub.</h2>
          <p>
            Browse the organization and its public repositories. For
            project-specific questions, use the relevant repository when one
            is available.
          </p>
        </div>
        <a
          className="button button-primary"
          href="https://github.com/Polityra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub organization <span aria-hidden="true">↗</span>
        </a>
      </section>
      <Link className="text-link" href="/projects">
        Explore Polityra projects <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
