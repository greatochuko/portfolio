"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Must match the duration-300 classes on the overlay below
const ANIMATION_MS = 300;

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronIcon({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

const navButtonClasses =
  "border-border bg-background/80 text-secondary hover:bg-foreground hover:text-background hover:border-foreground absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur duration-300 disabled:pointer-events-none disabled:opacity-0";

type Props = { images: string[]; title: string };

export default function ProjectGallery({ images, title }: Props) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const firstScroll = useRef(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  // Keep the active thumbnail centered in the strip
  useEffect(() => {
    if (!mounted) return;
    const strip = stripRef.current;
    const thumb = thumbRefs.current[index];
    if (!strip || !thumb) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: firstScroll.current || reduceMotion ? "auto" : "smooth",
    });
    firstScroll.current = false;
  }, [index, mounted]);

  function open(i: number, trigger: HTMLElement) {
    clearTimeout(closeTimer.current);
    triggerRef.current = trigger;
    firstScroll.current = true;
    setIndex(i);
    setMounted(true);
  }

  const close = useCallback(() => {
    setShown(false);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setMounted(false);
      triggerRef.current?.focus();
    }, ANIMATION_MS);
  }, []);

  const go = useCallback(
    (direction: 1 | -1) => {
      setIndex((i) => Math.min(Math.max(i + direction, 0), images.length - 1));
    },
    [images.length],
  );

  // Fade in: wait two frames so the browser paints the hidden state first
  useEffect(() => {
    if (!mounted) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setShown(true));
    });
    closeButtonRef.current?.focus();
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [mounted]);

  // Lock page scroll while open, without the layout shifting
  useEffect(() => {
    if (!mounted) return;
    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [mounted]);

  // Keyboard: Esc closes, arrows navigate, Tab stays inside the modal
  useEffect(() => {
    if (!mounted) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
      } else if (e.key === "ArrowLeft") {
        go(-1);
      } else if (e.key === "ArrowRight") {
        go(1);
      } else if (e.key === "Tab") {
        const focusable =
          dialogRef.current?.querySelectorAll<HTMLElement>(
            "button:not(:disabled):not([tabindex='-1'])",
          ) ?? [];
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (!dialogRef.current?.contains(active)) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mounted, close, go]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <>
      <ul className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              aria-label={`View ${title} screenshot ${i + 1} full screen`}
              className="group border-border bg-border/30 focus-visible:outline-foreground relative block aspect-4/3 w-full cursor-zoom-in overflow-hidden rounded-xl border outline-offset-4"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="rounded-xl object-cover object-top duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 duration-300 group-hover:bg-black/30 group-focus-visible:bg-black/30">
                <span className="bg-background text-foreground flex size-11 scale-90 items-center justify-center rounded-full opacity-0 duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                  <ExpandIcon className="size-5" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {mounted &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} gallery`}
            onClick={(e) => {
              // Clicking the empty backdrop closes; buttons and images don't
              if (
                !(e.target as HTMLElement).closest(
                  "button, img, [data-no-close]",
                )
              )
                close();
            }}
            className={`bg-background/95 fixed inset-0 z-50 flex flex-col backdrop-blur-md transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              shown ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <div className="flex flex-col">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-muted text-sm tabular-nums">
                  {index + 1} / {images.length}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Close gallery"
                className="border-border text-secondary hover:bg-foreground hover:text-background hover:border-foreground flex size-10 items-center justify-center rounded-full border duration-300"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1 overflow-hidden"
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const delta = e.changedTouches[0].clientX - touchStartX.current;
                touchStartX.current = null;
                if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
              }}
            >
              <div
                className={`h-full transition-transform duration-300 ease-out motion-reduce:transition-none ${
                  shown ? "scale-100" : "scale-95"
                }`}
              >
                <div
                  className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {images.map((src, i) => (
                    <div
                      key={src}
                      aria-hidden={i !== index}
                      className={`flex h-full w-full shrink-0 items-center justify-center px-4 pb-4 duration-500 sm:px-20 ${
                        i === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="relative h-full w-full max-w-5xl">
                        <Image
                          src={src}
                          alt={`${title} screenshot ${i + 1}`}
                          fill
                          loading="eager"
                          sizes="100vw"
                          className="rounded-lg border object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
                aria-label="Previous image"
                className={`${navButtonClasses} left-3 sm:left-6`}
              >
                <ChevronIcon direction="left" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={index === images.length - 1}
                aria-label="Next image"
                className={`${navButtonClasses} right-3 sm:right-6`}
              >
                <ChevronIcon direction="right" className="size-5" />
              </button>
            </div>

            {images.length > 1 && (
              <div
                ref={stripRef}
                data-no-close
                role="group"
                aria-label="Gallery thumbnails"
                className="relative scrollbar-thin overflow-x-auto px-4 pt-1 pb-4 sm:px-6"
              >
                <div className="mx-auto flex w-max gap-2">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      ref={(el) => {
                        thumbRefs.current[i] = el;
                      }}
                      type="button"
                      tabIndex={-1}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to image ${i + 1}`}
                      aria-current={i === index}
                      className={`relative aspect-4/3 h-14 shrink-0 overflow-hidden rounded-md border-2 duration-300 sm:h-16 ${
                        i === index
                          ? "border-foreground opacity-100"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="88px"
                        className="object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
