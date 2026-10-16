import Link from "next/link";
import type { ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-ink-950 hover:bg-[#d9f78c] border border-lime",
  secondary:
    "border border-line-strong text-paper hover:border-paper/40 hover:bg-paper/[0.04]",
  ghost: "text-muted hover:text-paper px-0",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  download?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  download,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] px-5 text-sm font-medium tracking-[-0.005em] transition-colors duration-200",
    variants[variant],
    className,
  );

  if (isExternal(href) || download) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        download={download || undefined}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
