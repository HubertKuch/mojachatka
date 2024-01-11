"use client";
import { useState } from "react";
import PropertyTypesSelect from "@/components/property/filter/PropertyTypesSelect";
import Select from "react-select";
import SellTypesSelect from "@/components/property/filter/SellTypesSelect";

const PropertyDescription = () => {
  const [rentType, setRentType] = useState("BUY");

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Tytul</label>
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="Tytul oferty"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Opis</label>
            <textarea
              name="description"
              cols={30}
              rows={5}
              placeholder="Opis oferty."
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Rodzaj majatku
            </label>
            <div className="location-area">
              <PropertyTypesSelect />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Rodzaj sprzedazy
            </label>
            <div className="location-area">
              <SellTypesSelect set={setRentType} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            {rentType === "BUY" ? (
              <>
                <label className="heading-color ff-heading fw600 mb10">
                  Cena
                </label>
                <input
                  type="text"
                  name="price"
                  required
                  className="form-control"
                  placeholder="400 000"
                />{" "}
              </>
            ) : (
              <>
                <label className="heading-color ff-heading fw600 mb10">
                  Cena najmu
                </label>
                <input
                  type="text"
                  name="pricePerMonth"
                  className="form-control"
                  placeholder="3500"
                  required
                />
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PropertyDescription;
