import { Link } from "react-router-dom";

export default function Project({ project }) {
  return (
    <div className="flex flex-col my-4 gap-2 border p-2 rounded-lg shadow-lg">
      <img src={project.imgSrc} alt="" className="rounded-lg shadow-lg" />
      <h2 className="text-lg font-semibold text-zinc-800 mt-2">
        {project.name}
      </h2>

      <p className="text-zinc-800">
        {project.description}
        <Link
          to={`/projects/${project.name}`}
          className="text-blue-500 ml-2 hover:underline"
        >
          See More
        </Link>
      </p>
      <div className="grid grid-cols-3 gap-y-4 my-2">
        {project.stack.map((tool) => (
          <p
            key={tool.name}
            className="flex flex-col items-center w-24 min-w-fit"
          >
            <i className={`${tool.icon} text-xl`}></i>
            {tool.name}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-zinc-200 border p-3 rounded-lg border-zinc-300 whitespace-nowrap hover:bg-zinc-300 duration-300 text-zinc-800"
        >
          <i className="fa-brands fa-github mr-2"></i>Inspect Source Code
        </a>
        <a
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-zinc-200 border p-3 rounded-lg border-zinc-300 whitespace-nowrap hover:bg-zinc-300 duration-300 text-zinc-800"
        >
          <i className="fa-solid fa-desktop mr-2"></i>View Live Page
        </a>
      </div>
    </div>
  );
}