import Link from "next/link";

const projects = [
  {
    slug: "igbinovia-foundation",
    title: "Emmanuel Igbinovia Foundation",
    description:
      "A non-profit platform for scholarships, school supplies, and empowerment programs in underserved communities.",
  },
  {
    slug: "garcia-medical-clinic",
    title: "Garcia Medical Clinic",
    description:
      "A role-based patient management system for appointments, medical records, billing, and clinic inventory.",
  },
  {
    slug: "clinic-lead-stack",
    title: "Clinic Lead Stack",
    description:
      "An AI-powered content and patient engagement platform that helps chiropractors create on-brand scripts, newsletters, and reels.",
  },
  {
    slug: "recliiga",
    title: "REC LiiGA",
    description:
      "A free app that brings fantasy sports drafting, ratings, and leaderboards to recreational drop-in games.",
  },
  {
    slug: "scoutsesh",
    title: "ScoutSesh",
    description:
      "An athlete development platform with training programs and performance tracking for athletes and coaches.",
  },
  {
    slug: "learnex",
    title: "LearnEx",
    description:
      "A scalable learning management system for course creation, interactive lessons, and progress tracking.",
  },
  {
    slug: "shopparel",
    title: "Shopparel",
    description:
      "A fashion e-commerce platform for browsing, purchasing, and managing apparel orders with secure checkout.",
  },
  {
    slug: "bloggerzine",
    title: "Bloggerzine",
    description:
      "A blog platform where writers publish articles and readers explore content across many niches.",
  },
  {
    slug: "estate-haven",
    title: "Estate Haven",
    description:
      "A real estate platform for listing properties and searching by location, price, and other filters.",
  },
  {
    slug: "pikxr",
    title: "Pikxr",
    description:
      "A photo-sharing platform with dynamic galleries and social features for photographers and enthusiasts.",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:gap-16 lg:py-16">
      <h2 className="text-xl font-semibold sm:text-2xl">Projects</h2>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-2"
            >
              <h3 className="group-hover:text-accent underline duration-200">
                {project.title}
              </h3>
              <p className="text-muted">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
