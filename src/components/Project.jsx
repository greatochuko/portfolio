import { useState } from "react";
import { Link } from "react-router-dom";

export default function Project({ project }) {
  const [loading, setLoading] = useState(true);

  return (
    <Link
      to={`/projects/${project.url}`}
      className="group flex flex-col my-4 gap-2 border p-2 rounded-lg border-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800 duration-500 hover:bg-zinc-100"
    >
      <h2 className="text-md font-[500] text-zinc-700 dark:text-zinc-200">
        {project.name}
      </h2>
      <div
        className={`relative overflow-hidden rounded-md${
          loading ? "sm:min-h-[350px] min-h-[200px]" : ""
        }`}
      >
        <img
          src={project.imgSrc}
          alt=""
          onLoad={() => setLoading(false)}
          className={`duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          } group-hover:scale-105 duration-500 `}
        />
        {loading ? (
          <div className="w-full h-full top-0 absolute rounded-md animate-pulse  bg-neutral-500"></div>
        ) : null}
      </div>
    </Link>
  );
}
