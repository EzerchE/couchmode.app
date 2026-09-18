import type { ReleaseEditorialOverlay } from "../../release-editorial";

// Versions are join keys; release dates, binaries and checksums stay in releases.json.
export const polishReleaseEditorialOverlay = {
  entries: [
    {
      version: "0.6.0-rc.10",
      summary:
        "Niezawodniejsze uruchamianie pełnoekranowego trybu Xbox, wykrywanie przenośnych komputerów, zgodność z Playnite i aktualizacje.",
      notes: [
        "Poprawiono niezawodność uruchamiania pełnoekranowego trybu Xbox na przenośnych komputerach.",
        "Usprawniono wykrywanie kontrolerów i przenośnych komputerów na różnych urządzeniach z Windows.",
        "Poprawiono niezawodność rozpoczynania sesji w pełnoekranowym trybie Xbox, aktywowania właściwego okna i powrotu do pulpitu.",
        "Playnite działa teraz niezawodniej również przy instalacjach w niestandardowych lokalizacjach i w wersji przenośnej.",
        "Usprawniono sprawdzanie aktualizacji i doprecyzowano komunikaty o aktualizacjach.",
        "Ujednolicono sprawdzanie obsługi pełnoekranowego trybu Xbox w Settings.",
        "Ogólne poprawki niezawodności.",
      ],
      knownIssues: [],
    },
    {
      version: "0.6.0-rc.9",
      summary: "Łatwiejsze przejście na Pro, niezawodniejsza obsługa konta i lepsza dostępność.",
      notes: [
        "Przejście na Pro jest bardziej przejrzyste: prowadzi do niego jedna wyraźna akcja, a wyświetlane opcje odpowiadają teraz stanowi konta.",
        "Jeśli masz już subskrypcję, CouchMode proponuje odświeżenie jej stanu zamiast ponownego łączenia konta.",
        "Rozszerzono zarządzanie subskrypcją. Możesz w dowolnym momencie zmienić konto lub zwolnić aktywację tego komputera. Zwolnienie aktywacji wymaga teraz potwierdzenia.",
        "Logowanie kończy się teraz niezawodnie nawet po zamknięciu okna CouchMode w trakcie tego procesu.",
        "CouchMode uwzględnia teraz systemowe ustawienie ograniczenia animacji w całej aplikacji.",
        "Naprawiono oznaczenie Pro przy opcji własnej aplikacji uruchamiającej gry, tak aby prawidłowo otwierało okno przejścia na Pro.",
      ],
      knownIssues: [
        "Dostępność trybu Xbox zależy od wersji Windows, obsługi urządzenia, obsługi w aplikacji Xbox, regionu i etapu wdrażania przez Microsoft.",
        "Kontrolery PlayStation podłączone w trybie natywnym nie mogą obecnie rozpoczynać ani kończyć sesji CouchMode, ponieważ Windows nie udostępnia stanu ich połączenia przez XInput.",
        "Na niektórych przenośnych komputerach i laptopach wbudowany kontroler jest celowo pomijany jako wyzwalacz sesji, więc może być potrzebny zewnętrzny pad.",
      ],
    },
    {
      version: "0.6.0-rc.8",
      summary:
        "Steam Big Picture i Playnite Fullscreen są teraz bezpłatne, podobnie jak pełnoekranowy tryb Xbox. Własne aplikacje uruchamiające gry, Resource Control i Session Tweaks pozostają funkcjami Pro.",
      notes: [
        "Steam Big Picture i Playnite Fullscreen są teraz dostępne bez Pro, podobnie jak pełnoekranowy tryb Xbox.",
        "Własne aplikacje uruchamiające gry, Resource Control i Session Tweaks pozostają funkcjami Pro.",
        "Sesje Steam Big Picture otwarte przed rozpoczęciem sesji CouchMode pozostają otwarte po jej zakończeniu.",
        "Niezawodniejsza obsługa Playnite: CouchMode rozpoznaje już działającą aplikację, także ze zminimalizowanym oknem, korzysta z niej zamiast uruchamiać drugą instancję i pozostawia ją otwartą po zakończeniu sesji.",
        "Niezawodniejsza obsługa własnych aplikacji uruchamiających gry: lepsze aktywowanie okien, dokładniejsze określanie odpowiedzialności za procesy i sprawniejsze zamykanie.",
        "Własne aplikacje uruchamiają się teraz we własnym folderze, dzięki czemu te wymagające uruchomienia z katalogu instalacyjnego działają poprawnie.",
        "Aplikacja jest uznawana za gotową dopiero wtedy, gdy jedno z jej rzeczywistych okien znajduje się na pierwszym planie i można nią sterować padem.",
        "Usprawniono wykrywanie pełnoekranowego trybu Xbox na komputerach stacjonarnych i przenośnych komputerach z Windows.",
        "Naprawiono przypadki, w których obsługiwane urządzenia mogły być uznawane za nieobsługiwane lub wymagały wielokrotnej weryfikacji.",
        "Dokładniejsze wykrywanie wbudowanych i zewnętrznych kontrolerów na podstawie sposobu połączenia, a nie producenta.",
        "Jaśniejsze komunikaty, gdy Windows nie przedstawia kontrolera jako kontrolera Xbox (XInput).",
        "Niezawodniejsze Resource Control: lepsze wykrywanie wybranych aplikacji, skuteczniejsze zamykanie i ponowne otwieranie oraz dokładniejsze raportowanie tego, co faktycznie zamknięto.",
        "Poprawiono niezawodność Launch on Enter, Close on Exit, Launch on Exit i Display on Exit.",
        "Bezpieczniejszy powrót do pulpitu po zakończeniu sesji.",
        "Usprawniono diagnostykę i zgłaszanie problemów.",
        "Ogólne poprawki niezawodności aktualizacji i sesji.",
      ],
      knownIssues: [
        "Aktywację urządzenia można zwolnić tylko z tego komputera; w aplikacji nie ma opcji wylogowania ze wszystkich urządzeń.",
        "Funkcja eksperymentalna: Xbox Full-Screen Experience zależy od działania Windows. Na niektórych urządzeniach właściwe okno może nie zostać automatycznie aktywowane do obsługi padem i może być potrzebne jednokrotne naciśnięcie przycisku Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.191",
      summary:
        "Podłącz pada, aby otworzyć Steam Big Picture, Playnite lub wybraną aplikację na pełnym ekranie. Po odłączeniu CouchMode może zakończyć sesję i przywrócić pulpit zgodnie z ustawieniami zakończenia sesji.",
      notes: [
        "Usprawniono wykrywanie pełnoekranowego trybu Xbox na komputerach stacjonarnych i przenośnych komputerach z Windows.",
        "Naprawiono przypadki błędnego rozpoznawania obsługiwanych urządzeń jako nieobsługiwanych lub wymagania ponownej weryfikacji.",
        "Poprawiono niezawodność rozpoczynania i kończenia sesji w pełnoekranowym trybie Xbox oraz powrotu z nich do pulpitu.",
        "Usprawniono wykrywanie wbudowanych i zewnętrznych kontrolerów, w tym zewnętrznych padów błędnie uznawanych za zintegrowane z przenośnym komputerem.",
        "Usprawniono przywracanie pulpitu po sesji grania. CouchMode unika teraz niepotrzebnych zmian w oknach, które są już dostępne.",
        "Rozszerzono informacje diagnostyczne dostępne w zgłoszeniach błędów.",
        "Usprawniono obsługę stanu aktualizacji i ogólną niezawodność.",
      ],
      knownIssues: [
        "Aktywację urządzenia można zwolnić tylko z tego komputera; w aplikacji nie ma opcji wylogowania ze wszystkich urządzeń.",
        "Funkcja eksperymentalna: Xbox Full-Screen Experience zależy od działania Windows. Na niektórych urządzeniach właściwe okno może nie zostać automatycznie aktywowane do obsługi padem i może być potrzebne jednokrotne naciśnięcie przycisku Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.190",
      summary:
        "Podłącz pada, aby otworzyć Steam Big Picture, Playnite lub wybraną aplikację na pełnym ekranie. Po odłączeniu CouchMode może zakończyć sesję i przywrócić pulpit zgodnie z ustawieniami zakończenia sesji.",
      notes: [
        "Naprawiono problem, przez który polecenie Exit w menu obszaru powiadomień mogło nie reagować.",
        "Po wyjściu z trybu Xbox otwarte aplikacje niezawodniej pozostają uruchomione i dostępne.",
        "Usprawniono bezpieczne odzyskiwanie dostępu do okien, które mogły pozostawać poza ekranem lub być bezużyteczne.",
        "Usprawniono wykrywanie wbudowanych i zewnętrznych kontrolerów na przenośnych urządzeniach.",
        "Usprawniono weryfikację powrotu do pulpitu i ogólną stabilność sesji.",
        "Ogólne poprawki niezawodności.",
      ],
      knownIssues: [
        "Aktywację urządzenia można zwolnić tylko z tego komputera; w aplikacji nie ma opcji wylogowania ze wszystkich urządzeń.",
        "Funkcja eksperymentalna: Xbox Full-Screen Experience zależy od działania Windows. Na niektórych urządzeniach właściwe okno może nie zostać automatycznie aktywowane do obsługi padem i może być potrzebne jednokrotne naciśnięcie przycisku Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.183",
      summary:
        "Podłącz pada, aby otworzyć Steam Big Picture, Playnite lub wybraną aplikację na pełnym ekranie. Po odłączeniu CouchMode może zakończyć sesję i przywrócić pulpit zgodnie z ustawieniami zakończenia sesji.",
      notes: [
        "CouchMode zarządza rozpoczętymi przez siebie sesjami Steam Big Picture, Playnite w trybie pełnoekranowym i wybranej własnej aplikacji. Zamyka je po odłączeniu pada zgodnie z ustawieniami i zakresem odpowiedzialności za sesję, a następnie przywraca pulpit.",
        "Powrót do pulpitu jest weryfikowany przy każdym zakończeniu sesji, a nie tylko zakładany.",
        "Opcjonalne Resource Control zamyka aplikacje wybrane na czas sesji i otwiera je ponownie po jej zakończeniu. Korzysta z listy ustalonej przed rozpoczęciem sesji, więc nie ingeruje w aplikacje otwarte później.",
        "Ogólne poprawki niezawodności dostępu do Pro, sprawdzania subskrypcji i weryfikacji licencji przy uruchamianiu.",
        "Ceny, 7-dniowy okres próbny, okres karencji offline, plany i limity urządzeń pozostają bez zmian.",
      ],
      knownIssues: [
        "Aktywację urządzenia można zwolnić tylko z tego komputera; w aplikacji nie ma opcji wylogowania ze wszystkich urządzeń.",
        "Funkcja eksperymentalna: Xbox Full-Screen Experience zależy od działania Windows. Na niektórych urządzeniach właściwe okno może nie zostać automatycznie aktywowane do obsługi padem i może być potrzebne jednokrotne naciśnięcie przycisku Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.45",
      summary:
        "Wysyłanie zgłoszeń, sprawdzanie aktualizacji, mniej natarczywy komunikat o niedostępności pełnoekranowego trybu Xbox i odświeżone oznaczenia CouchMode.",
      notes: [
        "Report a problem pozwala wysyłać zgłoszenia zatwierdzone przez użytkownika.",
        "Dodano sprawdzanie aktualizacji.",
        "Komunikat o niedostępności pełnoekranowego trybu Xbox jest mniej natarczywy i pozostaje widoczny.",
        "Instalator i aplikacja używają oznaczeń CouchMode.",
      ],
      knownIssues: ["Publiczne pobieranie nie było włączone dla tego wydania."],
    },
  ],
} satisfies ReleaseEditorialOverlay;
