"use client";
import React, { useState } from "react";
import useRegion from "@/hooks/useRegion";
import Select from "react-select";
import { Field, useFormikContext } from "formik";
import ReactSelect from "react-select";
import OffersControllers from "@/controllers/OffersController";
import ApplicationSelect from "@/components/customs/ApplicationSelect";

const LocationField = ({ onChange }) => {
  const regions = useRegion();
  const formik = useFormikContext();
  const [cities, setCities] = useState([]);

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Miejscowość *
              <ReactSelect
                isSearchable={true}
                value={
                  formik
                    ? {
                      value: formik.values?.properties?.address?.city,
                      label: formik.values?.properties?.address?.city,
                    }
                    : ""
                }
                onInputChange={(val) => {
                  if (val.length <= 2) {
                    return;
                  }

                  OffersControllers.getCities(val).then((res) => {
                    if (res?.data?.cities) {
                      setCities(
                        res.data.cities.map((city) => ({
                          value: city,
                          label: city,
                        })),
                      );
                    }
                  });
                }}
                onChange={({ value }) => {
                  onChange("properties.address.city")(value);
                }}
                placeholder="Wpisz 3 znaki by wyszukac"
                options={cities}
              />
            </label>
            {"  "}
            <label className="heading-color ff-heading fw600 mb10">
              Adres *
              <Field
                name="properties.address.address"
                type="text"
                className="form-control"
                placeholder="Wiejska"
              />
            </label>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Kod pocztowy *
            </label>
            <Field
              type="text"
              name="properties.address.zipCode"
              placeholder="84-300"
              className="form-control"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Region *
            </label>
            <div className="location-area">
              <ApplicationSelect
                name={"properties.address.region"}
                label={"Region"}
                defaultOptionValue={
                  formik
                    ? formik.values?.properties?.address?.region
                    : undefined
                }
                onChange={({ value }) =>
                  onChange("properties.address.region")(value)
                }
                options={regions}
              />
            </div>
          </div>
        </div>
        <button
          className="form-control ud-btn btn-white2"
          type="button"
          onClick={() => {
            document.querySelector('[aria-controls="nav-item4"]').click();
          }}
        >
          Dalej
        </button>
      </div>
    </form>
  );
};

export default LocationField;
