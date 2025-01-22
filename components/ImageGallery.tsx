import React from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[1.5] overflow-hidden rounded-md bg-muted"
        >
          <Image src={image} alt="Project image" fill sizes="45vw" />
        </div>
      ))}
    </div>
  );
}
