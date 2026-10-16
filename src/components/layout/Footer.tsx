import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navigation, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Monogram";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <Monogram />
          <div>
            <p className="text-sm font-medium text-paper">{site.name}</p>
            <p className="text-sm text-subtle">
              {site.role} · {site.roleAlt}
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={`/${item.href}`} className="text-sm text-muted transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </Container>
      <Container className="flex flex-col gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono">Designed &amp; engineered by {site.name} · Next.js · TypeScript · Tailwind CSS</p>
        <a href="#top" className="label-mono inline-flex items-center gap-2 transition-colors hover:text-paper">
          Back to top <ArrowUp aria-hidden className="size-3" />
        </a>
      </Container>
    </footer>
  );
}
