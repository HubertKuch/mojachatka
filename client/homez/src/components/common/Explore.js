import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      id: 1,
      icon: "/images/icon/property-buy.svg",
      title: "Kup nieruchomość",
      text: "Odkryj idealny dom dla siebie dzięki naszej zaawansowanej wyszukiwarce nieruchomości. Znajdź miejsce, które spełnia wszystkie Twoje oczekiwania!.",
      linkText: "Znajdź dom",
      link: "/oferty?type=DOM",
    },
    {
      id: 2,
      icon: "/images/icon/property-sell.svg",
      title: "Sprzedaj nieruchomość",
      text: "Pomożemy Ci sprzedać każdą nieruchomości. Już teraz zamieść razem z nami swoje ogłoszenie.",
      linkText: "Zamieść ogłoszenie",
      link: "/dashboard-add-property",
    },
    {
      id: 3,
      icon: "/images/icon/property-rent.svg",
      title: "Wynajmij nieruchomość",
      text: "Z naszą pomocą znajdziesz idealną nieruchomość dla Ciebie w celu wynajmu. Przekonaj się już teraz i sprawdź dostępne oferty.",
      linkText: "Znajdź wynajem",
      link: "/oferty?rentType=RENT",
    },
  ];

  return (
    <>
      {iconboxData.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100} // Increase delay for each item
        >
          <div className="iconbox-style2 text-center">
            <div className="icon">
              <Image width={150} height={150} src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <Link href={item.link} className="ud-btn btn-white2">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
