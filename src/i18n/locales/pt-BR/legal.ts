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

export const brazilianPortuguesePrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "pt-BR",
  path: "/privacidade/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Política de privacidade do CouchMode",
    description:
      "Como o CouchMode trata a privacidade: dados locais, sem rastreamento de jogos, diagnósticos e pacotes de suporte, verificação do status de apoiador no Patreon, estatísticas do site e pagamentos.",
    ogTitle: "Política de privacidade do CouchMode",
    ogDescription:
      "Como o CouchMode trata a privacidade: dados locais, sem rastreamento de jogos, diagnósticos e pacotes de suporte, verificação do status de apoiador no Patreon, estatísticas do site e pagamentos.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Privacidade" },
  internalLinks: ["home"],
  payload: {
    title: "Privacidade",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Outubro de 2026",
    },
    sections: [
      {
        heading: "Utilitário para Windows",
        paragraphs: [
          legalText(
            "CouchMode é um utilitário para Windows desenvolvido para ajudar a preparar, gerenciar e restaurar sessões de jogo no PC a partir do sofá. O uso da beta pública não exige conta.",
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
            "Sem rastreamento de jogos. Sem sincronização de configurações na nuvem. O status de apoiador no Patreon é verificado apenas quando necessário.",
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
            "Se você vincular uma assinatura do Patreon ao CouchMode, a verificação da assinatura de apoio poderá processar seu identificador de conta do Patreon, endereço de e-mail do Patreon caso seja fornecido pelo Patreon, plano e estado da assinatura, token de ativação, identificador da instalação ou do dispositivo, versão do app, data e hora da ativação e status de apoiador.",
          ),
          legalText(
            "O CouchMode usa essas informações apenas para verificar o status de apoiador, aplicar o limite de dispositivos dos apoiadores, solucionar problemas de conta ou dispositivo e manter registros de conta e segurança.",
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
        heading: "Pagamentos e assinaturas de apoio",
        paragraphs: [
          legalText(
            "O CouchMode não armazena dados de cartões de pagamento. As cobranças do Patreon são processadas pelo Patreon.",
          ),
          legalText(
            "O CouchMode pode acessar license.couchmode.app apenas quando necessário para verificar o status de apoiador no Patreon, atualizar o estado da assinatura ou gerenciar os dispositivos vinculados.",
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
      "Todos os recursos são gratuitos durante o beta público. Pro e Pro Supporter identificam quem apoia o projeto; não desbloqueiam recursos.",
    ogTitle: "Termos de uso do CouchMode",
    ogDescription:
      "Todos os recursos são gratuitos durante o beta público. Pro e Pro Supporter identificam quem apoia o projeto; não desbloqueiam recursos.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Termos" },
  internalLinks: ["home"],
  payload: {
    title: "Termos",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Outubro de 2026",
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
        heading: "Um beta público com todos os recursos.",
        paragraphs: [
          [{ kind: "text", text: "Todos os recursos são gratuitos durante o beta público." }],
          [
            {
              kind: "text",
              text: "Você não precisa de conta nem de cartão para usar o beta público.",
            },
          ],
          [
            {
              kind: "text",
              text: "Início por controle compatível e inicializadores personalizados. Modo Xbox quando disponível, Steam Big Picture e Playnite. Resource Control para os aplicativos selecionados e acessíveis. Configurações compatíveis de tela, HDR, áudio e sessão. Restauração das configurações alteradas pelo CouchMode.",
            },
          ],
        ],
      },
      {
        heading: "O que a assinatura no Patreon oferece?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro e Pro Supporter identificam quem apoia o projeto; não desbloqueiam recursos.",
            },
          ],
          [{ kind: "text", text: "Pro: status de apoiador em até 2 dispositivos Windows ativos." }],
          [
            {
              kind: "text",
              text: "Pro Supporter: status de apoiador em até 5 dispositivos Windows ativos e uma contribuição maior para o projeto.",
            },
          ],
          [
            {
              kind: "text",
              text: "Apoiadores no Patreon podem optar por receber atualizações de prévia diretamente no CouchMode. Essas versões são públicas, não exclusivas para apoiadores.",
            },
          ],
          [
            {
              kind: "text",
              text: "Se a assinatura terminar, o recebimento de prévias será pausado. As atualizações padrão continuam e a versão instalada não é substituída por uma anterior. Os recursos do beta público continuam gratuitos.",
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
              text: "Prefere uma contribuição única? O Buy Me a Coffee é uma forma de agradecer, não uma assinatura. A contribuição não concede status Pro, direito de acesso nem ativação de dispositivos.",
            },
          ],
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
        heading: "Limite de dispositivos para apoiadores",
        paragraphs: [
          legalText(
            "O status de apoiador e o recebimento de atualizações de prévia estão disponíveis em um número limitado de dispositivos Windows ativos. Esse limite não restringe os recursos normais da beta pública. Entre em contato com o suporte se precisar de ajuda após uma troca legítima de dispositivo.",
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
            "O Patreon pode gerenciar os detalhes de cobrança, assinatura, cancelamento e reembolso das assinaturas de apoio no Patreon. O CouchMode não armazena dados de cartões de pagamento.",
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
      "O Patreon gerencia cobranças, cancelamentos e reembolsos das assinaturas de apoio ao CouchMode. Os recursos do beta público continuam gratuitos.",
    ogTitle: "CouchMode: cobranças e reembolsos pelo Patreon",
    ogDescription:
      "O Patreon gerencia cobranças, cancelamentos e reembolsos das assinaturas de apoio ao CouchMode. Os recursos do beta público continuam gratuitos.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Política de reembolso" },
  internalLinks: ["home"],
  payload: {
    title: "Cobranças e reembolsos pelo Patreon",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Outubro de 2026",
    },
    sections: [
      {
        heading: "Todos os recursos são gratuitos durante o beta público.",
        paragraphs: [
          [{ kind: "text", text: "Todos os recursos são gratuitos durante o beta público." }],
        ],
      },
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
          [
            {
              kind: "text",
              text: "Se a assinatura terminar, o recebimento de prévias será pausado. As atualizações padrão continuam e a versão instalada não é substituída por uma anterior. Os recursos do beta público continuam gratuitos.",
            },
          ],
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
    title: "Apoie o CouchMode",
    description:
      "O CouchMode é gratuito durante o beta público. Se ele ajuda você, contribua com o desenvolvimento, os testes de compatibilidade e as próximas melhorias.",
    ogTitle: "Apoie o CouchMode",
    ogDescription:
      "O CouchMode é gratuito durante o beta público. Se ele ajuda você, contribua com o desenvolvimento, os testes de compatibilidade e as próximas melhorias.",
  },
  schema: { homeBreadcrumbLabel: "Início", currentBreadcrumbLabel: "Apoie o CouchMode" },
  internalLinks: ["home"],
  payload: {
    title: "Apoie o CouchMode",
    chrome: {
      backToHomepageLabel: "Voltar à página inicial",
      lastUpdatedLabel: "Última atualização",
      lastUpdated: "Agosto de 2026",
    },
    support: supporterCopy["pt-BR"],
  },
};
