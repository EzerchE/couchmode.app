import { localeManifest } from "../../config";
import type { LegalInline, SurfacePacketBase } from "../../packets";

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

export const spanishPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "es",
  path: "/privacidad/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Política de privacidad de CouchMode",
    description:
      "Cómo trata CouchMode la privacidad: datos locales, sin seguimiento de partidas, diagnósticos y paquetes de soporte, validación del acceso mediante Patreon, analítica web y pagos.",
    ogTitle: "Política de privacidad de CouchMode",
    ogDescription:
      "Cómo trata CouchMode la privacidad: datos locales, sin seguimiento de partidas, diagnósticos y paquetes de soporte, validación del acceso mediante Patreon, analítica web y pagos.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Privacidad" },
  internalLinks: ["home"],
  payload: {
    title: "Privacidad",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Agosto de 2026",
    },
    sections: [
      {
        heading: "Utilidad de escritorio",
        paragraphs: [
          legalText(
            "CouchMode es una utilidad de escritorio para Windows diseñada para ayudarte a preparar y gestionar sesiones de juego desde el sofá con tu PC y a restaurar el estado de la sesión. No necesitas una cuenta para usar Free.",
          ),
        ],
      },
      {
        heading: "Datos locales de la aplicación",
        paragraphs: [
          legalText(
            "CouchMode puede guardar ajustes y registros locales en tu dispositivo para recordar tus preferencias, diagnosticar problemas y restaurar el estado de la sesión.",
          ),
        ],
      },
      {
        heading: "Privacidad de tus partidas",
        paragraphs: [
          legalText(
            "CouchMode no recopila datos de tus partidas ni hace un seguimiento de los juegos que utilizas.",
          ),
          legalText(
            "Sin seguimiento de partidas. Sin sincronización de ajustes en la nube. La licencia Pro se valida solo cuando es necesario.",
          ),
        ],
      },
      {
        heading: "Diagnóstico y soporte",
        paragraphs: [
          legalText(
            "Si contactas con soporte o exportas un paquete de diagnóstico, este puede incluir registros de la aplicación, las versiones de Windows y CouchMode, el modo de inicio, el número o estado de los mandos, la disposición de las pantallas y mensajes de error o de estado.",
          ),
          legalText(
            "CouchMode solo puede enviar un informe de un problema cuando decides enviarlo desde la aplicación. Puedes revisar el informe exacto antes de enviarlo y puede incluir los datos de diagnóstico descritos anteriormente. No se envía nada automáticamente; si cancelas o cierras el informe sin enviarlo, no se envía nada.",
          ),
          legalSupportEmail(
            "Si escribes al soporte en ",
            ", tu dirección de correo electrónico y el contenido del mensaje pueden utilizarse para responder a tu solicitud.",
          ),
        ],
      },
      {
        heading: "Validación de la membresía de Patreon",
        paragraphs: [
          legalText(
            "Si vinculas una membresía de Patreon a CouchMode, la validación de la licencia puede tratar el identificador de tu cuenta de Patreon, tu dirección de correo electrónico de Patreon si Patreon la facilita, el nivel y el estado de la membresía, el token de activación, el identificador de la instalación o del dispositivo, la versión de la aplicación, la fecha y hora de activación y el estado de tu autorización de acceso.",
          ),
          legalText(
            "CouchMode utiliza esta información únicamente para verificar el acceso a Pro, aplicar los límites de dispositivos, resolver problemas de activación y mantener los registros de cuenta y seguridad.",
          ),
        ],
      },
      {
        heading: "Analítica del sitio web",
        paragraphs: [
          legalText(
            "Las funciones esenciales del sitio se utilizan de forma predeterminada. Cloudflare Web Analytics y la etiqueta de Google distribuida a través de Google Tag Manager solo se ejecutan después de que permitas las estadísticas en el aviso de consentimiento. Estas herramientas nos ayudan a conocer el tráfico agregado del sitio web, como las páginas vistas y los sitios de procedencia, y son independientes de la aplicación de escritorio CouchMode, que no hace un seguimiento de tus partidas.",
          ),
        ],
        action: { kind: "open-consent", label: "Gestionar preferencias de privacidad" },
      },
      {
        heading: "Pagos y licencias",
        paragraphs: [
          legalText(
            "CouchMode no almacena datos de tarjetas de pago. Patreon se encarga de la facturación de Patreon.",
          ),
          legalText(
            "CouchMode puede conectarse a license.couchmode.app únicamente cuando sea necesario para validar el acceso a Pro, actualizar el estado de la autorización de acceso o desactivar dispositivos.",
          ),
        ],
      },
    ],
  },
};

