import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { projectName } = useParams();

  const project = projects.find((project) => project.url === projectName);

  return (
    <main className="flex flex-col max-w-2xl p-4 mx-auto mt-6 gap-y-3 text-zinc-700 dark:text-white">
      <img
        src={project.imgSrc}
        alt={projectName}
        className="rounded-lg shadow-lg"
      />
      <h1 className="text-xl font-semibold underline underline-offset-4">
        {project.name}
      </h1>
      <div className="flex flex-wrap gap-4">
        <a
          href={project.githubLink}
          className="px-4 py-2 text-sm duration-200 border rounded-md bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 hover:bg-zinc-200 hover:border-zinc-300 border-zinc-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="mr-2 fa-brands fa-github"></i>
          Inspect Source Code
        </a>
        <a
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm duration-200 border rounded-md bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 hover:bg-zinc-200 hover:border-zinc-300 border-zinc-200"
        >
          <i className="mr-2 fa-solid fa-desktop"></i>View Live Website
        </a>
      </div>

      <h2 className="mt-5 text-xl font-semibold">About</h2>
      <p>{project.about}</p>
      <h2 className="mt-5 text-xl font-semibold">Key Features</h2>
      {project.features.map((feature) => (
        <p key={feature.title}>
          <span className="font-semibold">{feature.title}: </span>
          {feature.description}
        </p>
      ))}
      <h2 className="mt-5 text-xl font-semibold">Contribution</h2>
      <p>{project.contribution}</p>
      {project.future ? (
        <>
          <h2 className="mt-5 text-xl font-semibold">Future Directions</h2>
          <p>{project.future}</p>
        </>
      ) : null}
    </main>
  );
}
