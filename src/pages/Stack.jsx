import stack from "../data/stack.json";
import useScrollRefresh from "../hooks/useScrollRefresh";

export default function Stack() {
  useScrollRefresh();

  return (
    <main className=" p-[4vw] max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-700 dark:text-zinc-200 ">
        My Tech Stack
      </h1>
      <section className="my-4">
        <h2 className="mb-3 text-lg font-semibold text-zinc-700 dark:text-zinc-200">
          Programming Languages
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4">
          {stack
            .filter((tool) => tool.category === "programming")
            .map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center gap-2 p-4  bg-zinc-100 dark:bg-zinc-800 rounded-xl aspect-square"
              >
                <img src={tool.imageUrl} alt="" className="w-[50%] mx-auto" />

                <h2 className="font-semibold  text-zinc-700 dark:text-zinc-200">
                  {tool.name}
                </h2>
              </div>
            ))}
        </div>
      </section>
      <section className="my-4">
        <h2 className="mb-3 text-lg font-semibold text-zinc-700 dark:text-zinc-200">
          Databases
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {stack
            .filter((tool) => tool.category === "database")
            .map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center gap-2 p-4  bg-zinc-100 dark:bg-zinc-800 rounded-xl aspect-square"
              >
                <img src={tool.imageUrl} alt="" className="w-[50%] mx-auto" />

                <h2 className="font-semibold  text-zinc-700 dark:text-zinc-200">
                  {tool.name}
                </h2>
              </div>
            ))}
        </div>
      </section>
      <section className="my-4">
        <h2 className="mb-3 text-lg font-semibold text-zinc-700 dark:text-zinc-200">
          Other Tools
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {stack
            .filter((tool) => tool.category === "other")
            .map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center gap-2 p-4  bg-zinc-100 dark:bg-zinc-800 rounded-xl aspect-square"
              >
                <img src={tool.imageUrl} alt="" className="w-[50%] mx-auto" />

                <h2 className="font-semibold  text-zinc-700 dark:text-zinc-200">
                  {tool.name}
                </h2>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
