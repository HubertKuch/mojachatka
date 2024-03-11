export default function PopularCitiesSell({
  title,
  cities,
  sellType,
  regions,
}) {
  function buildLink(city, sellType, type, region) {
    let url = `/oferty?type=${type}&sellType=${sellType === "RENT" ? "RENT" : "BUY"}`;

    if (city) url += `&city=${city}`;
    if (region) url += `&region=${region}`;

    return url;
  }

  function offersForRegionOrCity(city, region) {
    return (
      <div className="col-6 col-sm-4 col-md-3">
        <div style={{ marginBottom: "20px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            height={"24px"}
            width={"24px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span style={{ fontSize: "1rem" }}>
            {city ? city.split(", ")[0] : regions[region]}
          </span>
        </div>

        <div
          style={{ display: "flex", flexFlow: "column", marginBottom: "20px" }}
        >
          <a href={buildLink(city, sellType, "DOM", region)}>
            Domy na {sellType === "RENT" ? "wynajem" : "sprzedaż"}
          </a>
          <a href={buildLink(city, sellType, "MIESZKANIE", region)}>
            Mieszkania na {sellType === "RENT" ? "wynajem" : "sprzedaż"}
          </a>
          <a href={buildLink(city, sellType, "DZIALKA", region)}>
            Działki na {sellType === "RENT" ? "wynajem" : "sprzedaż"}
          </a>
          <a href={buildLink(city, sellType, "GARAZ", region)}>
            Garaże na {sellType === "RENT" ? "wynajem" : "sprzedaż"}
          </a>
          <a href={buildLink(city, sellType, "LOKAL", region)}>
            Lokal użytkowy na {sellType === "RENT" ? "wynajem" : "sprzedaż"}
          </a>
          <a href={buildLink(city, sellType, "MAGAZYN", region)}>
            Magazyn na {sellType === "RENT" ? "wynajem" : "sprzedaż"}
          </a>
          {sellType === "RENT" && (
            <a href={buildLink(city, sellType, "MAGAZYN", region)}>
              Pokoje na {sellType === "RENT" ? "wynajem" : "sprzedaż"}
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: "1.6rem",
          marginBottom: "2rem",
        }}
      >
        {title}
      </div>
      <div className="row" style={{ width: "100%" }}>
        {cities
          ? cities.map((city) => offersForRegionOrCity(city, null))
          : Object.keys(regions).map((region) =>
              offersForRegionOrCity(null, region),
            )}
      </div>
    </div>
  );
}
