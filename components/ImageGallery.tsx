"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdFullscreen } from "react-icons/md";
import FullScreenImageGallery from "./FullScreenImageGallery";

export default function ImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullScreenMode, setFullScreenMode] = useState(false);

  function closeFullScreenMode() {
    setFullScreenMode(false);
  }

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-4">
        {images.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[1.5] overflow-hidden rounded-md bg-muted"
          >
            <Image
              src={image}
              alt="Project image"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 30vw"
              className="object-cover"
            />
            {index === 5 && images.length > 6 && (
              <div className="flex-center absolute left-0 top-0 h-full w-full bg-black/70">
                + {images.length - 6} more
              </div>
            )}
            <button
              onClick={() => {
                setFullScreenMode(true);
                setCurrentIndex(index);
              }}
              className="invisible absolute right-2 top-2 rounded-full bg-black/70 p-2 opacity-0 duration-300 hover:bg-black group-hover:visible group-hover:opacity-100"
            >
              <MdFullscreen className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>

      <FullScreenImageGallery
        currentIndex={currentIndex}
        fullScreenMode={fullScreenMode}
        closeFullScreenMode={closeFullScreenMode}
        images={images}
      />
    </>
  );
}
