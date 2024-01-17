import { useEffect, useState } from "react";
import PropertyDetails from "../property-single-style/common/PropertyDetails";
import chunk from "chunk";

function GarageDetails({ offer }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (offer) {
      setColumns(
        chunk(
          [
            {
              label: "Lokalizacja",
              value: {
                NEAR_HOUSE: "Przy domu",
                IN_BUILDING: "W budynku",
                ALONE: "Samodzielny",
              }[offer?.properties?.garage.location],
            },
            {
              label: "Konstrukcja",
              value: {
                BRICK: "Murowana",
                SHED: "Wiata",
                TIN: "Blaszany",
                WOODEN: "Drewniany",
              }[offer?.properties?.garage.construction],
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

export default GarageDetails;
