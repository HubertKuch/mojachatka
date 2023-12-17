"use client";
import React from "react";
import Map from "./Map";
import useRegion from "@/hooks/useRegion";
import Select from "react-select";

const LocationField = () => {
  const regions = useRegion();

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Miejscowosc
              <input
                data-property
                type="text"
                name="city"
                className="form-control"
                placeholder="Warszawa"
              />
            </label>
            {'  '}
            <label className="heading-color ff-heading fw600 mb10">
              Adres
              <input
                data-property
                name="address"
                type="text"
                className="form-control"
                placeholder="Wiejska"
              />
            </label>
          </div>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dom
              <input
                name="houseNumber"
                data-property type="text"
                className="form-control"
                placeholder="1"
              />
            </label>
            {' '}
            <label className="heading-color ff-heading fw600 mb10">
              Mieszkanie
              <input
                type="text"
                name="localNumber"
                data-property className="form-control"
                placeholder="4"
              />
            </label>

          </div>

          <label className="mb-4">
            <input
              type="checkbox"
              data-property name="publicAddress"
              placeholder="Your Name"
            />
            {' '}
            Adres widoczny dla wszystkich
          </label>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Kod pocztowy</label>
            <input data-property type="text" name="zipCode" placeholder="84-300" className="form-control" />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Region
            </label>
            <div className="location-area">
              <Select
                defaultValue={[regions[1]]}
                name="region"
                styles={{ menu: prov => ({ ...prov, zIndex: 99999999 }), menuList: prov => ({ ...prov, zIndex: 99999999 }) }}
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
            <Map />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationField;
