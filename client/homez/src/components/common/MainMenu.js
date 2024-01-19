import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });
    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("blog");
      }
    });
    pageItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("pages");
      }
    });
    propertyItems.forEach((item) =>
      item.subMenuItems.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("property");
          setSubmenu(item.label);
        }
      }),
    );
    listingItems.forEach((item) =>
      item.submenu.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("listing");
          setSubmenu(item.title);
        }
      }),
    );
  }, [pathname]);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname.split("/")[1]) {
      return "menuActive";
    }
  };
  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <a className="list-item" href="/">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Strona główna
          </span>
          <span className=""></span>
        </a>
        {/* Level Two*/}
      </li>
      {/* End homeItems */}

      <li className="megamenu_style dropitem">
        <a className="list-item" href="/cennik">
          <span className={topMenu == "listing" ? "title menuActive" : "title"}>
            Cennik
          </span>
          <span className=""></span>
        </a>
      </li>
      {/* End listings */}

      <li className="visible_list dropitem">
        <a className="list-item" href="/about">
          <span
            className={topMenu == "property" ? "title menuActive" : "title"}
          >
            O nas
          </span>
          <span className=""></span>
        </a>
      </li>
      {/* End property Items */}

      {/* End blog Items */}

      <li className="visible_list dropitem">
        <a className="list-item" href="/faq">
          <span className={topMenu == "pages" ? "title menuActive" : "title"}>
            Faq
          </span>
          <span className=""></span>
        </a>
      </li>
      {/* End pages Items */}
    </ul>
  );
};

export default MainMenu;
