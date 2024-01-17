import { useEffect, useState } from "react";
import PropertyDetails from "../property-single-style/common/PropertyDetails";
import chunk from "chunk";

function WarehouseDetails({ offer }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (offer) {
      setColumns(
        chunk(
          [
            {
              label: "Dostępny od",
              value: offer.properties.warehouse.availableFrom,
            },
            {
              label: "Parking",
              value: offer.properties.warehouse.parking ? "Tak" : "Nie",
            },
            {
              label: "Rampa",
              value: offer.properties.warehouse.ramp ? "Tak" : "Nie",
            },
            {
              label: "Pomieszczenia biurowe",
              value: offer.properties.warehouse.officeRooms ? "Tak" : "Nie",
            },
            {
              label: "Pomieszczenia socjalne",
              value: offer.properties.warehouse.socialRooms ? "Tak" : "Nie",
            },
            {
              label: "Internet",
              value: offer?.properties?.warehouse?.internet ? "Tak" : "Nie",
            },
            {
              label: "Telewizja kablowa",
              value: offer?.properties?.warehouse?.cableTv ? "Tak" : "Nie",
            },
            {
              label: "Telefon",
              value: offer?.properties?.warehouse?.telephone ? "Tak" : "Nie",
            },
            {
              label: "Woda",
              value: offer?.properties?.warehouse?.water ? "Tak" : "Nie",
            },
            {
              label: "Energia elektryczna",
              value: offer?.properties?.warehouse?.energy ? "Tak" : "Nie",
            },
            {
              label: "Gaz",
              value: offer?.properties?.warehouse?.gas ? "Tak" : "Nie",
            },
            {
              label: "Kanalizacja",
              value: offer?.properties?.warehouse?.sewage ? "Tak" : "Nie",
            },
            {
              label: "Śmieci",
              value: offer?.properties?.warehouse?.severs ? "Tak" : "Nie",
            },
            {
              label: "Szambo",
              value: offer?.properties?.warehouse?.setpticTank ? "Tak" : "Nie",
            },
            {
              label: "Okna",
              value: offer?.properties?.apartment?.additionalInfo?.window
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
              label: "Parking",
              value: offer?.properties?.apartment?.additionalInfo?.parking
                ? "Tak"
                : "Nie",
            },
            {
              label: "Dostęp asfaltowy",
              value: offer?.properties?.apartment?.additionalInfo?.asphaltAccess
                ? "Tak"
                : "Nie",
            },
            {
              label: "Klimatyzacja",
              value: offer?.properties?.apartment?.additionalInfo
                ?.airConditioning
                ? "Tak"
                : "Nie",
            },
            {
              label: "Ogrzewanie",
              value: offer?.properties?.apartment?.additionalInfo?.heating
                ? "Tak"
                : "Nie",
            },
            {
              label: "Umeblowanie",
              value: offer?.properties?.apartment?.additionalInfo?.furnishings
                ? "Tak"
                : "Nie",
            },
            {
              label: "Przeznaczenie obiektu",
              value: {
                WAREHOUSE: "Magazyn",
                PRODUCTION: "Produkcyjny",
                COMMERCIAL: "Handlowy",
                OFFICE: "Biuro",
              }[offer.properties.warehouse.useFacility],
            },
            {
              label: "Droga dojazdowa",
              value: {
                UNPAVED: "Nieutwardzona",
                PAVED: "Utylizowana",
                ASPHALT: "Asfaltowa",
              }[offer.properties.warehouse.road],
            },
            {
              label: "Konstrukcja",
              value: {
                WOODEN: "Drewniana",
                STEEL: "Stalowa",
                BRICK: "Murowana",
                GLASS: "Szklana",
                TENT: "Namiotowa",
                SHELTER: "WIATA",
              }[offer.properties.warehouse.construction],
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
              }[offer.properties.warehouse.heating],
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

export default WarehouseDetails;
