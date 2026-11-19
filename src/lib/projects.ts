export type Project = {
  slug: string;
  name: string;
  seoTitle?: string;
  category: string;
  description: string;
  fullDescription: string;
  audience: string;
  focusAreas: string[];
  repository?: string;
  logo?: string;
  note: string;
};

export const projects: Project[] = [
  {
    slug: "open-polityra",
    name: "Open Polityra",
    seoTitle: "Open Polityra: Open-Source Geopolitical Research",
    category: "Research & strategic intelligence",
    description:
      "Open Polityra is an open-source geopolitical research and strategic-intelligence project for analyzing complex developments, exploring scenarios, and organizing sources.",
    fullDescription:
      "Open Polityra is an independent open-source geopolitical research and strategic-intelligence project. It aims to support thoughtful analysis of complex developments through research, source management, and scenario work.",
    audience:
      "People working with research, analysis, and complex questions across geopolitical, economic, security, and resilience topics.",
    focusAreas: [
      "Research and intelligence",
      "Geopolitical and economic analysis",
      "Security and resilience",
      "Scenario analysis and forecasting",
      "Reports and source management",
    ],
    repository: "https://github.com/Polityra/Open-Polityra",
    logo: "/images/projects/logo-transparent.png",
    note:
      "These areas describe the project's scope; they are not a claim that every capability is currently implemented.",
  },
  {
    slug: "polityra-cms",
    seoTitle: "Polityra CMS: AI-Assisted Website Creation",
    name: "Polityra CMS",
    category: "AI-assisted website creation",
    description:
      "An open-source project exploring AI-assisted website creation and content management while keeping users in control of their sites and infrastructure.",
    fullDescription:
      "Polityra CMS aims to make website creation and management easier through AI-assisted workflows. The project is intended to give people control over their websites and the infrastructure behind them.",
    audience:
      "People who want to create and manage websites with AI assistance while retaining control of their content and infrastructure.",
    focusAreas: [
      "AI-assisted website creation and content workflows",
      "A Next.js web application",
      "A Node.js and Express API",
      "A MySQL backend and shared UI components",
      "Local AI development and desktop application support",
    ],
    repository: "https://github.com/Polityra/Polityra-CMS",
    logo: "/images/projects/polityra-cms-logo-dark.png",
    note:
      "These items describe the project's intended direction, not a guarantee of current feature availability. The public repository is available; no demo or documentation destination has been supplied.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
