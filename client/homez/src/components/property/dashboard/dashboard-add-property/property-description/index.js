"use client";
import { useState } from "react";
import PropertyTypesSelect from "@/components/property/filter/PropertyTypesSelect";
import Select from "react-select";
import SellTypesSelect from "@/components/property/filter/SellTypesSelect";
import { FastField, Field, useFormikContext } from "formik";

const PropertyDescription = ({ onChange }) => {
  const [rentType, setRentType] = useState("BUY");
  const { setFieldValue } = useFormikContext();

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Tytul</label>
            <FastField
              name="title"
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
            <Field
              name="description"
              cols={30}
              rows={5}
              as="textarea"
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
              <PropertyTypesSelect onChange={onChange} />
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
              <SellTypesSelect onChange={onChange} set={setRentType} />
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
                <FastField
                  onChange={(prop) =>
                    setFieldValue(
                      prop.currentTarget.name,
                      prop.currentTarget.valueAsNumber,
                    )
                  }
                  type="number"
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
                <FastField
                  onChange={(prop) =>
                    setFieldValue(
                      prop.currentTarget.name,
                      prop.currentTarget.valueAsNumber,
                    )
                  }
                  type="number"
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
