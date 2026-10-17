import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { engagements } from "@/data/profile";
import { site } from "@/data/site";
import { encodeEmail } from "@/lib/email";
import { Container } from "@/components/ui/Container";
import { ButtonLink, buttonClass } from "@/components/ui/ButtonLink";
import { EmailAddress, EmailLink } from "@/components/ui/EmailLink";
import { Reveal } from "@/components/ui/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

const rowClass = "group flex min-h-20 items-center gap-5 py-5 transition-colors hover:text-lime";

function RowContent({ icon, label, value, external }: { icon: ReactNode; label: string; value: ReactNode; external?: boolean }) {
  return (
    <>
      <span className="text-muted transition-colors group-hover:text-lime">{icon}</span>
      <span className="label-mono w-36 shrink-0 max-sm:hidden">{label}</span>
      <span className="min-w-0 flex-1 truncate text-lg tracking-[-0.01em] text-paper transition-colors group-hover:text-lime sm:text-2xl">
        <span className="sr-only sm:hidden">{label}: </span>
        {value}
      </span>
      <ArrowUpRight
        aria-hidden
        className="size-5 shrink-0 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
      />
      {external ? <span className="sr-only">(opens in a new tab)</span> : null}
    </>
  );
}

export function Contact() {
  const { linkedin, github, email, cv } = site.links;
  const encodedEmail = email ? encodeEmail(email) : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0" />
      <Container className="relative">
        <Reveal>
          <p className="label-mono flex items-center gap-3">
            <span className="text-lime">§ 06</span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-8 max-w-[22ch] text-[2.5rem] font-medium leading-[1] tracking-[-0.04em] text-paper sm:text-6xl lg:text-[clamp(4.75rem,6.2vw,10rem)]"
          >
            Building something ambitious? <span className="text-lime">Let&apos;s talk engineering.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m interested in connecting with teams building meaningful software products and exploring opportunities where
            thoughtful architecture, reliable delivery, and strong engineering practices matter.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={linkedin} ariaLabel="Connect on LinkedIn (opens in a new tab)">
              <LinkedInIcon size={15} />
              Connect on LinkedIn
              <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </ButtonLink>
            {encodedEmail ? (
              <EmailLink encoded={encodedEmail} className={buttonClass("secondary")}>
                <Mail aria-hidden className="size-4" />
                Email me
              </EmailLink>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <h3 className="label-mono">Ways to work together</h3>
              {site.location ? (
                <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted">
                  <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
                  <span>
                    {site.location}
                    {site.timezone ? <span className="block text-subtle">{site.timezone} · Remote-first</span> : null}
                  </span>
                </p>
              ) : null}
            </div>
            <ul className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-3 lg:col-span-9">
              {engagements.map((item, i) => (
                <li key={item.title} className="bg-ink-950 p-6">
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  <p className="mt-3 font-medium tracking-[-0.01em] text-paper">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-16 border-t border-line">
            <li className="border-b border-line">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className={rowClass}>
                <RowContent icon={<LinkedInIcon size={18} />} label="LinkedIn" value="in/ghulam-mohi-ud-din" external />
              </a>
            </li>
            {encodedEmail ? (
              <li className="border-b border-line">
                <EmailLink encoded={encodedEmail} className={rowClass}>
                  <RowContent
                    icon={<Mail aria-hidden className="size-[18px]" />}
                    label="Email"
                    value={<EmailAddress encoded={encodedEmail} fallback="Send an email" />}
                  />
                </EmailLink>
              </li>
            ) : null}
            {github ? (
              <li className="border-b border-line">
                <a href={github} target="_blank" rel="noopener noreferrer" className={rowClass}>
                  <RowContent
                    icon={<GitHubIcon size={18} />}
                    label="GitHub"
                    value={github.replace(/^https?:\/\/(www\.)?/, "")}
                    external
                  />
                </a>
              </li>
            ) : null}
            {cv ? (
              <li className="border-b border-line">
                <a href={cv} download className={rowClass}>
                  <RowContent icon={<Download aria-hidden className="size-[18px]" />} label="Curriculum vitae" value="Download PDF" />
                </a>
              </li>
            ) : null}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
