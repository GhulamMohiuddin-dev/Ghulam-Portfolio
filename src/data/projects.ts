export type ProjectVisual = "micro-frontend" | "bff" | "packages" | "interface";

export type ProjectKind = "professional-anonymized" | "personal" | "open-source";

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  /** Short descriptor of the engagement, anonymized where required. */
  context: string;
  summary: string;
  role: string;
  technologies: string[];
  visual: ProjectVisual;
  visualCaption: string;
  /** 1. The engineering problem. */
  problem: string;
  challenges: string[];
  /** 2. Why the problem mattered. */
  whyItMattered: string;
  /** 3. Role and contribution. */
  contributions: string[];
  /** 4. Architectural decisions. */
  decisions: { title: string; detail: string }[];
  /** 6. Implementation approach. */
  approach: string[];
  /** 7. Outcome — qualitative unless verified metrics are supplied. */
  outcome: string;
  /** Only add metrics that have been verified and are cleared for publication. */
  metrics?: { label: string; value: string }[];
  /** 8. Lessons learned and trade-offs. */
  tradeoffs: string[];
  disclosure?: string;
  /** Public links — only add real, accessible URLs. */
  links?: { label: string; href: string }[];
  /** Real screenshots placed in /public. Rendered with next/image when supplied. */
  images?: { src: string; alt: string; width: number; height: number }[];
};

export const projectKindLabel: Record<ProjectKind, string> = {
  "professional-anonymized": "Anonymized professional case study",
  personal: "Personal project",
  "open-source": "Open source",
};

const confidentiality =
  "Anonymized professional work. Client names, source code, internal screenshots, and private metrics are intentionally omitted. Diagrams are illustrative concepts, not production infrastructure.";

