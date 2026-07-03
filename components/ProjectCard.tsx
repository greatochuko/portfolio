"use client";

import { Project } from "@/lib/projects";
import Image from "next/image";
import { useState } from "react";
import MediaGallery from "./MediaGallery";

export default function ProjectCard({ project }: { project: Project }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const externalUrl = project.url.startsWith("http")
    ? project.url
    : `https://${project.url}`;

  // Fallback to project thumbnail image if explicit gallery array doesn't exist
  const galleryStack = [project.thumbnailUrl, ...project.galleryImages];

  return (
    <>
      <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised transition-all hover:border-slate-400/40 hover:shadow-[0_22px_40px_-24px_rgba(15,23,42,0.12)]">
        {/* Top Bar / Navigation Mock */}
        <div className="flex items-center gap-2 border-b border-line bg-slate-100/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E7A2A2]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#EAC98B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#A6CBA8]" />

          <div className="flex-1" />

          <span
            className={`whitespace-nowrap flex items-center gap-2 font-bold rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-status-live bg-status-live-bg`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
            Live
          </span>
        </div>

        {/* Interactive Client Gallery Trigger Wrapper */}
        <button
          onClick={() => setIsGalleryOpen(true)}
          className="group relative aspect-video w-full overflow-hidden border-b border-line-soft bg-slate-50 text-left cursor-zoom-in focus:outline-hidden"
          type="button"
          aria-label={`Open ${project.title} screenshot gallery overlay`}
        >
          <Image
            src={`/images/project-images/${project.thumbnailUrl}`}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            fill
            sizes="640px"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15 flex items-center justify-center">
            <span className="font-mono text-xs font-medium text-white bg-black/75 backdrop-blur-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
              View Gallery 🔍
            </span>
          </div>
        </button>

        {/* Card Content */}
        <div className="px-6 pb-6 pt-6.5 flex-1 flex flex-col">
          <div className="mb-2.5 flex gap-2 flex-col">
            <h3 className="font-display text-2xl font-semibold text-ink">
              {project.title}
            </h3>
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex max-w-fit items-center gap-1 truncate font-mono text-xs text-ink-faint transition-colors hover:text-cobalt"
            >
              {project.url}
              <span className="text-[10px] opacity-70">↗</span>
            </a>
          </div>
          <p className="mb-4.5 max-w-sm text-[15px] text-ink-soft">
            {project.desc}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-line-soft bg-slate-50 px-2.5 py-1 font-mono text-[11.5px] text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Live Target Deployment Reference */}
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit mt-auto items-center gap-1.5 border-b border-ink pb-0.5 font-mono text-sm font-medium text-ink transition-all hover:gap-2.5 hover:border-cobalt hover:text-cobalt"
          >
            Launch live deployment ↗
          </a>
        </div>
      </article>

      <MediaGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryStack}
        projectTitle={project.title}
      />
    </>
  );
}
