"use client";

import React, { useState } from "react";

const Bedroom = ({ filters }) => {
  const [options, setOptions] = useState([
    { id: "any", label: "any", value: undefined, defaultChecked: true },
    { id: "oneplus", label: "1", value: 1 },
    { id: "twoplus", label: "2", value: 2 },
    { id: "threeplus", label: "3", value: 3 },
    { id: "fourplus", label: "4", value: 4 },
    { id: "fiveplus", label: "5", value: 5 },
  ]);

  return (
    <>
      {options.map((option) => (
        <div className={`selection`} key={option.id}>
          <input
            id={option.id}
            type="radio"
            onChange={(e) => {
              filters.bedrooms = option.value;

              setOptions((prev) => {
                return prev.map((el) => {
                  el.checked = el.id === filters.bedrooms;
                  return el;
                });
              });
            }}
            checked={filters?.bedrooms == option.value}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default Bedroom;
