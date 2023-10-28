import projects from "../data/projects.json";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="my-2">
      <h3 className="text-center mb-2 mt-5 font-bold text-zinc-700 text-xl">
        Projects
      </h3>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </section>
  );
}
