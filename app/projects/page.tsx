import React from "react";
import projects from "@/data/projects.json";
import Project from "@/components/Project";

export default function page() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-12">
        <h1 className="text-4xl font-medium sm:text-[42px] lg:text-5xl">
          My Remarkable Projects
        </h1>
      </section>
      <div className="grid gap-6 gap-y-8 md:grid-cols-2 lg:gap-8">
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
