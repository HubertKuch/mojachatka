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
                  Odkryj nasze wyróżnione oferty
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
                  nieruchomości
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
                  Nieruchomości w wybranych miejscowościach
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

      <section className="pb40-md pb90">
        <div className="container">
          <div className="accordion-item">
            <h2 className="accordion-header" id="about-mojachatka">
              <button
                className={`accordion-button `}
                type="button"
                onClick={() =>
                  document
                    .querySelector("#collapse-about-mojachatka")
                    .classList.toggle("show")
                }
                aria-controls={`collapseabout-mojachatka`}
              >
                Witaj w świecie nieruchomości, gdzie marzenia o własnym kącie
                stają się rzeczywistością dzięki naszemu innowacyjnemu portalowi
                ogłoszeniowemu.{" "}
              </button>
            </h2>
            <div
              id={`collapse-about-mojachatka`}
              className={`accordion-collapse collapse `}
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  <p>
                    Witaj w świecie nieruchomości, gdzie marzenia o własnym
                    kącie stają się rzeczywistością dzięki naszemu innowacyjnemu
                    portalowi ogłoszeniowemu. Nasza platforma jest niezrównana w
                    zakresie dostępu do szerokiej gamy nieruchomości,
                    obejmującej mieszkania, domy, działki, pokoje, lokale
                    użytkowe i magazyny. Niezależnie od tego, czy szukasz nowego
                    miejsca do życia, czy też chcesz zainwestować w
                    nieruchomość, nasz portal zapewnia Ci wszystko, czego
                    potrzebujesz.
                  </p>{" "}
                  <p>
                    {" "}
                    Nasze ogłoszenia są starannie wyselekcjonowane, aby zapewnić
                    Ci najwyższą jakość i różnorodność. Dzięki intuicyjnej
                    wyszukiwarce możesz łatwo przeglądać oferty dostosowane do
                    Twoich preferencji i potrzeb. Niezależnie od tego, czy
                    interesują Cię apartamenty w centrum miasta, urokliwe domy
                    na przedmieściach, czy też przestronne działki na obrzeżach,
                    znajdziesz je wszystkie na naszym portalu.{" "}
                  </p>
                  <p>
                    Nasze nieruchomości są prezentowane w sposób klarowny i
                    atrakcyjny, z profesjonalnymi zdjęciami i szczegółowymi
                    opisami. Dzięki temu możesz mieć pełne zaufanie do
                    informacji zawartych w naszych ogłoszeniach i dokonać
                    świadomego wyboru. Dodatkowo, nasz portal umożliwia kontakt
                    z właścicielami nieruchomości bezpośrednio przez platformę,
                    co pozwala na szybką i bezproblemową komunikację.{" "}
                  </p>
                  <p>
                    Nieustannie dbamy o aktualizację naszej bazy ofert, aby
                    zapewnić Ci najświeższe ogłoszenia na rynku. Bez względu na
                    to, czy szukasz mieszkania na wynajem, domu na sprzedaż, czy
                    też działki pod inwestycję, nasz portal zawsze będzie
                    pierwszym miejscem, które warto odwiedzić. Ponadto, nasz
                    zespół ekspercki stale monitoruje rynek nieruchomości,
                    dostarczając Ci najnowsze trendy i porady dotyczące zakupu,
                    sprzedaży i wynajmu nieruchomości.{" "}
                  </p>
                  <p>
                    {" "}
                    Dzięki naszemu portalowi ogłoszeniowemu masz dostęp do
                    szerokiej gamy opcji finansowania, które mogą pomóc Ci
                    zrealizować Twoje nieruchomościowe cele. Bez względu na
                    Twoje potrzeby i możliwości finansowe, nasza platforma
                    oferuje rozmaite rozwiązania, które mogą dostosować się do
                    Twojej sytuacji.{" "}
                  </p>
                  <p>
                    Nasza misja polega na zapewnieniu Ci łatwego i wygodnego
                    dostępu do najlepszych nieruchomości na rynku, dlatego też
                    nasz portal jest zoptymalizowany pod kątem użytkownika,
                    zapewniając płynne i intuicyjne doświadczenie przeglądania
                    ofert. Bez względu na to, czy jesteś doświadczonym
                    inwestorem, czy też dopiero rozpoczynasz swoją przygodę z
                    rynkiem nieruchomości, nasz portal jest idealnym miejscem
                    dla Ciebie.{" "}
                  </p>
                  <p>
                    Nieustannie pracujemy nad doskonaleniem naszego portalu, aby
                    zapewnić Ci jeszcze lepsze doświadczenie. Nasz zespół
                    deweloperów stale wprowadza nowe funkcje i usprawnienia,
                    które sprawiają, że korzystanie z naszego portalu jest
                    jeszcze bardziej satysfakcjonujące i efektywne.
                  </p>
                  Nie czekaj dłużej! Dołącz już dziś do naszej społeczności
                  nieruchomościowych entuzjastów i odkryj świat możliwości,
                  który oferuje nasz portal ogłoszeniowy. Bez względu na to, czy
                  szukasz swojego wymarzonego mieszkania, domu czy też działki
                  pod inwestycję, nasz portal zapewni Ci wszystko, czego
                  potrzebujesz, aby osiągnąć swoje cele nieruchomościowe. Z nami
                  Twoje marzenia o własnym kącie stają się rzeczywistością!{" "}
                  <p>
                    Mojachatka to dobry wybór, a jeśli masz wybór to po co
                    przepłacać.{" "}
                  </p>
                  <p>
                    Pragniemy Państwa poinformować iż nasz portal ogłoszeniowy
                    opracowany został przez grono wybitnych specjalistów. Oparty
                    został wyłącznie na krajowym kapitale dzięki czemu możemy
                    utrzymać ceny na optymalnie niskim poziomie. Pragniemy
                    również dodać iż każda sugestia z Państwa strony odnośnie
                    funkcjonowania naszego portalu będzie niezwłocznie
                    przeanalizowana przez naszych techników. Wszelkie uwagi oraz
                    sugestie prosimy kierować na adres e-mail bezpośrednio do
                    naszego zespołu techniczno-prawnego.
                  </p>
                  <p>
                    Najtańszy portal ogłoszeniowy w Polsce z branży
                    nieruchomości. Naszym celem jest niezwykła prostota
                    zamieszczania ogłoszeń. Uważamy że zamieszczanie ogłoszeń
                    powinno być proste, a prostych rzeczy nie powinno się
                    komplikować. Zero ukrytych kosztów. W naszej firmie ceni się
                    uczciwość. Dlatego też gwarantujemy, że żadna opłata nie
                    pozostanie ukryta. Każda cena jest transparentnie
                    przedstawiona, aby każdy zawsze wiedział, na co się
                    decyduje.
                  </p>
                </p>
              </div>
            </div>
          </div>
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
