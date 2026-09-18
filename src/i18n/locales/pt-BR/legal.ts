import { localeManifest } from "../../config";
import type { LegalInline, SurfacePacketBase } from "../../packets";

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

export const brazilianPortuguesePrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "pt-BR",
  path: "/privacidade/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Política de privacidade do CouchMode",
    description:
      "Como o CouchMode trata a privacidade: dados locais, sem rastreamento de jogos, diagnósticos e pacotes de suporte, validação do acesso pelo Patreon, estatísticas do site e pagamentos.",
    ogTitle: "Política de privacidade do CouchMode",
    ogDescription:
      "Como o CouchMode trata a privacidade: dados locais, sem rastreamento de jogos, diagnósticos e pacotes de suporte, validação do acesso pelo Patreon, estatísticas do site e pagamentos.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Privacidade" },
  internalLinks: ["home"],
  payload: {
    title: "Privacidade",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Agosto de 2026",
    },
    sections: [
      {
        heading: "Utilitário para Windows",
        paragraphs: [
          legalText(
            "CouchMode é um utilitário para Windows desenvolvido para ajudar a preparar, gerenciar e restaurar sessões de jogo no PC a partir do sofá. O uso gratuito não exige conta.",
          ),
        ],
      },
      {
        heading: "Dados locais do app",
        paragraphs: [
          legalText(
            "O CouchMode pode armazenar configurações e logs locais no seu dispositivo para lembrar preferências, diagnosticar problemas e restaurar o estado da sessão.",
          ),
        ],
      },
      {
        heading: "Privacidade ao jogar",
        paragraphs: [
          legalText(
            "O CouchMode não coleta dados das suas partidas nem rastreia quais jogos você joga.",
          ),
          legalText(
            "Sem rastreamento de jogos. Sem sincronização de configurações na nuvem. A validação da licença Pro é realizada apenas quando necessário.",
          ),
        ],
      },
      {
        heading: "Diagnósticos e suporte",
        paragraphs: [
          legalText(
            "Se você entrar em contato com o suporte ou exportar um pacote de diagnóstico, ele poderá incluir logs do app, versão do Windows, versão do CouchMode, modo de inicialização, quantidade ou estado dos controles, organização das telas e mensagens de erro ou de estado.",
          ),
          legalText(
            "O CouchMode só pode enviar um relatório de problema quando você decide enviá-lo pelo app. Você pode conferir o relatório exato antes do envio, e ele pode incluir os detalhes de diagnóstico descritos acima. Nada é enviado automaticamente, e cancelar ou fechar o relatório sem enviá-lo não transmite nenhum dado.",
          ),
          legalSupportEmail(
            "Se você enviar um e-mail ao suporte em ",
            ", seu endereço de e-mail e o conteúdo da mensagem poderão ser usados para responder à sua solicitação.",
          ),
        ],
      },
      {
        heading: "Validação da assinatura do Patreon",
        paragraphs: [
          legalText(
            "Se você vincular uma assinatura do Patreon ao CouchMode, a validação da licença poderá processar seu identificador de conta do Patreon, endereço de e-mail do Patreon caso seja fornecido pelo Patreon, plano e estado da assinatura, token de ativação, identificador da instalação ou do dispositivo, versão do app, data e hora da ativação e estado do direito de acesso.",
          ),
          legalText(
            "O CouchMode usa essas informações apenas para verificar o acesso Pro, aplicar os limites de dispositivos, solucionar problemas de ativação e manter registros de conta e segurança.",
          ),
        ],
      },
      {
        heading: "Estatísticas do site",
        paragraphs: [
          legalText(
            "As funções essenciais do site são usadas por padrão. O Cloudflare Web Analytics e a tag do Google, fornecida pelo Google Tag Manager, só são executados depois que você permite Estatísticas no aviso de consentimento. Essas ferramentas nos ajudam a entender o tráfego agregado do site, como visualizações de página e sites de origem, e são separadas do aplicativo CouchMode para Windows, que não rastreia jogos.",
          ),
        ],
        action: { kind: "open-consent", label: "Gerenciar escolhas de privacidade" },
      },
      {
        heading: "Pagamentos e licenças",
        paragraphs: [
          legalText(
            "O CouchMode não armazena dados de cartões de pagamento. As cobranças do Patreon são processadas pelo Patreon.",
          ),
          legalText(
            "O CouchMode pode acessar license.couchmode.app apenas quando necessário para validar o acesso Pro, atualizar o estado do direito de acesso ou desativar dispositivos.",
          ),
        ],
      },
    ],
  },
};

