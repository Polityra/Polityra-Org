# Polityra Organization Website --- Project Brief

> **Purpose of this file:** This document is the source of truth for AI
> coding agents and contributors working on the official Polityra
> organization website. Read it before planning, designing, or changing
> the website. Follow it unless a newer, explicit project decision
> supersedes it.

## 1. Project identity

-   **Organization:** Polityra
-   **Official website:** https://polityra.org
-   **GitHub organization:** https://github.com/Polityra
-   **Website type:** Official organization website and open-source
    project showcase
-   **Primary brand name:** Polityra
-   **Recommended tagline:** Open technology. Built for everyone.

Polityra is an organization that creates and develops open-source
projects for everyone. The website represents the organization as a
whole, not one individual product.

The website must clearly communicate that Polityra is the parent
organization and that its projects are distinct initiatives within a
growing open-source ecosystem.

## 2. Mission and positioning

### Mission

Build and support open-source projects that make useful technology,
tools, and knowledge more accessible to everyone.

### Vision

Help create an open, collaborative technology ecosystem in which people
can explore ideas, use powerful tools, contribute to development, and
build on shared work.

### Positioning

Polityra should be presented as an independent, open-source-first
technology organization. It is not a commercial web-development agency,
a single-product SaaS company, or merely a research platform.

The website should communicate these principles:

-   **Open source:** Projects should be transparent and open to
    community participation.
-   **Accessibility:** Technology and knowledge should be approachable
    and useful to a broad audience.
-   **Transparency:** Explain what the organization and its projects do
    without unsupported claims.
-   **Collaboration:** Welcome developers, researchers, designers,
    testers, writers, and other contributors.
-   **Security and responsibility:** Treat security, privacy, and
    responsible development as important principles.
-   **Independence:** Give projects room to have their own goals,
    identities, and technical direction.
-   **Innovation:** Encourage experimentation and practical solutions to
    meaningful problems.

Do not claim legal status, nonprofit status, funding, membership
numbers, partnerships, or organizational credentials unless verified and
explicitly supplied by the project maintainers.

## 3. What the website is supposed to do

The official website at `polityra.org` is the central public entry point
for the organization.

Its jobs are to:

1.  **Introduce Polityra.** Explain who or what Polityra is, why it
    exists, and what it aims to accomplish.
2.  **Showcase projects.** Present current projects with their own
    names, logos, descriptions, capabilities, and verified links.
3.  **Connect visitors to project destinations.** Direct users to GitHub
    repositories, documentation, demos, releases, and project websites
    when those destinations exist.
4.  **Explain the open-source approach.** Make the organization's
    principles and approach to collaboration understandable.
5.  **Help people participate.** Explain practical ways to contribute,
    such as software development, research, design, documentation,
    testing, and community support.
6.  **Build trust.** Provide accurate information, transparent project
    descriptions, clear ownership, and working links.
7.  **Support future growth.** Make it easy to add projects and
    organizational information without redesigning the entire site.

The website is primarily an informational, discovery, and community
gateway. It is not itself the Open Polityra application or the Polityra
CMS product.

## 4. Brand and project hierarchy

Use this hierarchy consistently:

-   **Polityra** --- parent organization and umbrella brand.
    -   **Open Polityra** --- open-source research and
        strategic-intelligence project.
    -   **Polityra CMS** --- open-source AI-powered website builder and
        content management system.
    -   **Future projects** --- additional independent projects may be
        added later.

Use the name **Polityra** for the organization website. Do not rename
the organization website to "Polityra Hub," "Polityra OS," or "Polityra
Platform."

Each project retains its own identity, logo, description, repository,
and development status. Do not make the projects look like features or
sub-products of one application.

## 5. Current projects to showcase

### 5.1 Open Polityra

-   **Name:** Open Polityra
-   **Repository:** https://github.com/Polityra/Open-Polityra
-   **Category:** Research, analysis, and strategic intelligence
-   **Description:** An independent open-source research and
    strategic-intelligence platform intended to support research,
    analysis, forecasting, and understanding complex developments.

Areas represented in the project include:

-   Research and intelligence
-   Geopolitical analysis
-   Economic analysis
-   Security and resilience
-   Scenario analysis
-   Forecasting
-   Reports and source management

Use the supplied Open Polityra project logo. Link to the repository
above. Add documentation, demo, or release links only when their actual
destinations are verified.

Do not imply that every listed capability is fully implemented or
production-ready. Describe the project vision separately from verified
current functionality where necessary.

### 5.2 Polityra CMS

-   **Name:** Polityra CMS
-   **Category:** AI-powered website creation and content management
-   **Description:** An open-source project aiming to make website
    creation and management easier through AI-assisted workflows, while
    giving users control over their websites and infrastructure.

