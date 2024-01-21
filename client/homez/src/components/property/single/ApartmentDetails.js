import { useEffect, useState } from "react";
import PropertyDetails from "../property-single-style/common/PropertyDetails";
import chunk from "chunk";
import formatPrice from "@/utilis/price";

function ApartmentDatails({ offer }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (offer) {
      setColumns(
        chunk(
          [
            {
              label: "Cena",
              value: offer.price
                ? formatPrice(offer.price)
                : `${formatPrice(offer.pricePerMonth)} / mo`,
            },
            {
              label: "Piętro",
              value: offer.properties.apartment.floor,
            },
            {
              label: "Dostępny od",
              value: offer.properties.apartment.availableFrom,
            },
            {
              label: "Forma własności",
              value: {
                SHARE: "udział",
                COOPERATIVEPROPRIETARY: "spółdzielcze własnościowe",
                COOPERATIVE: "spółdzielcze wł. z KW",
                FULLOWNERSHIP: "pełna własność",
              }[offer.properties.apartment.propertyForm],
            },
            {
              label: "Meble",
              value: offer?.properties?.apartment?.equipment?.furniture
                ? "Tak"
                : "Nie",
            },
            {
              label: "Pralka",
              value: offer?.properties?.apartment?.equipment?.washingMachine
                ? "Tak"
                : "Nie",
            },
            {
              label: "Zmywarka",
              value: offer?.properties?.apartment?.equipment?.dishwasher
                ? "Tak"
                : "Nie",
            },
            {
              label: "Lodówka",
              value: offer?.properties?.apartment?.equipment?.refrigerator
                ? "Tak"
                : "Nie",
            },
            {
              label: "Piec",
              value: offer?.properties?.apartment?.equipment?.stove
                ? "Tak"
                : "Nie",
            },
            {
              label: "Piekarnik",
              value: offer?.properties?.apartment?.equipment?.oven
                ? "Tak"
                : "Nie",
            },
            {
              label: "Telewizja",
              value: offer?.properties?.apartment?.equipment?.tv
                ? "Tak"
                : "Nie",
            },
            {
              label: "System antywłamaniowy",
              value: offer?.properties?.apartment?.security?.antiBreakingRoles
                ? "Tak"
                : "Nie",
            },
            {
              label: "Monitoring",
              value: offer?.properties?.apartment?.security?.monitoring
                ? "Tak"
                : "Nie",
            },
            {
              label: "System ochrony",
              value: offer?.properties?.apartment?.security?.security
                ? "Tak"
                : "Nie",
            },
            {
              label: "Okna antywłamaniowe",
              value: offer?.properties?.apartment?.security?.antiBurglaryWindows
                ? "Tak"
                : "Nie",
            },
            {
              label: "Drzwi antywłamaniowe",
              value: offer?.properties?.apartment?.security?.antiBurglaryDoors
                ? "Tak"
                : "Nie",
            },
            {
              label: "System alarmowy",
              value: offer?.properties?.apartment?.security?.alarmSystem
                ? "Tak"
                : "Nie",
            },
            {
              label: "Domofon",
              value: offer?.properties?.apartment?.security?.intercom
                ? "Tak"
                : "Nie",
            },
            {
              label: "Wideofon",
              value: offer?.properties?.apartment?.security?.videophone
                ? "Tak"
                : "Nie",
            },
            {
              label: "Ogrodzony teren",
              value: offer?.properties?.apartment?.security?.closedArea
                ? "Tak"
                : "Nie",
            },
            {
              label: "Internet",
              value: offer?.properties?.apartment?.media?.internet
                ? "Tak"
                : "Nie",
            },
            {
              label: "Telewizja kablowa",
              value: offer?.properties?.apartment?.media?.cableTv
                ? "Tak"
                : "Nie",
            },
            {
              label: "Telefon",
              value: offer?.properties?.apartment?.media?.telephone
                ? "Tak"
                : "Nie",
            },
            {
              label: "Woda",
              value: offer?.properties?.apartment?.media?.water ? "Tak" : "Nie",
            },
            {
              label: "Energia elektryczna",
              value: offer?.properties?.apartment?.media?.energy
                ? "Tak"
                : "Nie",
            },
            {
              label: "Gaz",
              value: offer?.properties?.apartment?.media?.gas ? "Tak" : "Nie",
            },
            {
              label: "Kanalizacja",
              value: offer?.properties?.apartment?.media?.sewage
                ? "Tak"
                : "Nie",
            },
            {
              label: "Śmieci",
              value: offer?.properties?.apartment?.media?.severs
                ? "Tak"
                : "Nie",
            },
            {
              label: "Szambo",
              value: offer?.properties?.apartment?.media?.setpticTank
                ? "Tak"
                : "Nie",
            },
            {
              label: "Balkon",
              value: offer?.properties?.apartment?.additionalInfo?.balcony
                ? "Tak"
                : "Nie",
            },
            {
              label: "Piwnica",
              value: offer?.properties?.apartment?.additionalInfo?.basement
                ? "Tak"
                : "Nie",
            },
            {
              label: "Winda",
              value: offer?.properties?.apartment?.additionalInfo?.elevator
                ? "Tak"
                : "Nie",
            },
            {
              label: "Klimatyzacja",
              value: offer?.properties?.apartment?.additionalInfo
                ?.airConditioner
                ? "Tak"
                : "Nie",
            },
            {
              label: "Pomieszczenie gospodarcze",
              value: offer?.properties?.apartment?.additionalInfo?.utilityRoom
                ? "Tak"
                : "Nie",
            },
            {
              label: "Ogród",
              value: offer?.properties?.apartment?.additionalInfo?.garden
                ? "Tak"
                : "Nie",
            },
            {
              label: "Dwa piętra",
              value: offer?.properties?.apartment?.additionalInfo?.twoFloors
                ? "Tak"
                : "Nie",
            },
            {
              label: "Tylko dla niepalących",
              value: offer?.properties?.apartment?.additionalInfo
                ?.onlyForNoSmokers
                ? "Tak"
                : "Nie",
            },
            {
              label: "Garaż",
              value: offer?.properties?.apartment?.additionalInfo?.garage
                ? "Tak"
                : "Nie",
            },
            {
              label: "Miejsce parkingowe",
              value: offer?.properties?.apartment?.additionalInfo?.parking
                ? "Tak"
                : "Nie",
            },
            {
              label: "Taras",
              value: offer?.properties?.apartment?.additionalInfo?.terrace
                ? "Tak"
                : "Nie",
            },
            {
              label: "Oddzielna kuchnia",
              value: offer?.properties?.apartment?.additionalInfo
                ?.separatedKitchen
                ? "Tak"
                : "Nie",
            },
            {
              label: "Stan",
              value: {
                FORRESIDENCE: "do zamieszkania",
                FORFINISHING: "do wykonczenia",
                FORRENOVATION: "do remontu",
              }[offer?.properties?.apartment?.condition],
            },
            {
              label: "Materiał budynku",
              value: {
                BRICK: "Cegła",
                WOOD: "Drewno",
                HOLLOW_BLOCK: "Bloczki komórkowe",
                LARGE_EXPANDED_CLAY: "Duża ekspandowana glina",
                BEON_BOARD: "Deska beonowa",
                SILICATE: "Silikat",
                CELLULAR_CONCRETE: "Beton komórkowy",
                OTHER: "Inny",
              }[offer?.properties?.apartment?.material],
            },
            {
              label: "Liczba pięter",
              value: offer.properties.apartment.floorsNumber,
            },
            {
              label: "Okna",
              value: {
                NONE: "Brak",
                PLASTIC: "Plastikowe",
                WOODEN: "Drewniane",
                ALUMINUM: "Aluminiowe",
              }[offer.properties.apartment.windows],
            },
            {
              label: "Typ zabudowy",
              value: {
                DETACHED: "Wolnostojący",
                "SEMI-DETACHED": "Bliźniak",
                TERRACED: "Szeregowiec",
                TENEMENT: "Kamienica",
                MANOR: "Dwór",
                FARM: "Gospodarstwo",
              }[offer.properties.apartment.developmentType],
            },
          ],
          10,
        ),
      );
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

export default ApartmentDatails;