export const brazilianPortugueseTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "pt-BR",
  path: "/termos/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Termos de uso do CouchMode",
    description:
      "Termos do CouchMode sobre uso gratuito, teste Pro de 7 dias, acesso pelo Patreon, disponibilidade do modo Xbox, garantia, responsabilidade e serviços de terceiros.",
    ogTitle: "Termos de uso do CouchMode",
    ogDescription:
      "Termos do CouchMode sobre uso gratuito, teste Pro de 7 dias, acesso pelo Patreon, disponibilidade do modo Xbox, garantia, responsabilidade e serviços de terceiros.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Termos" },
  internalLinks: ["home"],
  payload: {
    title: "Termos",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Agosto de 2026",
    },
    sections: [
      {
        heading: "Licença",
        paragraphs: [
          legalText(
            "O CouchMode é licenciado, não vendido. É um utilitário para preparar e restaurar sessões em conjunto com o Windows e as interfaces de jogos existentes.",
          ),
          legalText(
            "O CouchMode não substitui o shell do Windows nem o processo de inicialização do Windows. A automação de inicialização é opcional e controlada pelo usuário.",
          ),
          legalText(
            "O CouchMode não modifica componentes internos do Windows, não instala drivers de kernel, não contorna recursos de segurança nem aplica modificações a jogos ou ao Windows.",
          ),
        ],
      },
      {
        heading: "Free e Pro",
        paragraphs: [
          legalText(
            "Um único instalador pode incluir os recursos Free, o teste Pro de 7 dias e a ativação Pro. Os recursos Free estão disponíveis sem compra. Durante a beta pública, os recursos Pro exigem um teste ativo ou uma assinatura ativa no Patreon.",
          ),
          legalText(
            "O Free inclui o fluxo de sessão com controle, a experiência Xbox em tela cheia do Windows onde houver suporte, Steam Big Picture, Playnite e o retorno à área de trabalho ao encerrar uma sessão. O Pro inclui iniciadores personalizados compatíveis, Resource Control, Session Tweaks e automações adicionais da sessão.",
          ),
        ],
      },
      {
        heading: "Teste Pro de 7 dias",
        paragraphs: [
          legalText(
            "O teste Pro de 7 dias no app é iniciado no CouchMode e não exige conta nem cartão de crédito.",
          ),
          legalText(
            "Novos assinantes elegíveis podem iniciar um teste separado de 7 dias no Patreon, nos planos pagos disponíveis. O Patreon exige um meio de pagamento, mas só cobra a assinatura ao final desse teste. O teste do Patreon é separado do teste Pro de 7 dias no app CouchMode, e o Patreon decide quem tem direito a ele.",
          ),
        ],
        list: [
          legalText("Teste no app: 7 dias, sem exigir conta do CouchMode nem cartão de crédito."),
          legalText(
            "Teste do Patreon: 7 dias separados, administrados pelo Patreon, com meio de pagamento obrigatório; a cobrança começa após o teste se a assinatura continuar.",
          ),
        ],
      },
      {
        heading: "Acesso para apoiadores pelo Patreon",
        paragraphs: [
          legalText(
            "Durante a beta pública, o acesso ao CouchMode Pro é fornecido por uma assinatura no Patreon. A licença Pro permanece ativa enquanto a assinatura estiver ativa.",
          ),
          legalText(
            "Se a assinatura terminar, apresentar falha, for reembolsada ou cancelada, o acesso Pro poderá voltar ao modo Free após um breve período de tolerância.",
          ),
          legalText(
            "O Pro Version custa US$ 3/mês e inclui acesso Pro pessoal em até 2 dispositivos Windows ativos. O Pro Supporter custa US$ 5/mês e inclui acesso Pro pessoal em até 5 dispositivos Windows ativos.",
          ),
        ],
      },
      {
        heading: "Disponibilidade do modo Xbox",
        paragraphs: [
          legalText(
            "O modo Xbox e a experiência Xbox em tela cheia são fornecidos pelo Windows e pela Microsoft. A disponibilidade e o comportamento dependem do dispositivo, da versão do Windows, do suporte do app Xbox, do estágio de liberação e do suporte do sistema. O CouchMode não pode disponibilizar o modo Xbox em sistemas sem suporte.",
          ),
        ],
      },
      {
        heading: "Automação e restauração",
        paragraphs: [
          legalText(
            "O CouchMode busca fazer alterações de sessão seguras e reversíveis. Revise suas configurações antes de ativar automações, principalmente as opções de tela, áudio, energia, inicialização e Resource Control.",
          ),
          legalText(
            "O CouchMode não promete ganhos de desempenho nem comportamento idêntico em todos os dispositivos Windows.",
          ),
        ],
      },
      {
        heading: "Limite de ativações",
        paragraphs: [
          legalText(
            "O acesso Pro pode ter limites de ativação para evitar abusos. Entre em contato com o suporte se precisar de ajuda com uma troca legítima de dispositivo.",
          ),
        ],
      },
      {
        heading: "Sem garantia",
        paragraphs: [
          legalText(
            "O CouchMode é fornecido no estado em que se encontra. Trabalhamos para mantê-lo confiável, mas não podemos prometer funcionamento ininterrupto ou sem erros em todas as configurações de PC.",
          ),
        ],
      },
      {
        heading: "Limitação de responsabilidade",
        paragraphs: [
          legalText(
            "Na extensão máxima permitida por lei, o CouchMode não se responsabiliza por danos indiretos, incidentais ou consequenciais.",
          ),
        ],
      },
      {
        heading: "Serviços de terceiros",
        paragraphs: [
          legalText(
            "O Patreon pode gerenciar os detalhes de cobrança, assinatura, cancelamento e reembolso do acesso Pro vinculado ao Patreon. O CouchMode não armazena dados de cartões de pagamento.",
          ),
        ],
      },
      { heading: "Contato", paragraphs: [legalSupportEmail("Envie suas dúvidas para ", ".")] },
    ],
  },
};

