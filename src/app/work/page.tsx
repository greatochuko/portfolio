import type { Metadata } from "next";
import GetInTouch from "@/components/home/GetInTouch";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/work/ProjectCard";

export const metadata: Metadata = {
  title: "Work | Great Ogheneochuko",
  description:
    "Products I've designed and built, from healthcare systems to SaaS apps and dashboards.",
};

export default function WorkPage() {
  return (
    <>
      <section className="flex flex-col gap-3 py-8 sm:gap-4 sm:py-12 lg:py-16">
        <p className="text-muted text-sm font-medium">
          {projects.length} projects
        </p>
        <h1 className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Selected work
        </h1>
        <p className="text-muted max-w-xl text-sm leading-relaxed sm:text-base">
          Products I&apos;ve designed and built, from healthcare systems and
          SaaS platforms to marketplaces and community apps.
        </p>
      </section>

      <hr className="border-border" />

      <section className="py-8 sm:py-12 lg:py-16">
        <ul className="grid gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-border" />
      <GetInTouch />
      <hr className="border-border" />
    </>
  );
}
