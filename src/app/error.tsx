"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Failed to render page:", error);
  }, [error]);

  return (
    <div className="page-shell inner-page not-found-page">
      <p className="eyebrow">Page error</p>
      <h1>Something went wrong.</h1>
      <p className="page-intro">
        We couldn&apos;t load this page. You can try again or return to the
        homepage.
      </p>
      <div className="hero-actions">
        <button className="button button-primary" type="button" onClick={retry}>
          Try again
        </button>
        <Link className="button button-secondary" href="/">
          Go to home
        </Link>
      </div>
    </div>
  );
}
