import React from "react";
import projectsData from "@/data/projects.json";
import Project, { ProjectType } from "@/components/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Works",
  description:
    "Explore a showcase of my best projects, from scalable full-stack applications to responsive web designs. Crafted with modern technologies like Next.js, React, and Node.js, these works reflect my expertise in building efficient, user-friendly, and performance-optimized solutions.",
};

export default function page() {
  const projects: ProjectType[] = projectsData.map((project) => ({
    ...project,
    type: project.type as "freelance" | "personal",
  }));

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
