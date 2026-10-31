import Image from "next/image";
import Link from "next/link";
import type { projects } from "@/lib/data";
import ArrowUpRight from "../ui/ArrowUpRight";

type Project = (typeof projects)[number];

export default function ProjectCard({
  project,
  eager,
}: {
  project: Project;
  eager?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group focus-visible:outline-foreground flex flex-col gap-4 rounded-xl outline-offset-4"
    >
      <div className="border-border bg-border/30 relative aspect-4/3 overflow-hidden rounded-xl border">
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top duration-500 ease-out group-hover:scale-105"
          loading={eager ? "eager" : "lazy"}
        />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-mono font-semibold group-hover:underline sm:text-lg">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <span className="border-border text-secondary group-hover:bg-foreground group-hover:text-background group-hover:border-foreground flex size-9 shrink-0 items-center justify-center rounded-full border duration-300">
          <ArrowUpRight className="size-4 duration-300 group-hover:rotate-12" />
        </span>
      </div>
    </Link>
  );
}
