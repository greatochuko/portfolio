import image from "../assets/profile-pic.jpg";

export default function Home() {
  const now = new Date().toLocaleTimeString();
  const hourTime = now.split(" ")[1];
  const dateArr = now.split(":");
  dateArr.splice(dateArr.length - 1, 1);
  const date = `${dateArr.join(":")} ${hourTime}`;

  return (
    <div className="flex flex-col items-center w-screen pb-5">
      <p className="my-8 font-mono text-gray-500">{date}</p>
      <img src={image} alt="" className="w-20 h-20 object-cover rounded-full" />
      <h1 className="text-2xl mt-4 mb-1 text-gray-800">Great Ogheneochuko</h1>
      <h2 className="text-xl mb-3 text-gray-600">Full Stack Developer</h2>
      <p className="text-gray-500 text-[15px] flex items-center">
        <div className="h-2 w-2 bg-green-500 inline-block mr-1 rounded-full animate-ping-slow"></div>
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
    </div>
  );
}