export const spanishTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "es",
  path: "/condiciones-uso/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Condiciones de uso de CouchMode",
    description:
      "Condiciones de CouchMode sobre el uso de Free, la prueba de Pro de 7 días, el acceso mediante Patreon, la disponibilidad del modo Xbox, la garantía, la responsabilidad y los servicios de terceros.",
    ogTitle: "Condiciones de uso de CouchMode",
    ogDescription:
      "Condiciones de CouchMode sobre el uso de Free, la prueba de Pro de 7 días, el acceso mediante Patreon, la disponibilidad del modo Xbox, la garantía, la responsabilidad y los servicios de terceros.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Condiciones de uso" },
  internalLinks: ["home"],
  payload: {
    title: "Condiciones de uso",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Agosto de 2026",
    },
    sections: [
      {
        heading: "Licencia",
        paragraphs: [
          legalText(
            "CouchMode se ofrece bajo licencia, no se vende. Es una utilidad de Windows para preparar sesiones y restaurar su estado, que funciona con Windows y las interfaces de juego existentes.",
          ),
          legalText(
            "CouchMode no sustituye la interfaz de escritorio de Windows ni su proceso de inicio. La automatización del inicio es opcional y está bajo el control del usuario.",
          ),
          legalText(
            "CouchMode no modifica los componentes internos de Windows, no instala controladores del núcleo, no elude las funciones de seguridad ni aplica parches a los juegos o a Windows.",
          ),
        ],
      },
      {
        heading: "Free y Pro",
        paragraphs: [
          legalText(
            "Un mismo instalador puede incluir las funciones Free, la prueba de Pro de 7 días y la activación de Pro. Las funciones Free están disponibles sin comprar nada. Durante la beta pública, las funciones Pro requieren una prueba activa o una membresía activa de Patreon.",
          ),
          legalText(
            "Free incluye el funcionamiento de las sesiones centrado en el mando, la experiencia Xbox a pantalla completa de Windows donde sea compatible, Steam Big Picture, Playnite y la vuelta al escritorio al terminar una sesión. Pro incluye los lanzadores personalizados compatibles, Resource Control, Session Tweaks y las opciones de automatización más avanzadas de la sesión.",
          ),
        ],
      },
      {
        heading: "Prueba de Pro de 7 días",
        paragraphs: [
          legalText(
            "La prueba de Pro de 7 días dentro de la aplicación se inicia en CouchMode y no requiere cuenta ni tarjeta de crédito.",
          ),
          legalText(
            "Quienes se hagan miembros por primera vez y cumplan los requisitos pueden iniciar una prueba independiente de Patreon de 7 días en los niveles de pago disponibles. Patreon requiere un método de pago, pero no cobra la cuota de la membresía hasta que termina esa prueba. La prueba de Patreon es independiente de la prueba de Pro de 7 días dentro de CouchMode, y Patreon decide quién puede acceder a ella.",
          ),
        ],
        list: [
          legalText(
            "Prueba dentro de la aplicación: 7 días, sin necesidad de cuenta de CouchMode ni tarjeta de crédito.",
          ),
          legalText(
            "Prueba de Patreon: otros 7 días independientes, gestionados por Patreon; requiere un método de pago y la facturación comienza después de la prueba si la membresía continúa.",
          ),
        ],
      },
      {
        heading: "Acceso mediante una membresía de Patreon",
        paragraphs: [
          legalText(
            "Durante la beta pública, el acceso a CouchMode Pro se proporciona mediante una membresía de Patreon. La licencia Pro permanece activa mientras la membresía esté activa.",
          ),
          legalText(
            "Si la membresía termina, falla, se reembolsa o se cancela, el acceso a Pro puede volver al modo Free tras un breve período de gracia.",
          ),
          legalText(
            "Pro Version cuesta 3 USD al mes e incluye acceso personal a Pro en hasta 2 dispositivos Windows activos. Pro Supporter cuesta 5 USD al mes e incluye acceso personal a Pro en hasta 5 dispositivos Windows activos.",
          ),
        ],
      },
      {
        heading: "Disponibilidad del modo Xbox",
        paragraphs: [
          legalText(
            "El modo Xbox y la experiencia Xbox a pantalla completa los proporcionan Windows y Microsoft. Su disponibilidad y comportamiento dependen del dispositivo, la versión de Windows, la compatibilidad de la aplicación Xbox, el estado del despliegue y la compatibilidad del sistema. CouchMode no puede habilitar el modo Xbox en sistemas no compatibles.",
          ),
        ],
      },
      {
        heading: "Automatización y restauración",
        paragraphs: [
          legalText(
            "CouchMode intenta realizar cambios de sesión seguros y reversibles. Revisa tus ajustes antes de activar la automatización, especialmente las opciones de pantalla, audio, energía, inicio y Resource Control.",
          ),
          legalText(
            "CouchMode no promete mejoras de rendimiento ni un comportamiento idéntico en todos los dispositivos Windows.",
          ),
        ],
      },
      {
        heading: "Límite de activaciones",
        paragraphs: [
          legalText(
            "El acceso a Pro puede tener límites de activación para evitar abusos. Contacta con soporte si necesitas ayuda con un cambio legítimo de dispositivo.",
          ),
        ],
      },
      {
        heading: "Sin garantía",
        paragraphs: [
          legalText(
            "CouchMode se proporciona tal cual. Trabajamos para mantener su fiabilidad, pero no podemos prometer un funcionamiento ininterrumpido o libre de errores en todas las configuraciones de PC.",
          ),
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        paragraphs: [
          legalText(
            "En la máxima medida permitida por la ley, CouchMode no será responsable de daños indirectos, incidentales o consecuentes.",
          ),
        ],
      },
      {
        heading: "Servicios de terceros",
        paragraphs: [
          legalText(
            "Patreon puede encargarse de los aspectos de facturación, membresía, cancelación y reembolso del acceso a Pro mediante Patreon. CouchMode no almacena datos de tarjetas de pago.",
          ),
        ],
      },
      {
        heading: "Contacto",
        paragraphs: [legalSupportEmail("Puedes enviar tus preguntas a ", ".")],
      },
    ],
  },
};

