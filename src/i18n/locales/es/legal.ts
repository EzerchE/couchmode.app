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

export const spanishPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "es",
  path: "/privacidad/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Política de privacidad de CouchMode",
    description:
      "Cómo trata CouchMode la privacidad: datos locales, sin seguimiento de partidas, diagnósticos y paquetes de soporte, verificación del estado de colaborador en Patreon, analítica web y pagos.",
    ogTitle: "Política de privacidad de CouchMode",
    ogDescription:
      "Cómo trata CouchMode la privacidad: datos locales, sin seguimiento de partidas, diagnósticos y paquetes de soporte, verificación del estado de colaborador en Patreon, analítica web y pagos.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Privacidad" },
  internalLinks: ["home"],
  payload: {
    title: "Privacidad",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Octubre de 2026",
    },
    sections: [
      {
        heading: "Utilidad de escritorio",
        paragraphs: [
          legalText(
            "CouchMode es una utilidad de escritorio para Windows diseñada para ayudarte a preparar y gestionar sesiones de juego desde el sofá con tu PC y a restaurar el estado de la sesión. No necesitas una cuenta para usar la beta pública.",
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
            "Sin seguimiento de partidas. Sin sincronización de ajustes en la nube. El estado de colaborador en Patreon se comprueba solo cuando es necesario.",
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
            "Si vinculas una membresía de Patreon a CouchMode, la verificación de la membresía de apoyo puede tratar el identificador de tu cuenta de Patreon, tu dirección de correo electrónico de Patreon si Patreon la facilita, el nivel y el estado de la membresía, el token de activación, el identificador de la instalación o del dispositivo, la versión de la aplicación, la fecha y hora de activación y tu estado de colaborador.",
          ),
          legalText(
            "CouchMode utiliza esta información únicamente para verificar el estado de colaborador, aplicar el límite de dispositivos asociado a ese estado, resolver problemas de cuenta o dispositivo y mantener los registros de cuenta y seguridad.",
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
        heading: "Pagos y membresías de apoyo",
        paragraphs: [
          legalText(
            "CouchMode no almacena datos de tarjetas de pago. Patreon se encarga de la facturación de Patreon.",
          ),
          legalText(
            "CouchMode puede conectarse a license.couchmode.app únicamente cuando sea necesario para verificar el estado de colaborador en Patreon, actualizar el estado de la membresía o gestionar los dispositivos vinculados.",
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
      "Todas las funciones son gratuitas durante la beta pública. Pro y Pro Supporter identifican a quienes apoyan el proyecto; no desbloquean funciones.",
    ogTitle: "Condiciones de uso de CouchMode",
    ogDescription:
      "Todas las funciones son gratuitas durante la beta pública. Pro y Pro Supporter identifican a quienes apoyan el proyecto; no desbloquean funciones.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Condiciones de uso" },
  internalLinks: ["home"],
  payload: {
    title: "Condiciones de uso",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Octubre de 2026",
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
        heading: "Una beta pública con todas las funciones.",
        paragraphs: [
          [{ kind: "text", text: "Todas las funciones son gratuitas durante la beta pública." }],
          [
            {
              kind: "text",
              text: "No necesitas una cuenta ni una tarjeta para usar la beta pública.",
            },
          ],
          [
            {
              kind: "text",
              text: "Inicio con un mando compatible y lanzadores personalizados. Modo Xbox donde esté disponible, Steam Big Picture y Playnite. Resource Control para las aplicaciones seleccionadas y accesibles. Ajustes compatibles de pantalla, HDR, audio y sesión. Restauración de los ajustes que cambió CouchMode.",
            },
          ],
        ],
      },
      {
        heading: "¿Qué ofrece una suscripción en Patreon?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro y Pro Supporter identifican a quienes apoyan el proyecto; no desbloquean funciones.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro: identificación como miembro de apoyo en hasta 2 dispositivos Windows activos.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro Supporter: identificación como miembro de apoyo en hasta 5 dispositivos Windows activos y una mayor aportación al proyecto.",
            },
          ],
          [
            {
              kind: "text",
              text: "Los miembros de Patreon pueden optar por recibir versiones preliminares directamente en CouchMode. Estas versiones son públicas, no exclusivas para los miembros.",
            },
          ],
          [
            {
              kind: "text",
              text: "Si termina tu suscripción, se pausa la recepción de versiones preliminares. Las actualizaciones estándar continúan y no se instala una versión anterior. Las funciones de la beta pública siguen siendo gratuitas.",
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
              text: "¿Prefieres hacer una aportación puntual? Buy Me a Coffee es una forma de dar las gracias, no una suscripción. No concede el estado Pro, derechos de acceso ni activaciones de dispositivos.",
            },
          ],
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
        heading: "Límite de dispositivos para colaboradores",
        paragraphs: [
          legalText(
            "El estado de colaborador y la recepción de actualizaciones preliminares están disponibles en un número limitado de dispositivos Windows activos. Este límite no restringe las funciones normales de la beta pública. Contacta con soporte si necesitas ayuda después de un cambio legítimo de dispositivo.",
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
            "Patreon puede encargarse de los aspectos de facturación, membresía, cancelación y reembolso de las membresías de apoyo en Patreon. CouchMode no almacena datos de tarjetas de pago.",
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
      "Patreon gestiona los pagos, las cancelaciones y los reembolsos de las membresías de apoyo a CouchMode. La beta pública sigue siendo gratuita.",
    ogTitle: "Facturación de Patreon y reembolsos de CouchMode",
    ogDescription:
      "Patreon gestiona los pagos, las cancelaciones y los reembolsos de las membresías de apoyo a CouchMode. La beta pública sigue siendo gratuita.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Política de reembolsos" },
  internalLinks: ["home"],
  payload: {
    title: "Facturación de Patreon y reembolsos",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Octubre de 2026",
    },
    sections: [
      {
        heading: "Todas las funciones son gratuitas durante la beta pública.",
        paragraphs: [
          [{ kind: "text", text: "Todas las funciones son gratuitas durante la beta pública." }],
        ],
      },
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
          [
            {
              kind: "text",
              text: "Si termina tu suscripción, se pausa la recepción de versiones preliminares. Las actualizaciones estándar continúan y no se instala una versión anterior. Las funciones de la beta pública siguen siendo gratuitas.",
            },
          ],
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
    title: "Apoya CouchMode",
    description:
      "CouchMode es gratuito durante la beta pública. Si te resulta útil, puedes apoyar su desarrollo, las pruebas de compatibilidad y las futuras mejoras.",
    ogTitle: "Apoya CouchMode",
    ogDescription:
      "CouchMode es gratuito durante la beta pública. Si te resulta útil, puedes apoyar su desarrollo, las pruebas de compatibilidad y las futuras mejoras.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Apoya CouchMode" },
  internalLinks: ["home"],
  payload: {
    title: "Apoya CouchMode",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Agosto de 2026",
    },
    support: supporterCopy["es"],
  },
};
