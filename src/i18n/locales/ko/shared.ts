import type { SharedLocaleContent } from "../../packets";

export const koreanLocaleContent: SharedLocaleContent = {
  navigation: {
    homeLabel: "CouchMode 홈",
    openMenuLabel: "탐색 메뉴 열기",
    closeMenuLabel: "탐색 메뉴 닫기",
    mobileMenuLabel: "모바일 탐색 메뉴",
    downloadLabel: "다운로드",
    redditLabel: "r/CouchMode 참여하기",
    languageMenuLabel: "언어 선택",
    links: [
      { contentId: "home", fragment: "#how", label: "작동 방식" },
      { contentId: "home", fragment: "#pricing", label: "요금 안내" },
      { contentId: "buy", label: "Pro 이용하기" },
      { contentId: "changelog", label: "변경 기록" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "작동 방식" },
      { contentId: "home", fragment: "#pricing", label: "요금 안내" },
      { contentId: "home", fragment: "#download", label: "CouchMode 다운로드" },
      { contentId: "guides", trailingSlash: true, label: "가이드" },
      { contentId: "changelog", label: "변경 기록" },
    ],
    legalLinks: [
      { contentId: "support", label: "지원" },
      { contentId: "privacy", label: "개인정보처리방침" },
      { contentId: "terms", label: "이용약관" },
      { contentId: "refund", label: "환불 안내" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Reddit의 CouchMode 커뮤니티 참여하기",
    copyright: "CouchMode. 모든 권리 보유.",
    trademarkNotice:
      "CouchMode는 독립적인 제품이며 Microsoft, Xbox, Valve 또는 Steam과 제휴 관계가 아닙니다. Microsoft, Windows 및 Xbox는 Microsoft 기업 그룹의 상표입니다. Steam 및 Steam Big Picture는 Valve Corporation의 상표입니다. 그 밖의 제품명은 호환성을 설명하기 위해서만 사용되며 각 소유자의 상표일 수 있습니다.",
  },
  consent: {
    heading: "개인정보 보호 설정",
    explanation:
      "필수 저장소는 이 선택을 기억하는 데 사용됩니다. 분석 기능은 웹사이트 이용 현황을 파악하는 데 도움이 됩니다. 광고 기능은 향후 캠페인 측정을 위한 것으로, 허용하지 않으면 꺼진 상태로 유지됩니다.",
    saveError:
      "선택 사항을 저장하지 못했습니다. 브라우저 저장소를 사용할 수 있는지 확인한 뒤 다시 시도해 주세요.",
    necessary: "필수",
    alwaysOn: "항상 켜짐",
    necessaryAriaLabel: "필수 저장소는 항상 활성화됩니다",
    analytics: "분석",
    analyticsDescription: "웹사이트 이용 현황 측정",
    advertising: "광고",
    advertisingDescription: "향후 광고 효과 측정",
    necessaryOnly: "필수 항목만 허용",
    acceptAnalytics: "분석 허용",
    saveChoices: "선택 사항 저장",
  },
  errors: {
    staticHeading: "이 CouchMode 페이지는 존재하지 않습니다.",
    staticDescription: "Windows PC TV 게임 가이드를 살펴보거나 CouchMode 홈으로 돌아가세요.",
    guidesLabel: "가이드 둘러보기",
    notFoundTitle: "페이지를 찾을 수 없습니다",
    notFoundDescription: "찾으시는 페이지가 없거나 다른 주소로 이동했습니다.",
    homeLabel: "홈으로 이동",
    errorTitle: "페이지를 불러오지 못했습니다",
    errorDescription: "사이트에 문제가 발생했습니다. 새로고침하거나 홈으로 돌아가세요.",
    retryLabel: "다시 시도",
  },
};
