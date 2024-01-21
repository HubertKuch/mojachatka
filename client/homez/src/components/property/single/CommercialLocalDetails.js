import { useEffect, useState } from "react";
import PropertyDetails from "../property-single-style/common/PropertyDetails";
import chunk from "chunk";

function CommercialLocalDetails({ offer }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (offer && offer.properties.commercialLocal) {
      setColumns(
        chunk(
          [
            {
              label: "Dostępny od",
              value: offer.properties.commercialLocal?.availableFrom,
            },
            {
              label: "Rok budowy",
              value: offer.properties.commercialLocal?.buildYear,
            },
            {
              label: "Piętro",
              value: offer.properties.commercialLocal?.floor,
            },
            {
              label: "Powierzchnia",
              value: offer.properties.commercialLocal?.area
                ? offer.properties.commercialLocal?.area + "m2"
                : "-",
            },
            {
              label: "Na rynku pierwotnym",
              value: offer.properties?.commercialLocal?.primaryMarket,
            },
            {
              label: "Przeznaczenie",
              value: {
                SERVICE: "Usługi",
                OFFICE: "Biurowy",
                CATERING: "Gastronomiczny",
                INDUSTRIAL: "Przemysłowy",
                HOTEL: "Hotel",
                COMMERCIAL: "Handlowy",
              }[offer.properties?.commercialLocal.destiny],
            },
            {
              label: "Dostępny od",
              value: {
                MALL: "Centrum handlowe",
                "OFFICE BUILDING": "Budynek biurowy",
                BLOCK: "Blok",
                TOWNHOUSE: "Dom szeregowy",
                PRIVATEHOUSE: "Dom prywatny",
                HISTORICBUILDING: "Budynek zabytkowy",
                SEPARATEOBJECT: "Oddzielny obiekt",
              }[offer.properties?.commercialLocal?.localLocation],
            },
            {
              label: "Stan",
              value: {
                FORRESIDENCE: "do zamieszkania",
                FORFINISHING: "do wykonczenia",
                FORRENOVATION: "do remontu",
              }[offer.properties.commercialLocal.condition],
            },
            {
              label: "Meble",
              value: offer?.properties?.commercialLocal?.furniture
                ? "Tak"
                : "Nie",
            },
            {
              label: "Pralka",
              value: offer?.properties?.commercialLocal?.washingMachine
                ? "Tak"
                : "Nie",
            },
            {
              label: "Zmywarka",
              value: offer?.properties?.commercialLocal?.dishwasher
                ? "Tak"
                : "Nie",
            },
            {
              label: "Lodówka",
              value: offer?.properties?.commercialLocal?.refrigerator
                ? "Tak"
                : "Nie",
            },
            {
              label: "Piec",
              value: offer?.properties?.commercialLocal?.stove ? "Tak" : "Nie",
            },
            {
              label: "Piekarnik",
              value: offer?.properties?.commercialLocal?.oven ? "Tak" : "Nie",
            },
            {
              label: "Telewizja",
              value: offer?.properties?.commercialLocal?.tv ? "Tak" : "Nie",
            },
            {
              label: "Internet",
              value: offer?.properties?.commercialLocal?.internet
                ? "Tak"
                : "Nie",
            },
            {
              label: "Telewizja kablowa",
              value: offer?.properties?.commercialLocal?.cableTv
                ? "Tak"
                : "Nie",
            },
            {
              label: "Telefon",
              value: offer?.properties?.commercialLocal?.telephone
                ? "Tak"
                : "Nie",
            },
            {
              label: "Woda",
              value: offer?.properties?.commercialLocal?.water ? "Tak" : "Nie",
            },
            {
              label: "Energia elektryczna",
              value: offer?.properties?.commercialLocal?.energy ? "Tak" : "Nie",
            },
            {
              label: "Gaz",
              value: offer?.properties?.commercialLocal?.gas ? "Tak" : "Nie",
            },
            {
              label: "Kanalizacja",
              value: offer?.properties?.commercialLocal?.sewage ? "Tak" : "Nie",
            },
            {
              label: "Śmieci",
              value: offer?.properties?.commercialLocal?.severs ? "Tak" : "Nie",
            },
            {
              label: "Szambo",
              value: offer?.properties?.commercialLocal?.setpticTank
                ? "Tak"
                : "Nie",
            },
          ],
          5,
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

export default CommercialLocalDetails;
