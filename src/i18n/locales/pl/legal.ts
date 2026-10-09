import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { LegalInline, SurfacePacketBase } from "../../packets";

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

export const polishPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "pl",
  path: "/prywatnosc/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Polityka prywatności CouchMode",
    description:
      "Prywatność w CouchMode: lokalne dane aplikacji, brak śledzenia rozgrywki, diagnostyka, pakiety dla pomocy technicznej, weryfikacja statusu wspierającego na Patreon, analityka strony i płatności.",
    ogTitle: "Polityka prywatności CouchMode",
    ogDescription:
      "Prywatność w CouchMode: lokalne dane aplikacji, brak śledzenia rozgrywki, diagnostyka, pakiety dla pomocy technicznej, weryfikacja statusu wspierającego na Patreon, analityka strony i płatności.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Prywatność" },
  internalLinks: ["home"],
  payload: {
    title: "Prywatność",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Październik 2026",
    },
    sections: [
      {
        heading: "Narzędzie dla Windows",
        paragraphs: [
          legalText(
            "CouchMode to narzędzie dla Windows, które pomaga przygotować sesję grania z kanapy na komputerze, zarządzać nią i przywrócić wcześniejsze ustawienia po jej zakończeniu. Korzystanie z publicznej bety nie wymaga konta.",
          ),
        ],
      },
      {
        heading: "Lokalne dane aplikacji",
        paragraphs: [
          legalText(
            "CouchMode może zapisywać ustawienia aplikacji i dzienniki lokalnie na urządzeniu, aby zapamiętywać preferencje, diagnozować problemy i przywracać stan sesji.",
          ),
        ],
      },
      {
        heading: "Prywatność rozgrywki",
        paragraphs: [
          legalText("CouchMode nie zbiera danych o rozgrywce ani nie śledzi, w jakie gry grasz."),
          legalText(
            "Bez śledzenia rozgrywki. Bez synchronizacji ustawień w chmurze. Status wspierającego na Patreon jest sprawdzany tylko wtedy, gdy jest to potrzebne.",
          ),
        ],
      },
      {
        heading: "Diagnostyka i pomoc techniczna",
        paragraphs: [
          legalText(
            "Jeśli skontaktujesz się z pomocą techniczną lub wyeksportujesz pakiet diagnostyczny, może on zawierać dzienniki aplikacji, wersje Windows i CouchMode, tryb uruchamiania, liczbę lub stan kontrolerów, układ ekranów oraz komunikaty o błędach lub stanie aplikacji.",
          ),
          legalText(
            "CouchMode może wysłać zgłoszenie problemu tylko wtedy, gdy zdecydujesz się je przesłać z aplikacji. Przed wysłaniem możesz przejrzeć dokładną zawartość zgłoszenia, które może obejmować opisane wyżej dane diagnostyczne. Nic nie jest wysyłane automatycznie, a anulowanie lub zamknięcie zgłoszenia bez wysłania nie powoduje przekazania żadnych danych.",
          ),
          legalSupportEmail(
            "Jeśli napiszesz do pomocy technicznej na ",
            ", Twój adres e-mail i treść wiadomości mogą zostać wykorzystane do udzielenia odpowiedzi na zgłoszenie.",
          ),
        ],
      },
      {
        heading: "Weryfikacja subskrypcji Patreon",
        paragraphs: [
          legalText(
            "Jeśli połączysz subskrypcję Patreon z CouchMode, weryfikacja subskrypcji wspierającego może obejmować przetwarzanie identyfikatora konta Patreon, adresu e-mail udostępnionego przez Patreon, poziomu i stanu subskrypcji, tokenu aktywacyjnego, identyfikatora instalacji lub urządzenia, wersji aplikacji, znacznika czasu aktywacji i statusu wspierającego.",
          ),
          legalText(
            "CouchMode wykorzystuje te informacje wyłącznie do weryfikacji statusu wspierającego, stosowania limitu urządzeń dla wspierających, rozwiązywania problemów z kontem lub urządzeniem oraz prowadzenia dokumentacji dotyczącej kont i bezpieczeństwa.",
          ),
        ],
      },
      {
        heading: "Analityka strony internetowej",
        paragraphs: [
          legalText(
            "Niezbędne funkcje strony działają domyślnie. Cloudflare Web Analytics oraz tag Google dostarczany przez Google Tag Manager uruchamiają się dopiero po wyrażeniu zgody na analitykę w oknie ustawień prywatności. Narzędzia te pomagają nam analizować zbiorcze dane o ruchu na stronie, takie jak odsłony i źródła odesłań. Są niezależne od aplikacji CouchMode na komputerze, która nie śledzi rozgrywki.",
          ),
        ],
        action: { kind: "open-consent", label: "Zarządzaj ustawieniami prywatności" },
      },
      {
        heading: "Płatności i subskrypcje wspierających",
        paragraphs: [
          legalText(
            "CouchMode nie przechowuje danych kart płatniczych. Rozliczenia subskrypcji Patreon obsługuje Patreon.",
          ),
          legalText(
            "CouchMode może łączyć się z license.couchmode.app wyłącznie wtedy, gdy jest to potrzebne do weryfikacji statusu wspierającego na Patreon, odświeżenia stanu subskrypcji lub zarządzania połączonymi urządzeniami.",
          ),
        ],
      },
    ],
  },
};

