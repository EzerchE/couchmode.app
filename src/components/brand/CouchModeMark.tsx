import { useId } from "react";

type MarkProps = {
  size?: number;
  variant?: "gradient" | "mono" | "off";
  className?: string;
};

export function CouchModeMark({
  size = 32,
  variant = "gradient",
  className,
}: MarkProps) {
  const id = useId();
  const gradId = `cm-grad-${id}`;

  if (variant === "mono") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <rect x="1" y="1" width="62" height="62" rx="14" fill="currentColor" />
        <path
          d="M38.7 26.37 A8.75 8.75 0 1 0 38.7 37.63"
          stroke="#0B0D12"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="3.75" fill="#0B0D12" />
      </svg>
    );
  }

  if (variant === "off") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <rect x="1" y="1" width="62" height="62" rx="14" fill="#272B36" stroke="#363B49" />
        <path
          d="M38.7 26.37 A8.75 8.75 0 1 0 38.7 37.63"
          stroke="#6E727E"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="3.75" fill="#6E727E" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9B6BFF" />
          <stop offset="1" stopColor="#4F7DF7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="62" height="62" rx="14" fill={`url(#${gradId})`} />
      <path
        d="M38.7 26.37 A8.75 8.75 0 1 0 38.7 37.63"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="3.75" fill="#ffffff" />
    </svg>
  );
}

export function CouchModeWordmark({ className }: { className?: string }) {
  return (
    <span
      className={
        "font-display font-semibold tracking-tight leading-none " + (className ?? "")
      }
    >
      Couch<span className="text-aurora">Mode</span>
    </span>
  );
}
