import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const koreanGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "ko",
  path: "/guides/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Windows PC TV 게임·컨트롤러 가이드 | CouchMode",
    description:
      "Windows PC를 TV와 컨트롤러로 즐기기 위한 실용 가이드. Playnite, Steam Big Picture 모드, TV 설정, 독에 연결한 휴대용 게이밍 PC의 설정과 문제 해결을 알아보세요.",
    ogTitle: "Windows PC TV 게임·컨트롤러 가이드 | CouchMode",
    ogDescription:
      "Windows PC를 TV와 컨트롤러로 즐기기 위한 실용 가이드. Playnite, Steam Big Picture 모드, TV 설정, 독에 연결한 휴대용 게이밍 PC의 설정과 문제 해결을 알아보세요.",
  },
  schema: {
    collectionName: "Windows PC TV 게임·컨트롤러 가이드",
    homeBreadcrumbLabel: "홈",
    guidesBreadcrumbLabel: "가이드",
  },
  internalLinks: [
    "home",
    "download",
    "support",
    "guide-playnite-launch",
    "guide-playnite-focus",
    "guide-steam-big-picture",
    "guide-controller-session-settings",
    "guide-resource-control-session-restore",
    "guide-windows-console",
    "guide-windows-handheld",
    "guide-xbox-mode-windows-11",
  ],
  payload: {
    eyebrow: "가이드 모음",
    heading: "Windows PC로 TV에서 게임하기: 설정과 문제 해결",
    description:
      "컨트롤러 중심의 게임 세션부터 TV 설정, Steam Big Picture 모드, Playnite, 독에 연결한 Windows 휴대용 게이밍 PC까지 필요한 설정을 차근차근 살펴보세요.",
    filters: {
      ariaLabel: "분류별 가이드 필터",
      allLabel: "전체",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture 모드",
        "windows-couch-gaming": "Windows PC로 TV에서 게임하기",
        "windows-handhelds": "Windows 휴대용 게이밍 PC",
      },
    },
    card: { updatedLabel: "수정일" },
    article: {
      seoTitleSuffix: "CouchMode 가이드",
      breadcrumbs: { ariaLabel: "현재 위치", homeLabel: "홈", guidesLabel: "가이드" },
      updatedLabel: "수정일",
      relatedHeading: "관련 가이드",
      allGuidesLabel: "전체 가이드",
      actions: {
        ariaLabel: "가이드 관련 작업",
        supportingText: "이제 내 환경에서 설정해 보세요.",
        downloadLabel: "CouchMode 다운로드",
        redditLabel: "r/CouchMode에서 이야기하기",
      },
      notFound: {
        eyebrow: "404",
        heading: "가이드를 찾을 수 없습니다",
        description: "아직 공개되지 않은 가이드이거나 주소가 변경되었습니다.",
        browseLabel: "가이드 둘러보기",
      },
    },
  },
};
