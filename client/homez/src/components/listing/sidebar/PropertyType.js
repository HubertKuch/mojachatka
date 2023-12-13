'use client'

import OffersControllers from "@/controllers/OffersController";
import React, { useEffect, useState } from "react";

const PropertyType = ({ filters }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    return () => {
      OffersControllers.getOfferTypes().then(setTypes);
    }
  }, []);

  return (
    <>
      {types.map((option, index) => (
        <label className="custom_checkbox" key={index} >
          {option}
          <input type="checkbox" onChange={() => {
            if (filters.offerTypes.includes(option)) {
              filters.offerTypes = filters.offerTypes.filter(type => type !== option);
            } else {
              filters.offerTypes.push(option);
            }
          }} />
          <span className="checkmark" />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
