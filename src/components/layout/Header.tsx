"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Monogram } from "@/components/ui/Monogram";
import { LinkedInIcon } from "@/components/ui/icons";

type HeaderProps = {
  name: string;
  linkedin: string;
  availability: string | null;
};

export function Header({ name, linkedin, availability }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const base = isHome ? "" : "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = [...navigation.map((item) => item.href), "#contact"]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const button = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      button?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled || open
          ? "border-line bg-ink-950/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="flex h-16 w-full items-center justify-between gap-6 px-[clamp(1.25rem,4vw,6rem)]">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-[4px]"
          aria-label={`${name} — home`}
          onClick={() => setOpen(false)}
        >
          <Monogram />
          <span className="text-[15px] font-medium tracking-[-0.01em] text-paper">{name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center">
            {navigation.map((item) => {
              const isActive = isHome && active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={`${base}${item.href}`}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative inline-flex min-h-11 items-center px-3 text-sm transition-colors",
                      isActive ? "text-paper" : "text-muted hover:text-paper",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 bottom-2.5 h-px bg-lime transition-transform duration-300 origin-left",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          {availability ? (
            <span className="label-mono ml-3 hidden items-center gap-2 lg:inline-flex">
              <span aria-hidden className="size-1.5 rounded-full bg-lime" />
              {availability}
            </span>
          ) : null}
          <a
            href={`${base}#contact`}
            aria-current={isHome && active === "#contact" ? "location" : undefined}
            className={cn(
              "ml-3 inline-flex min-h-10 items-center gap-1.5 rounded-[4px] border px-4 text-sm transition-colors hover:border-lime/60 hover:text-lime",
              isHome && active === "#contact" ? "border-lime/60 text-lime" : "border-line-strong text-paper",
            )}
          >
            Let&apos;s Connect
            <ArrowUpRight aria-hidden className="size-3.5" />
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[4px] border border-line-strong text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink-950 md:hidden"
        >
          <nav aria-label="Mobile" className="flex h-full flex-col px-5 pb-10 pt-6 sm:px-8">
            <ul className="divide-y divide-line border-y border-line">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={`${base}${item.href}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-center justify-between text-2xl font-medium tracking-[-0.02em] text-paper"
                  >
                    {item.label}
                    <span className="label-mono">0{index + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-10">
              {availability ? (
                <p className="label-mono flex items-center gap-2">
                  <span aria-hidden className="size-1.5 rounded-full bg-lime" />
                  {availability}
                </p>
              ) : null}
              <a
                href={`${base}#contact`}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-lime px-5 text-sm font-medium text-ink-950"
              >
                Let&apos;s Connect
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-line-strong px-5 text-sm font-medium text-paper"
              >
                <LinkedInIcon aria-hidden size={15} />
                Connect on LinkedIn
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
