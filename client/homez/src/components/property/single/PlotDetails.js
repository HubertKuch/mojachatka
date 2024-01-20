import { useEffect, useState } from "react";
import PropertyDetails from "../property-single-style/common/PropertyDetails";
import chunk from "chunk";

function PlotDetails({ offer }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (offer) {
      setColumns(
        chunk(
          [
            {
              label: "Dostępny od",
              value: offer.properties.plot.availableFrom,
            },
            {
              label: "Otoczenie",
              value: {
                FOREST: "Las",
                SEA: "Morze",
                LAKE: "Jezioro",
                MOUNTAINS: "Góry",
                OPEN_AREA: "Otwarta przestrzeń",
              }[offer.properties.plot.surroundings],
            },
            {
              label: "Internet",
              value: offer?.properties?.plot?.media?.internet ? "Tak" : "Nie",
            },
            {
              label: "Telewizja kablowa",
              value: offer?.properties?.plot?.media?.cableTv ? "Tak" : "Nie",
            },
            {
              label: "Telefon",
              value: offer?.properties?.plot?.media?.telephone ? "Tak" : "Nie",
            },
            {
              label: "Woda",
              value: offer?.properties?.plot?.media?.water ? "Tak" : "Nie",
            },
            {
              label: "Energia elektryczna",
              value: offer?.properties?.plot?.media?.energy ? "Tak" : "Nie",
            },
            {
              label: "Gaz",
              value: offer?.properties?.plot?.media?.gas ? "Tak" : "Nie",
            },
            {
              label: "Kanalizacja",
              value: offer?.properties?.plot?.media?.sewage ? "Tak" : "Nie",
            },
            {
              label: "Śmieci",
              value: offer?.properties?.plot?.media?.severs ? "Tak" : "Nie",
            },
            {
              label: "Szambo",
              value: offer?.properties?.plot?.media?.setpticTank
                ? "Tak"
                : "Nie",
            },
            {
              label: "Lokalizacja",
              value: {
                CITY: "Miasto",
                OUTSKIRTS: "Przedmieścia",
                CONTRYSIDE: "Wieś",
              }[offer?.properties?.plot?.location],
            },
            {
              label: "Dostęp do drogi",
              value: {
                FIELD: "Polna",
                PAVED: "Brukowana",
                ASPHALT: "Asfaltowa",
              }[offer?.properties?.plot?.roadAccess],
            },
            {
              label: "Ogrodzenie",
              value: {
                NONE: "Brak",
                BRICK: "Murowane",
                WOODEN: "Drewniane",
                MESH: "Metalowe siatki",
                CONCRETE: "Betonowe",
                METAL: "Metalowe",
                HEDGE: "Żywopłot",
                OTHER: "Inne",
              }[offer?.properties?.plot?.fence],
            },
            {
              label: "Dostępny od",
              value: offer.properties.plot.availableFrom,
            },
            {
              label: "Rodzaj",
              value: {
                CONSTRUCTION: "Budowlana",
                AGRICULTURAL: "Rolna",
                RECREATIONAL: "Rekreacyjna",
                SUBINVESTMENTS: "Pod inwestycje",
                FOREST: "Leśna",
                AGRO_CONSTRUCTION: "Rolno-budowlana",
                HABITAT: "Siedliskowa",
                OTHER: "Inna",
              }[offer.properties.plot.type],
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

export default PlotDetails;
