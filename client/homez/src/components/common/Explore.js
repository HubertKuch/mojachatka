import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      id: 1,
      icon: "/images/icon/property-buy.svg",
      title: "Znajdź nieruchomość",
      text: "Odkryj swoją idealną nieruchomość. Przeglądaj ogłoszenia, które zawierają domy, mieszkania, działki, lokale użytkowe i więcej. Znajdź miejsce, które spełnia wszystkie Twoje oczekiwania!",
      linkText: "Znajdź nieruchomość",
      link: "/kategorie",
    },
    {
      id: 2,
      icon: "/images/icon/property-sell.svg",
      title: "Sprzedaj nieruchomość",
      text: "Pomożemy Ci sprzedać każdą nieruchomość. Już teraz zamieść razem z nami swoje ogłoszenie dotyczące sprzedaży domu, mieszkania, działki lub lokalu użytkowego.",
      linkText: "Zamieść ogłoszenie",
      link: "/dashboard-add-property",
    },
    {
      id: 3,
      icon: "/images/icon/property-rent.svg",
      title: "Wynajmij nieruchomość",
      text: "Z naszą pomocą znajdziesz idealną nieruchomość dla Ciebie w celu wynajmu. Przekonaj się już teraz i sprawdź dostępne oferty spośród domów, mieszkań, działek i innych.",
      linkText: "Znajdź nieruchomość na wynajem",
      link: "/oferty?sellType=RENT",
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
