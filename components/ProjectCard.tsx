import { Project } from "@/lib/projects";
import Image from "next/image";

type Status = "live" | "build" | "archive";

const statusStyles: Record<Status, string> = {
  live: "text-status-live bg-status-live-bg",
  build: "text-status-build bg-status-build-bg",
  archive: "text-status-archive bg-status-archive-bg",
};

export default function ProjectCard({ project }: { project: Project }) {
  // Gracefully handles formatting links with/without protocol prefix
  const externalUrl = project.url.startsWith("http")
    ? project.url
    : `https://${project.url}`;

  return (
    <article
      data-reveal
      className="reveal flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised transition-all  hover:border-slate-400/40 hover:shadow-[0_22px_40px_-24px_rgba(15,23,42,0.12)]"
    >
      {/* Top Bar / Navigation Mock */}
      <div className="flex items-center gap-2 border-b border-line bg-slate-100/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E7A2A2]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#EAC98B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#A6CBA8]" />

        {/* Direct link to the live project */}

        <div className="flex-1" />

        <span
          className={`whitespace-nowrap flex items-center gap-2 font-bold rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide ${statusStyles[project.status]}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
          {project.status}
        </span>
      </div>

      {/* Project Thumbnail Area */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-line-soft bg-slate-50">
        <Image
          src={`/images/project-images/${project.thumbnailUrl}`}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
          loading="lazy"
          fill
          sizes="640px"
        />
      </div>

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
            className=" flex max-w-fit items-center gap-1 truncate font-mono text-xs text-ink-faint transition-colors hover:text-cobalt"
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

        {/* CTA to Project Details Page */}
        <a
          href={`/work/${project.slug}`}
          className="inline-flex w-fit mt-auto items-center gap-1.5 border-b border-ink pb-0.5 font-mono text-sm font-medium text-ink transition-all hover:gap-2.5 hover:border-cobalt hover:text-cobalt"
        >
          Read case study →
        </a>
      </div>
    </article>
  );
}
