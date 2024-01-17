"use client";

import React, { useEffect, useState } from "react";

const ListingStatus = ({ filters }) => {
  const [sellTypes, setSellTypes] = useState([
    {
      label: "Sprzedaz",
      value: "BUY",
    },
    {
      label: "Wynajem",
      value: "RENT",
    },
  ]);

  return (
    <>
      {sellTypes.map((option) => (
        <div
          className="form-check d-flex align-items-center mb10"
          key={option.value}
        >
          <input
            className="form-check-input"
            type="radio"
            name="sellType"
            id={option.value}
            onChange={() => (filters.sellType = option.value)}
          />
          <label className="form-check-label" htmlFor={option.label}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default ListingStatus;
