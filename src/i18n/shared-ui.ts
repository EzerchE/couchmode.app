export type SharedUiCopy = {
  consent: {
    heading: string;
    explanation: string;
    saveError: string;
    necessary: string;
    alwaysOn: string;
    necessaryAriaLabel: string;
    analytics: string;
    analyticsDescription: string;
    advertising: string;
    advertisingDescription: string;
    necessaryOnly: string;
    acceptAnalytics: string;
    saveChoices: string;
  };
  errors: {
    staticHeading: string;
    staticDescription: string;
    guidesLabel: string;
    notFoundTitle: string;
    notFoundDescription: string;
    homeLabel: string;
    errorTitle: string;
    errorDescription: string;
    retryLabel: string;
  };
};

export const englishSharedUi: SharedUiCopy = {
  consent: {
    heading: "Your privacy choices",
    explanation:
      "Necessary storage keeps this choice. Analytics helps us understand website use. Advertising is reserved for future campaign measurement and is off unless you allow it.",
    saveError:
      "We could not save your choice. Please check that browser storage is available and try again.",
    necessary: "Necessary",
    alwaysOn: "Always on",
    necessaryAriaLabel: "Necessary storage is always enabled",
    analytics: "Analytics",
    analyticsDescription: "Website usage measurement",
    advertising: "Advertising",
    advertisingDescription: "Future ad measurement",
    necessaryOnly: "Necessary only",
    acceptAnalytics: "Accept analytics",
    saveChoices: "Save choices",
  },
  errors: {
    staticHeading: "This CouchMode page does not exist.",
    staticDescription: "Try the Windows couch gaming guides or return to the CouchMode homepage.",
    guidesLabel: "Browse guides",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you're looking for doesn't exist or has been moved.",
    homeLabel: "Go home",
    errorTitle: "This page didn't load",
    errorDescription: "Something went wrong on our end. You can try refreshing or head back home.",
    retryLabel: "Try again",
  },
};

export const germanSharedUi: SharedUiCopy = {
  consent: {
    heading: "Deine Datenschutzeinstellungen",
    explanation:
      "Der notwendige Browserspeicher speichert deine Auswahl. Nutzungsstatistiken helfen uns zu verstehen, wie die Website genutzt wird. Die Werbemessung ist für künftige Kampagnen vorgesehen und bleibt ohne deine Zustimmung ausgeschaltet.",
    saveError:
      "Deine Auswahl konnte nicht gespeichert werden. Prüfe, ob dein Browser das Speichern von Daten erlaubt, und versuche es erneut.",
    necessary: "Notwendig",
    alwaysOn: "Immer aktiv",
    necessaryAriaLabel: "Der notwendige Browserspeicher ist immer aktiviert",
    analytics: "Nutzungsstatistiken",
    analyticsDescription: "Messung der Website-Nutzung",
    advertising: "Werbung",
    advertisingDescription: "Künftige Werbemessung",
    necessaryOnly: "Nur notwendige Daten",
    acceptAnalytics: "Nutzungsstatistiken erlauben",
    saveChoices: "Auswahl speichern",
  },
  errors: {
    staticHeading: "Diese CouchMode-Seite existiert nicht.",
    staticDescription:
      "Schau in die Anleitungen zum Spielen unter Windows oder gehe zurück zur CouchMode-Startseite.",
    guidesLabel: "Anleitungen ansehen",
    notFoundTitle: "Seite nicht gefunden",
    notFoundDescription: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    homeLabel: "Zur Startseite",
    errorTitle: "Diese Seite konnte nicht geladen werden",
    errorDescription:
      "Bei uns ist ein Fehler aufgetreten. Lade die Seite erneut oder gehe zurück zur Startseite.",
    retryLabel: "Erneut versuchen",
  },
};

export const turkishSharedUi: SharedUiCopy = {
  consent: {
    heading: "Gizlilik tercihleriniz",
    explanation:
      "Zorunlu tarayıcı depolaması bu tercihinizi kaydeder. Kullanım ölçümü, sitenin nasıl kullanıldığını anlamamıza yardımcı olur. Reklam ölçümü gelecekteki kampanyalar için ayrılmıştır ve izin vermediğiniz sürece kapalıdır.",
    saveError:
      "Tercihiniz kaydedilemedi. Tarayıcınızda veri depolamaya izin verildiğini kontrol edip yeniden deneyin.",
    necessary: "Zorunlu",
    alwaysOn: "Her zaman açık",
    necessaryAriaLabel: "Zorunlu tarayıcı depolaması her zaman açıktır",
    analytics: "Kullanım ölçümü",
    analyticsDescription: "Site kullanımının ölçülmesi",
    advertising: "Reklam",
    advertisingDescription: "Gelecekteki reklam ölçümü",
    necessaryOnly: "Yalnızca zorunlu",
    acceptAnalytics: "Kullanım ölçümüne izin ver",
    saveChoices: "Tercihleri kaydet",
  },
  errors: {
    staticHeading: "Bu CouchMode sayfası mevcut değil.",
    staticDescription:
      "Windows oyun rehberlerine göz atabilir veya CouchMode ana sayfasına dönebilirsiniz.",
    guidesLabel: "Rehberlere göz at",
    notFoundTitle: "Sayfa bulunamadı",
    notFoundDescription: "Aradığınız sayfa mevcut değil veya taşınmış.",
    homeLabel: "Ana sayfaya dön",
    errorTitle: "Bu sayfa yüklenemedi",
    errorDescription:
      "Bizim tarafımızda bir sorun oluştu. Sayfayı yeniden yükleyebilir veya ana sayfaya dönebilirsiniz.",
    retryLabel: "Yeniden dene",
  },
};
