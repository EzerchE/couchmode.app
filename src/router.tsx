import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ensureLocalePacket, localeForPublicPath } from "./i18n/packets";

export const getRouter = async () => {
  if (!import.meta.env.SSR) await ensureLocalePacket(localeForPublicPath(window.location.pathname));
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
