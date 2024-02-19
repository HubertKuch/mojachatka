export default function Navigation() {
  const links = [
    {
      path: "/",
      label: "Panel",
      icon: "/static/icons/chart.svg",
    },
    {
      path: "/uzytkownicy",
      label: "Uzytkownicy",
      icon: "/static/icons/users.svg",
    },
    { path: "/oferty", label: "Oferty", icon: "/static/icons/house.svg" },
  ];

  return (
    <nav className="block text-neutral-100 p-4 w-2/12 h-full bg-[#111827] relative">
      <div className="p-4">
        <img
          src="/static/images/header-logo.svg"
          className="w-full object-cover"
        />
      </div>
      <div className="mx-auto visited:text-black text-lg">
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li className="bg-[#1f2937] hover:bg-[#3b4d68] transition-all duration-500 pt-2 pb-2 pr-5 pl-5 rounded-md">
              <a className=" flex gap-3 font-medium" href={link.path}>
                <img src={link.icon} className="h-6 w-6 text-lg inline " />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute link link-neutral text-neutral-50 hover:text-neutral-400 bottom-0 p-5">
        <a href="/wylogowanie">Wyloguj sie</a>
      </div>
    </nav>
  );
}
