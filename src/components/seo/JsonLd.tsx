import { education, experience, hero, skillGroups } from "@/data/profile";
import { site } from "@/data/site";

export function buildPersonJsonLd() {
  const current = experience.find((entry) => entry.current);
  const degree = education.find((entry) => entry.primary);
  const sameAs = [site.links.linkedin, site.links.github].filter((link): link is string => Boolean(link));

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: site.url,
    mainEntity: {
      "@type": "Person",
      name: site.name,
      jobTitle: current?.role ?? site.role,
      description: site.description,
      url: site.url,
      sameAs,
      ...(current?.company ? { worksFor: { "@type": "Organization", name: current.company } } : {}),
      ...(degree ? { alumniOf: { "@type": "CollegeOrUniversity", name: degree.institution } } : {}),
      ...(site.location ? { homeLocation: { "@type": "Place", name: site.location } } : {}),
      knowsAbout: [...new Set([...hero.coreTechnologies, ...skillGroups.flatMap((group) => group.items)])],
    },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the payload can't break out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