export const brazilianPortugueseRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "pt-BR",
  path: "/reembolsos/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: cobranças e reembolsos pelo Patreon",
    description:
      "Reembolsos do acesso Pro na beta pública: o Patreon gerencia cobranças, cancelamentos e reembolsos; o acesso pode voltar ao Free após a atualização e o período de tolerância aplicável.",
    ogTitle: "CouchMode: cobranças e reembolsos pelo Patreon",
    ogDescription:
      "Reembolsos do acesso Pro na beta pública: o Patreon gerencia cobranças, cancelamentos e reembolsos; o acesso pode voltar ao Free após a atualização e o período de tolerância aplicável.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Política de reembolso" },
  internalLinks: ["home"],
  payload: {
    title: "Cobranças e reembolsos pelo Patreon",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Agosto de 2026",
    },
    sections: [
      { paragraphs: [legalText("O CouchMode Free não exige compra.")] },
      {
        paragraphs: [
          legalText(
            "As assinaturas CouchMode Pro e Pro Supporter são cobradas e gerenciadas pelo Patreon. O CouchMode não oferece um programa de reembolso separado fora do Patreon, não armazena dados de cartões nem processa as cobranças do Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "A elegibilidade e o processamento de reembolsos seguem as políticas do Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Cancelar uma assinatura no Patreon impede renovações futuras conforme as regras de cobrança do Patreon. O cancelamento, por si só, não gera um reembolso retroativo.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "O Patreon pode aplicar IVA (VAT), GST, impostos sobre vendas ou cobranças semelhantes conforme a localização do assinante e os benefícios incluídos na assinatura. Esses valores são calculados e processados pelo Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Se a assinatura for cancelada, reembolsada ou ficar inativa, o acesso Pro volta ao Free após a atualização do direito de acesso e qualquer período de tolerância aplicável. Suas configurações do CouchMode continuam salvas, e o fluxo de sessão do Free permanece disponível.",
          ),
        ],
      },
      {
        paragraphs: [
          legalSupportEmail("Para obter suporte ao produto CouchMode, entre em contato com ", "."),
        ],
      },
    ],
  },
};

export const brazilianPortugueseCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "pt-BR",
  path: "/pro/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro - Acesso para apoiadores pelo Patreon",
    description:
      "Durante a beta pública, o acesso ao CouchMode Pro usa uma assinatura ativa no Patreon. Comece com o teste Pro de 7 dias no app e depois conecte o Patreon para continuar.",
    ogTitle: "CouchMode Pro - Acesso para apoiadores pelo Patreon",
    ogDescription:
      "Durante a beta pública, o acesso ao CouchMode Pro usa uma assinatura ativa no Patreon. Comece com o teste Pro de 7 dias no app e depois conecte o Patreon para continuar.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "Obter CouchMode Pro",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Agosto de 2026",
    },
    bridge: {
      redirectingLabel: "Abrindo o Patreon...",
      fallbackDescription:
        "Se o Patreon não abrir automaticamente, use o botão abaixo para continuar.",
    },
    patreonCtaLabel: "Continuar no Patreon",
  },
};
