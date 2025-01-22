import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "@/data/projects.json";

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
    </div>
  );
}
