# couchmode.app

Public marketing website for **CouchMode**: <https://couchmode.app>.

CouchMode is a Windows 11 couch & handheld gaming session utility: it automatically
enters the Windows Xbox full-screen experience when you connect a controller, and
restores your desktop when the controller disconnects. It is built for handhelds like
the ROG Ally and for living-room PCs.

## Status

Public beta preparation is in progress. Downloads will be available from the website
when ready.

## This repository

This repo contains only the public website (a Vite + TanStack Router app). It does
not contain the desktop application source. Site content lives under `src/`.

### Develop

```bash
bun install
bun run dev
```

Build the static site:

```bash
bun run build
```

## Links

- Website: <https://couchmode.app>
- Support: <mailto:support@couchmode.app>