export const polishTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "pl",
  path: "/warunki/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Warunki korzystania z CouchMode",
    description:
      "W publicznej becie wszystkie funkcje są bezpłatne. Pro i Pro Supporter oznaczają status wspierającego, a nie odblokowanie funkcji.",
    ogTitle: "Warunki korzystania z CouchMode",
    ogDescription:
      "W publicznej becie wszystkie funkcje są bezpłatne. Pro i Pro Supporter oznaczają status wspierającego, a nie odblokowanie funkcji.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Warunki korzystania" },
  internalLinks: ["home"],
  payload: {
    title: "Warunki korzystania",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Październik 2026",
    },
    sections: [
      {
        heading: "Licencja",
        paragraphs: [
          legalText(
            "CouchMode jest udostępniany na licencji, a nie sprzedawany. To narzędzie dla Windows służące do przygotowywania sesji i przywracania ustawień po ich zakończeniu, współpracujące z Windows i istniejącymi interfejsami do gier.",
          ),
          legalText(
            "CouchMode nie zastępuje powłoki Windows ani sposobu uruchamiania systemu. Automatyzacja uruchamiania jest opcjonalna i pozostaje pod kontrolą użytkownika.",
          ),
          legalText(
            "CouchMode nie modyfikuje wewnętrznych mechanizmów Windows, nie instaluje sterowników jądra, nie omija zabezpieczeń ani nie wprowadza poprawek do gier lub systemu Windows.",
          ),
        ],
      },
      {
        heading: "Jedna publiczna beta. Wszystkie funkcje.",
        paragraphs: [
          [{ kind: "text", text: "W publicznej becie wszystkie funkcje są bezpłatne." }],
          [
            {
              kind: "text",
              text: "Do korzystania z publicznej bety nie potrzebujesz konta ani karty płatniczej.",
            },
          ],
          [
            {
              kind: "text",
              text: "Uruchamianie zgodnym kontrolerem i własne programy uruchamiające. Tryb Xbox tam, gdzie jest obsługiwany, Steam Big Picture i Playnite. Resource Control dla wybranych dostępnych aplikacji. Obsługiwane ustawienia ekranu, HDR, dźwięku i sesji. Przywracanie ustawień zmienionych przez CouchMode.",
            },
          ],
        ],
      },
      {
        heading: "Co daje subskrypcja na Patreon?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro i Pro Supporter oznaczają status wspierającego, a nie odblokowanie funkcji.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro: status wspierającego na maksymalnie 2 aktywnych urządzeniach z Windows.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro Supporter: status wspierającego na maksymalnie 5 aktywnych urządzeniach z Windows i większe wsparcie projektu.",
            },
          ],
          [
            {
              kind: "text",
              text: "Wspierający na Patreon mogą włączyć odbieranie aktualizacji testowych bezpośrednio przez CouchMode, gdy wersje testowe będą dostępne.",
            },
          ],
          [
            {
              kind: "text",
              text: "Po wygaśnięciu subskrypcji odbieranie wersji testowych zostaje wstrzymane. Standardowe aktualizacje działają dalej, bez cofania zainstalowanej wersji. Funkcje publicznej bety pozostają bezpłatne.",
            },
          ],
        ],
      },
      {
        heading: "Buy Me a Coffee",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Wolisz jednorazową wpłatę? Buy Me a Coffee to forma podziękowania, a nie subskrypcja. Wpłata nie nadaje statusu Pro, uprawnień ani aktywacji urządzeń.",
            },
          ],
        ],
      },
      {
        heading: "Dostępność trybu Xbox",
        paragraphs: [
          legalText(
            "Tryb Xbox i pełnoekranowe środowisko Xbox są udostępniane przez Windows i Microsoft. Ich dostępność i działanie zależą od urządzenia, wersji Windows, obsługi w aplikacji Xbox, etapu wdrażania i obsługi w systemie. CouchMode nie może udostępnić trybu Xbox na nieobsługiwanych systemach.",
          ),
        ],
      },
      {
        heading: "Automatyzacja i przywracanie ustawień",
        paragraphs: [
          legalText(
            "CouchMode dąży do wprowadzania bezpiecznych, odwracalnych zmian na czas sesji. Przed włączeniem automatyzacji sprawdź ustawienia, szczególnie opcje ekranu, dźwięku, zasilania, uruchamiania i Resource Control.",
          ),
          legalText(
            "CouchMode nie obiecuje wzrostu wydajności ani identycznego działania na każdym urządzeniu z Windows.",
          ),
        ],
      },
      {
        heading: "Limit urządzeń dla wspierających",
        paragraphs: [
          legalText(
            "Status wspierającego i odbieranie aktualizacji testowych są dostępne na ograniczonej liczbie aktywnych urządzeń z Windows. Limit ten nie ogranicza zwykłych funkcji publicznej bety. Skontaktuj się z pomocą techniczną, jeśli potrzebujesz pomocy po uzasadnionej zmianie urządzenia.",
          ),
        ],
      },
      {
        heading: "Brak gwarancji",
        paragraphs: [
          legalText(
            "CouchMode jest udostępniany w stanie, w jakim się znajduje. Pracujemy nad jego niezawodnością, ale nie możemy zagwarantować nieprzerwanego ani bezbłędnego działania na każdej konfiguracji PC.",
          ),
        ],
      },
      {
        heading: "Ograniczenie odpowiedzialności",
        paragraphs: [
          legalText(
            "W maksymalnym zakresie dozwolonym przez prawo CouchMode nie ponosi odpowiedzialności za szkody pośrednie, uboczne ani następcze.",
          ),
        ],
      },
      {
        heading: "Usługi zewnętrzne",
        paragraphs: [
          legalText(
            "Patreon może obsługiwać rozliczenia, subskrypcje, anulowanie i zwroty dotyczące subskrypcji wspierających na Patreon. CouchMode nie przechowuje danych kart płatniczych.",
          ),
        ],
      },
      { heading: "Kontakt", paragraphs: [legalSupportEmail("Pytania można kierować na ", ".")] },
    ],
  },
};

