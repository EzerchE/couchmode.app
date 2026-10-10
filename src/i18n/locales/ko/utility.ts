import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";
import { koreanReleaseEditorial } from "./releases";

export const koreanDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "ko",
  path: "/download/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Windows용 CouchMode 다운로드",
    description:
      "CouchMode는 couchmode.app 또는 공식 CouchMode GitHub Releases에서만 다운로드하세요. 설치 파일을 실행하기 전에 SHA-256 전체 값과 파일 크기를 비교하세요.",
    ogTitle: "Windows용 CouchMode 다운로드",
    ogDescription:
      "CouchMode는 couchmode.app 또는 공식 CouchMode GitHub Releases에서만 다운로드하세요. 설치 파일을 실행하기 전에 SHA-256 전체 값과 파일 크기를 비교하세요.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "배포 현황" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "공개 베타", closed: "공개 전 제한 베타" },
    heading: { before: "CouchMode", accent: "다운로드" },
    statusDescription: {
      open: "Windows 11용 일반 버전입니다.",
      closed: "다운로드가 아직 공개되지 않았습니다",
    },
    directDownload: {
      label: "Windows용 다운로드",
      unavailableLabel: "다운로드가 아직 공개되지 않았습니다",
    },
    facts: {
      directDownload: "직접 다운로드",
      directDownloadOpen: "이용 가능",
      directDownloadClosed: "아직 제공되지 않음",
      platform: "플랫폼",
      platformValue: "Windows 11 · 64비트",
      installChannels: "설치 경로",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "설치",
      installValue: "사용자별 설치, 관리자 권한 불필요, 업데이트 확인 기능 내장",
      codeSigning: "코드 서명",
      signedValue: "Authenticode 서명 및 타임스탬프 적용",
      unsignedValue: "서명 없음: SHA-256을 확인하세요",
      pricing: "요금 안내",
      pricingValue: "결제가 필요 없습니다",
    },
    cards: {
      included: {
        heading: "제공 내용",
        body: "CouchMode의 모든 기능. 계정, 결제 카드, Patreon 멤버십이 필요하지 않습니다.",
      },
      officialSources: {
        heading: "설치 경로",
        body: "CouchMode는 couchmode.app 또는 공식 CouchMode GitHub Releases에서만 다운로드하세요. 설치 파일을 실행하기 전에 SHA-256 전체 값과 파일 크기를 비교하세요.",
      },
      noPublicInstaller: {
        heading: "아직 공개 설치 파일이 없습니다",
        body: "현재 공개 다운로드 링크는 없습니다. 다른 곳에서 제공되는 CouchMode 설치 파일은 저희가 배포한 것이 아닙니다. 이곳에 공식 빌드가 올라올 때까지 기다려 주세요.",
      },
    },
    build: {
      openHeading: "빌드 정보",
      closedHeading: "최신 내부 빌드 / 공개 전 메타데이터",
      openDescription:
        "CouchMode는 couchmode.app 또는 공식 CouchMode GitHub Releases에서만 다운로드하세요. 설치 파일을 실행하기 전에 SHA-256 전체 값과 파일 크기를 비교하세요.",
      closedDescription: "다운로드가 아직 공개되지 않았습니다",
      openChecksumLabel: "SHA256 (실행 전 확인)",
      closedChecksumLabel: "SHA256 (이미 받은 빌드 검증용)",
      notesLabel: "새로운 기능과 변경 사항",
      knownIssuesLabel: "알려진 문제",
    },
    support: {
      beforeEmail: "CouchMode 사용 중 도움이 필요하신가요? ",
      afterEmail: "으로 이메일을 보내 주세요.",
    },
    installation: installationCopy["ko"],
    supportCouchMode: supporterCopy["ko"],
  },
};

export const koreanChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "ko",
  path: "/changelog/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode 변경 기록 - Windows 베타 릴리스 노트",
    description:
      "Windows용 CouchMode 베타 빌드의 릴리스 노트와 알려진 문제를 최신 버전부터 확인하세요.",
    ogTitle: "CouchMode 변경 기록 - Windows 베타 릴리스 노트",
    ogDescription:
      "Windows용 CouchMode 베타 빌드의 릴리스 노트와 알려진 문제를 최신 버전부터 확인하세요.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "변경 기록" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "변경 기록",
    heading: "CouchMode의 새로운 기능과 변경 사항",
    description:
      "Windows용 CouchMode 베타 빌드의 릴리스 노트와 알려진 문제를 최신 버전부터 정리했습니다.",
    downloadStatus: {
      open: "현재 모든 기능을 무료로 사용할 수 있습니다.",
      closed: "다운로드가 아직 공개되지 않았습니다",
    },
    // Current status, NOT release history: shown with the release notes until previews ship.
    previewStatus: "후원자 전용 미리 보기 배포는 현재 개발 중입니다. 지금은 제공되는 미리 보기 빌드가 없습니다.",
    release: {
      latestLabel: "최신",
      previousLabel: "이전",
      notesLabel: "새로운 기능과 변경 사항",
      knownIssuesLabel: "알려진 문제",
      checksumLabel: "SHA256",
      editorial: koreanReleaseEditorial,
    },
  },
};

