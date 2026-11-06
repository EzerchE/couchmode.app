import type { LocaleId } from "./config";

export type SupportPageCopy = {
  developerHeading: string;
  developer: string;
  impactHeading: string;
  impacts: { title: string; body: string }[];
  monthly: string;
  monthlyBody: string;
  extra: string;
  extraBody: string;
  details: string;
};

export const supportPageCopy: Record<LocaleId, SupportPageCopy> = {
  en: {
    developerHeading: "Why I build CouchMode",
    developer: "I build CouchMode to make playing on a Windows PC with a controller feel simpler: less time preparing your setup, and a clear way back to the desktop afterward. Your support helps me spend more time improving that everyday experience.",
    impactHeading: "What your support helps make possible",
    impacts: [
      { title: "More compatibility testing", body: "Time to investigate differences between Windows PCs, handhelds, controllers and display setups, rather than assuming one working setup represents everyone." },
      { title: "Careful fixes and restoration", body: "Work on reported session problems and on restoring the supported settings CouchMode changed, so improvements are grounded in real use." },
      { title: "Clearer guidance", body: "Time for setup instructions, release notes and explanations of what is supported, so you can make informed choices about your own PC." },
    ],
    monthly: "Monthly support", monthlyBody: "Choose Pro on Patreon to contribute regularly to CouchMode's continued development.",
    extra: "A larger contribution", extraBody: "Choose Pro Supporter if you would like to give more toward the same work. Every contribution is appreciated.",
    details: "Supporter status and device details",
  },
  de: {
    developerHeading: "Warum ich CouchMode entwickle",
    developer: "Ich entwickle CouchMode, damit Spielen am Windows-PC mit Controller einfacher wird: weniger Vorbereitung und danach ein klarer Weg zurück zum Desktop. Deine Unterstützung hilft mir, mehr Zeit in dieses Alltagserlebnis zu investieren.",
    impactHeading: "Was deine Unterstützung ermöglicht",
    impacts: [
      { title: "Mehr Kompatibilitätstests", body: "Zeit, Unterschiede zwischen Windows-PCs, Handhelds, Controllern und Bildschirmkonfigurationen zu untersuchen, statt von einem funktionierenden Aufbau auf alle anderen zu schließen." },
      { title: "Sorgfältige Fehlerbehebung und Wiederherstellung", body: "Arbeit an gemeldeten Sitzungsproblemen und an der Wiederherstellung unterstützter Einstellungen, die CouchMode geändert hat. So orientieren sich Verbesserungen an der tatsächlichen Nutzung." },
      { title: "Verständlichere Anleitungen", body: "Zeit für Einrichtungsanleitungen, Versionshinweise und klare Angaben zur Unterstützung, damit du fundierte Entscheidungen für deinen PC treffen kannst." },
    ],
    monthly: "Monatlich unterstützen", monthlyBody: "Mit Pro auf Patreon trägst du regelmäßig zur Weiterentwicklung von CouchMode bei.",
    extra: "Einen größeren Beitrag leisten", extraBody: "Wähle Pro Supporter, wenn du dieselbe Arbeit mit einem höheren Betrag unterstützen möchtest. Jeder Beitrag ist willkommen.",
    details: "Unterstützerstatus und Gerätedetails",
  },
  tr: {
    developerHeading: "CouchMode'u neden geliştiriyorum?",
    developer: "CouchMode'u, Windows bilgisayarda oyun koluyla oynamayı kolaylaştırmak için geliştiriyorum: oyun öncesi hazırlıkla daha az uğraşmak ve işiniz bittiğinde masaüstüne rahatça dönebilmek. Desteğiniz, bu deneyimi iyileştirmeye daha fazla zaman ayırmama yardımcı oluyor.",
    impactHeading: "Desteğiniz neleri mümkün kılıyor?",
    impacts: [
      { title: "Daha fazla uyumluluk testi", body: "Tek bir düzende çalışmasını yeterli saymak yerine farklı Windows bilgisayarları, el konsolları, oyun kolları ve ekran düzenleri arasındaki farkları araştırmaya zaman ayırmak." },
      { title: "Özenli düzeltmeler ve ayarları geri yükleme", body: "Bildirilen oturum sorunları ve CouchMode'un değiştirdiği desteklenen ayarların geri yüklenmesi üzerinde çalışmak; iyileştirmeleri gerçek kullanıma dayandırmak." },
      { title: "Daha anlaşılır rehberler", body: "Kendi bilgisayarınız için bilinçli seçimler yapabilmeniz adına kurulum adımlarını, sürüm notlarını ve desteklenen özelliklerin sınırlarını açıkça anlatmak." },
    ],
    monthly: "Aylık destek", monthlyBody: "Patreon'da Pro üyeliğiyle CouchMode'un geliştirilmesine düzenli katkıda bulunabilirsiniz.",
    extra: "Daha yüksek katkı", extraBody: "Aynı çalışmalara daha fazla katkıda bulunmak isterseniz Pro Supporter'ı seçebilirsiniz. Her katkı değerli.",
    details: "Destekçi statüsü ve cihaz ayrıntıları",
  },
  fr: {
    developerHeading: "Pourquoi je développe CouchMode",
    developer: "Je développe CouchMode pour simplifier le jeu à la manette sur un PC Windows : moins de préparatifs et un retour clair au bureau une fois la session terminée. Votre soutien m'aide à consacrer davantage de temps à cette expérience au quotidien.",
    impactHeading: "Ce que votre soutien rend possible",
    impacts: [
      { title: "Davantage de tests de compatibilité", body: "Du temps pour examiner les différences entre PC Windows, consoles portables, manettes et configurations d'écran, sans considérer qu'un seul essai concluant vaut pour tout le monde." },
      { title: "Des corrections et une restauration soignées", body: "Du travail sur les problèmes de session signalés et sur la restauration des réglages pris en charge que CouchMode a modifiés, à partir de situations réelles." },
      { title: "Des explications plus claires", body: "Du temps pour les instructions de configuration, les notes de version et les limites de prise en charge, afin de vous aider à choisir les réglages adaptés à votre PC." },
    ],
    monthly: "Soutien mensuel", monthlyBody: "Choisissez Pro sur Patreon pour contribuer régulièrement au développement de CouchMode.",
    extra: "Une contribution plus importante", extraBody: "Choisissez Pro Supporter si vous souhaitez contribuer davantage au même travail. Chaque contribution compte.",
    details: "Statut de soutien et appareils associés",
  },
  es: {
    developerHeading: "Por qué desarrollo CouchMode",
    developer: "Desarrollo CouchMode para que jugar con mando en un PC con Windows resulte más sencillo: menos preparativos y una forma clara de volver al escritorio al terminar. Tu apoyo me ayuda a dedicar más tiempo a mejorar esa experiencia cotidiana.",
    impactHeading: "Qué hace posible tu apoyo",
    impacts: [
      { title: "Más pruebas de compatibilidad", body: "Tiempo para investigar las diferencias entre PC con Windows, consolas portátiles, mandos y configuraciones de pantalla, sin dar por hecho que una configuración que funciona representa a todas las demás." },
      { title: "Correcciones y restauración cuidadosas", body: "Trabajo en los problemas de sesión comunicados y en la restauración de los ajustes compatibles que CouchMode ha cambiado, con mejoras basadas en el uso real." },
      { title: "Instrucciones más claras", body: "Tiempo para las guías de configuración, las notas de versión y las explicaciones sobre lo que es compatible, para que puedas tomar decisiones informadas sobre tu PC." },
    ],
    monthly: "Apoyo mensual", monthlyBody: "Elige Pro en Patreon para contribuir de forma regular al desarrollo de CouchMode.",
    extra: "Una aportación mayor", extraBody: "Elige Pro Supporter si quieres aportar más al mismo trabajo. Toda contribución se agradece.",
    details: "Estado de colaborador y dispositivos",
  },
  it: {
    developerHeading: "Perché sviluppo CouchMode",
    developer: "Sviluppo CouchMode per rendere più semplice giocare con il controller su un PC Windows: meno preparativi e un modo chiaro per tornare al desktop alla fine. Il tuo sostegno mi aiuta a dedicare più tempo a migliorare questa esperienza quotidiana.",
    impactHeading: "Cosa rende possibile il tuo sostegno",
    impacts: [
      { title: "Più test di compatibilità", body: "Tempo per studiare le differenze tra PC Windows, console portatili, controller e configurazioni degli schermi, senza presumere che una configurazione funzionante rappresenti tutte le altre." },
      { title: "Correzioni e ripristino curati", body: "Lavoro sui problemi di sessione segnalati e sul ripristino delle impostazioni supportate modificate da CouchMode, basando i miglioramenti sull'uso reale." },
      { title: "Indicazioni più chiare", body: "Tempo per istruzioni di configurazione, note di rilascio e spiegazioni su ciò che è supportato, per aiutarti a scegliere le impostazioni adatte al tuo PC." },
    ],
    monthly: "Sostegno mensile", monthlyBody: "Scegli Pro su Patreon per contribuire regolarmente allo sviluppo di CouchMode.",
    extra: "Un contributo maggiore", extraBody: "Scegli Pro Supporter se desideri contribuire di più allo stesso lavoro. Ogni contributo è apprezzato.",
    details: "Stato di sostenitore e dispositivi",
  },
  'pt-BR': {
    developerHeading: "Por que desenvolvo o CouchMode",
    developer: "Desenvolvo o CouchMode para simplificar o uso do controle em jogos no PC com Windows: menos preparativos e um caminho claro de volta à área de trabalho ao terminar. Seu apoio me ajuda a dedicar mais tempo a melhorar essa experiência no dia a dia.",
    impactHeading: "O que seu apoio torna possível",
    impacts: [
      { title: "Mais testes de compatibilidade", body: "Tempo para investigar diferenças entre PCs com Windows, portáteis, controles e configurações de tela, sem presumir que uma configuração que funciona representa todas as outras." },
      { title: "Correções e restauração cuidadosas", body: "Trabalho nos problemas de sessão relatados e na restauração das configurações compatíveis alteradas pelo CouchMode, com melhorias baseadas no uso real." },
      { title: "Orientações mais claras", body: "Tempo para instruções de configuração, notas de versão e explicações sobre o que é compatível, para ajudar você a fazer escolhas informadas para seu PC." },
    ],
    monthly: "Apoio mensal", monthlyBody: "Escolha Pro no Patreon para contribuir regularmente com o desenvolvimento do CouchMode.",
    extra: "Uma contribuição maior", extraBody: "Escolha Pro Supporter se quiser contribuir mais com o mesmo trabalho. Toda contribuição é bem-vinda.",
    details: "Status de apoiador e dispositivos",
  },
  pl: {
    developerHeading: "Dlaczego rozwijam CouchMode",
    developer: "Tworzę CouchMode, aby granie na komputerze z Windows przy użyciu pada było prostsze: mniej przygotowań i jasna droga powrotu do pulpitu po graniu. Twoje wsparcie pomaga mi poświęcać więcej czasu na ulepszanie tego codziennego doświadczenia.",
    impactHeading: "Co umożliwia Twoje wsparcie",
    impacts: [
      { title: "Więcej testów zgodności", body: "Czas na badanie różnic między komputerami z Windows, urządzeniami przenośnymi, padami i konfiguracjami ekranów, zamiast zakładać, że jeden działający zestaw reprezentuje wszystkie pozostałe." },
      { title: "Staranniejsze poprawki i przywracanie ustawień", body: "Praca nad zgłoszonymi problemami z sesjami i przywracaniem obsługiwanych ustawień zmienionych przez CouchMode. Ulepszenia wynikają z rzeczywistego użytkowania." },
      { title: "Jaśniejsze instrukcje", body: "Czas na instrukcje konfiguracji, informacje o wydaniach i wyjaśnienia zakresu obsługi, aby ułatwić świadome wybory dotyczące własnego komputera." },
    ],
    monthly: "Wsparcie co miesiąc", monthlyBody: "Wybierz Pro na Patreon, aby regularnie wspierać rozwój CouchMode.",
    extra: "Większy wkład", extraBody: "Wybierz Pro Supporter, jeśli chcesz przeznaczyć więcej na te same prace. Każdy wkład jest mile widziany.",
    details: "Status wspierającego i urządzenia",
  },
  ja: {
    developerHeading: "CouchModeを開発する理由",
    developer: "Windows PCでコントローラーを使って遊ぶ時間を、もっと手軽にしたい。その思いでCouchModeを開発しています。遊ぶ前の準備を減らし、終わったらデスクトップに戻れるようにする。皆さんの支援が、この日々の使い心地を改善するための時間につながります。",
    impactHeading: "支援が開発につながるところ",
    impacts: [
      { title: "互換性テストを重ねる", body: "Windows PC、携帯型ゲーミングPC、コントローラー、ディスプレイ構成による違いを調べる時間に。一つの環境で動いたからといって、すべての環境で同じとは考えません。" },
      { title: "問題の修正と設定の復元を丁寧に", body: "報告されたセッションの問題や、CouchModeが変更した対応設定の復元に取り組み、実際の利用に基づいて改善します。" },
      { title: "説明をわかりやすくする", body: "設定手順、リリースノート、対応範囲の説明を整える時間に。自分のPCに合う使い方を判断できる情報を届けます。" },
    ],
    monthly: "毎月の支援", monthlyBody: "PatreonのProを選ぶと、CouchModeの継続的な開発を毎月支援できます。",
    extra: "もう少し多く支援する", extraBody: "同じ開発活動をより大きな金額で支援したい方は、Pro Supporterをお選びください。どの支援も励みになります。",
    details: "支援者ステータスと端末について",
  },
  ko: {
    developerHeading: "CouchMode를 개발하는 이유",
    developer: "Windows PC에서 컨트롤러로 게임을 더 편하게 즐길 수 있도록 CouchMode를 개발하고 있습니다. 게임 전 준비는 줄이고, 끝나면 바탕 화면으로 돌아갈 수 있게 하는 것이 목표입니다. 여러분의 후원은 이런 일상의 사용 경험을 개선하는 데 더 많은 시간을 쓸 수 있도록 도와줍니다.",
    impactHeading: "후원이 개발에 보탬이 되는 곳",
    impacts: [
      { title: "더 많은 호환성 테스트", body: "Windows PC, 휴대용 게이밍 PC, 컨트롤러와 디스플레이 구성의 차이를 살펴볼 시간에 보탬이 됩니다. 한 환경에서 잘 작동한다고 모든 환경이 같다고 가정하지 않습니다." },
      { title: "세심한 문제 수정과 설정 복원", body: "제보된 세션 문제와 CouchMode가 변경한 지원 설정의 복원을 개선하며, 실제 사용에 기반해 문제를 해결합니다." },
      { title: "더 알기 쉬운 안내", body: "설정 방법, 릴리스 노트와 지원 범위를 설명하는 데 시간을 들여, 자신의 PC에 맞는 선택을 할 수 있도록 돕습니다." },
    ],
    monthly: "매월 후원하기", monthlyBody: "Patreon에서 Pro를 선택해 CouchMode의 지속적인 개발을 정기적으로 후원할 수 있습니다.",
    extra: "더 큰 금액으로 후원하기", extraBody: "같은 개발 활동에 더 많이 보태고 싶다면 Pro Supporter를 선택하세요. 모든 후원이 힘이 됩니다.",
    details: "후원자 상태와 기기 안내",
  },
};
