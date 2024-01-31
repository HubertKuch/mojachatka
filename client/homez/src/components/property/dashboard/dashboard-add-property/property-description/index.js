"use client";
import { useState } from "react";
import PropertyTypesSelect from "@/components/property/filter/PropertyTypesSelect";
import SellTypesSelect from "@/components/property/filter/SellTypesSelect";
import { ErrorMessage, FastField, Field, useFormikContext } from "formik";
import Error from "@/components/common/Error";
import { Tab } from "bootstrap";

const PropertyDescription = ({ onChange }) => {
  const [rentType, setRentType] = useState("BUY");
  const { setFieldValue, values } = useFormikContext();

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tytuł *
            </label>
            <Error name="title" />
            <FastField
              name="title"
              className="form-control"
              placeholder="Tytuł oferty"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Opis *
            </label>
            <Error name="description" />

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
              Rodzaj nieruchomości *
            </label>
            <Error name="type" />

            <div className="location-area">
              <PropertyTypesSelect
                defaultOptionValue={values.type}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Rodzaj sprzedazy *
            </label>
            <Error name="sellType" />

            <div className="location-area">
              <SellTypesSelect
                defaultOptionValue={values.sellType}
                onChange={onChange}
                set={setRentType}
              />
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
                  Cena *
                </label>
                <Error name={"price"} />
                <FastField
                  onChange={(prop) =>
                    setFieldValue("price", prop.currentTarget.valueAsNumber)
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
                  Cena najmu *
                </label>
                <Error name={"pricePerMonth"} />
                <FastField
                  onChange={(prop) =>
                    setFieldValue(
                      "pricePerMonth",
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
      <div>
        <button
          className="form-control ud-btn btn-white2"
          type="button"
          onClick={() => {
            if (typeof document !== "undefined")
              document?.querySelector('[aria-controls="nav-item2"]')?.click();
          }}
        >
          Dalej
        </button>
      </div>
    </form>
  );
};

export default PropertyDescription;
