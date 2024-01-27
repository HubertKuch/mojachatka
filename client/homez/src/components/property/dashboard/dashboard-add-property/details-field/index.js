"use client";
import FormFromSchemaBuilder from "@/components/forms/FormFromSchemaBuilder";
import OffersControllers from "@/controllers/OffersController";
import {
  apartmentSchema,
  commercialLocalSchema,
  garageSchema,
  houseSchema,
  plotSchema,
  roomSchema,
  warehouseSchema,
} from "@/schemas/OfferCreateSchema";
import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";

const DetailsFiled = ({ success, setSuccess, content }) => {
  const {
    setFieldValue,
    values: { properties, type },
    values,
    setErrors,
    setFieldError,
  } = useFormikContext();
  const [schema, setSchema] = useState({ properties: {} });
  const [propertiesName, setPropertiesName] = useState("");

  useEffect(() => {
    const SCHEMA_BY_TYPE = {
      DOM: houseSchema,
      POKOJ: roomSchema,
      GARAZ: garageSchema,
      MAGAZYN: warehouseSchema,
      DZIALKA: plotSchema,
      LOKAL: commercialLocalSchema,
      MIESZKANIE: apartmentSchema,
    };

    const PROPERTIES_NAME_BY_TYPE = {
      DOM: "house",
      POKOJ: "room",
      GARAZ: "garage",
      MAGAZYN: "warehouse",
      DZIALKA: "plot",
      LOKAL: "commercialLocal",
      MIESZKANIE: "apartment",
    };

    if (type === "Error") return;

    if (type) setSchema(SCHEMA_BY_TYPE[type]);
    if (type) setPropertiesName(PROPERTIES_NAME_BY_TYPE[type]);
  }, [type]);

  return (
    <form className="form-style1">
      <FormFromSchemaBuilder
        namePrefix={`properties.${propertiesName}`}
        schema={schema}
      />
      <div className="row">
        <button
          type="submit"
          disabled={success}
          className="form-control ud-btn btn-white2"
          onClick={(e) => {
            e.preventDefault();

            if (content) {
              OffersControllers.updateOffer(content.id, { data: values }).then(
                (res) => {
                  if (res.status === 200) {
                    setSuccess(true);
                    window?.scrollTo(0, 0);
                  }
                },
              );
              return;
            }

            OffersControllers.createOffer({ data: values }).then((res) => {
              if (res.status !== 200) {
                res.body.message.forEach((err) => {
                  setFieldError(err.path.replace("data.", ""), err.message);
                });
              } else {
                setSuccess(true);
              }

              window?.scrollTo(0, 0);
            });
          }}
        >
          {content ? "Edytuj" : "Dodaj"}
        </button>
      </div>
    </form>
  );
};

export default DetailsFiled;
