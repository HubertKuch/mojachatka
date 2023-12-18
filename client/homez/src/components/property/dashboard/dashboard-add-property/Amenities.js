"use client";

import useAmenities from "@/hooks/useAmenities";
import React from "react";

const Amenities = () => {
  const amenities = useAmenities();

  return (
    <div className="row">
      {amenities.map((amenity) => (
        <div key={amenity.id} className="col-sm-6 col-lg-3 col-xxl-2">
          <div className="checkbox-style1">
            <label className="custom_checkbox">
              {amenity.name}
              <input type="checkbox" className="amenity" value={amenity.id} />
              <span className="checkmark" />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
