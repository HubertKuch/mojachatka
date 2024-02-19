import { BeakerIcon } from "@heroicons/react/24/solid";

export default function Navigation() {
  const links = [
    {
      path: "/",
      label: "Panel",
      icon: "/static/icons/users.svg",
    },
    { path: "/", label: "Uzytkownicy", icon: "/static/icons/users.svg" },
    { path: "/", label: "Oferty", icon: "/static/icons/users.svg" },
  ];

  return (
    <nav className="block text-neutral-100 p-4 w-2/12 h-full bg-[#111827]">
      <div className="p-3 ">
        <p className="text-xl ">
          <span className="text-main">Moja chatka</span> - panel
        </p>
      </div>
      <div className="mx-auto visited:text-black p-5 text-lg">
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li>
              <a className="hover:text-neutral-300" href={link.path}>
                <img src={link.icon} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
