"use client";
import React from "react";
import Map from "./Map";
import useRegion from "@/hooks/useRegion";
import Select from "react-select";
import { Field } from "formik";

const LocationField = ({ onChange }) => {
  const regions = useRegion();

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Miejscowosc
              <Field
                type="text"
                name="properties.city"
                className="form-control"
                placeholder="Warszawa"
              />
            </label>
            {"  "}
            <label className="heading-color ff-heading fw600 mb10">
              Adres
              <Field
                name="properties.address"
                type="text"
                className="form-control"
                placeholder="Wiejska"
              />
            </label>
          </div>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dom
              <Field
                name="properties.houseNumber"
                type="text"
                className="form-control"
                placeholder="1"
              />
            </label>{" "}
            <label className="heading-color ff-heading fw600 mb10">
              Mieszkanie
              <Field
                type="text"
                name="properties.localNumber"
                className="form-control"
                placeholder="4"
              />
            </label>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Kod pocztowy
            </label>
            <Field
              type="text"
              name="properties.zipCode"
              placeholder="84-300"
              className="form-control"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Region
            </label>
            <div className="location-area">
              <Select
                onChange={({ value }) => onChange("properties.region")(value)}
                defaultValue={[regions[1]]}
                name="properties.region"
                styles={{
                  menu: (prov) => ({ ...prov, zIndex: 99999999 }),
                  menuList: (prov) => ({ ...prov, zIndex: 99999999 }),
                }}
                options={regions}
                className="select-custom pl-0"
                menuPosition="fixed"
                menuPortalTarget={document.body}
                classNamePrefix="select"
                required
              />
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="mb20 mt30" style={{ width: "100%", height: "400px" }}>
            <label className="heading-color ff-heading fw600 mb30">
              Miejsce na mapie
            </label>
            <Map onChange={onChange} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationField;
