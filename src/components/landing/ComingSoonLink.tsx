import type { LucideIcon } from "lucide-react";

export function ComingSoonLink({
  href,
  icon: Icon,
  label,
  hint,
  description,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  hint: string;
  description?: string;
}) {
  return (
    <a
      href={href}
      aria-disabled="true"
      onClick={(event) => event.preventDefault()}
      className="group flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-left transition duration-300 hover:border-white/14 hover:bg-white/[0.05]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-aurora transition duration-300 group-hover:border-white/16 group-hover:bg-white/[0.06]">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-foreground">{label}</div>
          {description ? (
            <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {description}
            </div>
          ) : null}
        </div>
      </div>
      <span className="rounded-full bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {hint}
      </span>
    </a>
  );
}
