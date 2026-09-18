import { localeManifest } from "../../config";
import type { LegalInline, SurfacePacketBase } from "../../packets";

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

export const koreanPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "ko",
  path: "/privacy/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode 개인정보처리방침",
    description:
      "CouchMode의 로컬 앱 데이터, 게임 플레이 정보 보호, 진단 및 지원 번들, Patreon 이용 권한 확인, 웹사이트 분석과 결제 정보 처리 방식을 안내합니다.",
    ogTitle: "CouchMode 개인정보처리방침",
    ogDescription:
      "CouchMode의 로컬 앱 데이터, 게임 플레이 정보 보호, 진단 및 지원 번들, Patreon 이용 권한 확인, 웹사이트 분석과 결제 정보 처리 방식을 안내합니다.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "개인정보처리방침" },
  internalLinks: ["home"],
  payload: {
    title: "개인정보처리방침",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 8월",
    },
    sections: [
      {
        heading: "데스크톱 유틸리티",
        paragraphs: [
          legalText(
            "CouchMode는 PC로 소파에서 게임을 즐길 때 세션을 준비하고 관리하며 종료 후 복원하는 과정을 돕는 Windows 데스크톱 유틸리티입니다. Free 이용에는 계정이 필요하지 않습니다.",
          ),
        ],
      },
      {
        heading: "로컬 앱 데이터",
        paragraphs: [
          legalText(
            "CouchMode는 환경설정을 기억하고 문제를 진단하며 세션 상태를 복원하기 위해 기기에 앱 설정과 로그를 로컬로 저장할 수 있습니다.",
          ),
        ],
      },
      {
        heading: "게임 플레이 정보 보호",
        paragraphs: [
          legalText(
            "CouchMode는 게임 플레이 데이터를 수집하거나 어떤 게임을 플레이하는지 추적하지 않습니다.",
          ),
          legalText(
            "게임 플레이 추적이나 설정의 클라우드 동기화는 하지 않습니다. Pro 라이선스 검증은 필요할 때만 수행합니다.",
          ),
        ],
      },
      {
        heading: "진단 및 지원",
        paragraphs: [
          legalText(
            "지원팀에 문의하거나 진단 번들을 내보내는 경우, 해당 자료에는 앱 로그, Windows 버전, CouchMode 버전, 실행 모드, 컨트롤러 수 또는 상태, 디스플레이 구성, 오류나 상태 메시지가 포함될 수 있습니다.",
          ),
          legalText(
            "CouchMode는 사용자가 앱에서 문제 보고서를 제출하기로 선택한 경우에만 이를 전송할 수 있습니다. 전송 전에 보고서의 정확한 내용을 검토할 수 있으며, 보고서에는 위에 설명한 진단 정보가 포함될 수 있습니다. 자동으로 전송되는 내용은 없으며, 제출하지 않고 취소하거나 보고서를 닫으면 아무것도 전송되지 않습니다.",
          ),
          legalSupportEmail(
            "지원 이메일 ",
            "으로 문의하는 경우, 요청에 답변하기 위해 이메일 주소와 메시지 내용이 사용될 수 있습니다.",
          ),
        ],
      },
      {
        heading: "Patreon 멤버십 확인",
        paragraphs: [
          legalText(
            "CouchMode에 Patreon 멤버십을 연결하면 라이선스 검증 과정에서 Patreon 계정 식별자, Patreon이 제공하는 경우의 Patreon 이메일 주소, 멤버십 등급과 상태, 활성화 토큰, 설치 또는 기기 식별자, 앱 버전, 활성화 시각, 이용 권한 상태가 처리될 수 있습니다.",
          ),
          legalText(
            "CouchMode는 이 정보를 Pro 이용 권한 확인, 기기 수 제한 적용, 활성화 문제 해결, 계정 및 보안 기록 유지 목적으로만 사용합니다.",
          ),
        ],
      },
      {
        heading: "웹사이트 분석",
        paragraphs: [
          legalText(
            "사이트의 필수 기능은 기본으로 사용됩니다. Cloudflare Web Analytics와 Google Tag Manager를 통해 제공되는 Google 태그는 동의 안내에서 분석을 허용한 경우에만 실행됩니다. 이 도구는 페이지 조회 수와 유입 경로 등 집계된 웹사이트 트래픽을 파악하는 데 사용됩니다. 게임 플레이를 추적하지 않는 CouchMode 데스크톱 앱과는 별개입니다.",
          ),
        ],
        action: { kind: "open-consent", label: "개인정보 보호 설정 관리" },
      },
      {
        heading: "결제 및 라이선스",
        paragraphs: [
          legalText(
            "CouchMode는 결제 카드 정보를 저장하지 않습니다. Patreon 결제는 Patreon이 처리합니다.",
          ),
          legalText(
            "CouchMode는 Pro 이용 권한 검증, 이용 권한 상태 갱신 또는 기기 비활성화가 필요한 경우에만 license.couchmode.app에 접속할 수 있습니다.",
          ),
        ],
      },
    ],
  },
};

