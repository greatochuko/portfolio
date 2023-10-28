import NavLink from "./NavLink";
const navElements = [
  { icon: "fa-solid fa-house", title: "Home", to: "#" },
  { icon: "fa-solid fa-cube", title: "Projects", to: "/projects/pikxr" },
  { icon: "fa-solid fa-layer-group", title: "Stack", to: "/stack" },
  { icon: "fa-solid fa-envelope", title: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0">
      <nav className=" border-t bg-white border z-10">
        <ul className="flex justify-between max-w-2xl mx-auto px-4 gap-4 ">
          {navElements.map((el, i) => (
            <NavLink link={el} key={i} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
