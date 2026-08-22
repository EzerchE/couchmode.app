import type { RefObject } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { HomePayload } from "@/i18n/packets";

// Accessible full-screen viewer for the detail screenshots. Built on the Radix
// Dialog primitives already used by the project (no new dependency), which give
// us dialog semantics, a focus trap, focus return to the trigger, Escape-to-
// close, and body scroll lock for free. The image uses object-contain so the
// full screenshot stays visible without stretching; clicking the dark backdrop
// closes, clicking the image does not.
export type LightboxShot = {
  src: string;
  label: string;
  caption: string;
  alt: string;
};

export function ScreenshotLightbox({
  shots,
  index,
  onOpenChange,
  onNavigate,
  returnFocusRef,
  controls,
}: {
  shots: LightboxShot[];
  index: number | null;
  onOpenChange: (open: boolean) => void;
  onNavigate: (index: number) => void;
  // The dialog is opened programmatically (no Radix Trigger), so Radix has no
  // trigger to restore focus to on close. We return focus to the card that
  // opened it via this ref.
  returnFocusRef?: RefObject<HTMLElement | null>;
  controls: HomePayload["featureShots"]["lightbox"];
}) {
  const open = index !== null;
  const count = shots.length;
  const shot = open ? shots[index] : null;

  const go = (dir: number) => {
    if (index === null) return;
    onNavigate((index + dir + count) % count);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm" />
        <Dialog.Content
          onCloseAutoFocus={(e) => {
            const el = returnFocusRef?.current;
            if (el) {
              e.preventDefault();
              el.focus();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              go(-1);
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              go(1);
            }
          }}
          // Clicking the backdrop (this element itself, not a child) closes.
          onClick={(e) => {
            if (e.target === e.currentTarget) onOpenChange(false);
          }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 outline-none focus:outline-none sm:p-8"
        >
          {shot && (
            <>
              <Dialog.Title className="sr-only">
                {shot.label}: {shot.caption}
              </Dialog.Title>
              <Dialog.Description className="sr-only">{shot.alt}</Dialog.Description>

              <Dialog.Close
                aria-label={controls.closeLabel}
                className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/50 text-white/90 backdrop-blur-md transition hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:right-5 sm:top-5"
              >
                <X className="h-5 w-5" />
              </Dialog.Close>

              {count > 1 && (
                <>
                  <button
                    type="button"
                    aria-label={controls.previousLabel}
                    onClick={(e) => {
                      e.stopPropagation();
                      go(-1);
                    }}
                    className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white/90 backdrop-blur-md transition hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:left-5"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label={controls.nextLabel}
                    onClick={(e) => {
                      e.stopPropagation();
                      go(1);
                    }}
                    className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white/90 backdrop-blur-md transition hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:right-5"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Clicking the image (this figure) must not close the dialog. */}
              <figure
                onClick={(e) => e.stopPropagation()}
                className="flex min-h-0 max-w-[1122px] flex-col items-center"
              >
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  width={1122}
                  height={714}
                  draggable={false}
                  className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl shadow-black/60"
                />
                <figcaption className="mt-4 flex items-baseline justify-center gap-2 text-center">
                  <span className="text-sm font-medium text-white">{shot.label}</span>
                  <span className="text-sm text-white/60">{shot.caption}</span>
                </figcaption>
              </figure>

              {count > 1 && index !== null && (
                <div
                  aria-hidden
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tabular-nums text-white/45"
                >
                  {index + 1} / {count}
                </div>
              )}
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
