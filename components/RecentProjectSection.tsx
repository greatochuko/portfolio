import Image from "next/image";
import React from "react";
import Link from "next/link";
import ViewAllButton from "./ViewAllButton";
import projects from "@/data/projects.json";

export default function RecentProjectSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-medium">Recent Projects</h2>
      <div className="grid gap-6 gap-y-8 md:grid-cols-2 lg:gap-8">
        {projects.slice(0, 2).map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
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
            <div className="flex flex-col">
              <h3 className="text-lg font-medium uppercase">{project.title}</h3>
              <p className="text-sm text-accent-green-100">
                {project.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
        <hr className="hidden flex-1 border-dashed border-[#666] sm:block" />
        <ViewAllButton href="/projects" className="mt-0">
          View All Projects
        </ViewAllButton>
      </div>
    </section>
  );
}
