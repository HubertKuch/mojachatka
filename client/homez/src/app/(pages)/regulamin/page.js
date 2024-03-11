"use client";

import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";

const { default: Footer } = require("@/components/common/default-footer");

const Regulamin = () => {
  return (
    <>
      <DefaultHeader />

      <MobileMenu />

      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Regulamin</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <p style={{ cursor: "pointer" }}>
              <a
                href="/01._Regulamin_serwisu_-_www.mojachatka.pl.docx"
                download
              >
                Regulamin serwisu
              </a>
            </p>{" "}
            <p style={{ cursor: "pointer" }}>
              <a
                href="/02._Regulamin_dla_Ogoszeniodawcy_-_www.mojachatka.pl_-_v.1.0..pdf"
                download
              >
                Regulamin dla Ogłoszeniodawcy
              </a>
            </p>
            <p style={{ cursor: "pointer" }}>
              <a
                href="/03._Formularz_reklamacji_usugi_-_www.mojachatka.pl.pdf"
                download
              >
                Formularz reklamacji usługi
              </a>
            </p>
            <p style={{ cursor: "pointer" }}>
              <a
                href="/04._Formularz_odstapienia_od_umowy_swiadczenia_usug_-_www.mojachatka.pl.pdf"
                download
              >
                Formularz odstąpienia od umowy świadczenia usług
              </a>
            </p>
            <p style={{ cursor: "pointer" }}>
              <a
                href="/05._Pouczenie_o_odstapieniu_od_umowy_swiadczenia_usug_-_www.mojachatka.pl.pdf"
                download
              >
                Pouczenie o odstąpieniu od umowy
              </a>
            </p>
            <p style={{ cursor: "pointer" }}>
              <a
                href="/06._Polityka_prywatnosci_i_plikow_cookies_-_www.mojachatka.pl.pdf"
                download
              >
                Polityka prywatności i plików cookies
              </a>
            </p>
            <p style={{ cursor: "pointer" }}>
              <a
                href="/07._Lista_dostawcow_do_polityki_prywatnosci_-_www.mojachatka.pl.pdf"
                download
              >
                Lista dostawców do polityki prywatności
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Regulamin;
