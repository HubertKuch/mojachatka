import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popularne wyszukiwania",
      links: [
        { label: "Mieszkania na wynajem", href: "#" },
        { label: "Mieszkania na sprzedaż", href: "#" },
        { label: "Domy na sprzedaż", href: "#" },
        { label: "Działki na sprzedaż", href: "#" },
      ],
    },
    {
      title: "O Mojejchatce",
      links: [
        { label: "Warunki współpracy", href: "#" },
        { label: "Polityka prywatności", href: "#" },
        { label: "Cennik", href: "#" },
        /*{ label: "Careers", href: "#" }, */
        { label: "Najczęściej zadawane pytania", href: "#" },
      ],
    },
    {
      title: "Odkrywaj",
      links: [
        { label: "Warszawa", href: "#" },
        { label: "Kraków", href: "#" },
        { label: "Poznań", href: "#" },
        { label: "Gdańsk", href: "#" },
        { label: "Wrocław", href: "#" },
        { label: "Szczecin", href: "#" },
        { label: "Łódź", href: "#" },
        { label: "Bydgoszcz", href: "#" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
