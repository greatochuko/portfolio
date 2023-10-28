export default function NavLink({ link }) {
  return (
    <li className="flex ">
      <a
        href={link.to}
        className="p-3 text-lg flex flex-col gap-2 items-center duration-200 flex-1 hover:text-zinc-700 text-zinc-400
        "
      >
        <i className={link.icon}></i>
        <p className="hidden md:block">{link.title}</p>
      </a>
    </li>
  );
}
