import React from "react";

const PackageDataTable = ({ packages }) => {
  return (
    <table className="table-style3 table">
      <thead className="t-head">
        <tr>
          <th scope="col">Nazwa</th>
          <th scope="col">Ogłoszenia</th>
          <th scope="col">Podbicia</th>
          <th scope="col">Zniżka na podbicia</th>
          <th scope="col">Data zakupu</th>
          <th scope="col">Ilość dni</th>
          <th scope="col">Data wygaśnięcia</th>
          <th scope="col">Czy wygasł</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {packages.map((packageItem, index) => (
          <tr key={index}>
            <th scope="row">{packageItem.name}</th>
            <td>{packageItem.properties.listings}</td>
            <td>
              {packageItem.properties.boosts.map(
                (b) =>
                  `${b.type === "MAIN" ? "Glowne" : "Standardowe"} na ${b.days
                  } dni`,
              )}
            </td>
            <td>{packageItem.properties.boostDiscount + "%" || "Brak"}</td>
            <td>{new Date(packageItem.boughtAt).toLocaleString()}</td>
            <td>{packageItem.properties.expirationDays}</td>
            <td>{new Date(packageItem.expiringDate).toLocaleString()}</td>
            <td>
              <p
                className="
                rounded
                "
                style={{
                  background: packageItem.isExpired ? "#ff6962" : "#009edd",
                  textAlign: "center",
                }}
              >
                {packageItem.isExpired ? "Tak" : "Nie"}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackageDataTable;
