import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectType = {
  title: string;
  thumbnail: string;
  thumbnailPlaceholder: string;
  subtitle: string;
  images: string[];
  slug: string;
  liveUrl: string;
};

export default function Project({ project }: { project: ProjectType }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-1 flex-col gap-3"
    >
      <div className="relative aspect-[1.6] overflow-hidden rounded-md bg-muted sm:rounded-lg">
        <Image
          src={project.thumbnail}
          alt={project.title + " thumbnail"}
          fill
          sizes="(max-width: 768px) 90vw, 45vw"
          className="h-full w-full rounded-lg object-cover duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col duration-300 group-hover:translate-x-4">
        <h3 className="text-lg font-medium uppercase">{project.title}</h3>
        <p className="text-sm text-accent-green-100">{project.subtitle}</p>
      </div>
    </Link>
  );
}
