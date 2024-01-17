import { useEffect, useState } from "react";
import PropertyDetails from "../property-single-style/common/PropertyDetails";
import chunk from "chunk";

function RoomDetails({ offer }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (offer) {
      setColumns(
        chunk(
          [
            {
              label: "Dostępny od",
              value: offer.properties.room.availableFrom,
            },
            {
              label: "Internet",
              value: offer?.properties?.room?.media?.internet ? "Tak" : "Nie",
            },
            {
              label: "Telewizja kablowa",
              value: offer?.properties?.room?.media?.cableTv ? "Tak" : "Nie",
            },
            {
              label: "Telefon",
              value: offer?.properties?.room?.media?.telephone ? "Tak" : "Nie",
            },

            {
              label: "Wielkosc w metrach kwadratowych",
              value: offer?.properties?.room.sizeInMeters,
            },
            {
              label: "Tylko dla nie palących",
              value: offer?.properties?.room.onlyForNoSmokers ? "Tak" : "Nie",
            },
            {
              label: "Meble",
              value: offer?.properties?.room?.equipment?.furniture
                ? "Tak"
                : "Nie",
            },
            {
              label: "Pralka",
              value: offer?.properties?.room?.equipment?.washingMachine
                ? "Tak"
                : "Nie",
            },
            {
              label: "Zmywarka",
              value: offer?.properties?.room?.equipment?.dishwasher
                ? "Tak"
                : "Nie",
            },
            {
              label: "Lodówka",
              value: offer?.properties?.room?.equipment?.refrigerator
                ? "Tak"
                : "Nie",
            },
            {
              label: "Piec",
              value: offer?.properties?.room?.equipment?.stove ? "Tak" : "Nie",
            },
            {
              label: "Piekarnik",
              value: offer?.properties?.room?.equipment?.oven ? "Tak" : "Nie",
            },
            {
              label: "Telewizja",
              value: offer?.properties?.room?.equipment?.tv ? "Tak" : "Nie",
            },
            {
              label: "Ogrzewanie",
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
              }[offer.properties.room.heating],
            },
          ],
          3,
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

export default RoomDetails;
