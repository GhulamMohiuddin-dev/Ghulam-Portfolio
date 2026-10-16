import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex size-9 items-center justify-center rounded-[4px] border border-line-strong bg-ink-850 text-[13px] font-semibold tracking-[-0.04em] text-paper",
        className,
      )}
    >
      GM
      <span className="absolute right-1 top-1 size-1 bg-lime" />
    </span>
  );
}