export const spanishRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "es",
  path: "/reembolsos/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Facturación de Patreon y reembolsos de CouchMode",
    description:
      "Política de reembolsos del acceso a CouchMode Pro durante la beta pública: Patreon gestiona la facturación, las cancelaciones y los reembolsos; Pro puede volver a Free tras actualizar la autorización de acceso y finalizar el período de gracia aplicable.",
    ogTitle: "Facturación de Patreon y reembolsos de CouchMode",
    ogDescription:
      "Política de reembolsos del acceso a CouchMode Pro durante la beta pública: Patreon gestiona la facturación, las cancelaciones y los reembolsos; Pro puede volver a Free tras actualizar la autorización de acceso y finalizar el período de gracia aplicable.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Política de reembolsos" },
  internalLinks: ["home"],
  payload: {
    title: "Facturación de Patreon y reembolsos",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Agosto de 2026",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Free no requiere ninguna compra.")] },
      {
        paragraphs: [
          legalText(
            "Las membresías CouchMode Pro y Pro Supporter se facturan y gestionan a través de Patreon. CouchMode no tiene un programa de reembolsos independiente de Patreon, no almacena datos de tarjetas ni procesa los cargos de Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Los requisitos para obtener un reembolso y su tramitación se rigen por las políticas de Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Cancelar una membresía de Patreon impide futuras renovaciones de acuerdo con las normas de facturación de Patreon. La cancelación no genera por sí sola un reembolso retroactivo.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreon puede aplicar IVA, GST, impuestos sobre las ventas u otros cargos similares según la ubicación del miembro y los beneficios incluidos en la membresía. Estos importes se calculan y gestionan a través de Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Si la membresía se cancela, se reembolsa o deja de estar activa, el acceso a Pro vuelve a Free después de actualizar la autorización de acceso y de que termine cualquier período de gracia aplicable. Tus ajustes de CouchMode permanecen guardados y puedes seguir utilizando las sesiones de Free.",
          ),
        ],
      },
      {
        paragraphs: [legalSupportEmail("Para obtener soporte sobre CouchMode, contacta con ", ".")],
      },
    ],
  },
};

export const spanishCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "es",
  path: "/couchmode-pro/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro - Acceso mediante una membresía de Patreon",
    description:
      "Durante la beta pública, el acceso a CouchMode Pro requiere una membresía activa de Patreon. Empieza con la prueba de Pro de 7 días dentro de la aplicación y después vincula Patreon para continuar.",
    ogTitle: "CouchMode Pro - Acceso mediante una membresía de Patreon",
    ogDescription:
      "Durante la beta pública, el acceso a CouchMode Pro requiere una membresía activa de Patreon. Empieza con la prueba de Pro de 7 días dentro de la aplicación y después vincula Patreon para continuar.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "Obtener CouchMode Pro",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Agosto de 2026",
    },
    bridge: {
      redirectingLabel: "Te estamos redirigiendo a Patreon...",
      fallbackDescription: "Si Patreon no se abre automáticamente, continúa con el botón de abajo.",
    },
    patreonCtaLabel: "Continuar en Patreon",
  },
};
