"use client";

import useAmenities from "@/hooks/useAmenities";
import { FieldArray } from "formik";
import React from "react";

const Amenities = () => {
  const amenities = useAmenities();

  return (
    <div className="row">
      <FieldArray
        name="features"
        render={(array) => {
          return amenities.map((amenity) => (
            <div key={amenity.id} className="col-sm-6 col-lg-3 col-xxl-2">
              <div className="checkbox-style1">
                <label className="custom_checkbox">
                  {amenity.name}
                  <input
                    name="features"
                    type="checkbox"
                    className="amenity"
                    checked={array.form.values.features.includes(amenity.id)}
                    onChange={(e) => {
                      if (e.target.checked) array.push(amenity.id);
                      else {
                        const idx = array.form.values.features.indexOf(
                          amenity.id,
                        );

                        array.remove(idx);
                      }
                    }}
                    value={amenity.id}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          ));
        }}
      />
    </div>
  );
};

export default Amenities;