export const polishRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "pl",
  path: "/zwroty/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: rozliczenia i zwroty na Patreonie",
    description:
      "Patreon obsługuje płatności, anulowanie subskrypcji i zwroty dla wspierających CouchMode. Funkcje publicznej bety pozostają bezpłatne.",
    ogTitle: "CouchMode: rozliczenia i zwroty na Patreonie",
    ogDescription:
      "Patreon obsługuje płatności, anulowanie subskrypcji i zwroty dla wspierających CouchMode. Funkcje publicznej bety pozostają bezpłatne.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Zasady zwrotów" },
  internalLinks: ["home"],
  payload: {
    title: "Rozliczenia i zwroty na Patreonie",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Październik 2026",
    },
    sections: [
      {
        heading: "W publicznej becie wszystkie funkcje są bezpłatne.",
        paragraphs: [
          [{ kind: "text", text: "W publicznej becie wszystkie funkcje są bezpłatne." }],
        ],
      },
      {
        paragraphs: [
          legalText(
            "Subskrypcje CouchMode Pro i Pro Supporter są rozliczane i zarządzane przez Patreon. CouchMode nie prowadzi osobnego programu zwrotów poza Patreonem, nie przechowuje danych kart i nie przetwarza opłat Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText("Uprawnienia do zwrotu i jego realizacja podlegają zasadom Patreon."),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Anulowanie subskrypcji Patreon zapobiega przyszłym odnowieniom zgodnie z zasadami rozliczeń Patreon. Samo anulowanie nie powoduje zwrotu wcześniejszych opłat.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreon może naliczać VAT, GST, podatek od sprzedaży lub podobne opłaty w zależności od lokalizacji subskrybenta i świadczeń objętych subskrypcją. Kwoty te są obliczane i obsługiwane przez Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          [
            {
              kind: "text",
              text: "Po wygaśnięciu subskrypcji odbieranie wersji testowych zostaje wstrzymane. Standardowe aktualizacje działają dalej, bez cofania zainstalowanej wersji. Funkcje publicznej bety pozostają bezpłatne.",
            },
          ],
        ],
      },
      {
        paragraphs: [
          legalSupportEmail("W sprawie pomocy dotyczącej produktu CouchMode napisz na ", "."),
        ],
      },
    ],
  },
};

export const polishCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "pl",
  path: "/buy/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Wesprzyj CouchMode",
    description:
      "CouchMode jest bezpłatny w okresie publicznej bety. Jeśli Ci się przydaje, możesz wesprzeć rozwój, testy zgodności i kolejne ulepszenia.",
    ogTitle: "Wesprzyj CouchMode",
    ogDescription:
      "CouchMode jest bezpłatny w okresie publicznej bety. Jeśli Ci się przydaje, możesz wesprzeć rozwój, testy zgodności i kolejne ulepszenia.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Wesprzyj CouchMode" },
  internalLinks: ["home"],
  payload: {
    title: "Wesprzyj CouchMode",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Sierpień 2026",
    },
    support: supporterCopy["pl"],
  },
};
