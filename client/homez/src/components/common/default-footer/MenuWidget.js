import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popularne wyszukiwania",
      links: [
        {
          label: "Mieszkania na wynajem",
          href: "/oferty?type=MIESZKANIE&sellType=RENT",
        },
        {
          label: "Mieszkania na sprzedaż",
          href: "/oferty?type=MIESZKANIE&sellType=BUY",
        },
        { label: "Domy na sprzedaż", href: "/oferty?type=DOM&sellType=BUY" },
        {
          label: "Działki na sprzedaż",
          href: "/oferty?type=DZIALKA&sellType=BUY",
        },
      ],
    },
    {
      title: "O Mojejchatce",
      links: [
        { label: "Warunki współpracy", href: "/regulamin" },
        { label: "Polityka prywatności", href: "/regulamin" },
        { label: "Cennik", href: "/cennik" },
        { label: "Najczęściej zadawane pytania", href: "/faq" },
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
