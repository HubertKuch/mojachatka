"use client";
import Explore from "@/components/common/Explore";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import ApartmentType from "@/components/home/home-v1/ApartmentType";
import CallToActions from "@/components/common/CallToActions";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import Header from "@/components/home/home-v1/Header";
import PropertiesByCities from "@/components/home/home-v1/PropertiesByCities";
import Hero from "@/components/home/home-v1/hero";
import Image from "next/image";
import Link from "next/link";
import PopulerProperty from "@/components/home/home-v1/PopulerProperty";
import PopularCitiesSell from "@/components/city/PopularCitiesSell";

const Home_V1 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}
      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      {/* Home Banner Style V1 */}
      <section className="home-banner-style1 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}

          <a href="#explore-property">
            <div className="mouse_scroll animate-up-4">
              <Image
                width={20}
                height={105}
                src="/images/about/home-scroll.png"
                alt="scroll image"
              />
            </div>
          </a>
        </div>
      </section>
      {/* End Home Banner Style V1 */}
      {/* Popular Property */}
      <PopulerProperty />
      {/* End  Popular Property */}
      {/* Featured Listings */}
      <section className="podbite">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title text-white">
                  Odkryj nasze wyróżnione nieruchomości
                </h2>
                <p className="paragraph"></p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link
                  rel="nofollow"
                  className="text-white ud-btn2"
                  href="/oferty?boostType=MAIN"
                >
                  Zobacz pozostałe
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Featured Listings */}
      {/* Explore Apartment */}
      <section id="explore-property" className="pb90 pb30-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">Przeglądaj różne rodzaje ogłoszeń</h2>
                <p className="paragraph">Wybieraj sposród wielu kategorii</p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="explore-apartment-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <ApartmentType />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}
      {/* Explore Apartment */}
      <section className=" pb90 pb10-md ">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title">Zobacz jak możemy Ci pomóc</h2>
                <p className="paragraph">
                  Nasza strona ma na celu pomoc przy sprzedaży lub zakupie
                  posiadłości
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Explore />
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}
      {/* Explore property-city */}
      <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h1 className="title">
                  Posiadłości w wybranych miejscowościach
                </h1>
                <p className="paragraph">
                  Przenieś się do wybranej miejscowości za pomocą jednego
                  kliknięcia
                </p>
              </div>
            </div>
            {/* End col-lg-9 */}

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <a className="ud-btn2" href="#">
                  Zobacz wszystkie miasta
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
            {/* End col-lg-3 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative h-100">
                <PropertiesByCities />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      <section className="container pb40-md pb90">
        <p style={{ fontWeight: "bold" }}>Czym są nieruchomości?</p>
        <p>
          Nieruchomości to termin szeroko stosowany, obejmujący różnorodne
          rodzaje mienia, takie jak domy, mieszkania, działki oraz lokale
          użytkowe. W ścisłym kontekście prawnym, nieruchomości to części
          powierzchni ziemi oraz budynki lub ich części trwale związane z
          gruntem, stanowiące osobny przedmiot własności.
        </p>
        <p style={{ fontWeight: "bold" }}>Handel oraz wynajem nieruchomości</p>
        <p>
          Handel nieruchomościami obejmuje zarówno sprzedaż, jak i wynajem
          nieruchomości. Na rynku dostępne są różnorodne oferty, włączając w to
          mieszkania na sprzedaż, domy na sprzedaż oraz lokale użytkowe.
          Dołączają do nich również wszelkiego rodzaju grunty oraz działki które
          również podlegają sprzedaży. Istnieją również możliwości wynajmu
          mieszkań, wynajmu domów oraz wynajmu lokali. Wynajmowane mogą być
          także grunty, jest to tak zwana dzierżawa. Osoby zainteresowane
          zakupem lub wynajmem nieruchomości mogą dokładnie przeanalizować
          oferty z dostępnych agencji nieruchomości lub też deweloperów którzy
          zajmują się profesjonalnie sprzedażą lub wynajmem nieruchomości pod
          względem cen, lokalizacji oraz stanu technicznego i prawnego obiektu.
        </p>
        <p style={{ fontWeight: "bold" }}>Zamieszczanie ogłoszeń </p>
        <p>
          Ogłoszenia nieruchomości (innymi słowy wszelkie oferty nieruchomości)
          stanowią kluczowe narzędzie w procesie handlu nieruchomościami. Osoby
          zamieszczające ogłoszenia swoich posesji mogą konkurować ze sobą o
          lepszą widoczność danego ogłoszenia korzystając z rozmaitych form
          wyróżnień ogłoszeń, są to tak zwane pakiety dotyczące liczby
          zamieszczanych ogłoszeń oraz ich promowań i wyróżnień. Wszelkiego typu
          posesje jako ogłoszenia mogą znajdować się u deweloperów, czy jak
          również w zasobach biur agencji nieruchomości, które nastawione są na
          sprzedaż, czy wynajem posiadłości takich jak domy, grunty, mieszkania,
          biura, magazyny, lokale handlowo-usługowe, garaże itp.{" "}
        </p>
        <p style={{ fontWeight: "bold" }}>Analiza rynku nieruchomości </p>
        <p>
          Na rynku nieruchomości, biura nieruchomości odgrywają kluczową rolę w
          pośrednictwie między sprzedającymi a kupującymi. Dostarczają one
          różnorodne oferty mieszkań, takie jak mieszkania dwupokojowe oraz
          mieszkania trzypokojowe, które cieszą się dużym zainteresowaniem na
          rynku pierwotnym i rynku wtórnym.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Zróżnicowanie ofert biur nieruchomości{" "}
        </p>
        <p>
          Oferta biura nieruchomości obejmuje mieszkania o różnych standardach i
          cenach, aby sprostać zróżnicowanym potrzebom klientów. Mieszkania w
          wysokim standardzie są dostępne dla tych, którzy szukają komfortu i
          luksusu, podczas gdy średnia cena mieszkań przyciąga klientów z
          bardziej ograniczonym budżetem. Biura nieruchomości także oferują
          możliwość wynajmu pokojów dla osób, które preferują elastyczność
          związana z krótkoterminowym mieszkaniem w danej lokalizacji. Dzięki
          szerokiej gamie ofert biura nieruchomości, klienci mają możliwość
          znalezienia idealnej nieruchomości, dopasowanej do ich potrzeb i
          preferencji.{" "}
        </p>
      </section>
      <section className="container categories" style={{ padding: "1rem" }}>
        <PopularCitiesSell
          title={"Ogłoszenia w popularnych miejscowościach na sprzedaż:"}
          cities={[
            "Warszawa, Warszawa, Mazowieckie",
            "Kraków, Kraków, Małopolskie",
            "Poznań, Poznań, Wielkopolskie",
            "Gdańsk, Gdańsk, Pomorskie",
            "Wrocław, Wrocław, Dolnośląskie",
            "Szczecin, Szczecin, Zachodniopomorskie",
            "Łódź, Łódź, Łódzkie",
            "Bydgoszcz, Bydgoszcz, Kujawsko-Pomorskie",
          ]}
          sellType={"BUY"}
        />
      </section>

      <section className="container categories" style={{ padding: "1rem" }}>
        <PopularCitiesSell
          title={"Ogłoszenia w popularnych miejscowościach na wynajem:"}
          cities={[
            "Warszawa, Warszawa, Mazowieckie",
            "Kraków, Kraków, Małopolskie",
            "Poznań, Poznań, Wielkopolskie",
            "Gdańsk, Gdańsk, Pomorskie",
            "Wrocław, Wrocław, Dolnośląskie",
            "Szczecin, Szczecin, Zachodniopomorskie",
            "Łódź, Łódź, Łódzkie",
            "Bydgoszcz, Bydgoszcz, Kujawsko-Pomorskie",
          ]}
          sellType={"RENT"}
        />
      </section>
      <section className="container categories" style={{ padding: "1rem" }}>
        <PopularCitiesSell
          title={"Oferty w wybranych województwach na wynajem:"}
          regions={{
            DOLNOSLASKIE: "Dolnośląskie",
            KUJAWSKOPOMORSKIE: "Kujawsko-Pomorskie",
            LUBELSKIE: "Lubelskie",
            LUBUSKIE: "Lubuskie",
            LODZKIE: "Łódzkie",
            MALOPOLSKIE: "Małopolskie",
            MAZOWIECKIE: "Mazowieckie",
            OPOLSKIE: "Opolskie",
            PODLASKIE: "Podlaskie",
            PODKARPACKIE: "Podkarpackie",
            POMORSKIE: "Pomorskie",
            SLASKIE: "Śląskie",
            SWIETOKRZYSKIE: "Świętokrzyskie",
            WARMINSKOMAZURSKIE: "Warmińsko-Mazurskie",
            WIELKOPOLSKIE: "Wielkopolskie",
            ZACHODNIOPOMORSKIE: "Zachodniopomorskie",
          }}
          sellType={"RENT"}
        />
      </section>

      <section className="container categories" style={{ padding: "1rem" }}>
        <PopularCitiesSell
          title={"Oferty w wybranych województwach na sprzedaż:"}
          regions={{
            DOLNOSLASKIE: "Dolnośląskie",
            KUJAWSKOPOMORSKIE: "Kujawsko-Pomorskie",
            LUBELSKIE: "Lubelskie",
            LUBUSKIE: "Lubuskie",
            LODZKIE: "Łódzkie",
            MALOPOLSKIE: "Małopolskie",
            MAZOWIECKIE: "Mazowieckie",
            OPOLSKIE: "Opolskie",
            PODLASKIE: "Podlaskie",
            PODKARPACKIE: "Podkarpackie",
            POMORSKIE: "Pomorskie",
            SLASKIE: "Śląskie",
            SWIETOKRZYSKIE: "Świętokrzyskie",
            WARMINSKOMAZURSKIE: "Warmińsko-Mazurskie",
            WIELKOPOLSKIE: "Wielkopolskie",
            ZACHODNIOPOMORSKIE: "Zachodniopomorskie",
          }}
          sellType={"BUY"}
        />
      </section>

      <section className="container categories" style={{ padding: "1rem" }}>
        <div style={{ fontWeight: "bold" }}>Kategorie:</div>
        <div>
          {" "}
          <a href="/oferty?type=DOM&sellType=BUY">Domy na sprzedaż</a>
          {" - "}
          <a href="/oferty?type=DOM&sellType=RENT">Domy na wynajem</a>
          {" - "}
          <a href="/oferty?type=MIESZKANIE&sellType=BUY">
            Mieszkania na sprzedaż
          </a>
          {" - "}
          <a href="/oferty?type=MIESZKANIE&sellType=RENT">
            Mieszkania na wynajem
          </a>
          {" - "}
          <a href="/oferty?type=DZIAŁKA&sellType=BUY">
            Działki na sprzedaż
          </a> -{" "}
          <a href="/oferty?type=DZIAŁKA&sellType=RENT">Działki na wynajem</a> -{" "}
          <a href="/oferty?type=GARAŻ&sellType=BUY">Garaże na sprzedaż</a> -{" "}
          <a href="/oferty?type=GARAŻ&sellType=RENT">Garaże na wynajem</a> -{" "}
          <a href="/oferty?type=POKÓJ&sellType=RENT">Pokoje na wynajem</a> -{" "}
          <a href="/oferty?type=LOKAL&sellType=BUY">
            Lokal użytkowy na sprzedaż
          </a>
          {"- "}
          <a href="/oferty?type=MAGAZYN&sellType=BUY">Magazyn na sprzedaż</a>
          {"- "}
          <a href="/oferty?type=MAGAZYN&sellType=RENT">
            Magazyn na wynajem
          </a>{" "}
        </div>
      </section>

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

export default Home_V1;
