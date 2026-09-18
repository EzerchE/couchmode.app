import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const spanishGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "es",
  path: "/guias-pc-tv/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Guías para jugar en Windows desde el sofá | CouchMode",
    description:
      "Guías prácticas para jugar en Windows desde el sofá: Playnite, Steam Big Picture, mandos, configuraciones con TV y consolas portátiles conectadas a una base.",
    ogTitle: "Guías para jugar en Windows desde el sofá | CouchMode",
    ogDescription:
      "Guías prácticas para jugar en Windows desde el sofá: Playnite, Steam Big Picture, mandos, configuraciones con TV y consolas portátiles conectadas a una base.",
  },
  schema: {
    collectionName: "Guías para jugar en Windows desde el sofá",
    homeBreadcrumbLabel: "Inicio",
    guidesBreadcrumbLabel: "Guías",
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
    eyebrow: "Guías prácticas",
    heading: "Jugar en Windows desde el sofá, explicado sin rodeos.",
    description:
      "Guías prácticas para sesiones con mando, configuraciones con TV, Steam Big Picture, Playnite y consolas portátiles Windows conectadas a una base.",
    filters: {
      ariaLabel: "Filtrar guías por categoría",
      allLabel: "Todas",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "Jugar en Windows desde el sofá",
        "windows-handhelds": "Consolas portátiles Windows",
      },
    },
    card: { updatedLabel: "Actualizado el" },
    article: {
      seoTitleSuffix: "Guías de CouchMode",
      breadcrumbs: { ariaLabel: "Ruta de navegación", homeLabel: "Inicio", guidesLabel: "Guías" },
      updatedLabel: "Actualizado el",
      relatedHeading: "Guías relacionadas",
      allGuidesLabel: "Todas las guías",
      actions: {
        ariaLabel: "Acciones de la guía",
        supportingText: "Continúa con tu propia configuración.",
        downloadLabel: "Descargar CouchMode",
        redditLabel: "Conversar en r/CouchMode",
      },
      notFound: {
        eyebrow: "404",
        heading: "Guía no encontrada",
        description: "Esta guía no está publicada o su dirección ha cambiado.",
        browseLabel: "Ver las guías",
      },
    },
  },
};
