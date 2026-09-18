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
      "Pobierz podpisaną publiczną wersję beta CouchMode dla Windows 11. Sprawdź opublikowaną sumę SHA-256 i informacje o najnowszym wydaniu.",
    ogTitle: "Pobierz CouchMode dla Windows",
    ogDescription:
      "Pobierz podpisaną publiczną wersję beta CouchMode dla Windows 11. Sprawdź opublikowaną sumę SHA-256 i informacje o najnowszym wydaniu.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Dostępność pobierania" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Publiczna wersja beta", closed: "Zamknięte testy przed publiczną wersją beta" },
    heading: { before: "Status", accent: "wydania" },
    statusDescription: {
      open: "CouchMode dla Windows jest w publicznej wersji beta. Poniższy instalator jest podpisany i opatrzony znacznikiem czasu. Publikujemy sumę SHA256 i informacje o wydaniu, aby można było zweryfikować plik przed uruchomieniem.",
      closed:
        "CouchMode dla Windows jest w fazie zamkniętych testów. Pobieranie zostanie udostępnione tutaj dopiero po zatwierdzeniu podpisanej wersji, jej sumy SHA256 i informacji o wydaniu.",
    },
    directDownload: {
      label: "Pobierz dla Windows",
      unavailableLabel: "Pobieranie dostępne wkrótce",
    },
    microsoftStore: {
      label: "Pobierz CouchMode z Microsoft Store",
      supportingText:
        "Dwa oficjalne sposoby instalacji CouchMode: podpisany instalator powyżej lub Microsoft Store.",
    },
    facts: {
      directDownload: "Pobieranie bezpośrednie",
      directDownloadOpen: "Dostępne",
      directDownloadClosed: "Jeszcze niedostępne",
      platform: "Platforma",
      platformValue: "Windows 11 · 64-bit",
      installChannels: "Kanały instalacji",
      installChannelsValue: "Pobieranie bezpośrednie lub Microsoft Store",
      install: "Instalacja",
      installValue:
        "Instalator dla bieżącego użytkownika, bez uprawnień administratora, z wbudowanym sprawdzaniem aktualizacji",
      codeSigning: "Podpis cyfrowy",
      signedValue: "Podpis Authenticode ze znacznikiem czasu",
      unsignedValue: "W przygotowaniu; do czasu włączenia podpisywania wersje nie są podpisane",
      pricing: "Cennik",
      pricingValue:
        "Free obejmuje pełnoekranowy tryb Xbox, Steam Big Picture i Playnite. 7-dniowy okres próbny Pro w aplikacji dodaje więcej automatyzacji, bez konta i karty płatniczej",
    },
    cards: {
      included: {
        heading: "Co otrzymasz",
        body: "Jeden instalator CouchMode dla Windows z 7-dniowym okresem próbnym Pro w aplikacji. Do wypróbowania Pro nie potrzebujesz konta ani karty płatniczej.",
      },
      officialSources: {
        heading: "Dwa oficjalne źródła",
        body: "Pobieraj CouchMode z couchmode.app lub Microsoft Store. Jeśli instalator pochodzi z innego miejsca, sprawdź poniższą sumę SHA256 oraz wydawcę wyświetlanego przez Windows przy uruchamianiu.",
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
        "Przed uruchomieniem porównaj tę sumę kontrolną z pobranym plikiem. Windows wyświetli również wydawcę podczas uruchamiania instalatora.",
      closedDescription:
        "To metadane wewnętrznej wersji sprzed publicznego udostępnienia, a nie kandydata do publicznego pobrania. Publikujemy je, aby umożliwić weryfikację wersji, którą już masz w ramach zamkniętych testów.",
      openChecksumLabel: "SHA256 (sprawdź przed uruchomieniem)",
      closedChecksumLabel: "SHA256 (do weryfikacji posiadanej wersji)",
      notesLabel: "Co nowego",
      knownIssuesLabel: "Znane problemy",
    },
    support: {
      beforeEmail:
        "Testujesz CouchMode w ramach zamkniętych testów i potrzebujesz pomocy? Napisz na",
      afterEmail: ".",
    },
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
      open: "Najnowszą podpisaną publiczną wersję beta znajdziesz na stronie pobierania. Starsze wpisy zachowujemy jako historię wydań.",
      closed:
        "Publiczne pobieranie nie jest jeszcze włączone. Ta strona przedstawia opublikowane metadane wydań, które mogą różnić się od wersji wewnętrznej przygotowywanej do podpisanej publicznej bety.",
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
      "CouchMode to podpisana publiczna wersja beta dla Windows 11 · 64-bit. Dane diagnostyczne powstają lokalnie na Twoim komputerze, a zgłoszenie trafia do nas dopiero wtedy, gdy je wyślesz.",
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
        "Czy problem wystąpił w Free, Trial czy Pro",
        "Przy problemach z dostępem do Pro: plan Pro Version lub Pro Supporter",
        "Liczba już aktywowanych urządzeń",
        "Zrzut ekranu lub treść komunikatu błędu aktywacji",
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
