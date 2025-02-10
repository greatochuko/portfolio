import React from "react";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";
import ViewAllButton from "@/components/ViewAllButton";
import BackButton from "@/components/BackButton";
import RecentProjectSection from "@/components/RecentProjectSection";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import { Metadata } from "next";
import LetsConnectSection from "@/components/LetsConnectSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = projects.find((project) => project.slug === projectSlug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: project.title,
    description: project.projectOverview,
    openGraph: {
      images: [
        {
          url: project.thumbnail,
          width: 800,
          height: 600,
          alt: project.title + " thumbnail",
        },
      ],
    },
  };
}
export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;

  const project = projects.find((project) => project.slug === projectSlug);

  if (!project) notFound();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
        <BackButton href="/works">Back to Works</BackButton>
        <hr className="flex-1 border-dashed border-[#666]" />
        <ViewAllButton href={project.liveUrl} target="_blank">
          Live Site
        </ViewAllButton>
      </div>
      <h1 className="text-3xl font-medium sm:text-4xl sm:text-[42px] lg:text-5xl">
        {project.title}
      </h1>
      <div className="relative aspect-[1.6] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={project.thumbnail}
          alt={project.title + " thumbnail"}
          fill
          sizes="90vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Project Overview</h3>
          <p className="text-accent-gray">{project.projectOverview}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Tech Stack</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-accent-gray">
              <span className="font-medium text-foreground">Frontend: </span>
              {project.techStack.frontend}
            </li>
            <li className="text-accent-gray">
              <span className="font-medium text-foreground">Backend: </span>
              {project.techStack.backend}
            </li>
            <li className="text-accent-gray">
              <span className="font-medium text-foreground">Database: </span>
              {project.techStack.database}
            </li>
            <li className="text-accent-gray">
              <span className="font-medium text-foreground">Other Tools: </span>
              {project.techStack.otherTools}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Links</h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base">
            <li className="text-accent-gray">
              <span className="font-medium text-foreground">Source Code: </span>
              <Link
                href={project.githubUrl}
                target="_blank"
                className="text-accent-green-100 hover:underline"
              >
                {project.githubUrl}
              </Link>
            </li>
            <li className="text-accent-gray">
              <span className="font-medium text-foreground">Live Site: </span>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="text-accent-green-100 hover:underline"
              >
                {project.liveUrl}
              </Link>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Gallery</h3>
          <ImageGallery images={project.images} />
        </section>
      </div>
      <div className="mb-12 flex flex-wrap items-center gap-4 text-sm text-accent-gray">
        <BackButton href="/works">Back to Works</BackButton>
        <hr className="flex-1 border-dashed border-[#666]" />
        <ViewAllButton href={project.liveUrl}>Live Site</ViewAllButton>
      </div>
      <RecentProjectSection
        title="Other Projects"
        projects={projects.filter((project) => project.slug !== projectSlug)}
      />

      <LetsConnectSection />
    </div>
  );
}