export const projects: Project[] = [
  {
    slug: "enterprise-micro-frontend-platform",
    title: "Enterprise Micro Frontend Platform",
    kind: "professional-anonymized",
    context:
      "Enterprise-scale application for a leading U.S.-based multinational industrial supply company — from initial proof of concept through production delivery.",
    summary:
      "A platform for independently deployable React applications, unified by a shared shell and versioned packages for UI, authentication, and utilities.",
    role: "Architecture, platform implementation, and shared libraries",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Azure DevOps",
      "Azure Artifacts",
      "i18next",
    ],
    visual: "micro-frontend",
    visualCaption:
      "Illustrative concept — a shared shell composing independently deployed applications, each consuming versioned platform packages.",
    problem:
      "An enterprise-scale application needed to grow across multiple functional areas without becoming a single, tightly coupled frontend. Teams needed to develop and release independently while users continued to experience one consistent product.",
    challenges: [
      "Supporting independently deployable React applications.",
      "Defining a scalable frontend architecture.",
      "Maintaining consistency across application boundaries.",
      "Sharing UI components, authentication, and utilities.",
      "Supporting autonomous development and deployment.",
    ],
    whyItMattered:
      "Without clear boundaries, a growing frontend accumulates coupling: releases get bundled together, shared behaviour is reimplemented inconsistently, and a change in one area can block delivery in another. The architecture needed to make autonomy the default without sacrificing consistency.",
    contributions: [
      "Evaluated technologies and authored Architecture Review Documents.",
      "Designed and implemented the Micro Frontend platform.",
      "Built shared component, authentication, and utility libraries.",
      "Published versioned packages through Azure Artifacts.",
      "Implemented role-based access control and internationalization.",
      "Contributed to engineering standards and release reliability.",
    ],
    decisions: [
      {
        title: "A shell with independently deployable applications",
        detail:
          "A shared application shell owns cross-cutting concerns such as layout, navigation, and session context. Feature applications are built and released on their own pipelines.",
      },
      {
        title: "Shared concerns as versioned packages",
        detail:
          "UI components, authentication, and utilities are distributed as versioned packages through Azure Artifacts, so each application adopts updates deliberately rather than in lockstep.",
      },
      {
        title: "Documented technology choices",
        detail:
          "Options were evaluated and recorded in Architecture Review Documents, keeping the reasoning behind the platform reviewable and repeatable.",
      },
      {
        title: "Cross-cutting capabilities designed once",
        detail:
          "Role-based access control and internationalization with i18next are treated as platform capabilities instead of per-application solutions.",
      },
    ],
    approach: [
      "Validated the architecture through a proof of concept before committing to production delivery.",
      "Developed shared component, authentication, and utility libraries alongside the first applications.",
      "Used Redux Toolkit and RTK Query for predictable state management and data fetching.",
      "Automated build and release through Azure DevOps pipelines.",
      "Contributed to engineering standards and code reviews to keep the platform consistent as it grew.",
    ],
    outcome:
      "The platform progressed from proof of concept to production delivery. Quantitative results are confidential and intentionally not published here.",
    tradeoffs: [
      "Independent deployment increases autonomy but moves complexity to integration points — shared contracts and package versions need explicit ownership.",
      "Shared libraries reduce duplication, but over-centralizing them can recreate the coupling micro frontends are meant to remove.",
      "Architecture decisions are easier to sustain when the reasoning is written down and reviewed, not just implemented.",
    ],
    disclosure: confidentiality,
  },
  {
    slug: "backend-for-frontend-services",
    title: "Backend-for-Frontend Services",
    kind: "professional-anonymized",
    context:
      "Node.js and Express services exposing APIs tailored to the requirements of enterprise React applications.",
    summary:
      "A dedicated integration layer that gives frontend applications purpose-built API contracts instead of general-purpose backend responses.",
    role: "BFF design and implementation",
    technologies: ["Node.js", "Express.js", "TypeScript", "REST APIs", "React integration"],
    visual: "bff",
    visualCaption:
      "Illustrative concept — a React application communicating through a BFF layer that aggregates and shapes upstream APIs.",
    problem:
      "Frontend applications often consume backend APIs designed for general purposes. Shaping, combining, and normalizing that data in the browser spreads integration logic across the UI and makes it harder to maintain.",
    challenges: [
      "Aligning backend responses with frontend consumption.",
      "Organizing service boundaries.",
      "Supporting maintainable integration patterns.",
      "Improving client–server communication.",
    ],
    whyItMattered:
      "When integration logic lives in the client, every application repeats it and every backend change ripples into UI code. A dedicated layer gives the frontend a stable contract designed around how the interface actually uses data.",
    contributions: [
      "Designed frontend-oriented API endpoints.",
      "Implemented BFF services using Node.js and Express.",
      "Integrated the services into enterprise React applications.",
      "Considered maintainability, error handling, and API contracts as part of the design.",
    ],
    decisions: [
      {
        title: "Frontend-shaped contracts",
        detail:
          "Endpoints are designed around frontend use cases, so the interface receives data in the shape it renders.",
      },
      {
        title: "Clear service boundaries",
        detail:
          "The BFF owns presentation-oriented aggregation and transformation. Domain logic stays with the backend services that own it.",
      },
      {
        title: "Predictable error handling",
        detail:
          "Upstream failures are translated into consistent responses that the frontend can handle in one way.",
      },
      {
        title: "Explicit API contracts",
        detail:
          "Request and response structures are treated as contracts between the BFF and its consumers, typed with TypeScript where applicable.",
      },
    ],
    approach: [
      "Implemented services with Node.js and Express.",
      "Kept routing, upstream integration, and response shaping as separate concerns.",
      "Integrated the services into enterprise React applications.",
      "Treated maintainability and error handling as design inputs rather than afterthoughts.",
    ],
    outcome:
      "Frontend applications consume purpose-built APIs through a dedicated integration layer. No performance or cost figures are claimed; metrics will only be added once verified.",
    tradeoffs: [
      "A BFF is another service to own and operate — it earns its place when it meaningfully simplifies frontend integration.",
      "Without discipline, a BFF can accumulate business logic. Keeping it focused on presentation concerns keeps boundaries clear.",
    ],
    disclosure: confidentiality,
  },
  {
    slug: "shared-component-platform",
    title: "Shared Component & Engineering Platform",
    kind: "professional-anonymized",
    context:
      "Reusable UI, authentication, and utility packages consumed across multiple frontend applications.",
    summary:
      "Versioned packages with quality gates built into delivery — improving consistency and reducing duplicated implementation across applications.",
    role: "Library development, release workflow, and quality standards",
    technologies: [
      "React",
      "TypeScript",
      "Azure Artifacts",
      "Azure DevOps",
      "Vitest",
      "React Testing Library",
      "ESLint",
      "SonarQube",
    ],
    visual: "packages",
    visualCaption:
      "Illustrative concept — shared packages pass quality gates, publish to a private feed, and are consumed by independent applications.",
    problem:
      "When several frontend applications evolve in parallel, the same components, authentication flows, and utilities tend to be reimplemented — and slowly drift apart in behaviour and appearance.",
    challenges: [
      "Designing reusable component APIs.",
      "Managing package versions.",
      "Maintaining consistency across applications.",
      "Integrating quality checks into delivery workflows.",
    ],
    whyItMattered:
      "Consistency for users and efficiency for teams both depend on shared building blocks that are reliable, tested, and safe to upgrade.",
    contributions: [
      "Developed shared component libraries.",
      "Published versioned packages through Azure Artifacts.",
      "Applied testing and linting standards.",
      "Integrated quality gates into Azure DevOps pipelines.",
    ],
    decisions: [
      {
        title: "Component APIs designed for reuse",
        detail:
          "Components expose focused, composable APIs rather than options tailored to a single application.",
      },
      {
        title: "Separate packages by concern",
        detail:
          "UI, authentication, and utilities ship as distinct packages, so applications depend only on what they use.",
      },
      {
        title: "Versioned releases",
        detail:
          "Packages are published as versions through Azure Artifacts, letting consumers upgrade deliberately.",
      },
      {
        title: "Quality gates before publishing",
        detail:
          "Linting, tests, and static analysis run in Azure DevOps pipelines before a version is released.",
      },
    ],
    approach: [
      "Tested components with Vitest and React Testing Library.",
      "Enforced consistent code standards with ESLint.",
      "Ran SonarQube analysis as part of the pipeline.",
      "Published packages to Azure Artifacts for consumption across applications.",
    ],
    outcome:
      "Applications consume shared UI, authentication, and utility packages from a single source, with quality checks built into the release workflow. Quantitative results are not published.",
    tradeoffs: [
      "Shared packages need clear ownership and release discipline; otherwise consumers fall behind or break on upgrade.",
      "A general component API is harder to design than a specific one, but it pays off as soon as more than one application depends on it.",
    ],
    disclosure: confidentiality,
  },
  {
    slug: "enterprise-frontend-telecom",
    title: "Enterprise Frontend for a European Telecom",
    kind: "professional-anonymized",
    context: "Frontend feature development for a European telecom project.",
    summary:
      "React interfaces with Redux state and GraphQL data, implemented from Figma designs with Chakra UI inside an Adobe Experience Manager platform.",
    role: "Frontend feature development",
    technologies: ["React", "JavaScript", "Redux", "Chakra UI", "GraphQL", "Adobe Experience Manager"],
    visual: "interface",
    visualCaption:
      "Illustrative interface — placeholder content showing how the layers fit together. Not a screenshot of the production product.",
    problem:
      "Features needed to move from design to production as responsive, maintainable interfaces that integrate with GraphQL APIs and fit within an Adobe Experience Manager–based platform.",
    challenges: [
      "Translating Figma designs into accurate, responsive React interfaces.",
      "Managing application state predictably with Redux.",
      "Integrating GraphQL APIs into UI features.",
      "Working within Chakra UI and Adobe Experience Manager conventions.",
    ],
    whyItMattered:
      "In a large product, faithful design implementation and reliable data integration directly shape the user experience — and the team's ability to keep shipping.",
    contributions: [
      "Built React interfaces.",
      "Implemented Redux-based state management.",
      "Integrated GraphQL APIs.",
      "Translated Figma designs into responsive interfaces.",
      "Worked with Chakra UI and Adobe Experience Manager.",
      "Debugged issues and improved application functionality.",
    ],
    decisions: [
      {
        title: "Consistent UI building blocks",
        detail:
          "Interfaces are composed from Chakra UI components to stay consistent with the project's visual language.",
      },
      {
        title: "Predictable state with Redux",
        detail: "Application state is managed through Redux, keeping data flow explicit and debuggable.",
      },
      {
        title: "GraphQL for feature data",
        detail: "Features request the data they need through GraphQL APIs.",
      },
    ],
    approach: [
      "Broke Figma designs down into reusable React components.",
      "Implemented responsive behaviour across breakpoints.",
      "Connected features to Redux state and GraphQL APIs.",
      "Integrated components into pages within Adobe Experience Manager.",
      "Investigated and resolved defects to improve application functionality.",
    ],
    outcome:
      "Delivered frontend features and improvements as part of the project team. Specific outcomes are not published.",
    tradeoffs: [
      "Design accuracy and responsive behaviour are best planned together rather than reconciled at the end.",
      "Debugging in a layered platform — content management, components, and data — rewards understanding how each layer contributes to the rendered page.",
    ],
    disclosure: confidentiality,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
