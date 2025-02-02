import { useEffect, useState } from "react";
import PropertyDetails from "../property-single-style/common/PropertyDetails";
import formatPrice from "@/utilis/price";

function HouseDatails({ offer }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (offer) {
      setColumns([
        [
          {
            label: "Cena",
            value: offer.price
              ? formatPrice(offer.price)
              : `${formatPrice(offer.pricePerMonth)}`,
          },
          {
            label: "Powierzchnia dzialki",
            value: offer.properties.house?.plotArea + "m2",
          },
          {
            label: "Powierzchnia domu",
            value: offer.properties.house?.houseArea + "m2",
          },
          {
            label: "Bathrooms",
            value: offer.properties.house?.rooms?.bathrooms || "Brak danych",
          },
          {
            label: "Bedrooms",
            value: offer.properties.house?.rooms?.bedrooms || "Brak danych",
          },
          {
            label: "Pokoje",
            value: offer.properties?.rooms?.total,
          },
          {
            label: "Typ",
            value: offer?.type?.toLowerCase(),
          },
          {
            label: "Rodzaj",
            value: offer.sellType === "RENT" ? "Wynajem" : "Sprzedaż",
          },
          {
            label: "Rok budowy",
            value: offer.properties.house?.buildYear,
          },
          {
            label: "Typ zabudowy",
            value: {
              DETACHED: "Dom jednorodzinny",
              "SEMI-DETACHED": "Bliźniak",
              TERRACED: "Szeregowiec",
              TENEMENT: "Kamienica",
              MANOR: "Dwór",
              FARM: "Farma",
            }[offer.properties.house?.developmentType],
          },
          {
            label: "Materiał",
            value: {
              BRICK: "Cegła",
              WOOD: "Drewno",
              "HOLLOW BLOCK": "Bloczek komórkowy",
              "LARGE EXPANDED CLAY": "Duży keramzyt",
              "BEON BOARD": "Płyta beonowa",
              SILICATE: "Silikat",
              "CELLULAR CONCRETE": "Beton komórkowy",
              OTHER: "Inny",
            }[offer.properties.house?.material],
          },
        ],
        [
          {
            label: "Ogrodzenie",
            value: {
              BRICK: "Murowane",
              WOODEN: "Drewniane",
              MESH: "Metalowe siatki",
              CONCRETE: "Betonowe",
              METAL: "Metalowe",
              HEDGE: "Żywopłot",
              OTHER: "Inne",
            }[offer.properties.house?.fence],
          },
          {
            value: {
              OIL: "Olejowe",
              FIREPLACE: "Kominkowe",
              COAL: "Węglowe",
              SOLARCOLLECTOR: "kolektor słoneczny",
              ELECTRIC: "elektryczne",
              TILEDSTOVES: "piec kaflowy",
              BIOMASS: "biomasa",
              GEOTHERMAL: "geotermika",
              CITY: "miejskie",
              GAS: "gazowe",
              PUMP: "pompa ciepła",
            }[offer.properties.house?.heating],
            label: "Ogrzewanie",
          },
          {
            value: offer.properties.house?.primaryMarket ? "Tak" : "Nie",
            label: "Rynek pierwotny",
          },
          {
            label: "Okna",
            value: {
              NONE: "Brak",
              PLASTIC: "Plastikowe",
              WOODEN: "Drewniane",
              ALUMINUM: "Aluminiowe",
            }[offer.properties.house?.windows],
          },
          {
            label: "Dach",
            value: {
              NO: "Brak",
              OBLIQUE: "Skosy",
              FLAT: "Płaski",
            }[offer.properties.house?.roof],
          },
          {
            label: "Strych",
            value: {
              NONE: "Brak",
              UTILITARIAN: "Użytkowe",
              NOTUTILITARIAN: "Nie użytkowe",
            }[offer.properties.house?.attic],
          },
          {
            label: "Pokrycie dachu",
            value: {
              SHEETMETAL: "Blacha",
              ROOFTILES: "Dachówki",
              ASBESTOS: "Azbest",
              SHINGLES: "Gonty bitumiczne",
              SLATE: "Łupek",
              ROOFINGFELT: "Papa",
              THATCH: "Strzecha",
              OTHER: "Inne",
            }[offer.properties.house?.roofing],
          },
          {
            label: "Lokalizacja",
            value: {
              CITY: "Miasto",
              OUTSKIRTS: "Przedmieścia",
              COUNTRYSIDE: "Wieś",
            }[offer.properties.house?.location],
          },
          {
            label: "Dostępny od",
            value: offer.properties.house?.availableFrom,
          },
          {
            value: {
              FIELD: "Bez utwardzenia",
              PAVED: "Utylizowana",
              ASPHALT: "Asfaltowa",
            }[offer.properties.house?.roadAcces],
            label: "Dostęp do drogi",
          },
        ],
        [
          {
            label: "System antywłamaniowy",
            value: offer.properties.house.security?.antiBreakingRoles
              ? "Tak"
              : "Nie",
          },
          {
            value: offer.properties.house.security?.monitoring ? "Tak" : "Nie",
            label: "Monitoring",
          },
          {
            value: offer.properties.house.security?.security ? "Tak" : "Nie",
            label: "System ochrony",
          },
          {
            value: offer.properties.house.security?.antiBurglaryWindows
              ? "Tak"
              : "Nie",
            label: "Okna antywłamaniowe",
          },
          {
            value: offer.properties.house.security?.antiBurglaryDoors
              ? "Tak"
              : "Nie",
            label: "Drzwi antywłamaniowe",
          },
          {
            value: offer.properties.house.security?.alarmSystem ? "Tak" : "Nie",
            label: "System alarmowy",
          },
          {
            value: offer.properties.house.security?.intercom ? "Tak" : "Nie",
            label: "Domofon",
          },
          {
            value: offer.properties.house.security?.videophone ? "Tak" : "Nie",
            label: "Wideofon",
          },
          {
            value: offer.properties.house.security?.closedArea ? "Tak" : "Nie",
            label: "Ogrodzony teren",
          },
        ],
        [
          {
            label: "Internet",
            value: offer?.properties?.house?.media?.internet ? "Tak" : "Nie",
          },
          {
            label: "Telewizja kablowa",
            value: offer?.properties?.house?.media?.cableTv ? "Tak" : "Nie",
          },
          {
            label: "Telefon",
            value: offer?.properties?.house?.media?.telephone ? "Tak" : "Nie",
          },
          {
            label: "Woda",
            value: offer?.properties?.house?.media?.water ? "Tak" : "Nie",
          },
          {
            label: "Energia elektryczna",
            value: offer?.properties?.house?.media?.energy ? "Tak" : "Nie",
          },
          {
            label: "Gaz",
            value: offer?.properties?.house?.media?.gas ? "Tak" : "Nie",
          },
          {
            label: "Kanalizacja",
            value: offer?.properties?.house?.media?.sewage ? "Tak" : "Nie",
          },
          {
            label: "Śmieci",
            value: offer?.properties?.house?.media?.severs ? "Tak" : "Nie",
          },
          {
            label: "Szambo",
            value: offer?.properties?.house?.media?.setpticTank ? "Tak" : "Nie",
          },
        ],
        [
          {
            label: "Piwnica",
            value: offer?.properties?.house?.additionalInfo?.basement
              ? "Tak"
              : "Nie",
          },
          {
            label: "Basen",
            value: offer?.properties?.house?.additionalInfo?.pool
              ? "Tak"
              : "Nie",
          },
          {
            label: "Strych",
            value: offer?.properties?.house?.additionalInfo?.attic
              ? "Tak"
              : "Nie",
          },
          {
            label: "Klimatyzacja",
            value: offer?.properties?.house?.additionalInfo?.airConditioner
              ? "Tak"
              : "Nie",
          },
          {
            label: "Garaż",
            value: offer?.properties?.house?.additionalInfo?.garage
              ? "Tak"
              : "Nie",
          },
        ],
      ]);
    }
  }, [offer]);

  return (
    <>
      <h4 className="title fz17 mb30 mt50">Dodatkowe informacje</h4>
      <div className="row">
        <PropertyDetails columns={columns} />
      </div>
    </>
  );
}

export default HouseDatails;
