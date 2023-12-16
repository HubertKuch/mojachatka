"use client";
import useSellType from "@/hooks/useSellType";
import usePropertyTypes from "@/hooks/usePropertyType";
import Select from "react-select";


const PropertyDescription = () => {
  const sellTypes = useSellType();
  const propertyTypes = usePropertyTypes();

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
                defaultValue={[propertyTypes[1]]}
                name="colors"
                options={propertyTypes}
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
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Rodzaj sprzedazy</label>
            <div className="location-area">
              <Select
                defaultValue={[sellTypes[0]]}
                name="colors"
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
            <label className="heading-color ff-heading fw600 mb10">
              Cena
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="400 000"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PropertyDescription;
