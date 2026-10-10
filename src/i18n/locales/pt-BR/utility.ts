import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";
import { brazilianPortugueseReleaseEditorialOverlay } from "./releases";

export const brazilianPortugueseDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "pt-BR",
  path: "/baixar/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Baixar CouchMode para Windows",
    description:
      "Baixe o CouchMode apenas em couchmode.app ou nas versões oficiais do CouchMode no GitHub. Compare o SHA-256 completo e o tamanho do arquivo antes de executar o instalador.",
    ogTitle: "Baixar CouchMode para Windows",
    ogDescription:
      "Baixe o CouchMode apenas em couchmode.app ou nas versões oficiais do CouchMode no GitHub. Compare o SHA-256 completo e o tamanho do arquivo antes de executar o instalador.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Disponibilidade do download" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Beta pública", closed: "Beta restrita antes do lançamento público" },
    heading: { before: "Baixar", accent: "CouchMode" },
    statusDescription: {
      open: "A versão padrão para Windows 11.",
      closed: "Download ainda não publicado",
    },
    directDownload: {
      label: "Baixar para Windows",
      unavailableLabel: "Download ainda não publicado",
    },
    facts: {
      directDownload: "Download direto",
      directDownloadOpen: "Disponível",
      directDownloadClosed: "Ainda não disponível",
      platform: "Plataforma",
      platformValue: "Windows 11 · 64 bits",
      installChannels: "Canais de instalação",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "Instalação",
      installValue:
        "Instalador por usuário, sem exigir acesso de administrador, com verificação integrada de atualizações",
      codeSigning: "Assinatura de código",
      signedValue: "Assinatura Authenticode com carimbo de data e hora",
      unsignedValue: "Sem assinatura: confira o SHA-256",
      pricing: "Preços",
      pricingValue: "Nenhum pagamento necessário",
    },
    cards: {
      included: {
        heading: "O que está incluído",
        body: "Todos os recursos do CouchMode. Você não precisa de conta, cartão nem assinatura no Patreon.",
      },
      officialSources: {
        heading: "Canais de instalação",
        body: "Baixe o CouchMode apenas em couchmode.app ou nas versões oficiais do CouchMode no GitHub. Compare o SHA-256 completo e o tamanho do arquivo antes de executar o instalador.",
      },
      noPublicInstaller: {
        heading: "Ainda não há instalador público",
        body: "Não há link público de download no momento. Qualquer instalador do CouchMode oferecido em outro lugar não veio de nós. Aguarde a versão oficial aparecer aqui.",
      },
    },
    build: {
      openHeading: "Detalhes da versão",
      closedHeading: "Metadados mais recentes da versão interna / pré-pública",
      openDescription:
        "Baixe o CouchMode apenas em couchmode.app ou nas versões oficiais do CouchMode no GitHub. Compare o SHA-256 completo e o tamanho do arquivo antes de executar o instalador.",
      closedDescription: "Download ainda não publicado",
      openChecksumLabel: "SHA256 (verifique antes de executar)",
      closedChecksumLabel: "SHA256 (para verificar uma versão que você já tem)",
      notesLabel: "Novidades",
      knownIssuesLabel: "Problemas conhecidos",
    },
    support: {
      beforeEmail: "Precisa de ajuda com o CouchMode? Envie um e-mail para ",
      afterEmail: ".",
    },
    installation: installationCopy["pt-BR"],
    supportCouchMode: supporterCopy["pt-BR"],
  },
};