The project vision is comparable in broad category to AI website
builders such as Lovable, but Polityra CMS is its own project and must
not be described as an official integration, clone, or affiliate of
another product.

Known technical direction includes:

-   Next.js web application
-   Node.js / Express API
-   Shared UI components
-   MySQL backend
-   Local AI development support
-   Electron desktop application support

Use the supplied Polityra CMS project logo. Do not invent a public
repository URL, demo, documentation destination, release version,
download, or feature availability. Add links only after maintainers
verify them.

### 5.3 Future projects

The projects section must be data-driven or otherwise structured for
easy extension. Adding a project should not require rebuilding the whole
page layout.

A project entry should be able to represent:

-   Name
-   Slug
-   Short description
-   Full description
-   Logo
-   Category
-   Status (only when verified)
-   Repository URL
-   Website URL
-   Documentation URL
-   Demo URL
-   Release URL
-   Featured flag

Hide unavailable links rather than rendering dead buttons or
placeholders.

## 6. Recommended website information architecture

Build a multi-page website or a well-structured site with equivalent
navigation.

### Home (`/`)

The homepage should quickly answer:

-   What is Polityra?
-   What does it build?
-   What projects can visitors explore?
-   How can someone participate?

Recommended sections:

1.  Hero with Polityra identity, concise headline, explanation, and
    calls to action.
2.  Short organization introduction.
3.  Featured projects.
4.  Mission and vision.
5.  Principles and open-source philosophy.
6.  Contribution and community invitation.
7.  Final call to explore projects or contribute.

Suggested headline:

**Building technology without boundaries.**

Suggested supporting copy:

"Polityra creates open-source projects that make technology, research,
and innovation more accessible to everyone."

Primary CTA: **Explore projects**

Secondary CTA: **Get involved**

Avoid unsupported claims such as "industry-leading," "trusted by
thousands," or "revolutionary."

### Projects (`/projects`)

A central overview of all public Polityra projects.

Each project card should show its actual logo, name, concise
description, category, and available verified links. Make the layout
easy to extend as more projects are added.

### Project details (`/projects/[slug]`)

Provide a reusable project detail layout with:

-   Project identity and logo
-   Purpose and problem being addressed
-   Description and intended audience
-   Main areas or capabilities
-   Current development information, if verified
-   Repository and other verified destinations
-   Ways to contribute

Clearly distinguish current functionality from planned capabilities and
long-term vision.

### About (`/about`)

Explain Polityra, its origin and purpose when verified, mission, vision,
organization-wide approach, and the relationship between the
organization and its projects.

Do not invent founder biographies, team members, office locations,
history, or legal details.

### Principles (`/principles`)

Explain the organization's principles: openness, accessibility,
transparency, collaboration, independence, security, and responsible
innovation.

### Get involved (`/community` or `/contribute`)

Explain contribution paths:

-   Software development
-   Research and analysis
-   UI/UX and visual design
-   Documentation and writing
-   Testing and quality assurance
-   Community support

Link to real contribution guides, repositories, or community
destinations only when verified. If no public community invitation
exists, explain how to begin through the relevant GitHub repository.

### Contact (`/contact`)

Only publish contact details or forms when a real, maintained contact
destination and handling process are provided. Never fabricate email
addresses.

### Legal pages

Add privacy, terms, or other legal pages only when their content has
been reviewed and approved. Do not generate fictional legal policies and
present them as approved organizational policy.

## 7. Visual identity and design direction

The website should feel like a credible, modern, independent technology
organization.

### Overall direction

-   Dark-first, with a carefully designed light theme if appropriate.
-   Minimal, futuristic, and professional.
-   Strong typography and clear hierarchy.
-   Generous spacing and deliberate composition.
-   Subtle blue and cyan accents.
-   Restrained gradients and lighting.
-   Clean cards and consistent borders.
-   Subtle, purposeful motion.
-   Excellent responsive behavior.

Avoid generic SaaS templates, excessive glassmorphism, excessive glow,
noisy backgrounds, random stock imagery, unnecessary animation, and
clutter.

### Suggested starting palette

Treat these as starting design tokens, not rigid requirements:

-   Main background: `#050608`
-   Secondary background: `#0A0D12`
-   Surface: `#10151D`
-   Primary text: `#F5F7FA`
-   Secondary text: `#A0A9B7`
-   Blue accent: `#1769FF`
-   Cyan accent: `#45D9F5`
-   Borders: subtle, low-opacity neutral colors

Use the supplied project logos as image assets. Preserve their aspect
ratios and ensure transparent logos display correctly on the chosen
backgrounds.

### Parent organization logo

Create a distinct Polityra parent-brand identity that complements, but
does not copy, the Open Polityra and Polityra CMS logos.

The parent identity should represent an ecosystem of independent
projects, shared infrastructure, collaboration, and open development. A
modular or connected geometric symbol is a suitable direction.

