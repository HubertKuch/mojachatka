import React, { useEffect, useState } from "react";

const PropertyDetails = ({ offer }) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (offer) {
      setColumns([
        [
          {
            label: "Cena",
            value: offer.price
              ? offer.price + "zl"
              : `${offer.pricePerMonth}zl / mo`,
          },
          {
            label: "Powierzchnia",
            value: offer.properties.sizeInMeters + "m2",
          },
          {
            label: "Bathrooms",
            value: offer.properties.bathrooms || "Brak danych",
          },
          {
            label: "Bedrooms",
            value: offer.properties.bedrooms,
          },
        ],
        [
          {
            label: "Pokoje",
            value: offer.properties.rooms,
          },
          {
            label: "Garage",
            value: offer.properties.garages || "Brak danych",
          },

          {
            label: "Property Type",
            value: offer.type,
          },
          {
            label: "Property Status",
            value: offer.sellType,
          },
        ],
      ]);
    }
  }, [offer]);

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
