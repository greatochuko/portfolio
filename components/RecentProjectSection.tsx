import React from "react";
import ViewAllButton from "./ViewAllButton";
import projects from "@/data/projects.json";
import Project from "./Project";

export default function RecentProjectSection({ title = "Recent Projects" }) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="grid gap-6 gap-y-8 md:grid-cols-2 lg:gap-8">
        {projects.slice(0, 2).map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
        <hr className="hidden flex-1 border-dashed border-[#666] sm:block" />
        <ViewAllButton href="/works" className="mt-0">
          View All Projects
        </ViewAllButton>
      </div>
    </section>
  );
}
