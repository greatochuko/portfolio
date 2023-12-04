import NavLink from "./NavLink";
const navElements = [
  { icon: "fa-solid fa-house", title: "Home", to: "/" },
  { icon: "fa-solid fa-cube", title: "Project Details", to: "/projects/pikxr" },
  { icon: "fa-solid fa-layer-group", title: "Stack", to: "/stack" },
  { icon: "fa-solid fa-envelope", title: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed bottom-0 z-10 lg:left-0">
      <nav className="z-10 w-screen bg-white border border-t dark:bg-zinc-900 dark:border-zinc-800 lg:w-fit lg:h-screen">
        <ul className="flex justify-between h-full max-w-xl gap-2 px-4 mx-auto lg:flex-col lg:justify-center">
          {navElements.map((link, i) => (
            <NavLink link={link} key={i} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