export const koreanTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "ko",
  path: "/terms/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode 이용약관",
    description:
      "Free 이용, 7일 Pro 체험, Patreon 멤버십 이용 권한, Xbox 모드 제공 조건, 보증, 책임 및 타사 서비스에 관한 CouchMode 이용약관입니다.",
    ogTitle: "CouchMode 이용약관",
    ogDescription:
      "Free 이용, 7일 Pro 체험, Patreon 멤버십 이용 권한, Xbox 모드 제공 조건, 보증, 책임 및 타사 서비스에 관한 CouchMode 이용약관입니다.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "이용약관" },
  internalLinks: ["home"],
  payload: {
    title: "이용약관",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 8월",
    },
    sections: [
      {
        heading: "라이선스",
        paragraphs: [
          legalText(
            "CouchMode는 판매되는 것이 아니라 사용이 허가되는 소프트웨어입니다. Windows 및 기존 게임 프런트엔드와 함께 작동하며 세션 준비와 복원을 돕는 Windows 유틸리티입니다.",
          ),
          legalText(
            "CouchMode는 Windows 셸이나 Windows 시작 흐름을 대체하지 않습니다. 시작 자동화는 선택 사항이며 사용자가 제어합니다.",
          ),
          legalText(
            "CouchMode는 Windows 내부를 수정하거나 커널 드라이버를 설치하지 않으며, 보안 기능을 우회하거나 게임 또는 Windows에 패치를 적용하지 않습니다.",
          ),
        ],
      },
      {
        heading: "Free와 Pro",
        paragraphs: [
          legalText(
            "하나의 설치 파일에 Free 기능, 7일 Pro 체험, Pro 활성화가 포함될 수 있습니다. Free 기능은 구매 없이 사용할 수 있습니다. 공개 베타 기간에 Pro 기능을 이용하려면 유효한 체험 기간 또는 활성 Patreon 멤버십이 필요합니다.",
          ),
          legalText(
            "Free에는 컨트롤러 중심의 세션 흐름, 지원되는 환경의 Windows Xbox 전체 화면 환경, Steam Big Picture 모드, Playnite, 세션 종료 후 바탕 화면으로 돌아가기 기능이 포함됩니다. Pro에는 호환되는 사용자 지정 런처, Resource Control, Session Tweaks 및 더 다양한 세션 자동화가 포함됩니다.",
          ),
        ],
      },
      {
        heading: "7일 Pro 체험",
        paragraphs: [
          legalText(
            "7일 앱 내 Pro 체험은 CouchMode에서 시작하며 계정이나 신용카드가 필요하지 않습니다.",
          ),
          legalText(
            "자격 요건을 충족하는 신규 회원은 제공되는 유료 등급에서 별도의 7일 Patreon 체험을 시작할 수 있습니다. Patreon은 결제 수단을 요구하지만 해당 체험이 끝날 때까지 멤버십 요금을 청구하지 않습니다. Patreon 체험은 CouchMode의 7일 앱 내 Pro 체험과 별개이며, 체험 자격은 Patreon이 결정합니다.",
          ),
        ],
        list: [
          legalText("앱 내 체험: 7일 동안 제공되며 CouchMode 계정과 신용카드가 필요하지 않습니다."),
          legalText(
            "Patreon 체험: Patreon이 관리하는 별도의 7일 체험입니다. 결제 수단이 필요하며 멤버십을 계속 유지하면 체험 종료 후 과금이 시작됩니다.",
          ),
        ],
      },
      {
        heading: "Patreon 멤버십을 통한 이용",
        paragraphs: [
          legalText(
            "공개 베타 기간에는 Patreon 멤버십을 통해 CouchMode Pro 이용 권한이 제공됩니다. 멤버십이 활성 상태인 동안 Pro 라이선스가 유지됩니다.",
          ),
          legalText(
            "멤버십이 종료되거나 결제가 실패하거나 환불 또는 취소되는 경우, 짧은 유예 기간 후 Pro 이용 권한이 Free 모드로 전환될 수 있습니다.",
          ),
          legalText(
            "Pro Version은 월 3미국 달러이며 활성 Windows 기기 최대 2대에서 개인용 Pro 이용 권한을 제공합니다. Pro Supporter는 월 5미국 달러이며 활성 Windows 기기 최대 5대에서 개인용 Pro 이용 권한을 제공합니다.",
          ),
        ],
      },
      {
        heading: "Xbox 모드 제공 조건",
        paragraphs: [
          legalText(
            "Xbox 모드와 Xbox 전체 화면 환경은 Windows 및 Microsoft가 제공합니다. 제공 여부와 동작은 기기, Windows 버전, Xbox 앱 지원, 배포 상태와 시스템 지원에 따라 달라집니다. CouchMode는 지원되지 않는 시스템에서 Xbox 모드를 사용할 수 있게 만들 수 없습니다.",
          ),
        ],
      },
      {
        heading: "자동화 및 복원",
        paragraphs: [
          legalText(
            "CouchMode는 안전하고 되돌릴 수 있는 세션 변경을 시도합니다. 자동화를 활성화하기 전에 설정을 확인하세요. 특히 디스플레이, 오디오, 전원, 시작 및 Resource Control 옵션을 검토하세요.",
          ),
          legalText(
            "CouchMode는 성능 향상이나 모든 Windows 기기에서 동일한 동작을 보장하지 않습니다.",
          ),
        ],
      },
      {
        heading: "활성화 제한",
        paragraphs: [
          legalText(
            "오용을 방지하기 위해 Pro 이용 권한에 활성화 수 제한이 적용될 수 있습니다. 정상적인 기기 변경에 도움이 필요하면 지원팀에 문의하세요.",
          ),
        ],
      },
      {
        heading: "보증 없음",
        paragraphs: [
          legalText(
            "CouchMode는 있는 그대로 제공됩니다. 신뢰할 수 있는 작동을 위해 노력하지만 모든 PC 구성에서 중단이나 오류 없는 작동을 보장할 수는 없습니다.",
          ),
        ],
      },
      {
        heading: "책임의 제한",
        paragraphs: [
          legalText(
            "법률이 허용하는 최대 범위에서 CouchMode는 간접적, 부수적 또는 결과적 손해에 대해 책임을 지지 않습니다.",
          ),
        ],
      },
      {
        heading: "타사 서비스",
        paragraphs: [
          legalText(
            "Patreon을 통한 Pro 이용 권한의 결제, 멤버십, 취소 및 환불에 관한 사항은 Patreon이 처리할 수 있습니다. CouchMode는 결제 카드 정보를 저장하지 않습니다.",
          ),
        ],
      },
      { heading: "문의", paragraphs: [legalSupportEmail("질문은 ", "으로 보내 주세요.")] },
    ],
  },
};

