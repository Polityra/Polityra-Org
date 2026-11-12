"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Failed to render the site:", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Something went wrong | Polityra</title>
      </head>
      <body
        style={{
          margin: 0,
          background: "#0b0c0f",
          color: "#f4f4f5",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <main
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "clamp(4rem, 12vw, 8rem) 1.5rem",
          }}
        >
          <p style={{ color: "#afb0b8", fontSize: "0.85rem" }}>Polityra</p>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.05em" }}>
            Something went wrong.
          </h1>
          <p style={{ color: "#afb0b8", lineHeight: 1.7 }}>
            We couldn&apos;t load the site. Please try again.
          </p>
          <button
            type="button"
            onClick={retry}
            style={{
              marginTop: "1.5rem",
              padding: "0.85rem 1.2rem",
              border: 0,
              borderRadius: "8px",
              background: "#f1f2f4",
              color: "#111318",
              cursor: "pointer",
              font: "600 0.9rem Arial, Helvetica, sans-serif",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
