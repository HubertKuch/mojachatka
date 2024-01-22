"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import useRegion from "@/hooks/useRegion";
import Select from "react-select";
import { Field } from "formik";
import ReactSelect from "react-select";
import OffersControllers from "@/controllers/OffersController";

const LocationField = ({ onChange }) => {
  const regions = useRegion();
  const [cities, setCities] = useState([]);

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Miejscowość
              <ReactSelect
                isSearchable={false}
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
              Adres
              <Field
                name="properties.address.address"
                type="text"
                className="form-control"
                placeholder="Wiejska"
              />
            </label>
          </div>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Nr budynku
              <Field
                name="properties.address.houseNumber"
                type="text"
                className="form-control"
                placeholder="1"
              />
            </label>{" "}
            <label className="heading-color ff-heading fw600 mb10">
              Nr lokalu
              <Field
                type="text"
                name="properties.address.localNumber"
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
              name="properties.address.zipCode"
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
                onChange={({ value }) =>
                  onChange("properties.address.region")(value)
                }
                defaultValue={[regions[1]]}
                name="properties.address.region"
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
      </div>
    </form>
  );
};

export default LocationField;
