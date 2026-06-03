import type { LucideIcon } from "lucide-react";

export function ComingSoonLink({
  href,
  icon: Icon,
  label,
  hint,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  hint: string;
}) {
  return (
    <a
      href={href}
      aria-disabled="true"
      onClick={(event) => event.preventDefault()}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-muted-foreground transition hover:bg-white/[0.04]"
    >
      <Icon className="h-4 w-4" />
      {label}
      <span className="ml-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider">
        {hint}
      </span>
    </a>
  );
}
