import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/pages/about/Agents";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Mission from "@/components/pages/about/Mission";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mojachatka: Nieruchomości, Domy, Mieszkania, Działki",
};

const About = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Poznaj nas</h2>
                <div className="breadcumb-list">
                  <a href="#">Strona główna</a>
                  <a href="#">O nas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2>
                Mojachatka to dobry wybór, <br className="d-none d-lg-block" />{" "}
                a jeśli masz wybór to po co przepłacać.
              </h2>
              <div>
                <p className="text mb25">
                  Pragniemy Państwa poinformować iż nasz portal ogłoszeniowy
                  opracowany został przez grono wybitnych specjalistów. Oparty
                  został wyłącznie na krajowym kapitale dzięki czemu możemy
                  utrzymać ceny na optymalnie niskim poziomie. Pragniemy również
                  dodać iż każda sugestia z Państwa strony odnośnie
                  funkcjonowania naszego portalu będzie niezwłocznie
                  przeanalizowana przez naszych techników. Wszelkie uwagi oraz
                  sugestie prosimy kierować na adres e-mail bezpośrednio do
                  naszego zespołu techniczno-prawnego.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">
                Najtańszy portal ogłoszeniowy w Polsce z branży nieruchomości.
                Naszym celem jest niezwykła prostota zamieszczania ogłoszeń.
                Uważamy że zamieszczanie ogłoszeń powinno być proste, a prostych
                rzeczy nie powinno się komplikować.
              </p>
              <p className="text mb55">
                Zero ukrytych kosztów. W naszej firmie ceni się uczciwość.
                Dlatego też gwarantujemy, że żadna opłata nie pozostanie ukryta.
                Każda cena jest transparentnie przedstawiona, aby każdy zawsze
                wiedział, na co się decyduje.
              </p>
              <div className="row">
                <Mission />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default About;
