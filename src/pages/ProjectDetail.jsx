import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { projectName } = useParams();
  const project = projects.find((project) =>
    project.name.toLocaleLowerCase().includes(projectName)
  );

  return (
    <main className="flex flex-col gap-y-1 max-w-2xl mx-auto p-4 text-zinc-700">
      <img
        src={project.imgSrc}
        alt={projectName}
        className="rounded-xl shadow-lg"
      />
      <h1 className="text-xl mt-4 font-semibold">{project.name}</h1>
      <p>{project.about}</p>
      <h2 className="text-xl font-semibold mt-4">Key Features</h2>
      {project.features.map((feature) => (
        <p key={feature.title}>
          <span className="font-semibold">{feature.title}: </span>
          {feature.description}
        </p>
      ))}
      <h2 className="text-xl font-semibold mt-4">Contribution</h2>
      <p>{project.contribution}</p>
      <h2 className="text-xl font-semibold mt-4">Future Directions</h2>
      <p>{project.future}</p>
    </main>
  );
}
