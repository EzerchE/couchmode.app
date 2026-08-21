import { useEffect, useRef, useState } from "react";
import { readConsentChoice, saveConsentChoice, type ConsentChoice } from "@/lib/consent";

export function ConsentBanner() {
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>({ analytics: false, advertising: false });
  const [saveError, setSaveError] = useState(false);
  const saving = useRef(false);

  useEffect(() => {
    const openPreferences = () => {
      const stored = readConsentChoice();
      if (stored) setChoice(stored);
      setSaveError(false);
      setIsOpen(true);
    };

    if (readConsentChoice()) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    setReady(true);
    window.addEventListener("couchmode:open-consent", openPreferences);
    return () => window.removeEventListener("couchmode:open-consent", openPreferences);
  }, []);

  if (!ready || !isOpen) return null;

  const save = (next: ConsentChoice) => {
    if (saving.current) return;

    saving.current = true;
    const persisted = saveConsentChoice(next);
    saving.current = false;

    if (!persisted) {
      setSaveError(true);
      return;
    }

    setChoice(next);
    setSaveError(false);
    setIsOpen(false);
  };

  return (
    <section
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-xl rounded-3xl border border-white/15 bg-card/95 p-5 shadow-2xl backdrop-blur-xl sm:bottom-6"
      aria-labelledby="consent-heading"
    >
      <h2 id="consent-heading" className="text-base font-semibold text-foreground">
        Your privacy choices
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Necessary storage keeps this choice. Analytics helps us understand website use. Advertising
        is reserved for future campaign measurement and is off unless you allow it.
      </p>
      {saveError ? (
        <p className="mt-3 text-sm text-destructive" role="alert">
          We could not save your choice. Please check that browser storage is available and try
          again.
        </p>
      ) : null}
      <div className="mt-4 grid gap-3 text-sm">
        <label className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
          <span>
            <span className="font-medium text-foreground">Necessary</span>
            <span className="block text-xs text-muted-foreground">Always on</span>
          </span>
          <input
            type="checkbox"
            checked
            disabled
            aria-label="Necessary storage is always enabled"
          />
        </label>
        <label className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
          <span>
            <span className="font-medium text-foreground">Analytics</span>
            <span className="block text-xs text-muted-foreground">Website usage measurement</span>
          </span>
          <input
            type="checkbox"
            checked={choice.analytics}
            onChange={(event) =>
              setChoice((current) => ({ ...current, analytics: event.target.checked }))
            }
          />
        </label>
        <label className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
          <span>
            <span className="font-medium text-foreground">Advertising</span>
            <span className="block text-xs text-muted-foreground">Future ad measurement</span>
          </span>
          <input
            type="checkbox"
            checked={choice.advertising}
            onChange={(event) =>
              setChoice((current) => ({ ...current, advertising: event.target.checked }))
            }
          />
        </label>
      </div>
      <div className="mt-5 flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={() => save({ analytics: false, advertising: false })}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/[0.06]"
        >
          Necessary only
        </button>
        <button
          type="button"
          onClick={() => save({ analytics: true, advertising: false })}
          className="rounded-full bg-aurora px-4 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110"
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => save(choice)}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/[0.06]"
        >
          Save choices
        </button>
      </div>
    </section>
  );
}
