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
  ];

  return (
    <nav className="block text-[#ababab] p-4 w-2/12 h-full bg-[#ffffff] relative">
      <div className="p-4"></div>
      <div className="mx-auto visited:text-black text-lg">
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li className="bg-[#2f3237] hover:bg-[#25282f] transition-all duration-500 pt-2 pb-2 pr-5 pl-5 rounded-md">
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
