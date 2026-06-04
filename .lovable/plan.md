# CouchMode Landing Page Plan (Revised)

Single-page, dark, premium landing page on TanStack Start + Tailwind v4 + Framer Motion. No backend. GitHub Pages friendly. **Round 1: skeleton + layout with placeholder visuals. Round 2: AI image generation + copy polish.**

## Design System (src/styles.css)

- Force dark mode (apply `dark` class on `<html>` in `__root.tsx`)
- Background: deep near-black with subtle blue undertone
- Primary accent: violet `oklch(0.65 0.22 295)`
- Secondary accent: electric blue `oklch(0.7 0.18 250)`
- Gradient token `--gradient-aurora` (violet → blue) for headlines/CTA
- Glow shadow token for primary buttons and Pro card
- Typography: Space Grotesk (display) + Inter (body), via Google Fonts in `__root.tsx`
- Custom utilities: `.glass`, `.text-aurora`, `.glow-violet`

## Page Structure (src/routes/index.tsx)

Composed from `src/components/landing/`:

1. **Navbar** — fixed top, wordmark left, anchor links (Features, How it works, Pricing, Download), Download Free CTA right. Glass background on scroll.
2. **Hero**
   - H1: "Your PC. Your couch. One controller away."
   - Sub: "CouchMode turns your Windows PC into a couch-ready gaming setup. Start with the free basic mode, then unlock full automation with Pro."
   - Buttons: Download Free (→ `#download`), Buy Pro (→ `https://couchmode.app/buy?source=web`)
   - Right: hero illustration placeholder (round 2: AI gamer-on-couch image)
   - Radial violet glow + subtle grid background
3. **Problem** — two-column. Copy: Windows desktop works fine, just isn't tuned for 10-foot viewing and controller-first input. Visual prompt for round 2: *"organized dark-mode desktop not optimized for couch gaming, viewed from couch distance"* — calm, not chaotic.
4. **HowItWorks** — sticky-scroll storytelling (desktop) / stacked (mobile). 4 steps:
   1. Turn on your controller
   2. CouchMode starts basic couch mode
   3. Pro automates your setup
   4. Your desktop comes back when you're done
5. **Comparison** — two glass cards. Pro has gradient border + glow + "7-day Pro trial included" badge.
   - **Free**: Basic controller-triggered Xbox/FSE couch mode · Start with Windows · Language/theme · Manual/basic use
   - **Pro**: Launch Mode selection · Resource Control · Session Tweaks · Audio / HDR / display / power automation · Notifications control · Restore automation
6. **Features** — 4-card responsive grid (1/2/4 cols): Start from your controller · Launch into couch mode · Automate system setup · Restore your desktop after gaming
7. **FinalCTA** (id `download`) — centered headline + download block with four buttons:
   - Download Free (primary, `#download` anchor target / direct download placeholder)
   - Buy Pro (gradient, `https://couchmode.app/buy?source=web`)
   - Microsoft Store — disabled "Coming soon"
   - Steam — disabled "Coming soon"
8. **Footer** — wordmark, small nav, copyright, social placeholders.

## Animation & Interaction

- `framer-motion` for scroll-reveal (`whileInView` fade + translateY) and sticky storytelling
- `scroll-behavior: smooth` + anchor links to `#features`, `#how`, `#pricing`, `#download`
- Subtle hero parallax via `useScroll` + `useTransform`
- Respect `prefers-reduced-motion`

## Visuals (Round 1 = placeholders)

Use neutral gradient/blurred placeholder blocks with the planned dimensions. Slots:
- `hero-couch` — hero right
- `problem-desktop` — problem section ("organized dark-mode desktop not optimized for couch gaming, viewed from couch distance")
- `howitworks-flow` — sticky storytelling visual

Round 2 swaps in `imagegen` outputs under `src/assets/`.

## SEO (head() in src/routes/index.tsx)

- Title: "CouchMode — PC Power. Console Comfort."
- Description: "Turn your Windows PC into a couch gaming setup. Start from your controller, automate your session with Pro, and return to your desktop when you're done."
- og:title / og:description mirror above
- Relative `og:url` and canonical (no production URL yet)

## Accessibility

- Single `<h1>` in hero; semantic `<section>` per block with `aria-labelledby`
- Real `<a>` / `<button>` with focus rings; WCAG AA contrast on dark bg
- "Coming soon" buttons use `aria-disabled` + visual disabled state

## Technical Notes

- Pure frontend; no Lovable Cloud
- Mobile-first responsive: hero stacks, sticky storytelling collapses, 4-col features → 1-col
- File layout:
  ```text
  src/
    routes/index.tsx
    components/landing/
      Navbar.tsx
      Hero.tsx
      Problem.tsx
      HowItWorks.tsx
      Comparison.tsx
      Features.tsx
      FinalCTA.tsx
      Footer.tsx
    styles.css
  ```

## Build Steps (Round 1)

1. `bun add framer-motion`
2. Extend `src/styles.css` with tokens, gradient, glass utility
3. Add Google Fonts links + force `dark` class in `__root.tsx`
4. Create 8 landing components with copy + placeholder visual blocks
5. Replace `src/routes/index.tsx` with composed page + SEO head
6. Verify in preview (desktop + mobile viewports)

Round 2 (separate turn): generate hero / problem / how-it-works images, swap placeholders, polish copy.
