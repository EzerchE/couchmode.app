import { createContext, useContext, type ReactNode } from "react";
import type { LocaleId, SurfaceId } from "./config";
import {
  localePacketFor,
  relativeHrefFor,
  relativeHrefForPacket,
  type LocalePacket,
} from "./packets";

type LocaleContent = LocalePacket & {
  relativeHref: (
    contentId: SurfaceId,
    fragment?: string,
    trailingSlash?: boolean,
  ) => string | undefined;
};

const LocaleContentContext = createContext<LocaleContent | undefined>(undefined);

type LocaleContentProviderProps = {
  children: ReactNode;
  locale?: LocaleId;
  /** Validation-only injection. Public routes always resolve an active locale packet. */
  validationPacket?: LocalePacket;
};

export function LocaleContentProvider({
  children,
  locale = "en",
  validationPacket,
}: LocaleContentProviderProps) {
  const packet = validationPacket ?? localePacketFor(locale);
  if (!packet) throw new Error(`No public locale content is available for ${locale}`);
  if (validationPacket && validationPacket.locale !== locale)
    throw new Error(`Validation packet locale does not match provider locale: ${locale}`);

  const relativeHref = validationPacket
    ? (contentId: SurfaceId, fragment = "", trailingSlash = false) =>
        relativeHrefForPacket(validationPacket, contentId, fragment, trailingSlash)
    : (contentId: SurfaceId, fragment = "", trailingSlash = false) =>
        relativeHrefFor(packet.locale, contentId, fragment, trailingSlash);

  return (
    <LocaleContentContext.Provider value={{ ...packet, relativeHref }}>
      {children}
    </LocaleContentContext.Provider>
  );
}

export function useLocaleContent() {
  const content = useContext(LocaleContentContext);
  if (!content) throw new Error("Locale content must be used within LocaleContentProvider");
  return content;
}
