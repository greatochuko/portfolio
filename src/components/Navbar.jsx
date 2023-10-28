import NavLink from "./NavLink";
const navElements = [
  { icon: "fa-solid fa-house", title: "Home", to: "/" },
  { icon: "fa-solid fa-cube", title: "Projects", to: "/projects/pikxr" },
  { icon: "fa-solid fa-layer-group", title: "Stack", to: "/stack" },
  { icon: "fa-solid fa-envelope", title: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="bottom-0 fixed">
      <nav className=" w-screen border-t bg-white border z-10">
        <ul className="flex justify-between px-4 gap-2 ">
          {navElements.map((el, i) => (
            <NavLink el={el} key={i} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