export const koreanSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "ko",
  path: "/support/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode 지원 - Windows PC 게임 환경 도움말",
    description:
      "CouchMode 사용 중 도움이 필요하면 Windows와 앱 버전, 실행 대상, 기기 유형, 컨트롤러 정보, 필요한 경우 멤버십 상태와 지원 번들을 함께 보내 주세요.",
    ogTitle: "CouchMode 지원 - Windows PC 게임 환경 도움말",
    ogDescription:
      "CouchMode 사용 중 도움이 필요하면 Windows와 앱 버전, 실행 대상, 기기 유형, 컨트롤러 정보, 필요한 경우 멤버십 상태와 지원 번들을 함께 보내 주세요.",
  },
  schema: { homeBreadcrumbLabel: "홈", currentBreadcrumbLabel: "지원" },
  internalLinks: ["home"],
  payload: {
    title: "CouchMode 지원",
    chrome: {
      backToHomepageLabel: "홈으로 돌아가기",
      lastUpdatedLabel: "최종 수정",
      lastUpdated: "2026년 8월",
    },
    introduction: [
      "CouchMode 사용 중 도움이 필요하신가요? 가장 빠른 방법은 앱 안에서 문의하는 것입니다. 버그, 호환성 문제 또는 기능 요청을 보낼 수 있습니다. 전송 여부는 언제나 사용자가 결정하며, 전송 전에 포함되는 내용을 정확히 확인할 수 있습니다. 어떤 내용도 자동으로 전송되지 않습니다.",
      "CouchMode는 Windows 11 · 64비트용 공개 베타입니다. 진단 자료는 PC에서 로컬로 생성되며, 보고서는 사용자가 제출한 경우에만 저희에게 전달됩니다.",
    ],
    contact: {
      beforeEmail: "이메일 문의도 가능합니다.",
      afterEmail:
        "으로 Windows 버전, CouchMode 버전, 실행 대상, 컨트롤러 정보와 문제에 대한 간단한 설명을 보내 주세요.",
    },
    include: {
      heading: "다음 정보를 포함해 주세요:",
      items: [
        "Windows 버전",
        "CouchMode 버전",
        "기기 유형: ROG Ally, 다른 휴대용 게이밍 PC 또는 데스크톱 PC",
        "컨트롤러 종류",
        "실행 대상: 지원되는 환경의 Xbox 전체 화면 환경, Steam Big Picture 모드, Playnite 또는 사용자 지정 런처",
        "Windows Xbox 전체 화면 환경을 사용할 수 있는지, 아니면 대체 런처를 사용하는지",
        "버그 신고, 기능 요청, 호환성 문제 중 해당 항목",
        "발생한 현상",
        "Patreon 후원자 상태 문제인 경우 멤버십 등급: Pro 또는 Pro Supporter",
        "후원자 상태에 연결된 기기 수",
        "계정 또는 기기 연결 오류의 화면 캡처나 메시지",
        "가능하면 CouchMode의 About > Export support bundle(정보 > 지원 번들 내보내기)을 열어 생성된 파일을 첨부해 주세요.",
      ],
      diagnostics: {
        beforeShortcut:
          "불필요한 창이 나타나거나 전체 화면 세션에서 컨트롤러로 이동할 수 없는 등 화면에 이상이 보이면, 그 상태에서",
        afterShortcutBeforePath:
          "키를 누르세요. CouchMode는 현재 창 상태의 스냅샷을 별도 파일로 저장합니다. 저장 위치는",
        afterPathBeforeLog: "이며, 같은 폴더에 있는 로그 파일은 ",
        betweenLogReferences:
          "입니다. 화면 상태는 변경하지 않으며 디버그 로깅을 켜지 않아도 사용할 수 있습니다. 자동 업로드는 하지 않습니다. 파일은 PC에 남아 있고 무엇을 보낼지는 직접 선택합니다. 문의할 때 스냅샷 파일과 ",
        afterLog: "를 첨부해 주세요.",
      },
    },
    privacy: {
      beforeEmail: "개인 결제 정보를 공개적으로 게시하지 마세요. 계정이나 멤버십에 관한 질문은",
      afterEmail: "으로 이메일을 보내 주세요.",
    },
  },
};
