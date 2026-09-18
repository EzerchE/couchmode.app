import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const italianGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "it",
  path: "/guide-pc-tv/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Guide per giocare su Windows dal divano | CouchMode",
    description:
      "Guide pratiche per giocare sulla TV con Windows: Playnite, Steam Big Picture, controller e console portatili collegate a una docking station.",
    ogTitle: "Guide per giocare su Windows dal divano | CouchMode",
    ogDescription:
      "Guide pratiche per giocare sulla TV con Windows: Playnite, Steam Big Picture, controller e console portatili collegate a una docking station.",
  },
  schema: {
    collectionName: "Guide per giocare su Windows dal divano",
    homeBreadcrumbLabel: "Pagina iniziale",
    guidesBreadcrumbLabel: "Guide",
  },
  internalLinks: [
    "home",
    "download",
    "support",
    "guide-playnite-launch",
    "guide-playnite-focus",
    "guide-steam-big-picture",
    "guide-controller-session-settings",
    "guide-resource-control-session-restore",
    "guide-windows-console",
    "guide-windows-handheld",
    "guide-xbox-mode-windows-11",
  ],
  payload: {
    eyebrow: "Guide pratiche",
    heading: "Giocare su Windows dal divano, senza complicazioni.",
    description:
      "Guide concrete per giocare con il controller, configurare la TV, usare Steam Big Picture e Playnite e collegare una console portatile Windows a una docking station.",
    filters: {
      ariaLabel: "Filtra le guide per categoria",
      allLabel: "Tutte",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "Giocare su Windows dal divano",
        "windows-handhelds": "Console portatili Windows",
      },
    },
    card: { updatedLabel: "Aggiornata il" },
    article: {
      seoTitleSuffix: "Guide CouchMode",
      breadcrumbs: {
        ariaLabel: "Percorso di navigazione",
        homeLabel: "Pagina iniziale",
        guidesLabel: "Guide",
      },
      updatedLabel: "Aggiornata il",
      relatedHeading: "Guide correlate",
      allGuidesLabel: "Tutte le guide",
      actions: {
        ariaLabel: "Azioni della guida",
        supportingText: "Metti in pratica la guida sul tuo PC.",
        downloadLabel: "Scarica CouchMode",
        redditLabel: "Parlane su r/CouchMode",
      },
      notFound: {
        eyebrow: "404",
        heading: "Guida non trovata",
        description: "Questa guida non è pubblicata oppure il suo indirizzo è cambiato.",
        browseLabel: "Sfoglia le guide",
      },
    },
  },
};
