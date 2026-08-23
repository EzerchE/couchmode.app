import { useRouterState } from "@tanstack/react-router";
import { contentIdForPublicPath, hreflangLinks } from "@/i18n/packets";

export function LocalizedHeadLinks() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const contentId = contentIdForPublicPath(pathname);
  if (!contentId) return null;
  return (
    <>
      {hreflangLinks(contentId).map((link) => (
        <link key={link.hrefLang} rel={link.rel} hrefLang={link.hrefLang} href={link.href} />
      ))}
    </>
  );
}
