import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const brazilianPortugueseGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "pt-BR",
  path: "/guias/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Guias para jogar no Windows no sofá | CouchMode",
    description:
      "Guias práticos para jogar no Windows no sofá: Playnite, Steam Big Picture, controles, PC na TV e PCs portáteis conectados a uma base.",
    ogTitle: "Guias para jogar no Windows no sofá | CouchMode",
    ogDescription:
      "Guias práticos para jogar no Windows no sofá: Playnite, Steam Big Picture, controles, PC na TV e PCs portáteis conectados a uma base.",
  },
  schema: {
    collectionName: "Guias para jogar no Windows no sofá",
    homeBreadcrumbLabel: "Início",
    guidesBreadcrumbLabel: "Guias",
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
    eyebrow: "Guias práticos",
    heading: "Jogar no Windows no sofá, sem complicação.",
    description:
      "Orientações práticas para sessões com controle, PC na TV, Steam Big Picture, Playnite e PCs portáteis com Windows conectados a uma base.",
    filters: {
      ariaLabel: "Filtrar guias por categoria",
      allLabel: "Todos",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "Jogar no Windows no sofá",
        "windows-handhelds": "PCs portáteis com Windows",
      },
    },
    card: { updatedLabel: "Atualizado em" },
    article: {
      seoTitleSuffix: "Guias CouchMode",
      breadcrumbs: { ariaLabel: "Caminho de navegação", homeLabel: "Início", guidesLabel: "Guias" },
      updatedLabel: "Atualizado em",
      relatedHeading: "Guias relacionados",
      allGuidesLabel: "Todos os guias",
      actions: {
        ariaLabel: "Ações do guia",
        supportingText: "Agora é hora de ajustar a sua configuração.",
        downloadLabel: "Baixar CouchMode",
        redditLabel: "Conversar no r/CouchMode",
      },
      notFound: {
        eyebrow: "404",
        heading: "Guia não encontrado",
        description: "Este guia não foi publicado ou mudou de endereço.",
        browseLabel: "Ver guias",
      },
    },
  },
};
