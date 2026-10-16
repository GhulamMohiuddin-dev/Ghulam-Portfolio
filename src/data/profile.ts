export const hero = {
  eyebrow: "Senior Software Engineer · Senior Consultant",
  headline: ["Engineering scalable products.", "Designing systems that last."],
  intro:
    "I'm Ghulam Mohi Ud Din, a Senior Software Engineer specializing in React, TypeScript, Node.js, and enterprise frontend architecture. I build maintainable application platforms, reusable engineering systems, and reliable delivery pipelines that help teams ship with confidence.",
  summary: "4 years of professional software engineering — enterprise applications, platforms, and delivery.",
  coreTechnologies: [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Redux Toolkit",
    "RTK Query",
  ],
};

export const highlights = [
  {
    title: "4 Years",
    description: "Professional software engineering experience.",
  },
  {
    title: "Micro Frontends",
    description: "Architecture for independently deployable React applications.",
  },
  {
    title: "Reusable Platforms",
    description: "Shared UI, authentication, and utility libraries.",
  },
  {
    title: "Delivery Automation",
    description: "CI/CD pipelines, quality checks, and reliable releases.",
  },
];

export type PrincipleGlyph = "intent" | "decoupled" | "quality" | "performance";

export const principles: { title: string; description: string; glyph: PrincipleGlyph }[] = [
  {
    title: "Architecture with intent",
    description:
      "Evaluate technologies and establish architecture based on scalability, maintainability, delivery needs, and team constraints.",
    glyph: "intent",
  },
  {
    title: "Reuse without unnecessary coupling",
    description:
      "Build shared components and libraries that encourage consistency without making applications unnecessarily dependent on each other.",
    glyph: "decoupled",
  },
  {
    title: "Quality built into delivery",
    description:
      "Integrate testing, linting, code reviews, and CI/CD quality gates into the development process.",
    glyph: "quality",
  },
  {
    title: "Performance and maintainability",
    description:
      "Optimize application behaviour, reduce technical debt, and use appropriate measurements to guide improvements.",
    glyph: "performance",
  },
];

export const skillGroups: { title: string; code: string; items: string[] }[] = [
  {
    title: "Frontend Engineering",
    code: "FE",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "RTK Query",
      "Micro Frontends",
      "Frontend Architecture",
      "Chakra UI",
      "i18next",
    ],
  },
  {
    title: "Backend Engineering",
    code: "BE",
    items: ["Node.js", "Express.js", "Backend-for-Frontend (BFF)", "REST API integration", "GraphQL"],
  },
  {
    title: "DevOps & Quality",
    code: "DQ",
    items: [
      "Azure DevOps",
      "YAML pipelines",
      "CI/CD",
      "Azure Artifacts",
      "Vitest",
      "React Testing Library",
      "ESLint",
      "SonarQube",
      "Lighthouse",
    ],
  },
  {
    title: "Enterprise Engineering",
    code: "EE",
    items: [
      "Shared component libraries",
      "Authentication integration",
      "Role-Based Access Control",
      "Feature management",
      "Performance optimization",
      "Technical documentation",
      "Code reviews",
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  /** Alternate title for the same position, e.g. the title used on LinkedIn. */
  altRole?: string;
  company: string | null;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    altRole: "Senior Consultant",
    company: "Systems Ltd",
    period: "Dec 2025 — Present",
    current: true,
    summary:
      "Enterprise application development with a focus on frontend architecture, platform engineering, and delivery quality.",
    highlights: [
      "Evaluated technologies and authored Architecture Review Documents for a Micro Frontend platform, from proof of concept to production.",
      "Designed and built Backend-for-Frontend services with Node.js and Express.",
      "Developed shared component, authentication, and utility libraries published through Azure Artifacts.",
      "Implemented role-based access control, internationalization, and feature management.",
      "Built Azure DevOps YAML pipelines with testing, linting, and SonarQube quality gates.",
      "Contributed to code reviews and engineering standards.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Redux Toolkit", "RTK Query", "Azure DevOps"],
  },
  {
    role: "Software Engineer",
    company: null,
    period: "Jul 2022 — Dec 2025",
    summary: "Frontend feature development for a European telecom project.",
    highlights: [
      "Built React user interfaces from Figma designs, responsive across breakpoints.",
      "Implemented Redux-based state management.",
      "Integrated GraphQL APIs into application features.",
      "Worked with Chakra UI and Adobe Experience Manager.",
      "Debugged issues and improved application functionality.",
    ],
    technologies: ["React", "JavaScript", "Redux", "GraphQL", "Chakra UI", "Adobe Experience Manager"],
  },
];

export const education = [
  {
    institution: "University of Engineering and Technology, Lahore",
    credential: "Bachelor of Science in Computer Science",
    period: "2018 — 2022",
    primary: true,
  },
  {
    institution: "Government College University, Lahore",
    credential: "Intermediate, Pre-Engineering",
    period: "2016 — 2018",
    primary: false,
  },
];

export type AIProject = {
  title: string;
  summary: string;
  technologies: string[];
  href?: string;
};

export const emergingAI: {
  status: string;
  title: string;
  intro: string;
  note: string;
  topics: { title: string; description: string }[];
  /** Add real AI projects here — they replace the "currently exploring" treatment. */
  projects: AIProject[];
} = {
  status: "Currently exploring",
  title: "Exploring the next layer of software.",
  intro:
    "I'm interested in applying large language models and Generative AI to practical software products — with the same attention to architecture, reliability, and delivery that I bring to enterprise frontend work.",
  note: "An emerging area of study, not yet professional experience. Real projects will appear here as they are built.",
  topics: [
    { title: "LLM API integration", description: "Calling models from production-grade services." },
    { title: "Structured outputs", description: "Typed, validated responses instead of free text." },
    { title: "Retrieval-Augmented Generation", description: "Grounding answers in trusted sources." },
    { title: "Embeddings & vector search", description: "Semantic retrieval over private content." },
    { title: "Tool calling", description: "Letting models act through well-defined interfaces." },
    { title: "Agent workflows", description: "Multi-step tasks with clear boundaries." },
    { title: "Evaluation & reliability", description: "Measuring quality before shipping." },
  ],
  projects: [],
};
