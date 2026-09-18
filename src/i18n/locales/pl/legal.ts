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
      "Prywatność w CouchMode: lokalne dane aplikacji, brak śledzenia rozgrywki, diagnostyka, pakiety dla pomocy technicznej, weryfikacja uprawnień Patreon, analityka strony i płatności.",
    ogTitle: "Polityka prywatności CouchMode",
    ogDescription:
      "Prywatność w CouchMode: lokalne dane aplikacji, brak śledzenia rozgrywki, diagnostyka, pakiety dla pomocy technicznej, weryfikacja uprawnień Patreon, analityka strony i płatności.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Prywatność" },
  internalLinks: ["home"],
  payload: {
    title: "Prywatność",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Sierpień 2026",
    },
    sections: [
      {
        heading: "Narzędzie dla Windows",
        paragraphs: [
          legalText(
            "CouchMode to narzędzie dla Windows, które pomaga przygotować sesję grania z kanapy na komputerze, zarządzać nią i przywrócić wcześniejsze ustawienia po jej zakończeniu. Korzystanie z Free nie wymaga konta.",
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
            "Bez śledzenia rozgrywki. Bez synchronizacji ustawień w chmurze. Weryfikacja licencji Pro odbywa się tylko wtedy, gdy jest potrzebna.",
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
            "Jeśli połączysz subskrypcję Patreon z CouchMode, weryfikacja licencji może obejmować przetwarzanie identyfikatora konta Patreon, adresu e-mail udostępnionego przez Patreon, poziomu i stanu subskrypcji, tokenu aktywacyjnego, identyfikatora instalacji lub urządzenia, wersji aplikacji, znacznika czasu aktywacji i stanu uprawnień.",
          ),
          legalText(
            "CouchMode wykorzystuje te informacje wyłącznie do weryfikacji dostępu do Pro, egzekwowania limitów urządzeń, rozwiązywania problemów z aktywacją oraz prowadzenia dokumentacji dotyczącej kont i bezpieczeństwa.",
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
        heading: "Płatności i licencje",
        paragraphs: [
          legalText(
            "CouchMode nie przechowuje danych kart płatniczych. Rozliczenia subskrypcji Patreon obsługuje Patreon.",
          ),
          legalText(
            "CouchMode może łączyć się z license.couchmode.app wyłącznie wtedy, gdy jest to potrzebne do weryfikacji dostępu do Pro, odświeżenia stanu uprawnień lub dezaktywacji urządzeń.",
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
      "Warunki CouchMode: Free, 7-dniowy okres próbny Pro, dostęp przez Patreon, dostępność trybu Xbox, gwarancja, odpowiedzialność i usługi zewnętrzne.",
    ogTitle: "Warunki korzystania z CouchMode",
    ogDescription:
      "Warunki CouchMode: Free, 7-dniowy okres próbny Pro, dostęp przez Patreon, dostępność trybu Xbox, gwarancja, odpowiedzialność i usługi zewnętrzne.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Warunki korzystania" },
  internalLinks: ["home"],
  payload: {
    title: "Warunki korzystania",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Sierpień 2026",
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
        heading: "Free i Pro",
        paragraphs: [
          legalText(
            "Jeden instalator może obejmować funkcje Free, 7-dniowy okres próbny Pro i aktywację Pro. Funkcje Free są dostępne bez zakupu. W publicznej wersji beta funkcje Pro wymagają aktywnego okresu próbnego lub aktywnej subskrypcji Patreon.",
          ),
          legalText(
            "Free obejmuje obsługę sesji uruchamianych padem, pełnoekranowy tryb Xbox w Windows tam, gdzie jest obsługiwany, Steam Big Picture, Playnite oraz powrót do pulpitu po zakończeniu sesji. Pro obejmuje zgodne własne aplikacje uruchamiające gry, Resource Control, Session Tweaks i szerszą automatyzację sesji.",
          ),
        ],
      },
      {
        heading: "7-dniowy okres próbny Pro",
        paragraphs: [
          legalText(
            "7-dniowy okres próbny Pro w aplikacji rozpoczyna się w CouchMode i nie wymaga konta ani karty płatniczej.",
          ),
          legalText(
            "Nowi subskrybenci spełniający warunki mogą rozpocząć osobny 7-dniowy okres próbny Patreon w dostępnych płatnych planach. Patreon wymaga metody płatności, ale nie pobiera opłaty za subskrypcję do zakończenia tego okresu próbnego. Okres próbny Patreon jest niezależny od 7-dniowego okresu próbnego Pro w aplikacji CouchMode. O uprawnieniu do skorzystania z niego decyduje Patreon.",
          ),
        ],
        list: [
          legalText("Okres próbny w aplikacji: 7 dni, bez konta CouchMode i karty płatniczej."),
          legalText(
            "Okres próbny Patreon: osobne 7 dni, obsługiwane przez Patreon, z wymaganą metodą płatności. Jeśli subskrypcja jest kontynuowana, opłaty zaczynają być naliczane po okresie próbnym.",
          ),
        ],
      },
      {
        heading: "Dostęp dla wspierających przez Patreon",
        paragraphs: [
          legalText(
            "W publicznej wersji beta dostęp do CouchMode Pro jest udostępniany przez subskrypcję Patreon. Licencja Pro pozostaje aktywna, dopóki subskrypcja jest aktywna.",
          ),
          legalText(
            "Jeśli subskrypcja wygaśnie, nie uda się jej opłacić, zostanie za nią przyznany zwrot lub zostanie anulowana, dostęp do Pro może wrócić do trybu Free po krótkim okresie karencji.",
          ),
          legalText(
            "Pro Version kosztuje 3 USD miesięcznie i obejmuje osobisty dostęp do Pro na maksymalnie 2 aktywnych urządzeniach z Windows. Pro Supporter kosztuje 5 USD miesięcznie i obejmuje osobisty dostęp do Pro na maksymalnie 5 aktywnych urządzeniach z Windows.",
          ),
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
        heading: "Limit aktywacji",
        paragraphs: [
          legalText(
            "Dostęp do Pro może podlegać limitom aktywacji zapobiegającym nadużyciom. Skontaktuj się z pomocą techniczną, jeśli potrzebujesz pomocy przy uzasadnionej zmianie urządzenia.",
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
            "Patreon może obsługiwać rozliczenia, subskrypcje, anulowanie i zwroty dotyczące dostępu do Pro przez Patreon. CouchMode nie przechowuje danych kart płatniczych.",
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
      "Zwroty za dostęp do CouchMode Pro w publicznej wersji beta: Patreon obsługuje płatności, anulowanie i zwroty. Pro może wrócić do Free po odświeżeniu uprawnień i okresie karencji.",
    ogTitle: "CouchMode: rozliczenia i zwroty na Patreonie",
    ogDescription:
      "Zwroty za dostęp do CouchMode Pro w publicznej wersji beta: Patreon obsługuje płatności, anulowanie i zwroty. Pro może wrócić do Free po odświeżeniu uprawnień i okresie karencji.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Zasady zwrotów" },
  internalLinks: ["home"],
  payload: {
    title: "Rozliczenia i zwroty na Patreonie",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Sierpień 2026",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Free nie wymaga zakupu.")] },
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
          legalText(
            "Jeśli subskrypcja zostanie anulowana, zostanie za nią przyznany zwrot lub przestanie być aktywna, dostęp do Pro wraca do Free po odświeżeniu uprawnień i upływie ewentualnego okresu karencji. Ustawienia CouchMode pozostają zapisane, a bezpłatna obsługa sesji nadal jest dostępna.",
          ),
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
    title: "CouchMode Pro: dostęp dla wspierających przez Patreon",
    description:
      "W publicznej wersji beta CouchMode Pro wymaga aktywnej subskrypcji Patreon. Zacznij od 7 dni okresu próbnego Pro w aplikacji, a potem połącz Patreon, by kontynuować.",
    ogTitle: "CouchMode Pro: dostęp dla wspierających przez Patreon",
    ogDescription:
      "W publicznej wersji beta CouchMode Pro wymaga aktywnej subskrypcji Patreon. Zacznij od 7 dni okresu próbnego Pro w aplikacji, a potem połącz Patreon, by kontynuować.",
  },
  schema: { homeBreadcrumbLabel: "Strona główna", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "Uzyskaj CouchMode Pro",
    chrome: {
      backToHomepageLabel: "Wróć na stronę główną",
      lastUpdatedLabel: "Ostatnia aktualizacja",
      lastUpdated: "Sierpień 2026",
    },
    bridge: {
      redirectingLabel: "Przekierowanie do serwisu Patreon...",
      fallbackDescription: "Jeśli Patreon nie otworzy się automatycznie, użyj przycisku poniżej.",
    },
    patreonCtaLabel: "Przejdź do serwisu Patreon",
  },
};
