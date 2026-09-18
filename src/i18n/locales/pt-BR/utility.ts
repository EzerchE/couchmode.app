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
      "Baixe a versão beta pública assinada do CouchMode para Windows 11. Verifique o SHA-256 publicado e confira as notas da versão mais recente.",
    ogTitle: "Baixar CouchMode para Windows",
    ogDescription:
      "Baixe a versão beta pública assinada do CouchMode para Windows 11. Verifique o SHA-256 publicado e confira as notas da versão mais recente.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Disponibilidade do download" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Beta pública", closed: "Beta restrita antes do lançamento público" },
    heading: { before: "Disponibilidade da", accent: "versão" },
    statusDescription: {
      open: "O CouchMode para Windows está em beta pública. O instalador abaixo tem assinatura digital e carimbo de data e hora. O SHA256 e as notas da versão estão publicados para você verificar o arquivo antes de executá-lo.",
      closed:
        "O CouchMode para Windows está em testes privados. O download público só será liberado aqui após a aprovação de uma versão assinada, do seu SHA256 e das notas da versão.",
    },
    directDownload: {
      label: "Baixar para Windows",
      unavailableLabel: "Download disponível em breve",
    },
    microsoftStore: {
      label: "Obter CouchMode na Microsoft Store",
      supportingText:
        "Duas formas oficiais de instalar o CouchMode: pelo instalador assinado acima ou pela Microsoft Store.",
    },
    facts: {
      directDownload: "Download direto",
      directDownloadOpen: "Disponível",
      directDownloadClosed: "Ainda não disponível",
      platform: "Plataforma",
      platformValue: "Windows 11 · 64 bits",
      installChannels: "Canais de instalação",
      installChannelsValue: "Download direto ou Microsoft Store",
      install: "Instalação",
      installValue:
        "Instalador por usuário, sem exigir acesso de administrador, com verificação integrada de atualizações",
      codeSigning: "Assinatura de código",
      signedValue: "Assinatura Authenticode com carimbo de data e hora",
      unsignedValue: "Em preparação; as versões não têm assinatura até a ativação",
      pricing: "Preços",
      pricingValue:
        "O Free inclui Xbox em tela cheia, Steam Big Picture e Playnite. O teste Pro de 7 dias no app acrescenta mais automações, sem conta nem cartão",
    },
    cards: {
      included: {
        heading: "O que está incluído",
        body: "Um único instalador do CouchMode para Windows, com teste Pro de 7 dias no app. Não é preciso conta nem cartão de crédito para testar o Pro.",
      },
      officialSources: {
        heading: "Duas fontes oficiais",
        body: "Baixe o CouchMode em couchmode.app ou na Microsoft Store. Se você obteve um instalador em outro lugar, confira o SHA256 abaixo e o fornecedor que o Windows mostra ao executá-lo.",
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
        "Compare este hash com o do arquivo baixado antes de executá-lo. O Windows também mostrará o fornecedor ao abrir o instalador.",
      closedDescription:
        "Estes são metadados de uma versão interna anterior ao lançamento público, não da candidata ao download público. Eles são publicados para que você possa verificar uma versão que já tenha recebido durante os testes privados.",
      openChecksumLabel: "SHA256 (verifique antes de executar)",
      closedChecksumLabel: "SHA256 (para verificar uma versão que você já tem)",
      notesLabel: "Novidades",
      knownIssuesLabel: "Problemas conhecidos",
    },
    support: {
      beforeEmail:
        "Está testando o CouchMode em caráter privado e precisa de ajuda? Envie um e-mail para",
      afterEmail: ".",
    },
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
      open: "A beta pública assinada mais recente está disponível na página de download. As versões anteriores ficam aqui como histórico.",
      closed:
        "O download público ainda não está liberado. Esta página apresenta os metadados de versão publicados no momento, que podem ser diferentes dos da versão interna em preparação para a beta pública assinada.",
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
      "O CouchMode é uma beta pública assinada para Windows 11 · 64 bits. Os diagnósticos são gerados localmente no seu PC, e só recebemos um relatório quando você o envia.",
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
        "Se aconteceu no modo Free, Trial ou Pro",
        "Para problemas de acesso Pro, seu plano: Pro Version ou Pro Supporter",
        "Número de dispositivos já ativados",
        "Captura de tela ou mensagem do erro de ativação",
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
