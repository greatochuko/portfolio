import javascriptLogo from "../assets/javascript-logo.png";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import reactLogo from "../assets/react-logo.png";
import nodeLogo from "../assets/node-logo.png";
import expressLogo from "../assets/express-logo.png";
import vscodeLogo from "../assets/vscode-logo.png";
import onenoteLogo from "../assets/onenote-logo.png";
import spotifyLogo from "../assets/spotify-logo.png";
import mongodbLogo from "../assets/mongodb-logo.png";

const stack = [
  {
    name: "JavaScript",
    category: "programming",
    imageUrl: javascriptLogo,
  },
  {
    name: "HTML",
    category: "programming",
    imageUrl: htmlLogo,
  },
  {
    name: "CSS",
    category: "programming",
    imageUrl: cssLogo,
  },
  {
    name: "React",
    category: "programming",
    imageUrl: reactLogo,
  },
  {
    name: "Node JS",
    category: "programming",
    imageUrl: nodeLogo,
  },
  {
    name: "Express JS",
    category: "programming",
    imageUrl: expressLogo,
  },
  {
    name: "Vs Code",
    category: "other",
    imageUrl: vscodeLogo,
  },
  {
    name: "MicroSoft One Note",
    category: "other",
    imageUrl: onenoteLogo,
  },
  {
    name: "Spotify",
    category: "other",
    imageUrl: spotifyLogo,
  },
  {
    name: "Mongo DB",
    category: "database",
    imageUrl: mongodbLogo,
  },
];

export default function Stack() {
  return (
    <main className=" p-[4vw] max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-700">My Tech Stack</h1>
      <section className="my-4">
        <h2 className="mb-3 text-lg text-zinc-700 font-semibold">
          Programming Languages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-3 gap-2">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
    </main>
  );
}
