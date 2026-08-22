import { createContext, useContext, type ReactNode } from "react";
import type { LocaleId } from "./config";
import { localePacketFor, type LocalePacket } from "./packets";

const LocaleContentContext = createContext<LocalePacket | undefined>(undefined);

export function LocaleContentProvider({ children, locale = "en" }: { children: ReactNode; locale?: LocaleId }) {
  const packet = localePacketFor(locale);
  if (!packet) throw new Error(`No public locale content is available for ${locale}`);
  return <LocaleContentContext.Provider value={packet}>{children}</LocaleContentContext.Provider>;
}

export function useLocaleContent() {
  const content = useContext(LocaleContentContext);
  if (!content) throw new Error("Locale content must be used within LocaleContentProvider");
  return content;
}
