import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import { ensureLocalePacket, localeForPublicPath } from "@/i18n/packets";
import errorCopies from "@/i18n/route-errors.generated.json";
import type { SharedUiCopy } from "@/i18n/shared-ui";

const locale = localeForPublicPath(window.location.pathname);
// Do not start React hydration until the selected packet is present: a rejected
// hydration promise would otherwise clear the useful prerendered document.
ensureLocalePacket(locale).then(() => {
  startTransition(() => {
    hydrateRoot(document, <StrictMode><StartClient /></StrictMode>);
  });
}).catch((error) => {
  console.error(error);
  const copy = (errorCopies as Record<string, SharedUiCopy["errors"]>)[locale];
  if (!copy) return;
  const notice = document.createElement("div");
  notice.setAttribute("role", "alert");
  notice.className = "fixed inset-x-4 bottom-4 z-[100] flex flex-wrap items-center justify-center gap-3 rounded-xl border border-primary/40 bg-card p-4 text-foreground";
  const message = document.createElement("span");
  message.textContent = copy.errorTitle;
  const retry = document.createElement("button");
  retry.type = "button";
  retry.textContent = copy.retryLabel;
  retry.className = "rounded-md bg-primary px-4 py-2 text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80";
  retry.onclick = () => window.location.reload();
  notice.append(message, retry);
  document.body.append(notice);
});
