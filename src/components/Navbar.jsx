import NavLink from "./NavLink";
const navElements = [
  { icon: "fa-solid fa-house", title: "Home", to: "/" },
  { icon: "fa-solid fa-cube", title: "Projects", to: "/work" },
  { icon: "fa-solid fa-layer-group", title: "Stack", to: "/stack" },
  { icon: "fa-solid fa-envelope", title: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bottom-0 absolute w-screen border-t ">
      <ul className="flex justify-between px-4 gap-2 ">
        {navElements.map((el, i) => (
          <NavLink el={el} key={i} />
        ))}
      </ul>
    </nav>
  );
}
