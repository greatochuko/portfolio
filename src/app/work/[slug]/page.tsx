import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import GetInTouch from "@/components/home/GetInTouch";
import { getGalleryImages, projects } from "@/lib/data";
import { Suspense } from "react";
import ProjectGallery from "@/components/work/ProjectGallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Great Ogheneochuko`,
    description: project.description,
    openGraph: { images: [project.thumbnail] },
  };
}

function ProjectSkeleton() {
  return (
    <section className="flex flex-col gap-6 py-8 sm:gap-8 sm:py-12 lg:py-16">
      <div className="bg-border/30 h-4 w-20 rounded" />
      <div className="bg-border/30 h-10 w-2/3 rounded" />
      <div className="bg-border/30 h-4 w-full max-w-xl rounded" />
      <div className="bg-border/30 aspect-4/3 rounded-xl" />
    </section>
  );
}

export default function ProjectPage({ params }: Props) {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const gallery = getGalleryImages(project);
  const next = projects[(index + 1) % projects.length];

  const links = [
    project.liveUrl && { label: "Live site", href: project.liveUrl },
    project.sourceUrl && { label: "Source code", href: project.sourceUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <>
      <section className="flex flex-col gap-6 py-8 sm:gap-8 sm:py-12 lg:py-16">
        <Link
          href="/work"
          className="text-muted hover:text-foreground group inline-flex items-center gap-2 self-start text-sm duration-200"
        >
          <ArrowUpRight className="size-4 -rotate-90 duration-200 group-hover:-translate-x-0.5" />
          All work
        </Link>

        <div className="flex flex-col gap-3 sm:gap-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-muted max-w-xl text-sm leading-relaxed sm:text-base">
            {project.description}
          </p>
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium duration-300 ${
                  i === 0
                    ? "bg-foreground text-background border-foreground hover:opacity-80"
                    : "border-border text-secondary hover:bg-foreground hover:text-background hover:border-foreground"
                }`}
              >
                {link.label}
                <ArrowUpRight className="size-4 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="pb-8 sm:pb-12 lg:pb-16">
        <div className="border-border bg-border/30 relative aspect-4/3 overflow-hidden rounded-xl border">
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </section>

      <hr className="border-border" />

      <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:flex-row lg:gap-16 lg:py-16">
        <div className="flex flex-2 flex-col gap-4">
          <h2 className="text-xl font-semibold sm:text-2xl">Overview</h2>
          <p className="text-muted text-sm leading-relaxed sm:text-base">
            {project.overview ?? project.description}
          </p>
        </div>

        {project.stack && project.stack.length > 0 && (
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Built with</h2>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border-border text-secondary rounded-full border px-3 py-1 text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {gallery.length > 0 && (
        <>
          <hr className="border-border" />
          <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:py-16">
            <h2 className="text-xl font-semibold sm:text-2xl">Gallery</h2>
            <ProjectGallery images={gallery} title={project.title} />
          </section>
        </>
      )}

      <hr className="border-border" />

      <section className="py-8 sm:py-12 lg:py-16">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-1">
            <span className="text-muted text-sm">Next project</span>
            <span className="text-xl font-semibold sm:text-2xl">
              {next.title}
            </span>
          </div>
          <span className="border-border text-secondary group-hover:bg-foreground group-hover:text-background group-hover:border-foreground flex size-11 shrink-0 items-center justify-center rounded-full border duration-300">
            <ArrowUpRight className="size-5 duration-300 group-hover:rotate-12" />
          </span>
        </Link>
      </section>

      <hr className="border-border" />
      <GetInTouch />
      <hr className="border-border" />
    </>
  );
}
