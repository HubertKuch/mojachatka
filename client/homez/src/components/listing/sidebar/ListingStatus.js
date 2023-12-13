'use client'

import OffersControllers from "@/controllers/OffersController";
import React, { useEffect, useState } from "react";

const ListingStatus = ({ filters }) => {
  const [sellTypes, setSellTypes] = useState([]);

  useEffect(() => {
    return () => {
      OffersControllers.getSellTypes().then(setSellTypes)
    }
  }, []);

  console.log(filters);

  return (
    <>
      {sellTypes.map((option) => (
        <div
          className="form-check d-flex align-items-center mb10"
          key={option}
        >
          <input
            className="form-check-input"
            type="radio"
            id={option}
            onChange={() => filters.sellType = option}
          />
          <label className="form-check-label" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </>
  );
};

export default ListingStatus;
