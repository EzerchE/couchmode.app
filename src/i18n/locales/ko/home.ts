import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const koreanHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "ko",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode - 컨트롤러 중심의 Windows 게임 유틸리티",
    description:
      "컨트롤러를 켜고 원하는 게임 환경을 시작하세요. 세션이 끝나면 다시 사용할 수 있는 Windows 바탕 화면으로 돌아갑니다. 서명된 CouchMode 공개 베타를 다운로드하세요.",
    ogTitle: "CouchMode - 컨트롤러 중심의 Windows 게임 유틸리티",
    ogDescription:
      "컨트롤러를 켜고 원하는 게임 환경을 시작하세요. 세션이 끝나면 다시 사용할 수 있는 Windows 바탕 화면으로 돌아갑니다. 서명된 CouchMode 공개 베타를 다운로드하세요.",
  },
  schema: {
    softwareDescription:
      "CouchMode는 컨트롤러로 소파에서 PC 게임을 즐기도록 돕는 Windows 유틸리티입니다. 원하는 게임 환경을 열고, 선택한 데스크톱 앱을 닫으며, 세션 종료 시 직접 변경한 지원되는 Windows 설정을 복원할 수 있습니다.",
    applicationSubCategory: "게임 유틸리티",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "컨트롤러 중심의 Windows 게임 유틸리티",
      badge: "공개 베타 제공 중",
      headingBefore: "게이밍 PC로",
      headingAccent: "소파에서 편하게 게임하세요",
      description:
        "컨트롤러를 켜면 CouchMode가 선택한 게임 환경을 열고 설정에 맞게 세션을 준비합니다. 게임을 마치면 다시 사용할 수 있는 바탕 화면으로 돌아갑니다.",
      downloadLabel: "Windows용 다운로드",
      proLabel: "Pro 기능 살펴보기",
      platformNotice: "Windows 11 · 64비트 · 서명된 공개 베타",
      carousel: {
        slides: [
          { label: "일반 설정", alt: "CouchMode General 탭의 컨트롤러 및 런처 설정." },
          { label: "앱 관리", alt: "CouchMode Resource Control의 앱 종료 설정." },
          { label: "세션 설정", alt: "CouchMode Session Tweaks의 성능 및 Windows 설정." },
        ],
        previousLabel: "이전 스크린샷",
        nextLabel: "다음 스크린샷",
        showLabel: "표시",
      },
    },
    problem: {
      eyebrow: "소파에서는 다른 준비가 필요하니까",
      headingLines: ["Windows는 잘 작동합니다.", "다만 소파를 위해 만들어지지는 않았죠."],
      description:
        "책상에서는 편한 바탕 화면도 소파에서는 다릅니다. 작은 글씨, 마우스 중심의 메뉴, 백그라운드 앱이 컨트롤러로 게임을 시작하는 데 걸림돌이 될 수 있습니다. CouchMode는 Windows를 대체하거나 PC를 장악하지 않고 이 간격을 줄여 줍니다.",
      points: [
        {
          title: "큰 화면에 어울리는 게임 환경",
          body: "Windows 바탕 화면은 가까이에서 보는 환경에 맞춰져 있습니다. CouchMode는 세션을 컨트롤러로 다루기 편한 게임 환경으로 전환하도록 돕습니다.",
        },
        {
          title: "시작은 컨트롤러로",
          body: "CouchMode는 호환되는 컨트롤러의 연결을 감지해 선택한 게임 환경을 시작할 수 있습니다.",
        },
        {
          title: "기존 환경을 소중하게",
          body: "CouchMode는 사용자가 활성화한 지원 세션 설정만 변경하며, 세션이 끝나면 직접 변경한 설정을 복원합니다.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "작동 방식",
      heading: "컨트롤러를 켜고, 소파에 앉으세요.",
      description:
        "CouchMode는 선택한 런처와 Windows 설정에 맞춰 세션 흐름을 관리합니다. Free는 컨트롤러로 시작하는 기본 흐름을 제공하고, Pro는 더 다양한 세션 자동화를 더합니다.",
      stepLabel: "단계",
      steps: [
        {
          number: "01",
          title: "컨트롤러 켜기",
          body: "Xbox 컨트롤러나 호환 컨트롤러를 켜세요. CouchMode가 백그라운드에서 연결을 감지해 게임 세션을 자동으로 시작할 수 있습니다.",
          detail: "자동 감지 · 앱을 직접 열 필요 없음",
        },
        {
          number: "02",
          title: "선택한 게임 환경 열기",
          body: "지원되는 환경에서는 Windows Xbox 전체 화면 환경을 사용하거나 Steam Big Picture 모드 또는 Playnite를 선택하세요. 세 가지 모두 무료입니다. 그 밖의 호환되는 사용자 지정 런처는 Pro에서 사용할 수 있습니다.",
          detail: "Xbox, Steam, Playnite는 Free · 사용자 지정 런처는 Pro",
        },
        {
          number: "03",
          title: "Pro로 세션 준비하기",
          body: "Pro는 Resource Control에서 선택한 데스크톱 앱을 닫고, 사용자가 선택한 지원 세션 설정을 적용할 수 있습니다. 알림, Game Bar 녹화, 시각 효과, 게임 모드, 전원 관리 옵션, HDR, 디스플레이와 오디오가 포함됩니다.",
          detail: "Pro · 7일 앱 내 체험",
        },
        {
          number: "04",
          title: "바탕 화면으로 돌아가기",
          body: "세션이 끝나면 CouchMode가 직접 시작한 게임 환경을 종료하고, 직접 변경한 지원되는 Windows 설정을 복원한 뒤 바탕 화면으로 제어를 돌려줍니다.",
          detail: "Free와 Pro · 안전하게 세션 마치기",
        },
      ],
    },
    featureShots: {
      eyebrow: "앱 자세히 보기",
      heading: "실제 앱 화면으로 보는 Pro 설정",
      description:
        "예시로 만든 이미지가 아니라 실제 CouchMode 화면입니다. 화면을 선택하면 크게 볼 수 있습니다.",
      shots: [
        {
          label: "일반 설정",
          caption: "시작 및 고급 설정",
          alt: "CouchMode General 탭의 시작 및 고급 설정.",
        },
        {
          label: "앱 관리",
          caption: "실행 중인 앱 선택",
          alt: "CouchMode에서 실행 중인 앱을 선택하는 화면.",
        },
        {
          label: "앱 관리",
          caption: "세션 종료 후 작업",
          alt: "CouchMode Resource Control의 세션 종료 후 작업 설정.",
        },
        {
          label: "세션 설정",
          caption: "디스플레이, HDR, 오디오",
          alt: "CouchMode의 HDR, 디스플레이 및 오디오 설정.",
        },
      ],
      openShotLabel: "스크린샷 크게 보기",
      lightbox: {
        closeLabel: "스크린샷 보기 닫기",
        previousLabel: "이전 스크린샷",
        nextLabel: "다음 스크린샷",
      },
    },
    comparison: {
      eyebrow: "Free와 Pro",
      heading: "즐겨 쓰는 런처는 Free로. 더 다양한 자동화는 Pro로.",
      description:
        "컨트롤러 중심의 세션 흐름과 Xbox, Steam Big Picture 모드, Playnite는 무료입니다. Pro에는 사용자 지정 런처, Resource Control, Session Tweaks, 더 다양한 복원 자동화가 추가됩니다.",
      free: {
        name: "Free",
        priceSuffix: "계속 무료",
        description: "컨트롤러로 시작하는 기본 세션 기능.",
        features: [
          "컨트롤러로 세션 시작",
          "Windows가 지원하는 환경의 Xbox 전체 화면 환경",
          "Steam Big Picture 모드",
          "Playnite 전체 화면 모드",
          "Windows와 함께 시작",
          "안전한 세션 종료 및 바탕 화면으로 돌아가기",
          "언어 및 테마",
        ],
        includedLabel: "Free에 포함",
      },
      pro: {
        trialLabel: "7일 앱 내 체험",
        name: "Pro",
        heading: "Free의 모든 기능에 더 다양한 자동화까지.",
        description:
          "CouchMode가 직접 시작한 세션을 관리하고, 이후 직접 변경한 지원 설정을 되돌립니다.",
        features: [
          "호환되는 사용자 지정 런처",
          "선택한 앱을 관리하는 Resource Control",
          "Session Tweaks: 알림, Game Bar 녹화, 시각 효과, 게임 모드, 전원 관리 옵션, HDR, 디스플레이, 오디오",
          "CouchMode가 변경한 지원되는 Windows 설정 복원",
          "설정한 경우 Resource Control에서 선택한 앱 재실행",
          "Pro: 활성 Windows 기기 최대 2대",
          "Pro Supporter: 활성 Windows 기기 최대 5대",
        ],
        ctaLabel: "Patreon으로 Pro 이용하기",
      },
      footnote:
        "체험 종료 후 Pro를 이용하려면 활성 Patreon 멤버십이 필요합니다. Pro는 월 3미국 달러로 활성 Windows 기기 2대를 포함합니다. Pro Supporter는 월 5미국 달러로 활성 Windows 기기 5대를 포함합니다.",
    },
    guidesPreview: {
      eyebrow: "실용적인 설정 안내",
      heading: "Windows PC로 TV에서 게임하기",
      description:
        "Playnite, Steam Big Picture 모드, TV 환경, 컨트롤러, 독에 연결한 Windows 휴대용 게이밍 PC에 관한 궁금증을 해결해 보세요.",
      ctaLabel: "전체 가이드 보기",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "이제 PC 게임도",
      headingAccent: "소파에서 편하게",
      description:
        "서명된 Windows용 공개 베타를 다운로드하고 7일 앱 내 Pro 체험으로 시작하세요. 앱 내 체험에는 계정이나 신용카드가 필요하지 않습니다.",
      downloadLabel: "Windows용 다운로드",
      releaseNotesLabel: "릴리스 노트 보기",
      directDownloadLabel: "직접 다운로드",
      preparingLabel: "준비 중",
      openLabel: "이용 가능",
      liveLabel: "제공 중",
      platformNotice: "Windows 11 · 64비트",
      compatibilityNote:
        "CouchMode는 ROG Ally와 같은 Windows 휴대용 게이밍 PC의 컨트롤러 중심 구성을 지원합니다. Windows가 Xbox 전체 화면 환경을 제공하는 경우 해당 세션을 시작하거나 이미 열린 세션을 활용하고, 종료 시 바탕 화면으로 제어를 돌려줄 수 있습니다. 제공 여부와 동작은 기기, Windows 버전, Xbox 앱 지원, 지역과 Microsoft의 배포 상황에 따라 달라집니다.",
    },
    faq: {
      eyebrow: "자주 묻는 질문",
      heading: "PC 게임을 소파에서 시작하는 실제 흐름에 맞췄습니다.",
      description:
        "CouchMode는 TV에 연결하거나 소파에서 컨트롤러 중심으로 사용하는 Windows PC를 위해 설계되었습니다. 어떤 환경을 시작하고 무엇을 자동화할 수 있는지, 어떤 기능이 Windows 지원에 따라 달라지는지 확인하세요.",
      items: [
        {
          question: "CouchMode는 어떤 프로그램인가요?",
          answer:
            "CouchMode는 컨트롤러 중심의 Windows 게임 유틸리티입니다. 호환 컨트롤러가 연결되면 선택한 게임 환경을 열어 세션을 시작하고, 세션이 끝나면 직접 변경한 지원 설정을 복원할 수 있습니다.",
        },
        {
          question: "Windows 셸을 대체하나요?",
          answer:
            "아니요. CouchMode는 탐색기, Windows 셸 또는 런처를 대체하지 않습니다. Windows와 기존 게임 앱을 그대로 활용합니다.",
        },
        {
          question: "CouchMode는 PC의 무엇을 변경하나요?",
          answer:
            "사용자가 활성화한 지원 세션 작업만 수행합니다. 게임 환경을 열고, Resource Control로 선택한 앱을 닫고, 지원되는 알림·디스플레이·오디오·HDR·전원·게임 설정을 일시적으로 적용할 수 있습니다. 세션 종료 시 직접 변경한 설정을 복원합니다.",
        },
        {
          question: "게임 전에 Discord, Chrome 같은 데스크톱 앱을 닫을 수 있나요?",
          answer:
            "Pro의 Resource Control에서는 지원되는 앱 중 세션 동안 닫을 앱과 나중에 다시 열지 여부를 직접 선택합니다. 선택하지 않은 앱은 의도적으로 닫지 않습니다. 서비스, 관리자 권한 앱, 보호된 시스템 구성 요소, 스스로 재실행되는 앱은 계속 실행될 수 있습니다.",
        },
        {
          question: "Steam Big Picture 모드나 다른 런처도 시작할 수 있나요?",
          answer:
            "네. Steam Big Picture 모드는 무료로 사용할 수 있습니다. Windows가 지원하는 Xbox 전체 화면 환경, Steam Big Picture 모드, Playnite 전체 화면 모드는 모두 Pro 없이 이용할 수 있습니다. 다른 런처는 Pro가 필요한 호환 사용자 지정 런처 옵션으로 설정합니다.",
        },
        {
          question: "컨트롤러를 켜면 Playnite를 실행할 수 있나요?",
          answer:
            "네. 무료로 가능합니다. 실행 대상으로 Playnite를 선택하면 호환 컨트롤러 연결 시 Playnite 전체 화면 모드가 열립니다. 이미 실행 중이면 새 인스턴스를 추가로 시작하지 않고 기존 Playnite를 사용합니다.",
        },
        {
          question: "PS5 / DualSense 컨트롤러도 사용할 수 있나요?",
          answer:
            "CouchMode는 Windows가 Xbox(XInput) 컨트롤러로 인식하는 장치로 세션을 시작하고 종료합니다. 기본 방식으로 연결한 PlayStation 컨트롤러는 세션 시작·종료에 사용되지 않으며, CouchMode는 이를 연결된 것으로 표시하는 대신 해당 제한을 안내합니다. PlayStation 컨트롤러를 Windows에 XInput 컨트롤러로 표시하는 구성이라면 다른 XInput 컨트롤러와 같은 방식으로 처리합니다.",
        },
        {
          question: "게임 중 컨트롤러 연결이 끊어지면 어떻게 되나요?",
          answer:
            "Exit CouchMode when controller disconnects(컨트롤러 연결 해제 시 CouchMode 종료)를 켜 두었다면 연결 해제 후 설정된 지연 시간(offDelay)이 지나 세션 종료가 시작됩니다. 지연 시간 안에 다시 연결하면 대기 중인 종료가 취소될 수 있습니다. CouchMode는 자신이 관리하는 세션 범위와 실제 상태를 확인한 뒤 종료하고, 직접 변경한 지원 설정을 복원하며 안전하게 바탕 화면으로 돌아왔는지 확인합니다. 사용자가 별도로 열었거나 세션 시작 전부터 열려 있던 런처나 앱은 강제로 닫지 않습니다.",
        },
        {
          question: "Playnite를 지원하나요?",
          answer:
            "네. 무료로 지원합니다. Pro 없이 Playnite 전체 화면 모드를 실행 대상으로 선택할 수 있습니다. CouchMode는 기존 런처를 대체하는 것이 아니라 함께 작동하도록 설계되었습니다.",
        },
        {
          question: "Windows Xbox 모드를 지원하나요?",
          answer:
            "Windows가 Xbox 전체 화면 환경을 제공하는 경우 CouchMode와 함께 사용할 수 있습니다. 제공되지 않는 경우에는 일반 Xbox 앱을 열 수 있습니다. 제공 여부는 Windows, Xbox 앱, 기기 지원, 지역과 Microsoft의 배포 상황에 따라 달라집니다.",
        },
        {
          question: "Windows Xbox 전체 화면 환경이 없으면 어떻게 되나요?",
          answer:
            "기기에서 Windows Xbox 전체 화면 환경을 사용할 수 없으면 CouchMode는 대신 일반 Xbox 앱을 열 수 있습니다. Xbox 전체 화면 환경 제공 여부는 Windows, Xbox 앱, 기기와 Microsoft의 배포 상황에 따라 달라집니다.",
        },
        {
          question: "ROG Ally에서도 작동하나요?",
          answer:
            "ROG Ally와 이와 유사한 Windows 휴대용 게이밍 PC는 주요 지원 기기 유형입니다. 다만 Xbox 전체 화면 환경의 실제 동작은 해당 기기의 Windows와 Xbox 앱 지원에 따라 달라집니다.",
        },
        {
          question: "Start inside Xbox Mode는 무엇인가요?",
          answer:
            "지원되는 휴대용 게이밍 PC에서 관리자가 승인한 예약 작업을 사용해 Windows Xbox 전체 화면 환경과 함께 CouchMode를 시작하는 기능입니다. 일반 바탕 화면에서의 시작은 별도로 유지됩니다.",
        },
        {
          question: "체험하려면 신용카드가 필요한가요?",
          answer:
            "아니요. 7일 앱 내 Pro 체험에는 계정이나 신용카드가 필요하지 않습니다. 이후 Pro 이용은 Patreon을 통해 관리되며 활성 Patreon 멤버십이 필요합니다.",
        },
        {
          question: "Patreon 멤버십으로는 어떻게 이용하나요?",
          answer:
            "앱 내 체험이 끝난 뒤에도 Pro를 유지하려면 CouchMode에서 Patreon을 연결하세요. Pro는 월 3미국 달러로 활성 Windows 기기 최대 2대, Pro Supporter는 월 5미국 달러로 최대 5대에서 사용할 수 있습니다.",
        },
        {
          question: "멤버십이 끝나면 어떻게 되나요?",
          answer:
            "앱에 정의된 이용 권한 갱신 및 유예 기간 처리에 따라 Pro 기능이 Free로 전환됩니다. 설정은 저장된 상태로 유지되며 Free 세션 기능은 계속 사용할 수 있습니다.",
        },
        {
          question: "화면에 이상이 있을 때 진단 자료는 어떻게 만드나요?",
          answer:
            "문제가 보이는 상태에서 Ctrl+Alt+Shift+F12를 누르세요. CouchMode가 현재 창 상태의 스냅샷을 %APPDATA%\\CouchMode 안의 별도 파일로 저장합니다. app.log와 같은 폴더입니다. 화면 상태는 바꾸지 않으며 디버그 로깅을 켜지 않아도 작동합니다. 자동 업로드는 하지 않습니다. 파일은 PC에 남아 있고 무엇을 보낼지는 직접 선택합니다. 지원팀에 문의할 때 해당 파일과 app.log를 첨부해 주세요.",
        },
        {
          question: "게임 성능이 좋아지나요?",
          answer:
            "CouchMode는 FPS 향상을 보장하지 않습니다. Pro는 선택한 앱을 닫아 세션 중 방해 요소를 줄이고 게임 모드나 선택한 전원 관리 옵션 같은 지원되는 Windows 설정을 적용한 뒤 세션 종료 시 복원할 수 있습니다.",
        },
        {
          question: "Microsoft Store에서도 설치할 수 있나요?",
          answer:
            "네. 공식 웹사이트에서 제공하는 서명된 설치 파일 외에 Microsoft Store에서도 CouchMode를 설치할 수 있습니다.",
          linkLabel: "Microsoft Store에서 CouchMode 보기",
        },
        {
          question: "직접 다운로드와 Microsoft Store 버전은 무엇이 다른가요?",
          answer:
            "둘 다 공식 설치 방법이며 동일한 CouchMode 사용 경험을 제공합니다. 직접 다운로드는 couchmode.app에서 설치 파일을 받고 공개된 SHA256을 직접 확인할 수 있는 방법입니다. Microsoft Store는 제품을 찾아 설치할 수 있는 또 하나의 신뢰할 수 있는 경로입니다. 어느 쪽이든 앱 업데이트는 CouchMode에 내장된 업데이트 기능이 처리합니다.",
        },
        {
          question: "Microsoft Store 버전은 Store에서 자동 업데이트되나요?",
          answer:
            "CouchMode는 자체 내장 업데이트 시스템을 사용합니다. Microsoft Store는 추가 공식 설치 경로이며 앱 업데이트는 CouchMode가 직접 처리합니다.",
        },
        {
          question: "Microsoft Store 버전에도 7일 Pro 체험이 있나요?",
          answer:
            "네. 두 설치 경로 모두 동일한 7일 앱 내 Pro 체험을 제공하며, 계정이나 카드가 필요하지 않습니다.",
        },
        {
          question: "Microsoft Store 버전에서도 Patreon과 Pro 기능을 사용할 수 있나요?",
          answer:
            "네. Pro 이용 권한은 설치 경로가 아니라 CouchMode 라이선스에 연결됩니다. 따라서 어느 경로로 설치하든 Patreon 연결은 동일하게 작동합니다.",
        },
        {
          question: "Steam에서 CouchMode를 받을 수 있나요?",
          answer:
            "아니요. CouchMode는 직접 다운로드와 Microsoft Store를 통해 제공됩니다. CouchMode가 Steam Big Picture 모드를 열 수 있다는 것과 CouchMode 자체가 Steam에서 배포된다는 것은 별개입니다.",
        },
      ],
      community: {
        heading: "CouchMode 커뮤니티에 참여하세요",
        description:
          "Reddit에서 질문하고, 사용 환경을 공유하고, 문제를 알리고, CouchMode의 업데이트 소식을 확인하세요.",
        ctaLabel: "r/CouchMode 방문하기",
      },
    },
  },
};