export const koreanRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "ko",
  path: "/refund/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Patreon 결제 및 환불 안내",
    description:
      "공개 베타 Pro 이용에 관한 환불 안내입니다. 결제·취소·환불은 Patreon이 처리하며, 이용 권한 갱신과 해당 유예 기간 후 Pro가 Free로 전환될 수 있습니다.",
    ogTitle: "CouchMode Patreon 결제 및 환불 안내",
    ogDescription:
      "공개 베타 Pro 이용에 관한 환불 안내입니다. 결제·취소·환불은 Patreon이 처리하며, 이용 권한 갱신과 해당 유예 기간 후 Pro가 Free로 전환될 수 있습니다.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "환불 안내" },
  internalLinks: ["home"],
  payload: {
    title: "Patreon 결제 및 환불 안내",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 8월",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Free는 구매 없이 사용할 수 있습니다.")] },
      {
        paragraphs: [
          legalText(
            "CouchMode Pro 및 Pro Supporter 멤버십의 결제와 관리는 Patreon을 통해 이루어집니다. CouchMode는 Patreon 외부에서 별도의 환불 제도를 운영하지 않으며, 카드 정보를 저장하거나 Patreon 요금을 결제 처리하지 않습니다.",
          ),
        ],
      },
      { paragraphs: [legalText("환불 자격과 환불 처리는 Patreon의 정책에 따릅니다.")] },
      {
        paragraphs: [
          legalText(
            "Patreon 멤버십을 취소하면 Patreon의 결제 규정에 따라 향후 갱신이 중단됩니다. 취소만으로 이전 결제 금액이 소급하여 환불되는 것은 아닙니다.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreon은 회원의 위치와 멤버십에 포함된 혜택에 따라 VAT, GST, 판매세 또는 유사한 세금을 적용할 수 있습니다. 해당 금액은 Patreon을 통해 계산되고 처리됩니다.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "멤버십이 취소되거나 환불되거나 비활성 상태가 되면 이용 권한 갱신과 해당되는 유예 기간이 지난 후 Pro 이용 권한이 Free로 전환됩니다. CouchMode 설정은 저장된 상태로 유지되며 Free 세션 기능도 계속 사용할 수 있습니다.",
          ),
        ],
      },
      { paragraphs: [legalSupportEmail("CouchMode 제품 지원은 ", "으로 문의해 주세요.")] },
    ],
  },
};

export const koreanCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "ko",
  path: "/pro/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro - Patreon 멤버십 이용 안내",
    description:
      "공개 베타의 CouchMode Pro는 활성 Patreon 멤버십으로 이용합니다. 먼저 7일 앱 내 Pro 체험을 시작하고, 계속 이용하려면 Patreon을 연결하세요.",
    ogTitle: "CouchMode Pro - Patreon 멤버십 이용 안내",
    ogDescription:
      "공개 베타의 CouchMode Pro는 활성 Patreon 멤버십으로 이용합니다. 먼저 7일 앱 내 Pro 체험을 시작하고, 계속 이용하려면 Patreon을 연결하세요.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "CouchMode Pro 이용하기",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 8월",
    },
    bridge: {
      redirectingLabel: "Patreon으로 이동 중...",
      fallbackDescription: "Patreon이 자동으로 열리지 않으면 아래 버튼을 눌러 계속하세요.",
    },
    patreonCtaLabel: "Patreon에서 계속하기",
  },
};
