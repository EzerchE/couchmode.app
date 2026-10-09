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

export const koreanPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "ko",
  path: "/privacy/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode 개인정보처리방침",
    description:
      "CouchMode의 로컬 앱 데이터, 게임 플레이 정보 보호, 진단 및 지원 번들, Patreon 후원자 상태 확인, 웹사이트 분석과 결제 정보 처리 방식을 안내합니다.",
    ogTitle: "CouchMode 개인정보처리방침",
    ogDescription:
      "CouchMode의 로컬 앱 데이터, 게임 플레이 정보 보호, 진단 및 지원 번들, Patreon 후원자 상태 확인, 웹사이트 분석과 결제 정보 처리 방식을 안내합니다.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "개인정보처리방침" },
  internalLinks: ["home"],
  payload: {
    title: "개인정보처리방침",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 10월",
    },
    sections: [
      {
        heading: "데스크톱 유틸리티",
        paragraphs: [
          legalText(
            "CouchMode는 PC로 소파에서 게임을 즐길 때 세션을 준비하고 관리하며 종료 후 복원하는 과정을 돕는 Windows 데스크톱 유틸리티입니다. 공개 베타 이용에는 계정이 필요하지 않습니다.",
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
            "게임 플레이 추적이나 설정의 클라우드 동기화는 하지 않습니다. Patreon 후원자 상태는 필요할 때만 확인합니다.",
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
            "CouchMode에 Patreon 멤버십을 연결하면 후원 멤버십 확인 과정에서 Patreon 계정 식별자, Patreon이 제공하는 경우의 Patreon 이메일 주소, 멤버십 등급과 상태, 활성화 토큰, 설치 또는 기기 식별자, 앱 버전, 활성화 시각, 후원자 상태가 처리될 수 있습니다.",
          ),
          legalText(
            "CouchMode는 이 정보를 후원자 상태 확인, 후원자 기기 수 제한 적용, 계정 또는 기기 문제 해결, 계정 및 보안 기록 유지 목적으로만 사용합니다.",
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
        heading: "결제 및 후원 멤버십",
        paragraphs: [
          legalText(
            "CouchMode는 결제 카드 정보를 저장하지 않습니다. Patreon 결제는 Patreon이 처리합니다.",
          ),
          legalText(
            "CouchMode는 Patreon 후원자 상태 확인, 멤버십 상태 갱신 또는 연결된 기기 관리가 필요한 경우에만 license.couchmode.app에 접속할 수 있습니다.",
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
      "공개 베타 기간에는 모든 기능을 무료로 사용할 수 있습니다. Pro와 Pro Supporter는 후원자 상태를 나타내며, 기능을 잠금 해제하기 위한 등급이 아닙니다.",
    ogTitle: "CouchMode 이용약관",
    ogDescription:
      "공개 베타 기간에는 모든 기능을 무료로 사용할 수 있습니다. Pro와 Pro Supporter는 후원자 상태를 나타내며, 기능을 잠금 해제하기 위한 등급이 아닙니다.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "이용약관" },
  internalLinks: ["home"],
  payload: {
    title: "이용약관",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 10월",
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
        heading: "하나의 공개 베타, 모든 기능 제공.",
        paragraphs: [
          [{ kind: "text", text: "공개 베타 기간에는 모든 기능을 무료로 사용할 수 있습니다." }],
          [
            {
              kind: "text",
              text: "공개 베타를 사용하는 데 계정이나 신용카드가 필요하지 않습니다.",
            },
          ],
          [
            {
              kind: "text",
              text: "호환 컨트롤러로 시작하기와 사용자 지정 런처. 지원 환경의 Xbox 모드, Steam Big Picture, Playnite. 선택한 접근 가능한 앱을 위한 Resource Control. 지원되는 디스플레이, HDR, 오디오 및 세션 설정. CouchMode가 변경한 설정 복원.",
            },
          ],
        ],
      },
      {
        heading: "Patreon 멤버십은 무엇을 제공하나요?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro와 Pro Supporter는 후원자 상태를 나타내며, 기능을 잠금 해제하기 위한 등급이 아닙니다.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro: 최대 2대의 활성 Windows 기기에서 후원자 상태를 사용할 수 있습니다.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro Supporter: 최대 5대의 활성 Windows 기기에서 후원자 상태를 사용할 수 있으며, 프로젝트에 더 큰 금액을 후원합니다.",
            },
          ],
          [
            {
              kind: "text",
              text: "Patreon 후원자는 CouchMode 안에서 미리 보기 업데이트를 받도록 선택할 수 있습니다. 미리 보기 빌드는 공개되며 후원자 전용이 아닙니다.",
            },
          ],
          [
            {
              kind: "text",
              text: "멤버십이 끝나면 앱 내 미리 보기 업데이트 수신이 일시 중지됩니다. 일반 업데이트는 계속되며 설치된 버전이 이전 버전으로 내려가지 않습니다. 공개 베타 기능은 계속 무료로 사용할 수 있습니다.",
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
              text: "한 번만 후원하고 싶으신가요? Buy Me a Coffee는 감사의 마음을 전하는 일회성 후원이며 멤버십이 아닙니다. Pro 상태, 이용 권한, 기기 활성화는 제공하지 않습니다.",
            },
          ],
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
        heading: "후원자 기기 수 제한",
        paragraphs: [
          legalText(
            "후원자 상태 이용과 미리 보기 업데이트 수신은 제한된 수의 활성 Windows 기기에서 가능합니다. 이 제한은 공개 베타의 일반 기능에는 적용되지 않습니다. 정상적인 기기 변경 후 도움이 필요하면 지원팀에 문의하세요.",
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
            "Patreon 후원 멤버십의 결제, 멤버십, 취소 및 환불에 관한 사항은 Patreon이 처리할 수 있습니다. CouchMode는 결제 카드 정보를 저장하지 않습니다.",
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
      "CouchMode 후원 멤버십의 결제, 해지 및 환불은 Patreon에서 관리합니다. 멤버십이 끝나도 공개 베타 기능은 무료로 사용할 수 있습니다.",
    ogTitle: "CouchMode Patreon 결제 및 환불 안내",
    ogDescription:
      "CouchMode 후원 멤버십의 결제, 해지 및 환불은 Patreon에서 관리합니다. 멤버십이 끝나도 공개 베타 기능은 무료로 사용할 수 있습니다.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "환불 안내" },
  internalLinks: ["home"],
  payload: {
    title: "Patreon 결제 및 환불 안내",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 10월",
    },
    sections: [
      {
        heading: "공개 베타 기간에는 모든 기능을 무료로 사용할 수 있습니다.",
        paragraphs: [
          [{ kind: "text", text: "공개 베타 기간에는 모든 기능을 무료로 사용할 수 있습니다." }],
        ],
      },
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
          [
            {
              kind: "text",
              text: "멤버십이 끝나면 앱 내 미리 보기 업데이트 수신이 일시 중지됩니다. 일반 업데이트는 계속되며 설치된 버전이 이전 버전으로 내려가지 않습니다. 공개 베타 기능은 계속 무료로 사용할 수 있습니다.",
            },
          ],
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
    title: "CouchMode 후원하기",
    description:
      "CouchMode는 공개 베타 기간 동안 무료입니다. 유용하게 쓰고 계신다면 지속적인 개발과 호환성 테스트, 앞으로의 개선을 후원해 주세요.",
    ogTitle: "CouchMode 후원하기",
    ogDescription:
      "CouchMode는 공개 베타 기간 동안 무료입니다. 유용하게 쓰고 계신다면 지속적인 개발과 호환성 테스트, 앞으로의 개선을 후원해 주세요.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "CouchMode 후원하기" },
  internalLinks: ["home"],
  payload: {
    title: "CouchMode 후원하기",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 8월",
    },
    support: supporterCopy["ko"],
  },
};
