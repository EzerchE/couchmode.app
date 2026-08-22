import { Fragment } from "react";
import { SUPPORT_EMAIL } from "@/lib/contact";
import type { LegalDocumentSection, LegalInline } from "@/i18n/packets";

type LegalDocumentProps = {
  sections: LegalDocumentSection[];
  onOpenConsent?: () => void;
};

function LegalText({ parts }: { parts: LegalInline[] }) {
  return parts.map((part, index) => {
    if (part.kind === "support-email") {
      return (
        <a
          key={`${part.kind}-${index}`}
          className="text-foreground underline-offset-4 hover:underline"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>
      );
    }

    return <Fragment key={`${part.kind}-${index}`}>{part.text}</Fragment>;
  });
}

export function LegalDocument({ sections, onOpenConsent }: LegalDocumentProps) {
  return sections.map((section, sectionIndex) => {
    if (!section.heading && !section.list && !section.action && section.paragraphs.length === 1) {
      return (
        <p key={sectionIndex}>
          <LegalText parts={section.paragraphs[0]} />
        </p>
      );
    }

    return (
      <section key={section.heading ?? sectionIndex}>
        {section.heading && <h2 className="font-medium text-foreground">{section.heading}</h2>}
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-2">
            <LegalText parts={paragraph} />
          </p>
        ))}
        {section.list && (
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {section.list.map((item, index) => (
              <li key={index}>
                <LegalText parts={item} />
              </li>
            ))}
          </ul>
        )}
        {section.action?.kind === "open-consent" && onOpenConsent && (
          <button
            type="button"
            onClick={onOpenConsent}
            className="mt-3 text-sm text-foreground underline-offset-4 transition hover:underline"
          >
            {section.action.label}
          </button>
        )}
      </section>
    );
  });
}
