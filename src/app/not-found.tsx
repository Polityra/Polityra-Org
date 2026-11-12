import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell inner-page not-found-page">
      <p className="eyebrow"><span className="status-dot" /> 404 / Not found</p>
      <h1>This page isn&apos;t<br /><span>part of the map.</span></h1>
      <p className="page-intro">
        The address may have changed, or the page may not exist. You can
        continue exploring Polityra from here.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/">
          Go to home <span aria-hidden="true">↗</span>
        </Link>
        <Link className="button button-secondary" href="/projects">
          Explore projects
        </Link>
      </div>
    </div>
  );
}
