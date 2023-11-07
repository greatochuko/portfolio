import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { projectName } = useParams();

  const project = projects.find((project) =>
    project.name.toLowerCase().includes("pikxr")
  );

  return (
    <main className="flex mt-6 flex-col gap-y-3 max-w-xl mx-auto p-4 text-zinc-700">
      <img
        src={project.imgSrc}
        alt={projectName}
        className="rounded-lg shadow-lg"
      />
      <h1 className="text-xl underline underline-offset-4 font-semibold">
        {project.name}
      </h1>
      <div className="flex gap-4">
        <a
          href={project.githubLink}
          className="py-2 px-4 text-sm bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-300 duration-200 border border-zinc-200 rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github mr-2"></i>
          Inspect Source Code
        </a>
        <a
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 text-sm bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-300 duration-200 border border-zinc-200 rounded-md"
        >
          <i className="fa-solid fa-desktop mr-2"></i>View Live Website
        </a>
      </div>

      <h2 className="text-xl font-semibold mt-5">About</h2>
      <p>{project.about}</p>
      <h2 className="text-xl font-semibold mt-5">Key Features</h2>
      {project.features.map((feature) => (
        <p key={feature.title}>
          <span className="font-semibold">{feature.title}: </span>
          {feature.description}
        </p>
      ))}
      <h2 className="text-xl font-semibold mt-5">Contribution</h2>
      <p>{project.contribution}</p>
      <h2 className="text-xl font-semibold mt-5">Future Directions</h2>
      <p>{project.future}</p>
    </main>
  );
}
