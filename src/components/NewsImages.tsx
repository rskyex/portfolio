'use client';

import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/lib/locale';
import type { NewsItem } from '@/lib/content';

type NewsImage = NonNullable<NewsItem['images']>[number];

const LABELS: Record<
  Locale,
  { enlarge: string; viewer: string; close: string; prev: string; next: string }
> = {
  en: {
    enlarge: 'Enlarge image',
    viewer: 'Image viewer',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
  },
  ja: {
    enlarge: '画像を拡大',
    viewer: '画像ビューア',
    close: '閉じる',
    prev: '前の画像',
    next: '次の画像',
  },
};

const CONTROL_CLASS =
  'absolute flex items-center justify-center w-10 h-10 rounded-full bg-kuro/60 text-shiro/80 hover:text-shiro hover:bg-kuro/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kin/60';

/** News-card thumbnails. Clicking one opens it full size in a lightbox built on
 *  the native modal <dialog>, which gives Esc-to-close and a focus trap; the
 *  arrow keys step through an item's photos. */
export default function NewsImages({ images, locale }: { images: NewsImage[]; locale: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const labels = LABELS[locale];
  const isOpen = index !== null;

  // Drive the dialog from state; while it is open, keep the page behind it
  // from scrolling, and hand focus back to the thumbnail when it closes.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
      if (dialog.open) dialog.close();
      opener?.focus();
    };
  }, [isOpen]);

  const step = (delta: number) =>
    setIndex((i) => (i === null ? i : (i + delta + images.length) % images.length));

  return (
    <>
      <div className="flex sm:flex-col gap-3 shrink-0 self-start sm:w-44">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-haspopup="dialog"
            aria-label={`${labels.enlarge}: ${image.alt[locale]}`}
            className="group min-w-0 flex-1 sm:flex-none cursor-zoom-in rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-kin/50"
          >
            <img
              src={image.src}
              alt={image.alt[locale]}
              loading="lazy"
              className="w-full h-full max-h-44 object-cover rounded border border-kin/20 transition-colors group-hover:border-kin/60"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={labels.viewer}
        onClose={() => setIndex(null)}
        // A click that lands on the dialog itself (not the photo or a control)
        // is a click on the dimmed area around the photo.
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndex(null);
        }}
        onKeyDown={(e) => {
          if (images.length < 2) return;
          if (e.key === 'ArrowLeft') step(-1);
          else if (e.key === 'ArrowRight') step(1);
        }}
        className="m-0 w-full h-full max-w-none max-h-none p-4 sm:p-14 bg-transparent items-center justify-center open:flex backdrop:bg-kuro/90 backdrop:backdrop-blur-sm"
      >
        {index !== null && (
          <figure className="flex flex-col items-center max-w-full max-h-full">
            <img
              src={images[index].src}
              alt={images[index].alt[locale]}
              className="max-w-full max-h-[80vh] object-contain rounded border border-kin/20"
            />
            <figcaption className="mt-3 max-w-2xl text-center font-inter text-xs text-shiro/80 leading-relaxed">
              {images.length > 1 && (
                <span className="mr-2 text-kin/80 tabular-nums">
                  {index + 1} / {images.length}
                </span>
              )}
              {images[index].alt[locale]}
            </figcaption>
          </figure>
        )}

        <button
          ref={closeRef}
          type="button"
          onClick={() => setIndex(null)}
          aria-label={labels.close}
          className={`${CONTROL_CLASS} top-3 right-3 sm:top-4 sm:right-4`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
          </svg>
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={labels.prev}
              className={`${CONTROL_CLASS} left-2 sm:left-4 top-1/2 -translate-y-1/2`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 3.5L5.5 8l4.5 4.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={labels.next}
              className={`${CONTROL_CLASS} right-2 sm:right-4 top-1/2 -translate-y-1/2`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 3.5L10.5 8 6 12.5" />
              </svg>
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
