import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const polishGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "pl",
  path: "/poradniki/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Granie na telewizorze z Windows: poradniki | CouchMode",
    description:
      "Praktyczne poradniki o graniu z kanapy na PC: Playnite, Steam Big Picture, pady, telewizory i przenośne komputery z Windows w stacji dokującej.",
    ogTitle: "Granie na telewizorze z Windows: poradniki | CouchMode",
    ogDescription:
      "Praktyczne poradniki o graniu z kanapy na PC: Playnite, Steam Big Picture, pady, telewizory i przenośne komputery z Windows w stacji dokującej.",
  },
  schema: {
    collectionName: "Poradniki o graniu z kanapy na PC z Windows",
    homeBreadcrumbLabel: "Strona główna",
    guidesBreadcrumbLabel: "Poradniki",
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
    eyebrow: "Baza wiedzy",
    heading: "Granie z kanapy na Windows, bez zbędnych komplikacji.",
    description:
      "Praktyczne wskazówki dotyczące grania padem, konfiguracji telewizora, Steam Big Picture, Playnite i przenośnych komputerów z Windows w stacji dokującej.",
    filters: {
      ariaLabel: "Filtruj poradniki według kategorii",
      allLabel: "Wszystkie",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "Granie z kanapy na Windows",
        "windows-handhelds": "Przenośne komputery z Windows",
      },
    },
    card: { updatedLabel: "Aktualizacja" },
    article: {
      seoTitleSuffix: "Poradniki CouchMode",
      breadcrumbs: {
        ariaLabel: "Ścieżka nawigacji",
        homeLabel: "Strona główna",
        guidesLabel: "Poradniki",
      },
      updatedLabel: "Aktualizacja",
      relatedHeading: "Powiązane poradniki",
      allGuidesLabel: "Wszystkie poradniki",
      actions: {
        ariaLabel: "Dalsze działania",
        supportingText: "Wypróbuj we własnej konfiguracji.",
        downloadLabel: "Pobierz CouchMode",
        redditLabel: "Porozmawiaj na r/CouchMode",
      },
      notFound: {
        eyebrow: "404",
        heading: "Nie znaleziono poradnika",
        description: "Ten poradnik nie został opublikowany lub zmienił adres.",
        browseLabel: "Przeglądaj poradniki",
      },
    },
  },
};
