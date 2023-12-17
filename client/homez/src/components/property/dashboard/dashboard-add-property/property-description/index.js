"use client";
import useSellType from "@/hooks/useSellType";
import usePropertyTypes from "@/hooks/usePropertyType";
import Select from "react-select";
import { useState } from "react";


const PropertyDescription = () => {
  const sellTypes = useSellType();
  const propertyTypes = usePropertyTypes();
  const [rentType, setRentType] = useState("BUY");

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
            ? "#eb675312"
            : isFocused
              ? "#eb675312"
              : undefined,
      };
    },
  };

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
            <label className="heading-color ff-heading fw600 mb10">
              Opis
            </label>
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
              <Select
                styles={{ menu: prov => ({ ...prov, zIndex: 99999999 }), menuList: prov => ({ ...prov, zIndex: 99999999 }) }}
                defaultValue={[propertyTypes[1]]}
                name="type"
                menuPosition="fixed"
                options={propertyTypes}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Rodzaj sprzedazy</label>
            <div className="location-area">
              <Select
                defaultValue={sellTypes[0]}
                name="rentType"
                onChange={(e) => setRentType(e.value)}
                options={sellTypes}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            {rentType === "BUY" ? <><label className="heading-color ff-heading fw600 mb10">
              Cena
            </label>
              <input
                type="text"
                name="price"
                required
                className="form-control"
                placeholder="400 000"
              /> </> :
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
              </>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PropertyDescription;
