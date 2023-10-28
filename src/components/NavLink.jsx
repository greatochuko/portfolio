import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ link }) {
  const [hoverStyles, setHoverStyles] = useState("opacity-0");
  const { pathname } = useLocation();
  return (
    <li
      className="flex relative"
      id={link.title}
      onMouseEnter={() => setHoverStyles("opacity-100")}
      onMouseLeave={() => setHoverStyles("opacity-0")}
    >
      <Link
        to={link.to}
        className={`p-4 text-2xl flex gap-2 items-center flex-1 ${
          pathname === link.to ? "text-zinc-700" : "text-zinc-400"
        }`}
      >
        <i className={link.icon}></i>
        <p
          htmlFor={link.title}
          className={`absolute whitespace-nowrap text-base text-zinc-700 left-12 top-[50%] translate-y-[-50%] bg-neutral-200 py-1 px-3 duration-300 hidden lg:block rounded-lg ${hoverStyles}`}
        >
          {link.title}
        </p>
      </Link>
    </li>
  );
}
