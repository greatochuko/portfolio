"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export default function MediaGallery({
  isOpen,
  onClose,
  images,
  projectTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectTitle: string;
}) {
  // Track active slide element using single state authority
  const activeIndexRef = useRef<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Reusable transition function across all interactive triggers
  const scrollToImage = useCallback(
    (index: number) => {
      if (!scrollContainerRef.current) return;

      activeIndexRef.current = index;
      const slides = scrollContainerRef.current.children;
      if (slides[index]) {
        slides[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }

      // Sync active style rings manually without forcing entire virtual DOM tree updates
      const thumbnails = thumbnailContainerRef.current?.children;
      if (thumbnails) {
        Array.from(thumbnails).forEach((thumb, i) => {
          if (i === index) {
            thumb.classList.add(
              "ring-2",
              "ring-white",
              "scale-105",
              "opacity-100",
            );
            thumb.classList.remove("opacity-40");
            thumb.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          } else {
            thumb.classList.remove(
              "ring-2",
              "ring-white",
              "scale-105",
              "opacity-100",
            );
            thumb.classList.add("opacity-40");
          }
        });
      }

      // Update index display in text layout header
      const counterEl = document.getElementById("gallery-counter");
      if (counterEl) counterEl.innerText = `${index + 1} of ${images.length}`;
    },
    [images.length],
  );

  const next = useCallback(() => {
    const nextIdx = (activeIndexRef.current + 1) % images.length;
    scrollToImage(nextIdx);
  }, [images.length, scrollToImage]);

  const prev = useCallback(() => {
    const prevIdx =
      (activeIndexRef.current - 1 + images.length) % images.length;
    scrollToImage(prevIdx);
  }, [images.length, scrollToImage]);

  // Bind hardware keyboard interaction inputs
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    // Ensure accurate position calibration on initial modal mounting
    setTimeout(() => scrollToImage(0), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          next();
          break;
        case "ArrowLeft":
          prev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, next, prev, onClose, scrollToImage]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between  select-none duration-200 ${isOpen ? "visible opacity-100 bg-black/50 backdrop-blur-md" : "invisible opacity-0"}`}
    >
      {/* Top Bar Navigation Info */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 text-white bg-linear-to-b from-black/80 to-transparent">
        <div>
          <h3 className="font-semibold text-lg">{projectTitle}</h3>
          <p id="gallery-counter" className="text-sm text-white/60 font-mono">
            1 of {images.length}
          </p>
        </div>

        <button
          onClick={onClose}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-black"
          type="button"
        >
          ✕
        </button>
      </header>

      {/* Primary Carousel Track Layout Viewport Container */}
      <div className="relative flex flex-1 items-center justify-between px-4">
        {/* Left Arrow Button Controls */}
        <button
          onClick={prev}
          className="absolute left-6 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xs transition hover:bg-white hover:text-black hover:scale-105"
          type="button"
        >
          ←
        </button>

        {/* Sliding Viewport Frame Mask */}
        <div
          ref={scrollContainerRef}
          className="flex w-full h-full max-h-[70vh] items-center overflow-x-hidden scroll-smooth mx-auto max-w-5xl pointer-events-none "
        >
          {images.map((image, index) => (
            <div
              key={`slide-${image}`}
              className="relative w-full h-full shrink-0 flex items-center justify-center px-4"
            >
              <div className="relative w-full h-full max-w-5xl">
                <Image
                  src={`/images/project-images/${image}`}
                  alt={`${projectTitle} asset display frame ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-contain"
                  sizes="(max-w-1200px) 100vw, 1200px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button Controls */}
        <button
          onClick={next}
          className="absolute right-6 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xs transition hover:bg-white hover:text-black hover:scale-105"
          type="button"
        >
          →
        </button>
      </div>

      {/* Footer Thumbnail Strip Selector Layout */}
      <footer
        className="relative z-10 flex justify-center py-6 bg-linear-to-t from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={thumbnailContainerRef}
          className="flex max-w-[90vw] gap-3 overflow-x-auto rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur-md scroll-smooth"
        >
          {images.map((image, index) => (
            <button
              key={`thumb-${image}`}
              onClick={() => scrollToImage(index)}
              className={`relative aspect-square w-24 cursor-pointer shrink-0 overflow-hidden rounded-lg transition-all duration-300
                ${
                  index === 0
                    ? "ring-2 ring-white scale-105 opacity-100"
                    : "opacity-40 hover:opacity-100"
                }
              `}
              type="button"
            >
              <Image
                src={`/images/project-images/${image}`}
                alt={`Jump to frame view index ${index + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
