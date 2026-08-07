// The Microsoft four-square mark, inline.
//
// Not the official <ms-store-badge> web component: that loads a script from get.microsoft.com and
// renders a fixed-style badge, which cannot match this site's pill buttons and would add a
// third-party request to every page just to draw a link. The requirement was that the Store option
// match the existing buttons in height, padding, radius and weight, and an inline icon is the only
// way to get that.
//
// Keeps currentColor so it inherits the button's text colour in both themes, and stays decorative:
// every use sits beside a visible text label.
export function MicrosoftStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z" />
    </svg>
  );
}
