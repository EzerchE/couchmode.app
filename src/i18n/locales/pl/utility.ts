import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";
import { polishReleaseEditorialOverlay } from "./releases";

export const polishDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "pl",
  path: "/pobierz/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Pobierz CouchMode dla Windows",
    description:
      "Pobieraj CouchMode wyłącznie z couchmode.app lub z oficjalnych wydań CouchMode na GitHub. Przed uruchomieniem instalatora porównaj pełną sumę SHA-256 i rozmiar pliku.",
    ogTitle: "Pobierz CouchMode dla Windows",
    ogDescription:
      "Pobieraj CouchMode wyłącznie z couchmode.app lub z oficjalnych wydań CouchMode na GitHub. Przed uruchomieniem instalatora porównaj pełną sumę SHA-256 i rozmiar pliku.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Dostępność pobierania" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Publiczna wersja beta", closed: "Zamknięte testy przed publiczną wersją beta" },
    heading: { before: "Pobierz", accent: "CouchMode" },
    statusDescription: {
      open: "Standardowa wersja dla Windows 11.",
      closed: "Plik nie został jeszcze opublikowany",
    },
    directDownload: {
      label: "Pobierz dla Windows",
      unavailableLabel: "Plik nie został jeszcze opublikowany",
    },
    facts: {
      directDownload: "Pobieranie bezpośrednie",
      directDownloadOpen: "Dostępne",
      directDownloadClosed: "Jeszcze niedostępne",
      platform: "Platforma",
      platformValue: "Windows 11 · 64-bit",
      installChannels: "Kanały instalacji",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "Instalacja",
      installValue:
        "Instalator dla bieżącego użytkownika, bez uprawnień administratora, z wbudowanym sprawdzaniem aktualizacji",
      codeSigning: "Podpis cyfrowy",
      signedValue: "Podpis Authenticode ze znacznikiem czasu",
      unsignedValue: "Bez podpisu: sprawdź SHA-256",
      pricing: "Cennik",
      pricingValue: "Bez opłat",
    },
    cards: {
      included: {
        heading: "Co otrzymasz",
        body: "Wszystkie funkcje CouchMode. Nie potrzebujesz konta, karty płatniczej ani subskrypcji na Patreon.",
      },
      officialSources: {
        heading: "Kanały instalacji",
        body: "Pobieraj CouchMode wyłącznie z couchmode.app lub z oficjalnych wydań CouchMode na GitHub. Przed uruchomieniem instalatora porównaj pełną sumę SHA-256 i rozmiar pliku.",
      },
      noPublicInstaller: {
        heading: "Instalator nie jest jeszcze publicznie dostępny",
        body: "Obecnie nie ma publicznego linku do pobrania. Instalatory CouchMode oferowane gdzie indziej nie pochodzą od nas. Poczekaj, aż oficjalna wersja pojawi się tutaj.",
      },
    },
    build: {
      openHeading: "Szczegóły wersji",
      closedHeading: "Najnowsze metadane wersji wewnętrznej przed publikacją",
      openDescription:
        "Pobieraj CouchMode wyłącznie z couchmode.app lub z oficjalnych wydań CouchMode na GitHub. Przed uruchomieniem instalatora porównaj pełną sumę SHA-256 i rozmiar pliku.",
      closedDescription: "Plik nie został jeszcze opublikowany",
      openChecksumLabel: "SHA256 (sprawdź przed uruchomieniem)",
      closedChecksumLabel: "SHA256 (do weryfikacji posiadanej wersji)",
      notesLabel: "Co nowego",
      knownIssuesLabel: "Znane problemy",
    },
    support: { beforeEmail: "Potrzebujesz pomocy z CouchMode? Napisz na ", afterEmail: "." },
    installation: installationCopy["pl"],
    supportCouchMode: supporterCopy["pl"],
  },
};

