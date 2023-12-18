"use client";
import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({ filters }) => {
  const [price, setPrice] = useState({ value: { min: 20, max: 1000000 } });

  const handleOnChange = (value) => {
    setPrice({ value });
    filters.minPrice = value.min;
    filters.maxPrice = value.max;
  };

  return (
    <>
      <div className="range-wrapper">
        <InputRange
          formatLabel={() => ``}
          maxValue={1000000}
          minValue={0}
          value={{ min: price.value.min, max: price.value.max }}
          onChange={(value) => handleOnChange(value)}
          id="slider"
        />
        <div className="d-flex align-items-center">
          <span id="slider-range-value1">${price.value.min}</span>
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
          <span id="slider-range-value2">${price.value.max}</span>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
