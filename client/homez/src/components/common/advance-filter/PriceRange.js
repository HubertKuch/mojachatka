"use client";
import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({ filters }) => {
  const [price, setPrice] = useState({ value: { min: 0, max: 1000000 } });

  const handleOnChange = (value) => {
    setPrice({ value });
  };

  useEffect(() => {
    filters.minPrice = price.value.min;
    filters.maxPrice = price.value.max;
  }, [price]);

  return (
    <>
      <div className="range-wrapper">
        <div className="d-flex align-items-center">
          <input
            type="number"
            id="slider-range-value1"
            onInput={(e) =>
              setPrice((prev) => ({
                value: { ...prev.value, min: e.target.value },
              }))
            }
          />
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
          <input
            type="number"
            id="slider-range-value2"
            onInput={(e) =>
              setPrice((prev) => ({
                value: { ...prev.value, max: e.target.value },
              }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default PriceRange;
