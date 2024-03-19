import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="footer-widget mb-4 mb-lg-5">
              <Link className="footer-logo" href="/">
                <Image
                  width={138}
                  height={44}
                  className="mb40"
                  src="/images/header-logo.svg"
                  alt=""
                />
              </Link>
              <ContactMeta />
            </div>
          </div>
          {/* End .col-lg-5 */}

          <div className="col-lg-7">
            <div className="footer-widget mb-4 mb-lg-5">
              <Subscribe />
              <div className="row justify-content-between">
                <MenuWidget />
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <div className="container" style={{ color: "#bebdbd", opacity: "40%" }}>
        Moja chatka - Najtańszy portal ogłoszeniowy. Nieruchomości, sprzedaż,
        kupno, wynajem. Mieszkania, domy, działki i więcej.
      </div>
      <div style={{ display: "none" }}>
        <a href="https://mojachatka.pl/sprzedaz" rel="canonical">
          Nieruchomości na sprzedaż
        </a>
        <a href="https://mojachatka.pl/wynajem" rel="canonical">
          Nieruchomości na wynajem
        </a>
        <a href="https://mojachatka.pl/dom-sprzedaz" rel="canonical">
          Domy na sprzedaż
        </a>
        <a href="https://mojachatka.pl/mieszkanie-sprzedaz" rel="canonical">
          Mieszkania na sprzedaż
        </a>
        <a href="https://mojachatka.pl/dzialka-sprzedaz" rel="canonical">
          Działki na sprzedaż
        </a>
        <a href="https://mojachatka.pl/lokal-uzytkowy-sprzedaz" rel="canonical">
          Lokale użytkowe na sprzedaż
        </a>
        <a href="https://mojachatka.pl/garaz-sprzedaz" rel="canonical">
          Garaże na sprzedaż
        </a>
        <a href="https://mojachatka.pl/magazyn-sprzedaz" rel="canonical">
          Magazyny na sprzedaż
        </a>
        <a href="https://mojachatka.pl/dom-wynajem" rel="canonical">
          Domy na wynajem
        </a>
        <a href="https://mojachatka.pl/mieszkanie-wynajem" rel="canonical">
          Mieszkania na wynajem
        </a>
        <a href="https://mojachatka.pl/dzialka-wynajem" rel="canonical">
          Działki na wynajem
        </a>
        <a href="https://mojachatka.pl/garaz-wynajem" rel="canonical">
          Garaże na wynajem
        </a>
        <a href="https://mojachatka.pl/pokoj-wynajem" rel="canonical">
          Pokoje na wynajem
        </a>
        <a href="https://mojachatka.pl/lokal-uzytkowy-wynajem" rel="canonical">
          Lokale użytkowe na wynajem
        </a>
        <a href="https://mojachatka.pl/magazyn-wynajem" rel="canonical">
          Magazyny na wynajem
        </a>
      </div>
      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;
