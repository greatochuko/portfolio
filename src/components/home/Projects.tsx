import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "../work/ProjectCard";
import ArrowUpRight from "../ui/ArrowUpRight";

const FEATURED_COUNT = 4;

export default function Projects() {
  return (
    <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:gap-16 lg:py-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold sm:text-2xl">Projects</h2>
        <p className="text-muted text-sm sm:text-base">
          A selection of products I&apos;ve designed and built.
        </p>
      </div>

      <ul className="grid gap-x-6 gap-y-10 sm:gap-x-8 md:grid-cols-2">
        {projects.slice(0, FEATURED_COUNT).map((project, i) => (
          <li key={project.slug}>
            <ProjectCard project={project} eager={i < 2} />
          </li>
        ))}
      </ul>

      <Link
        href="/work"
        className="border-border text-secondary hover:bg-foreground hover:text-background hover:border-foreground group flex items-center gap-2 self-center rounded-full border px-6 py-2.5 text-sm font-medium duration-300"
      >
        View all projects
        <ArrowUpRight className="size-4 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </section>
  );
}
