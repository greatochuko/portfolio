import profilePic from "../assets/profile-pic.jpg";
import resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";
import Project from "../components/Project";
import projects from "../data/projects.json";

export default function Home() {
  const now = new Date().toLocaleTimeString();
  const hourTime = now.split(" ")[1];
  const dateArr = now.split(":");
  dateArr.splice(dateArr.length - 1, 1);
  const date = `${dateArr.join(":")} ${hourTime}`;

  return (
    <div className="flex flex-col items-center h-fit max-w-xl mx-auto p-4 ">
      <p className="my-8 font-mono text-zinc-500 dark:text-zinc-200">{date}</p>
      <img
        src={profilePic}
        alt=""
        className="w-20 h-20 object-cover rounded-full"
      />
      <h1 className="text-2xl mt-4 mb-1 text-zinc-800 dark:text-zinc-200">
        Great Ogheneochuko
      </h1>
      <h2 className="text-xl mb-3 text-zinc-600 dark:text-zinc-200">
        Full Stack Developer
      </h2>
      <p className="text-zinc-500 text-[15px] flex items-center dark:text-zinc-200">
        <span className="h-2 w-2 bg-green-500 inline-block mr-1 rounded-full animate-ping-slow"></span>
        Available for new opportunities
      </p>
      <div className="flex gap-4 my-4 text-xl text-zinc-500 dark:text-zinc-300">
        <a
          href="https://twitter.com/greatochuko123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-800 duration-150 p-2 dark:hover:text-white"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          href="https://github.com/greatochuko"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-800 duration-150 p-2 dark:hover:text-white"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/greatochuko123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-800 duration-150 p-2 dark:hover:text-white"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="flex gap-3 items-center text-zinc-700 dark:text-zinc-200">
        <Link
          to={"tel:+2347048078103"}
          className="border border-zinc-200 px-10 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-600"
        >
          Call me <i className="fa-solid fa-phone-flip"></i>
        </Link>
        or
        <Link
          to={"mailto:greatochuko123@gmail.com"}
          className="border border-zinc-200 px-10 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-600"
        >
          Email me <i className="fa-regular fa-envelope"></i>
        </Link>
      </div>
      <a
        download
        href={resume}
        className="mt-4 border border-zinc-200 px-4 py-2 rounded-lg bg-zinc-100 dark:text-zinc-200 dark:bg-zinc-800 dark:border-zinc-600"
      >
        Download my Resume <i className="fa-solid fa-file-arrow-down"></i>
      </a>
      <section className="flex flex-col gap-2 text-zinc-700 text-[15px] font-normal my-2 dark:text-zinc-200">
        <h3 className="text-center mb-2 mt-5 font-bold">About</h3>
        <div className="flex flex-col gap-4">
          <p>
            I&apos;m Great Ogheneochuko, a full-stack developer based in
            Nigeria.
          </p>
          <p>
            I am a dynamic full-stack software developer with a year of
            experience and a solid foundation in React, Express.js, Node.js,
            MogoDB, and Redux.
          </p>
          <p>
            I have crafted impressive full-stack projects that demonstrate my
            capabilities. My passion lies in creating seamless, user-friendly
            experiences and overcoming the challenges of complex web
            applications.
          </p>
        </div>
      </section>
      <section className="my-2">
        <h3 className="text-center mb-2 mt-5 font-bold text-zinc-700 dark:text-zinc-200">
          Projects
        </h3>
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </section>
    </div>
  );
}
