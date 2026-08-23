import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocalizedSurfaceRenderer } from "@/components/i18n/LocalizedSurfaceRenderer";
import { resolveLocalizedRoute } from "@/i18n/packets";
import { headForSurfacePacket } from "@/i18n/surface-head";

export const Route = createFileRoute("/$locale/")({
  beforeLoad: ({ params }) => {
    const packet = resolveLocalizedRoute(params.locale, "/");
    if (!packet) throw notFound();
    return { packet };
  },
  head: ({ params }) => {
    const packet = resolveLocalizedRoute(params.locale, "/");
    return packet ? headForSurfacePacket(packet) : {};
  },
  component: LocalizedLocaleHome,
});

function LocalizedLocaleHome() {
  const { locale } = Route.useParams();
  const packet = resolveLocalizedRoute(locale, "/");
  if (!packet) throw notFound();
  return <LocalizedSurfaceRenderer packet={packet} />;
}