export const brazilianPortugueseChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "pt-BR",
  path: "/novidades/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Novidades do CouchMode - Notas das versões beta para Windows",
    description:
      "Notas das versões beta do CouchMode para Windows e problemas conhecidos, das mais recentes às mais antigas.",
    ogTitle: "Novidades do CouchMode - Notas das versões beta para Windows",
    ogDescription:
      "Notas das versões beta do CouchMode para Windows e problemas conhecidos, das mais recentes às mais antigas.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Novidades" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "Histórico de versões",
    heading: "Novidades do CouchMode",
    description:
      "Notas das versões beta do CouchMode para Windows e problemas conhecidos, das mais recentes às mais antigas.",
    downloadStatus: {
      open: "Todos os recursos são gratuitos durante o beta público.",
      closed: "Download ainda não publicado",
    },
    release: {
      latestLabel: "Mais recente",
      previousLabel: "Anterior",
      notesLabel: "Novidades",
      knownIssuesLabel: "Problemas conhecidos",
      checksumLabel: "SHA256",
      editorial: brazilianPortugueseReleaseEditorialOverlay,
    },
  },
};

export const brazilianPortugueseSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "pt-BR",
  path: "/suporte/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Suporte CouchMode - Ajuda para jogar no Windows no sofá",
    description:
      "Precisa de ajuda com o CouchMode? Informe as versões do Windows e do app, o iniciador, o dispositivo, o controle, o estado da assinatura se relevante e envie um pacote de suporte.",
    ogTitle: "Suporte CouchMode - Ajuda para jogar no Windows no sofá",
    ogDescription:
      "Precisa de ajuda com o CouchMode? Informe as versões do Windows e do app, o iniciador, o dispositivo, o controle, o estado da assinatura se relevante e envie um pacote de suporte.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Suporte" },
  internalLinks: ["home"],
  payload: {
    title: "Suporte",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Agosto de 2026",
    },
    introduction: [
      "Precisa de ajuda com o CouchMode? O caminho mais rápido é pelo próprio app: você pode enviar um relato de erro, problema de compatibilidade ou sugestão de recurso. O envio é sempre uma escolha sua, você pode conferir exatamente o que será incluído e nada é enviado automaticamente.",
      "O CouchMode é uma beta pública para Windows 11 · 64 bits. Os diagnósticos são gerados localmente no seu PC, e só recebemos um relatório quando você o envia.",
    ],
    contact: {
      beforeEmail: "Você também pode enviar um e-mail para",
      afterEmail:
        "com a versão do Windows, a versão do CouchMode, o destino de inicialização, os detalhes do controle e uma breve descrição do problema.",
    },
    include: {
      heading: "Inclua estas informações:",
      items: [
        "Versão do Windows",
        "Versão do CouchMode",
        "Tipo de dispositivo: ROG Ally, outro PC portátil ou um PC de mesa",
        "Tipo de controle",
        "Destino de inicialização: Xbox em tela cheia onde houver suporte, Steam Big Picture, Playnite ou um iniciador personalizado",
        "Se o Xbox em tela cheia está disponível no Windows ou se um iniciador alternativo é usado",
        "Se é um relato de erro, sugestão de recurso ou problema de compatibilidade",
        "O que aconteceu",
        "Para problemas com o status de apoiador no Patreon, seu plano de assinatura: Pro ou Pro Supporter",
        "Número de dispositivos vinculados ao status de apoiador",
        "Captura de tela ou mensagem do erro de vinculação da conta ou do dispositivo",
        "No CouchMode, abra About > Export support bundle e, se possível, anexe o arquivo gerado.",
      ],
      diagnostics: {
        beforeShortcut:
          "Se algo estiver errado na tela, como uma janela que não deveria estar ali ou um controle que não consegue navegar em uma sessão em tela cheia, pressione",
        afterShortcutBeforePath:
          "enquanto o problema ainda estiver visível. O CouchMode salva um registro do estado atual das janelas em um arquivo próprio em",
        afterPathBeforeLog: ", junto do ",
        betweenLogReferences:
          ". Isso não altera nada na tela e funciona com ou sem o registro de depuração ativado. Nada é enviado automaticamente: o arquivo fica no seu PC, e você escolhe o que enviar. Anexe esse arquivo e o ",
        afterLog: ".",
      },
    },
    privacy: {
      beforeEmail:
        "Não publique dados privados de cobrança. Para dúvidas sobre conta ou assinatura, envie um e-mail para",
      afterEmail: ".",
    },
  },
};
