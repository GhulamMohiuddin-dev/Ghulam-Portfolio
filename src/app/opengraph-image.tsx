import { site } from "@/data/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `${site.name} — ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage({
    eyebrow: `${site.role} · ${site.roleAlt}`,
    title: "Engineering scalable products.",
    subtitle: "Designing systems that last.",
    footerLeft: site.name,
    footerRight: "React · TypeScript · Node.js · Micro Frontends",
  });
}