The mark must work as:

-   A horizontal logo and wordmark
-   A standalone icon
-   A small favicon
-   A light-background variant
-   A dark-background variant

Prefer clean vector SVG assets. Avoid relying on raster effects, noisy
textures, or tiny details that disappear at small sizes. Keep the
wordmark separate from the symbol where practical.

## 8. Content and writing standards

Write clear, confident, informative copy.

-   Explain real purposes and intended audiences.
-   Prefer specific descriptions over generic marketing language.
-   Keep headings concise and meaningful.
-   Avoid exaggerated promises and empty buzzwords.
-   Do not invent project features, metrics, dates, team details,
    partnerships, or status.
-   Distinguish implemented functionality from planned work.
-   Use consistent capitalization: **Polityra**, **Open Polityra**, and
    **Polityra CMS**.
-   Use "open-source" as an adjective and "open source" as a noun
    phrase.

The site should be understandable to visitors who are not developers
while still providing enough detail for technical contributors.

## 9. User experience and functionality

The website must be a real, usable website, not a static visual mockup.

Requirements:

-   Responsive navigation and working mobile menu.
-   Working internal navigation and external links.
-   Reusable page and project components.
-   Clear hover, focus, active, and disabled states.
-   Accessible semantic HTML.
-   Keyboard-accessible controls.
-   Readable contrast.
-   Reduced-motion support.
-   Useful empty states where content is not yet available.
-   No dead buttons or fake interactions.
-   No fake search, newsletter, login, or contact functionality.
-   No unnecessary backend or database if the site only needs maintained
    static organization content.

If adding a form or interactive feature, implement its real behavior and
appropriate privacy handling. Otherwise, link to existing maintained
destinations.

## 10. SEO, sharing, and technical quality

Configure the official domain `https://polityra.org`.

Implement where supported by the existing stack:

-   Unique page titles and meta descriptions
-   Canonical URLs
-   Open Graph metadata and social preview image
-   Appropriate X/Twitter metadata
-   Sitemap
-   `robots.txt`
-   Favicon and web app icons
-   Organization structured data using only verified details
-   Descriptive image alt text
-   Sensible heading hierarchy

Prioritize performance, responsive image handling, accessibility, and
maintainable code.

## 11. Footer requirements

Include:

-   Polityra logo and short description
-   Main navigation
-   Project links
-   GitHub organization link: https://github.com/Polityra
-   Verified contact or community links, if supplied
-   Copyright notice

Do not add dead social links, fabricated contact details, or unapproved
legal links.

## 12. Implementation instructions for AI agents

Before making changes:

1.  Inspect the repository root and existing project structure.
2.  Read the existing README, package manifests, project instructions,
    and relevant design assets.
3.  Identify the framework, package manager, scripts, and conventions
    already in use.
4.  Locate the three supplied brand reference images and inspect them.
5.  Preserve existing working architecture and avoid unnecessary
    rewrites.
6.  Create a short implementation plan, then implement the actual
    website.

During implementation:

-   Follow the existing stack and conventions.
-   Reuse existing components and dependencies when appropriate.
-   Keep organization content separate from presentation components.
-   Keep project data easy to update and extend.
-   Use real assets and verified URLs.
-   Do not replace the project logos with generated approximations.
-   Do not invent unavailable information.
-   Do not leave TODOs, placeholder content, dead links, or
    nonfunctional controls in completed areas.
-   Do not modify unrelated projects or application functionality.

If important information is unavailable, use a sensible, clearly limited
presentation rather than fabricating it. Record any remaining content
dependency in the final implementation summary.

## 13. Definition of done

The work is complete only when:

-   The website clearly represents Polityra as the parent organization.
-   Visitors can understand the organization's mission and purpose.
-   Open Polityra and Polityra CMS are showcased as distinct projects.
-   Project logos are used correctly.
-   The design is consistent, polished, and responsive.
-   Navigation and every displayed link work.
-   Content is accurate and does not invent facts.
-   SEO and sharing metadata are configured.
-   Accessibility and reduced-motion considerations are addressed.
-   TypeScript, lint, and production build checks pass where the project
    supports them.
-   Any remaining limitations or missing real-world information are
    clearly reported.

**Final instruction:** Build the actual official Polityra organization
website in this repository. Do not merely return a proposal, a
screenshot, or a list of recommendations. Treat this document as the
project's organization-wide website brief and source of truth.

## 14. Maintaining search metadata

Set each page's title, description, and canonical path using
`pageMetadata` in `src/lib/seo.ts`. The helper also builds the page's
Open Graph and X/Twitter metadata. Project detail metadata is derived
from `src/lib/projects.ts`; adding a project there also adds it to the
sitemap. Keep descriptions accurate, and update the social image
dimensions in the helper if the banner is replaced.