export const polishChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "pl",
  path: "/historia-zmian/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Historia zmian CouchMode: wydania beta dla Windows",
    description:
      "Informacje o wydaniach beta CouchMode dla Windows i znanych problemach, od najnowszego wydania.",
    ogTitle: "Historia zmian CouchMode: wydania beta dla Windows",
    ogDescription:
      "Informacje o wydaniach beta CouchMode dla Windows i znanych problemach, od najnowszego wydania.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Historia zmian" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "Historia zmian",
    heading: "Co nowego w CouchMode",
    description:
      "Informacje o wydaniach beta CouchMode dla Windows i znanych problemach, od najnowszego wydania.",
    downloadStatus: {
      open: "W publicznej becie wszystkie funkcje są bezpłatne.",
      closed: "Plik nie został jeszcze opublikowany",
    },
    release: {
      latestLabel: "Najnowsze",
      previousLabel: "Poprzednie",
      notesLabel: "Co nowego",
      knownIssuesLabel: "Znane problemy",
      checksumLabel: "SHA256",
      editorial: polishReleaseEditorialOverlay,
    },
  },
};

export const polishSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "pl",
  path: "/pomoc/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Pomoc CouchMode: granie z kanapy na Windows",
    description:
      "Uzyskaj pomoc z CouchMode. Podaj wersje Windows i CouchMode, cel uruchamiania, typ urządzenia, dane pada, w razie potrzeby stan subskrypcji, i dołącz pakiet diagnostyczny.",
    ogTitle: "Pomoc CouchMode: granie z kanapy na Windows",
    ogDescription:
      "Uzyskaj pomoc z CouchMode. Podaj wersje Windows i CouchMode, cel uruchamiania, typ urządzenia, dane pada, w razie potrzeby stan subskrypcji, i dołącz pakiet diagnostyczny.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Pomoc" },
  internalLinks: ["home"],
  payload: {
    title: "Pomoc",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Sierpień 2026",
    },
    introduction: [
      "Potrzebujesz pomocy z CouchMode? Najszybciej zgłosisz problem bezpośrednio w aplikacji. CouchMode pozwala wysłać zgłoszenie błędu, problemu ze zgodnością lub propozycję funkcji. Wysłanie zawsze zależy od Ciebie. Wcześniej możesz przejrzeć dokładną zawartość zgłoszenia, a nic nie jest wysyłane automatycznie.",
      "CouchMode to publiczna wersja beta dla Windows 11 · 64-bit. Dane diagnostyczne powstają lokalnie na Twoim komputerze, a zgłoszenie trafia do nas dopiero wtedy, gdy je wyślesz.",
    ],
    contact: {
      beforeEmail: "Możesz też napisać do nas na",
      afterEmail:
        "i podać wersje Windows i CouchMode, cel uruchamiania, informacje o padzie oraz krótki opis problemu.",
    },
    include: {
      heading: "Dołącz następujące informacje:",
      items: [
        "Wersja Windows",
        "Wersja CouchMode",
        "Typ urządzenia: ROG Ally, inny przenośny komputer lub komputer stacjonarny",
        "Typ kontrolera",
        "Cel uruchamiania: pełnoekranowy tryb Xbox, jeśli jest obsługiwany, Steam Big Picture, Playnite lub własna aplikacja",
        "Czy pełnoekranowy tryb Xbox w Windows jest dostępny, czy używana jest aplikacja zastępcza",
        "Czy zgłoszenie dotyczy błędu, propozycji funkcji czy problemu ze zgodnością",
        "Co się stało",
        "Przy problemach ze statusem wspierającego na Patreon: poziom subskrypcji Pro lub Pro Supporter",
        "Liczba urządzeń połączonych ze statusem wspierającego",
        "Zrzut ekranu lub treść komunikatu błędu połączenia konta lub urządzenia",
        "W CouchMode otwórz About > Export support bundle i w miarę możliwości dołącz wygenerowany plik.",
      ],
      diagnostics: {
        beforeShortcut:
          "Jeśli na ekranie jest coś nie tak, na przykład niepożądane okno lub pad nie pozwala poruszać się po pełnoekranowym interfejsie, naciśnij",
        afterShortcutBeforePath:
          "gdy problem jest nadal widoczny. CouchMode zapisze zrzut bieżącego stanu okien w osobnym pliku w",
        afterPathBeforeLog: ", obok ",
        betweenLogReferences:
          ". Nie zmienia to niczego na ekranie i działa niezależnie od tego, czy włączone jest rejestrowanie debugowania. Nic nie jest wysyłane automatycznie: plik pozostaje na Twoim komputerze i to Ty decydujesz, co przekazać. Dołącz go wraz z ",
        afterLog: ".",
      },
    },
    privacy: {
      beforeEmail:
        "Nie publikuj prywatnych danych rozliczeniowych. W sprawach konta lub subskrypcji napisz na",
      afterEmail: ".",
    },
  },
};
