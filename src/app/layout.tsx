import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Polityra — Open-Source Projects for Research & Technology",
    template: "%s | Polityra",
  },
  description:
    "Polityra is an independent open-source organization building projects for geopolitical research, strategic analysis, AI-assisted websites, and accessible technology.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Polityra",
        url: siteUrl,
        logo: `${siteUrl}/images/Polityra-logo.png`,
        description:
          "An independent open-source organization building projects for research, technology, and accessible knowledge.",
        sameAs: ["https://github.com/Polityra"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Polityra",
        url: siteUrl,
        description: metadata.description,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
