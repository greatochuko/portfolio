import profilePic from "../assets/profile-pic.jpg";
import pikxrImage from "../assets/pikxr-home.png";
import { Link } from "react-router-dom";

export default function Home() {
  const now = new Date().toLocaleTimeString();
  const hourTime = now.split(" ")[1];
  const dateArr = now.split(":");
  dateArr.splice(dateArr.length - 1, 1);
  const date = `${dateArr.join(":")} ${hourTime}`;

  return (
    <div className="flex flex-col items-center h-fit max-w-2xl mx-auto p-4">
      <p className="my-8 font-mono text-gray-500">{date}</p>
      <img
        src={profilePic}
        alt=""
        className="w-20 h-20 object-cover rounded-full"
      />
      <h1 className="text-2xl mt-4 mb-1 text-gray-800">Great Ogheneochuko</h1>
      <h2 className="text-xl mb-3 text-gray-600">Full Stack Developer</h2>
      <p className="text-gray-500 text-[15px] flex items-center">
        <span className="h-2 w-2 bg-green-500 inline-block mr-1 rounded-full animate-ping-slow"></span>
        Available for new opportunities
      </p>
      <div className="flex gap-4 my-4 text-xl text-gray-500">
        <a
          href="http://twitter.com/greatochuko123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          href="http://github.com/greatochuko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="http://linkedin.com/in/greatochuko123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="flex gap-3 items-center text-gray-700">
        <button className="border border-gray-200 px-4 py-2 rounded-lg bg-gray-100">
          Contact me <i className="fa-regular fa-envelope"></i>
        </button>
        or
        <button className="border border-gray-200 px-4 py-2 rounded-lg bg-gray-100">
          Copy email <i className="fa-regular fa-clone"></i>
        </button>
      </div>
      <section className="flex flex-col gap-2 text-gray-700 text-[15px] font-normal my-2">
        <h3 className="text-center mb-2 mt-5 font-bold">About</h3>
        <div className="flex flex-col gap-4">
          <p>
            I&apos;m Great Ogheneochuko, a full-stack developer based in
            Nigeria.
          </p>
          <p>
            With 3 years of experience in the field, I bring a unique blend of
            expertise to the table. With a solid foundation in React, Express,
            Node, MogoDB, and Python.
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
        <h3 className="text-center mb-2 mt-5 font-bold text-gray-700">
          Projects
        </h3>
        <Link>
          <div className="p-4 bg-gray-100  rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <h4 className="text-gray-800 mb-3">
              <i className="fa-solid fa-cube mr-2 text-gray-600"></i>Pikxr -
              Social Media Website
            </h4>
            <div className="overflow-hidden rounded-lg">
              <img src={pikxrImage} alt="" />
            </div>
          </div>
        </Link>
      </section>
      <Link
        to={"/projects"}
        className="text-center bg-gray-200 hover:bg-gray-300 duration-300 w-full p-2 m-4 rounded-xl border border-gray-300  text-gray-600 hover:text-gray-800"
      >
        View all <i className="fa-solid fa-arrow-right-long"></i>
      </Link>
    </div>
  );
}
