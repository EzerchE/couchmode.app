import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const frenchGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "fr",
  path: "/guides-pc-tv/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Guides pour jouer sous Windows depuis le canapé | CouchMode",
    description:
      "Des guides pratiques pour jouer sous Windows depuis le canapé : Playnite, Steam Big Picture, manettes, configurations TV et consoles portables sur station d'accueil.",
    ogTitle: "Guides pour jouer sous Windows depuis le canapé | CouchMode",
    ogDescription:
      "Des guides pratiques pour jouer sous Windows depuis le canapé : Playnite, Steam Big Picture, manettes, configurations TV et consoles portables sur station d'accueil.",
  },
  schema: {
    collectionName: "Guides pour jouer sous Windows depuis le canapé",
    homeBreadcrumbLabel: "Accueil",
    guidesBreadcrumbLabel: "Guides",
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
    eyebrow: "Guides pratiques",
    heading: "Jouer sous Windows depuis le canapé, sans détour.",
    description:
      "Des conseils concrets pour les sessions à la manette, les configurations TV, Steam Big Picture, Playnite et les consoles portables Windows sur station d'accueil.",
    filters: {
      ariaLabel: "Filtrer les guides par catégorie",
      allLabel: "Tous",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "Jouer sous Windows depuis le canapé",
        "windows-handhelds": "Consoles portables Windows",
      },
    },
    card: { updatedLabel: "Mis à jour le" },
    article: {
      seoTitleSuffix: "Guides CouchMode",
      breadcrumbs: { ariaLabel: "Fil d'Ariane", homeLabel: "Accueil", guidesLabel: "Guides" },
      updatedLabel: "Mis à jour le",
      relatedHeading: "Guides associés",
      allGuidesLabel: "Tous les guides",
      actions: {
        ariaLabel: "Actions du guide",
        supportingText: "Poursuivez avec votre propre installation.",
        downloadLabel: "Télécharger CouchMode",
        redditLabel: "Échanger sur r/CouchMode",
      },
      notFound: {
        eyebrow: "404",
        heading: "Guide introuvable",
        description: "Ce guide n'est pas publié ou son adresse a changé.",
        browseLabel: "Consulter les guides",
      },
    },
  },
};
