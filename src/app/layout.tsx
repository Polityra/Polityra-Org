import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Polityra — Open technology. Built for everyone.",
    template: "%s | Polityra",
  },
  description:
    "Polityra creates open-source projects that make technology, research, and innovation more accessible to everyone.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Polityra",
    url: siteUrl,
    logo: `${siteUrl}/images/Polityra-logo.png`,
    sameAs: ["https://github.com/Polityra"],
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
            __html: JSON.stringify(organizationData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
