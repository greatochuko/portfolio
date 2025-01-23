import React from "react";
import projects from "@/data/projects.json";
import Project from "@/components/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Works",
  description:
    "Explore my best projects, from scalable full-stack apps to responsive web designs, reflecting my expertise in efficient solutions.",
};

export default function WorksPage() {
  const freelanceProjects = projects.filter(
    (project) => project.type === "freelance",
  );

  const personalProjects = projects.filter(
    (project) => project.type === "personal",
  );

  return (
    <div className="flex flex-col gap-12">
      {freelanceProjects.length > 0 && (
        <div className="flex flex-col gap-12">
          <section className="flex flex-col gap-12">
            <h1 className="text-4xl font-medium sm:text-[42px] lg:text-5xl">
              My Freelance Works
            </h1>
          </section>
          <div className="grid gap-6 gap-y-8 md:grid-cols-2 lg:gap-8">
            {freelanceProjects.map((project) => (
              <Project key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-12">
          <h1 className="text-4xl font-medium sm:text-[42px] lg:text-5xl">
            My Remarkable Projects
          </h1>
        </section>
        <div className="grid gap-6 gap-y-8 md:grid-cols-2 lg:gap-8">
          {personalProjects.map((project) => (
            <Project key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
