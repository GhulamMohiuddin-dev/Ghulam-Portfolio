import { getProject, projectKindLabel, projects } from "@/data/projects";
import { site } from "@/data/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `Case study by ${site.name}`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const index = projects.findIndex((p) => p.slug === slug);

  if (!project) {
    return renderOgImage({ eyebrow: "Case study", title: site.name, footerLeft: site.name, footerRight: site.role });
  }

  return renderOgImage({
    eyebrow: `Case study ${String(index + 1).padStart(2, "0")} · ${projectKindLabel[project.kind]}`,
    title: project.title,
    footerLeft: site.name,
    footerRight: project.technologies.slice(0, 3).join(" · "),
  });
}
