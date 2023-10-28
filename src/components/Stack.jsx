import stack from "../data/stack.json";

export default function Stack() {
  return (
    <section className="flex flex-col gap-2 text-zinc-700 text-[15px] font-normal my-2">
      <h3 className="text-center mb-2 mt-5 font-bold text-xl">Tech Stack</h3>
      <section className="my-4">
        <h2 className="mb-3 text-lg text-zinc-700 font-semibold">
          Programming Languages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {stack
            .filter((tool) => tool.category === "programming")
            .map((tool) => (
              <div
                key={tool.name}
                className=" bg-zinc-100 rounded-xl aspect-square p-4 flex flex-col gap-2 items-center justify-center"
              >
                <img src={tool.imageUrl} alt="" className="w-[50%] mx-auto" />

                <h2 className=" text-zinc-700 font-semibold">{tool.name}</h2>
              </div>
            ))}
        </div>
      </section>
      <section className="my-4">
        <h2 className="mb-3 text-lg text-zinc-700 font-semibold">Databases</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {stack
            .filter((tool) => tool.category === "database")
            .map((tool) => (
              <div
                key={tool.name}
                className=" bg-zinc-100 rounded-xl aspect-square p-4 flex flex-col gap-2 items-center justify-center"
              >
                <img src={tool.imageUrl} alt="" className="w-[50%] mx-auto" />

                <h2 className=" text-zinc-700 font-semibold">{tool.name}</h2>
              </div>
            ))}
        </div>
      </section>

      <section className="my-4">
        <h2 className="mb-3 text-lg text-zinc-700 font-semibold">
          Other Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {stack
            .filter((tool) => tool.category === "other")
            .map((tool) => (
              <div
                key={tool.name}
                className=" bg-zinc-100 rounded-xl aspect-square p-4 flex flex-col gap-2 items-center justify-center"
              >
                <img src={tool.imageUrl} alt="" className="w-[50%] mx-auto" />

                <h2 className=" text-zinc-700 font-semibold">{tool.name}</h2>
              </div>
            ))}
        </div>
      </section>
    </section>
  );
}
