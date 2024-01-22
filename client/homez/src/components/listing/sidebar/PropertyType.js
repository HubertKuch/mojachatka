"use client";

import OffersControllers from "@/controllers/OffersController";
import React, { useEffect, useState } from "react";

const PropertyType = ({ filters }) => {
  const types = [
    {
      value: "DOM",
      label: "Dom",
    },
    {
      value: "MIESZKANIE",
      label: "Mieszkanie",
    },
    {
      value: "DZIALKA",
      label: "Działka",
    },
    {
      value: "GARAZ",
      label: "Garaż",
    },
    {
      value: "POKOJ",
      label: "Pokój",
    },
    {
      value: "LOKAL",
      label: "Lokal użytkowy",
    },
    {
      value: "MAGAZYN",
      label: "Magazyn",
    },
  ];

  return (
    <>
      {types.map((option, index) => (
        <label
          style={{ textTransform: "capitalize" }}
          className="custom_checkbox"
          key={index}
        >
          {option.label}
          <input
            type="radio"
            name="type"
            onChange={() => {
              filters.type = option.value;
            }}
          />
          <span className="checkmark" />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
