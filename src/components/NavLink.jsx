import { Link, useLocation } from "react-router-dom";

export default function NavLink({ el }) {
  const { pathname } = useLocation();
  return (
    <li className="flex ">
      <Link
        to={el.to}
        className={`p-4 text-2xl flex gap-2 items-center flex-1 ${
          pathname === el.to ? "text-zinc-700" : "text-zinc-400"
        }`}
      >
        <i className={el.icon}></i>
      </Link>
    </li>
  );
}
