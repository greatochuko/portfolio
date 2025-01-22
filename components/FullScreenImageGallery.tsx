import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Image from "next/image";

export default function FullScreenImageGallery({
  currentIndex,
  fullScreenMode,
  images,
  closeFullScreenMode,
}: {
  currentIndex: number;
  fullScreenMode: boolean;
  images: string[];
  closeFullScreenMode(): void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fullScreenMode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [fullScreenMode]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const currentImage = scrollContainer.children[currentIndex];
      if (currentImage) {
        currentImage.scrollIntoView();
      }
    }
  }, [currentIndex]);

  function scrollLeft(e: React.MouseEvent) {
    e.stopPropagation();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -scrollContainer.clientWidth,
        behavior: "smooth",
      });
    }
  }

  function scrollRight(e: React.MouseEvent) {
    e.stopPropagation();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: scrollContainer.clientWidth,
        behavior: "smooth",
      });
    }
  }

  return (
    <div
      className={`flex-center fixed left-0 top-0 z-20 h-full w-full bg-black/50 backdrop-blur-lg ${fullScreenMode ? "visible opacity-100" : "invisible opacity-0"}`}
      onClick={closeFullScreenMode}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`no-scrollbar flex aspect-square max-h-[80%] w-[90%] snap-x snap-mandatory gap-4 overflow-x-scroll duration-300 ${fullScreenMode ? "scale-100" : "scale-95"}`}
        ref={scrollContainerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-full w-full flex-shrink-0 snap-start snap-always`}
            id={`#image-${index}`}
          >
            <Image
              src={image}
              alt="Project image"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-[5%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full bg-black/70 p-2 duration-300 hover:bg-black"
      >
        <FaCaretLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-[5%] top-[50%] -translate-y-[50%] translate-x-[50%] rounded-full bg-black/70 p-2 duration-300 hover:bg-black"
      >
        <FaCaretRight className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-4 rounded-full bg-black/70 p-2 duration-300 hover:bg-black"
        onClick={closeFullScreenMode}
      >
        <IoMdClose className="h-6 w-6" />
      </button>
    </div>
  );
}
