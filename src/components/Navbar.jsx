import NavLink from "./NavLink";
const navElements = [
  { icon: "fa-solid fa-house", title: "Home", to: "/" },
  { icon: "fa-solid fa-cube", title: "Projects View", to: "/projects/pikxr" },
  { icon: "fa-solid fa-layer-group", title: "Stack", to: "/stack" },
  { icon: "fa-solid fa-envelope", title: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="bottom-0 fixed lg:left-0 z-10">
      <nav className=" w-screen border-t bg-white dark:bg-zinc-900 dark:border-zinc-800 border z-10 lg:w-fit lg:h-screen">
        <ul className="flex max-w-xl mx-auto justify-between px-4 gap-2 lg:flex-col lg:justify-center h-full">
          {navElements.map((link, i) => (
            <NavLink link={link} key={i} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
