import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { projectName } = useParams();

  const project = projects.find((project) =>
    project.name.toLowerCase().includes("pikxr")
  );

  return (
    <main className="flex flex-col gap-y-3 max-w-2xl mx-auto p-4 text-zinc-700">
      <h1 className="text-xl my-4 underline underline-offset-4 font-semibold">
        {project.name}
      </h1>
      <img
        src={project.imgSrc}
        alt={projectName}
        className="rounded-xl shadow-lg"
      />
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
