import type { Metadata } from "next";

export const siteUrl = "https://polityra.org";

const socialImage = {
  url: "/images/Polityra-banner.png",
  width: 2172,
  height: 724,
  alt: "Polityra — open source for a better tomorrow",
};

export function pageMetadata({
  title,
  description,
  path,
  home = false,
}: {
  title: string;
  description: string;
  path: string;
  home?: boolean;
}): Metadata {
  const socialTitle = home ? title : `${title} | Polityra`;

  return {
    title: home ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Polityra",
      url: path,
      title: socialTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}
