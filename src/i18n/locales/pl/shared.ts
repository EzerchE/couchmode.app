import type { SharedLocaleContent } from "../../packets";

export const polishLocaleContent: SharedLocaleContent = {
  consent: {
    heading: "Twoje ustawienia prywatności",
    explanation:
      "Niezbędne dane zapisane w przeglądarce pozwalają zapamiętać Twój wybór. Analityka pomaga nam zrozumieć, jak korzystasz ze strony. Pomiar reklam jest przewidziany dla przyszłych kampanii i pozostaje wyłączony bez Twojej zgody.",
    saveError:
      "Nie udało się zapisać wyboru. Sprawdź, czy przeglądarka pozwala zapisywać dane, i spróbuj ponownie.",
    necessary: "Niezbędne",
    alwaysOn: "Zawsze włączone",
    necessaryAriaLabel: "Zapisywanie niezbędnych danych jest zawsze włączone",
    analytics: "Analityka",
    analyticsDescription: "Pomiar korzystania ze strony",
    advertising: "Reklamy",
    advertisingDescription: "Pomiar przyszłych kampanii reklamowych",
    necessaryOnly: "Tylko niezbędne",
    acceptAnalytics: "Zezwól na analitykę",
    saveChoices: "Zapisz wybór",
  },
  errors: {
    staticHeading: "Ta strona CouchMode nie istnieje.",
    staticDescription:
      "Zajrzyj do poradników o graniu na telewizorze z Windows lub wróć na stronę główną CouchMode.",
    guidesLabel: "Przeglądaj poradniki",
    notFoundTitle: "Nie znaleziono strony",
    notFoundDescription: "Szukana strona nie istnieje lub została przeniesiona.",
    homeLabel: "Wróć na stronę główną",
    errorTitle: "Nie udało się wczytać strony",
    errorDescription:
      "Coś poszło nie tak po naszej stronie. Spróbuj odświeżyć stronę lub wróć na stronę główną.",
    retryLabel: "Spróbuj ponownie",
  },
  navigation: {
    homeLabel: "CouchMode: strona główna",
    openMenuLabel: "Otwórz menu nawigacji",
    closeMenuLabel: "Zamknij menu nawigacji",
    mobileMenuLabel: "Nawigacja mobilna",
    downloadLabel: "Pobierz",
    redditLabel: "Dołącz do r/CouchMode",
    languageMenuLabel: "Wybór języka",
    links: [
      { contentId: "home", fragment: "#how", label: "Jak to działa" },
      { contentId: "home", fragment: "#pricing", label: "Cennik" },
      { contentId: "buy", label: "Wybierz Pro" },
      { contentId: "changelog", label: "Historia zmian" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "Jak to działa" },
      { contentId: "home", fragment: "#pricing", label: "Cennik" },
      { contentId: "home", fragment: "#download", label: "Pobierz CouchMode" },
      { contentId: "guides", trailingSlash: true, label: "Poradniki" },
      { contentId: "changelog", label: "Historia zmian" },
    ],
    legalLinks: [
      { contentId: "support", label: "Pomoc" },
      { contentId: "privacy", label: "Prywatność" },
      { contentId: "terms", label: "Warunki korzystania" },
      { contentId: "refund", label: "Zwroty" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Dołącz do społeczności CouchMode na Reddicie",
    copyright: "CouchMode. Wszelkie prawa zastrzeżone.",
    trademarkNotice:
      "CouchMode jest niezależnym produktem i nie jest powiązany z Microsoft, Xbox, Valve ani Steam. Microsoft, Windows i Xbox są znakami towarowymi grupy spółek Microsoft. Steam i Steam Big Picture są znakami towarowymi Valve Corporation. Pozostałe nazwy produktów służą wyłącznie do wskazania zgodności i mogą być znakami towarowymi ich właścicieli.",
  },
};
