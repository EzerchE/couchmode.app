import { createFileRoute, notFound } from "@tanstack/react-router";
import { resolveLocalizedRoute } from "@/i18n/packets";

export const Route = createFileRoute("/$locale/$")({
  beforeLoad: ({ params }) => {
    if (!resolveLocalizedRoute(params.locale, `/${params._splat}/`)) throw notFound();
  },
  component: () => null,
});
