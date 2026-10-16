/**
 * Personal and contact configuration.
 * Optional values are `null` until real details are supplied — the UI hides anything that is not set.
 */

export type SiteConfig = {
  name: string;
  shortName: string;
  monogram: string;
  title: string;
  role: string;
  roleAlt: string;
  description: string;
  url: string;
  locale: string;
  location: string | null;
  /** Shown in the header only when set, e.g. "Open to remote & contract work". */
  availability: string | null;
  links: {
    linkedin: string;
    github: string | null;
    email: string | null;
    /** Path to a CV inside /public, e.g. "/cv/ghulam-mohi-ud-din-cv.pdf". */
    cv: string | null;
  };
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site: SiteConfig = {
  name: "Ghulam Mohi Ud Din",
  shortName: "Ghulam",
  monogram: "GM",
  title: "Ghulam Mohi Ud Din | Senior Software Engineer",
  role: "Senior Software Engineer",
  roleAlt: "Senior Consultant",
  description:
    "Senior Software Engineer specializing in enterprise frontend architecture, micro frontends, React, TypeScript, and Node.js — building scalable web applications, reusable engineering platforms, and reliable delivery pipelines.",
  url: siteUrl,
  locale: "en_US",
  location: null,
  availability: null,
  links: {
    linkedin: "https://www.linkedin.com/in/ghulam-mohi-ud-din/",
    github: null,
    email: null,
    cv: null,
  },
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Engineering", href: "#engineering" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
