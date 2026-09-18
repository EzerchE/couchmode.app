import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const polishHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "pl",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: zacznij grać na PC z Windows, włączając pada",
    description:
      "Włącz pada, uruchom wybrany interfejs do gier i wróć do wygodnego pulpitu Windows po zakończeniu sesji. Pobierz podpisaną publiczną wersję beta CouchMode.",
    ogTitle: "CouchMode: zacznij grać na PC z Windows, włączając pada",
    ogDescription:
      "Włącz pada, uruchom wybrany interfejs do gier i wróć do wygodnego pulpitu Windows po zakończeniu sesji. Pobierz podpisaną publiczną wersję beta CouchMode.",
  },
  schema: {
    softwareDescription:
      "CouchMode to narzędzie dla Windows, które ułatwia granie padem z kanapy. Może otworzyć wybrany interfejs do gier, zamknąć wskazane aplikacje i po zakończeniu sesji przywrócić obsługiwane ustawienia Windows, które zmieniło.",
    applicationSubCategory: "Narzędzie do obsługi sesji grania",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Narzędzie dla Windows do grania z padem w ręku.",
      badge: "Publiczna wersja beta już dostępna",
      headingBefore: "Przełącz swój komputer na",
      headingAccent: "granie z kanapy.",
      description:
        "Włącz pada, a CouchMode otworzy wybrany interfejs do gier, przygotuje sesję zgodnie z Twoimi ustawieniami i pozwoli wrócić do pulpitu, gdy skończysz grać.",
      downloadLabel: "Pobierz dla Windows",
      proLabel: "Poznaj funkcje Pro",
      platformNotice: "Windows 11 · 64-bit · Podpisana publiczna wersja beta",
      carousel: {
        slides: [
          {
            label: "General",
            alt: "Ustawienia pada i uruchamianych aplikacji w sekcji General w CouchMode.",
          },
          {
            label: "Resource Control",
            alt: "Ustawienia zamykania aplikacji w sekcji Resource Control w CouchMode.",
          },
          {
            label: "Session Tweaks",
            alt: "Ustawienia wydajności i Windows w sekcji Session Tweaks w CouchMode.",
          },
        ],
        previousLabel: "Poprzedni zrzut ekranu",
        nextLabel: "Następny zrzut ekranu",
        showLabel: "Pokaż",
      },
    },
    problem: {
      eyebrow: "Czego brakuje",
      headingLines: ["Windows się sprawdza.", "Tylko nie powstał z myślą o kanapie."],
      description:
        "Przy biurku pulpit działa świetnie. Z kanapy drobny tekst, menu wymagające myszy i aplikacje w tle mogą przeszkadzać w graniu padem. CouchMode pomaga pokonać te trudności bez zastępowania Windows ani przejmowania kontroli nad komputerem.",
      points: [
        {
          title: "Z myślą o dużym ekranie",
          body: "Interfejs pulpitu Windows jest przeznaczony do oglądania z bliska. CouchMode pomaga przejść do interfejsu do gier wygodnego w obsłudze padem.",
        },
        {
          title: "Zaczynasz od pada",
          body: "CouchMode może zareagować na podłączenie zgodnego pada i uruchomić wybrany interfejs do gier.",
        },
        {
          title: "Twój komputer pozostaje Twój",
          body: "CouchMode zmienia tylko włączone przez Ciebie, obsługiwane ustawienia sesji i przywraca zmienione ustawienia po jej zakończeniu.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Jak to działa",
      heading: "Pad w dłoń, usiądź wygodnie.",
      description:
        "CouchMode obsługuje przebieg sesji wokół wybranej aplikacji do gier i ustawień Windows. Free zapewnia podstawową obsługę sesji uruchamianych padem. Pro rozszerza automatyzację.",
      stepLabel: "KROK",
      steps: [
        {
          number: "01",
          title: "Włącz pada",
          body: "Włącz kontroler Xbox lub inny zgodny pad. CouchMode może czekać w tle i automatycznie rozpocząć sesję grania z kanapy.",
          detail: "Automatyczne wykrywanie · Bez otwierania aplikacji",
        },
        {
          number: "02",
          title: "CouchMode otwiera wybrany interfejs do gier",
          body: "Korzystaj z pełnoekranowego trybu Xbox tam, gdzie Windows go obsługuje, albo wybierz Steam Big Picture lub Playnite. Wszystkie trzy opcje są bezpłatne. Inne zgodne aplikacje uruchamiające gry są dostępne w Pro.",
          detail: "Xbox, Steam i Playnite w Free · Własne aplikacje w Pro",
        },
        {
          number: "03",
          title: "Pro przygotowuje sesję",
          body: "Pro może zamknąć aplikacje wskazane w Resource Control i zastosować wybrane, obsługiwane ustawienia sesji: powiadomienia, nagrywanie przez Game Bar, efekty wizualne, tryb gry, plan zasilania, HDR, ekran i dźwięk.",
          detail: "Pro · 7 dni okresu próbnego w aplikacji",
        },
        {
          number: "04",
          title: "Wróć do pulpitu",
          body: "Po zakończeniu sesji CouchMode opuszcza uruchomiony przez siebie interfejs do gier, przywraca zmienione ustawienia Windows i oddaje Ci do dyspozycji pulpit.",
          detail: "Free + Pro · Bezpieczny powrót po sesji",
        },
      ],
    },
    featureShots: {
      eyebrow: "Przyjrzyj się bliżej",
      heading: "Więcej ustawień Pro, prosto z aplikacji.",
      description: "To prawdziwe ekrany CouchMode, nie makiety. Wybierz zrzut, aby go powiększyć.",
      shots: [
        {
          label: "General",
          caption: "Uruchamianie i ustawienia zaawansowane",
          alt: "Ustawienia uruchamiania i zaawansowane w sekcji General w CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Wybór działających aplikacji",
          alt: "Wybór działających aplikacji w CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Działania po zakończeniu sesji",
          alt: "Działania po sesji w sekcji Resource Control w CouchMode.",
        },
        {
          label: "Session Tweaks",
          caption: "Ekran, HDR i dźwięk",
          alt: "Ustawienia HDR, ekranu i dźwięku w CouchMode.",
        },
      ],
      openShotLabel: "Powiększ zrzut ekranu",
      lightbox: {
        closeLabel: "Zamknij podgląd zrzutu",
        previousLabel: "Poprzedni zrzut ekranu",
        nextLabel: "Następny zrzut ekranu",
      },
    },
    comparison: {
      eyebrow: "Free i Pro",
      heading: "Ulubione aplikacje do gier w Free. Więcej automatyzacji w Pro.",
      description:
        "Obsługa sesji uruchamianych padem jest bezpłatna, podobnie jak Xbox, Steam Big Picture i Playnite. Pro dodaje własne aplikacje uruchamiające gry, Resource Control, Session Tweaks i szerszą automatyzację przywracania ustawień.",
      free: {
        name: "Free",
        priceSuffix: "na zawsze",
        description: "Podstawowa obsługa sesji uruchamianych padem.",
        features: [
          "Rozpoczęcie sesji padem",
          "Pełnoekranowy tryb Xbox tam, gdzie obsługuje go Windows",
          "Steam Big Picture",
          "Playnite Fullscreen",
          "Uruchamianie z Windows",
          "Bezpieczne zakończenie sesji i powrót do pulpitu",
          "Język i motyw",
        ],
        includedLabel: "Dostępne w Free",
      },
      pro: {
        trialLabel: "7 dni okresu próbnego w aplikacji",
        name: "Pro",
        heading: "Wszystko z Free i więcej automatyzacji.",
        description:
          "CouchMode zarządza rozpoczętą przez siebie sesją, a potem cofa wprowadzone przez siebie zmiany ustawień pulpitu.",
        features: [
          "Zgodne własne aplikacje uruchamiające gry",
          "Resource Control dla wybranych aplikacji",
          "Session Tweaks: powiadomienia, nagrywanie przez Game Bar, efekty wizualne, tryb gry, plan zasilania, HDR, ekran i dźwięk",
          "Przywracanie obsługiwanych ustawień Windows zmienionych przez CouchMode",
          "Ponowne otwieranie wybranych aplikacji Resource Control, jeśli tak ustawisz",
          "Do 2 aktywnych urządzeń z Windows w Pro",
          "Do 5 aktywnych urządzeń z Windows w Pro Supporter",
        ],
        ctaLabel: "Uzyskaj Pro przez Patreon",
      },
      footnote:
        "Po okresie próbnym dostęp do Pro wymaga aktywnej subskrypcji na Patreonie. Pro kosztuje 3 USD miesięcznie i obejmuje 2 aktywne urządzenia z Windows. Pro Supporter kosztuje 5 USD miesięcznie i obejmuje 5 aktywnych urządzeń z Windows.",
    },
    guidesPreview: {
      eyebrow: "Praktyczne wskazówki",
      heading: "Poradniki o graniu z kanapy na Windows",
      description:
        "Konkretne odpowiedzi o Playnite, Steam Big Picture, telewizorach, padach i przenośnych komputerach z Windows w stacji dokującej.",
      ctaLabel: "Zobacz wszystkie poradniki",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "Przygotuj swój komputer do",
      headingAccent: "grania z kanapy",
      description:
        "Pobierz podpisaną publiczną wersję beta dla Windows i zacznij od 7-dniowego okresu próbnego Pro w aplikacji. Nie potrzebujesz konta ani karty płatniczej.",
      downloadLabel: "Pobierz dla Windows",
      releaseNotesLabel: "Zobacz informacje o wydaniu",
      directDownloadLabel: "Pobierz bezpośrednio",
      preparingLabel: "W przygotowaniu",
      openLabel: "Dostępne",
      liveLabel: "Już dostępne",
      platformNotice: "Windows 11 · 64-bit",
      compatibilityNote:
        "CouchMode obsługuje granie padem na przenośnych komputerach z Windows, w tym urządzeniach takich jak ROG Ally. Tam, gdzie Windows udostępnia pełnoekranowy tryb Xbox, CouchMode może rozpocząć taką sesję lub dołączyć do istniejącej, a po jej zakończeniu przywrócić kontrolę nad pulpitem. Dostępność i działanie zależą od urządzenia, wersji Windows, obsługi w aplikacji Xbox, regionu i etapu wdrażania przez Microsoft.",
    },
    faq: {
      eyebrow: "Pytania",
      heading: "Z myślą o tym, jak naprawdę zaczynasz grać z kanapy.",
      description:
        "CouchMode powstał dla komputerów z Windows podłączonych do telewizora i konfiguracji do grania padem z kanapy. Te odpowiedzi wyjaśniają, co może uruchomić i zautomatyzować, a co zależy od obsługi w Windows.",
      items: [
        {
          question: "Czym jest CouchMode?",
          answer:
            "CouchMode to narzędzie dla Windows do grania z padem w ręku. Może rozpocząć sesję po podłączeniu zgodnego pada, otworzyć wybrany interfejs do gier i po sesji cofnąć obsługiwane zmiany ustawień, które wprowadziło.",
        },
        {
          question: "Czy CouchMode zastępuje powłokę Windows?",
          answer:
            "Nie. CouchMode nie zastępuje Eksploratora, powłoki Windows ani Twojej aplikacji do uruchamiania gier. Współpracuje z Windows i aplikacjami, których już używasz.",
        },
        {
          question: "Co CouchMode zmienia na moim komputerze?",
          answer:
            "Tylko obsługiwane działania sesji, które włączysz. CouchMode może otworzyć interfejs do gier, zamknąć wybrane aplikacje przez Resource Control i tymczasowo zastosować obsługiwane ustawienia powiadomień, ekranu, dźwięku, HDR, zasilania i grania. Po zakończeniu sesji przywraca ustawienia, które zmieniło.",
        },
        {
          question: "Czy CouchMode może zamknąć Discord, Chrome lub inne aplikacje przed graniem?",
          answer:
            "W Pro Resource Control wybierasz obsługiwane aplikacje, które CouchMode może zamknąć na czas sesji, i decydujesz, czy mają zostać później otwarte. Niewybrane aplikacje nie są celowo zamykane. Usługi, aplikacje z podwyższonymi uprawnieniami, chronione składniki systemu i aplikacje uruchamiające się ponownie mogą nadal działać.",
        },
        {
          question: "Czy CouchMode może uruchomić Steam Big Picture lub inną aplikację do gier?",
          answer:
            "Tak, a Steam Big Picture jest dostępny bezpłatnie. Pełnoekranowy tryb Xbox tam, gdzie obsługuje go Windows, Steam Big Picture i Playnite Fullscreen nie wymagają Pro. Inne aplikacje konfiguruje się jako zgodną własną aplikację uruchamiającą gry, co wymaga Pro.",
        },
        {
          question: "Czy CouchMode może uruchomić Playnite, gdy włączę pada?",
          answer:
            "Tak, bezpłatnie. Wybierz Playnite jako cel uruchamiania, a CouchMode otworzy Playnite Fullscreen po podłączeniu zgodnego pada. Jeśli Playnite już działa, CouchMode skorzysta z istniejącej instancji zamiast uruchamiać drugą.",
        },
        {
          question: "Czy CouchMode współpracuje z kontrolerami PS5 / DualSense?",
          answer:
            "CouchMode rozpoczyna i kończy sesje na podstawie stanu kontrolerów, które Windows widzi jako kontrolery Xbox (XInput). Pad PlayStation podłączony w trybie natywnym nie służy do rozpoczynania ani kończenia sesji; CouchMode informuje o tym, zamiast pokazywać go jako podłączony. Jeżeli dana konfiguracja przedstawia pad PlayStation systemowi Windows jako kontroler XInput, CouchMode traktuje go jak inne kontrolery XInput.",
        },
        {
          question: "Co się stanie, jeśli pad rozłączy się podczas grania?",
          answer:
            "Jeśli włączona jest opcja Exit CouchMode when controller disconnects, rozłączenie uruchamia zakończenie sesji po ustawionym opóźnieniu. Ponowne połączenie w tym czasie może anulować oczekujące zakończenie. Przed wyjściem CouchMode sprawdza, za co odpowiada w danej sesji, oraz rzeczywisty stan systemu, przywraca obsługiwane ustawienia, które zmieniło, i weryfikuje bezpieczny powrót do pulpitu. Nie wymusza zamknięcia aplikacji uruchomionych niezależnie przez Ciebie ani tych, które działały już przed sesją.",
        },
        {
          question: "Czy CouchMode obsługuje Playnite?",
          answer:
            "Tak, bezpłatnie. Playnite Fullscreen można wybrać jako cel uruchamiania bez Pro. CouchMode współpracuje z istniejącymi aplikacjami do gier, zamiast je zastępować.",
        },
        {
          question: "Czy CouchMode obsługuje tryb Xbox w Windows?",
          answer:
            "CouchMode może współpracować z pełnoekranowym trybem Xbox tam, gdzie Windows go udostępnia. Jeśli tryb jest niedostępny, CouchMode może zamiast niego otworzyć zwykłą aplikację Xbox. Dostępność zależy od Windows, aplikacji Xbox, obsługi urządzenia, regionu i etapu wdrażania przez Microsoft.",
        },
        {
          question: "Co się stanie, jeśli pełnoekranowy tryb Xbox nie jest dostępny?",
          answer:
            "Jeśli pełnoekranowy tryb Xbox nie jest dostępny na Twoim urządzeniu, CouchMode może otworzyć aplikację Xbox w zwykły sposób. Dostępność trybu zależy od Windows, aplikacji Xbox, urządzenia i etapu wdrażania przez Microsoft.",
        },
        {
          question: "Czy CouchMode działa na ROG Ally?",
          answer:
            "ROG Ally i podobne przenośne komputery z Windows to ważna grupa obsługiwanych urządzeń. Rzeczywiste działanie pełnoekranowego trybu Xbox nadal zależy od obsługi w Windows i aplikacji Xbox na danym urządzeniu.",
        },
        {
          question: "Co oznacza Start inside Xbox Mode?",
          answer:
            "Na obsługiwanych przenośnych komputerach CouchMode może korzystać z zatwierdzonego przez administratora zadania harmonogramu, aby uruchamiać się wraz z pełnoekranowym trybem Xbox w Windows. Zwykłe uruchamianie na pulpicie pozostaje osobnym ustawieniem.",
        },
        {
          question: "Czy okres próbny wymaga karty płatniczej?",
          answer:
            "Nie. 7-dniowy okres próbny Pro w aplikacji nie wymaga konta ani karty płatniczej. Dalszy dostęp do Pro jest obsługiwany przez Patreon i wymaga aktywnej subskrypcji.",
        },
        {
          question: "Jak działa dostęp dla wspierających?",
          answer:
            "Po okresie próbnym w aplikacji połącz konto Patreon w CouchMode, aby zachować Pro. Pro kosztuje 3 USD miesięcznie dla maksymalnie 2 aktywnych urządzeń z Windows. Pro Supporter kosztuje 5 USD miesięcznie dla maksymalnie 5 aktywnych urządzeń z Windows.",
        },
        {
          question: "Co się stanie, gdy moja subskrypcja wygaśnie?",
          answer:
            "Po odświeżeniu uprawnień i upływie okresu karencji przewidzianego przez aplikację funkcje Pro wracają do zakresu Free. Twoje ustawienia pozostają zapisane, a bezpłatna obsługa sesji nadal działa.",
        },
        {
          question: "Jak zebrać dane diagnostyczne, gdy coś na ekranie wygląda nieprawidłowo?",
          answer:
            "Naciśnij Ctrl+Alt+Shift+F12, gdy problem jest nadal widoczny. CouchMode zapisze zrzut bieżącego stanu okien w osobnym pliku w %APPDATA%\\CouchMode, obok app.log. Nie zmienia to niczego na ekranie i działa niezależnie od tego, czy włączone jest rejestrowanie debugowania. Nic nie jest wysyłane automatycznie: plik pozostaje na Twoim komputerze i to Ty decydujesz, co przekazać. Dołącz go wraz z app.log, kontaktując się z pomocą techniczną.",
        },
        {
          question: "Czy CouchMode zwiększa wydajność gier?",
          answer:
            "CouchMode nie obiecuje wzrostu FPS. Pro może ograniczyć liczbę zbędnych aplikacji podczas sesji, zamykając te wybrane, oraz zastosować obsługiwane ustawienia Windows, takie jak tryb gry i wybrany plan zasilania, a następnie przywrócić je po sesji.",
        },
        {
          question: "Czy mogę zainstalować CouchMode z Microsoft Store?",
          answer:
            "Tak. CouchMode jest dostępny w Microsoft Store oraz jako podpisany instalator na couchmode.app/download.",
          linkLabel: "Zobacz CouchMode w Microsoft Store",
        },
        {
          question: "Czym różni się pobranie bezpośrednie od wersji z Microsoft Store?",
          answer:
            "Oba sposoby instalacji są oficjalne i zapewniają te same funkcje CouchMode. Przy pobraniu z couchmode.app możesz samodzielnie sprawdzić opublikowaną sumę SHA256. Microsoft Store to dodatkowe zaufane źródło instalacji. W obu przypadkach aktualizacjami aplikacji zarządza wbudowany mechanizm CouchMode.",
        },
        {
          question: "Czy wersja z Microsoft Store aktualizuje się automatycznie przez sklep?",
          answer:
            "CouchMode korzysta z własnego wbudowanego systemu aktualizacji. Microsoft Store jest dodatkowym oficjalnym kanałem instalacji; aktualizacjami aplikacji zajmuje się samo CouchMode.",
        },
        {
          question: "Czy wersja z Microsoft Store też ma 7-dniowy okres próbny Pro?",
          answer:
            "Tak. 7-dniowy okres próbny Pro w aplikacji działa tak samo w obu wersjach, bez konta i karty płatniczej.",
        },
        {
          question: "Czy Patreon i funkcje Pro działają w wersji z Microsoft Store?",
          answer:
            "Tak. Dostęp do Pro jest powiązany z licencją CouchMode, a nie źródłem instalacji, więc połączenie konta Patreon działa tak samo w obu wersjach.",
        },
        {
          question: "Czy CouchMode jest dostępny na Steam?",
          answer:
            "Nie. CouchMode można pobrać bezpośrednio lub z Microsoft Store. CouchMode potrafi otworzyć Steam Big Picture, ale nie oznacza to, że samo jest dystrybuowane na Steam.",
        },
      ],
      community: {
        heading: "Dołącz do społeczności CouchMode",
        description:
          "Zadawaj pytania, dziel się konfiguracjami, zgłaszaj problemy i śledź aktualizacje CouchMode na Reddicie.",
        ctaLabel: "Odwiedź r/CouchMode",
      },
    },
  },
};
