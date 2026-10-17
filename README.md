# Ghulam Mohi Ud Din — Portfolio

Personal portfolio for Ghulam Mohi Ud Din, Senior Software Engineer / Senior Consultant.
It uses Next.js (App Router), React, TypeScript, Tailwind CSS v4, Motion for React, and Lucide icons.

## Getting started

Requirements: Node.js 20.9 or later (developed on Node 22).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Development server                                 |
| `npm run build`     | Production build (includes type checking)          |
| `npm run start`     | Serve the production build                         |
| `npm run lint`      | ESLint                                             |
| `npm run typecheck` | Generate route types and run `tsc --noEmit`        |
| `npm test`          | Vitest + React Testing Library (single run)        |
| `npm run test:watch`| Vitest in watch mode                               |

CI (`.github/workflows/ci.yml`) runs lint, typecheck, tests, and build on every push to `main` and on pull requests.

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Fonts, metadata, header/footer shell
│   ├── page.tsx                # Home page — composes the sections
│   ├── work/[slug]/page.tsx    # Full case-study pages (statically generated)
│   ├── not-found.tsx           # Custom 404
│   ├── opengraph-image.tsx     # Generated social preview image
│   ├── icon.svg                # Favicon (GM monogram)
│   ├── robots.ts / sitemap.ts
│   └── globals.css             # Design tokens (Tailwind @theme), base styles, keyframes
├── components/
│   ├── layout/                 # Header (sticky, mobile menu, active section), Footer
│   ├── sections/               # Hero, EngineeringHighlights, FeaturedProjects, EngineeringPrinciples,
│   │                           # About (ExperienceTimeline + Education), TechnicalSkills,
│   │                           # EmergingAISection, Contact
│   ├── projects/               # ProjectCard (home), ProjectCaseStudy (detail page)
│   ├── diagrams/               # ArchitectureDiagram + per-project diagrams built from shared primitives
│   └── ui/                     # Container, SectionHeader, ButtonLink, Tag, Reveal, Monogram, icons
├── data/
│   ├── site.ts                 # Name, titles, URLs, contact links, location, availability (server-only)
│   ├── navigation.ts           # Header/footer menu items
│   ├── projects.ts             # Case studies
│   └── profile.ts              # Hero copy, highlights, principles, skills, experience, education, AI section
└── lib/utils.ts
```

## Updating content

All content lives in `src/data/`. Components render whatever is configured and hide anything left as `null`.

### Contact details — `src/data/site.ts`

```ts
links: {
  linkedin: "https://www.linkedin.com/in/ghulam-mohi-ud-din/",
  github: null,   // e.g. "https://github.com/<username>"
  email: null,    // e.g. "name@example.com"
  cv: null,       // e.g. "/cv/ghulam-mohi-ud-din.pdf" (put the file in /public/cv/)
},
availability: null, // e.g. "Open to remote & contract roles" — shown in the header only when set
location: "Lahore, Pakistan",
timezone: "UTC+5 (PKT)",
```

`site.ts` is server-only. The email address is base64-encoded on the server and decoded in the browser, so it never appears in the HTML or client JavaScript. Don't import `site.ts` from client components.

### Adding a project — `src/data/projects.ts`

Add an object to `projects`. Each one gets a card on the home page and a page at `/work/<slug>`.

- `kind`: `"professional-anonymized"`, `"personal"`, or `"open-source"`.
- `visual`: picks the diagram (`"micro-frontend"`, `"bff"`, `"packages"`, `"interface"`). To add a new diagram, create it in `src/components/diagrams/` from the shared primitives and register it in `ProjectVisual.tsx`.
- `images`: real screenshots in `/public`, rendered with `next/image`.
- `links`: public live URLs or repositories.
- `metrics`: **only verified numbers that are cleared for publication.** They are hidden when omitted.

### Generative AI section — `src/data/profile.ts`

`emergingAI.projects` is empty right now, so the section shows a "Currently exploring" list of study areas. When you add a real project, the section switches to a project layout:

```ts
projects: [
  {
    title: "…",
    summary: "…",
    technologies: ["…"],
    href: "https://…", // optional
  },
],
```

## Configuration

| Variable               | Purpose                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL (e.g. `https://your-domain.com`). Used for metadata, Open Graph, and the sitemap. |

On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used automatically when `NEXT_PUBLIC_SITE_URL` is not set. Locally, the fallback is `http://localhost:3000`. The site has no secrets and no client-side API keys.

**Analytics:** `@vercel/analytics` is included and cookie-free. Turn on Web Analytics in the Vercel project dashboard to start collecting page views. On other hosts it does nothing.

**SEO:** the home page includes `ProfilePage`/`Person` JSON-LD (`src/components/seo/JsonLd.tsx`). Every case study gets its own generated Open Graph image. `src/proxy.ts` returns a real 404 for unknown `/work/*` slugs.

## Deployment

### Vercel (recommended)

1. Push the repository to GitHub (or GitLab/Bitbucket).
2. In Vercel: **Add New → Project → Import** the repository. The framework preset is detected as **Next.js**. Keep the default build command (`next build`) and output settings.
3. Deploy. Node.js 22 is selected automatically from `engines` in `package.json`.
4. After the first deploy:
   - **Domains:** add your custom domain, if you have one.
   - **Environment Variables:** if you added a custom domain, set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` for Production, then redeploy. Without it, the `*.vercel.app` production URL is used for canonical links, Open Graph images, and the sitemap.
   - **Analytics:** turn on Web Analytics.

Preview deployments serve a `robots.txt` that disallows crawling, so only production gets indexed.

**Self-hosted / Node:**

```bash
npm ci
npm run build
npm run start -- -p 3000
```

Any platform that supports Next.js 16 with the Node.js runtime will work.

## Design and accessibility notes

- Dark graphite palette with off-white text and a restrained lime accent. The tokens are in `globals.css` under `@theme`.
- Geist Sans for text and Geist Mono for technical labels, loaded through `next/font`.
- Diagrams are built in HTML/CSS so the text stays legible on small screens. Each one has a descriptive `aria-label` and is marked **Illustrative**.
- Motion respects `prefers-reduced-motion`. CSS animations are disabled, and Motion is configured with `reducedMotion="user"`.
- The site has a skip link, visible focus states, semantic landmarks and headings, an accessible mobile menu (Escape closes it, focus returns to the menu button, scrolling is locked while it is open), and touch targets of 44px or larger.

## Content integrity

- Case studies are anonymized. They contain no client names, logos, source code, internal screenshots, or private metrics.
- Outcomes are written qualitatively. Add numbers only after they have been verified.
- AI-assisted development is presented as current day-to-day practice (`emergingAI.practice`). Building AI into products is presented as an area of active study until real projects are added.
- No performance scores are claimed. Run Lighthouse against the deployed site before publishing any.
