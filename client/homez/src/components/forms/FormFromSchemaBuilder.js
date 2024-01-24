const { useFormikContext, Field, ErrorMessage } = require("formik");
import chunk from "chunk";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import Error from "../common/Error";

const FormFromSchemaBuilder = ({ namePrefix = "", schema }) => {
  const { setFieldValue } = useFormikContext();
  const [els, setEls] = useState([]);

  function getFullName(name) {
    if (!namePrefix) {
      return name;
    }

    return `${namePrefix}.${name}`;
  }

  function NestedObject({ property, nameKey }) {
    return (
      <label
        style={{ textTransform: "capitalize" }}
        className="heading-color ff-heading fw600 mb10"
      >
        <FormFromSchemaBuilder
          namePrefix={getFullName(nameKey)}
          className="form-control"
          schema={property}
        />
      </label>
    );
  }

  function BooleanField({ property, nameKey }) {
    return (
      <div>
        <Error name={getFullName(nameKey)} />
        <label className="heading-color ff-heading fw600 mb10">
          <Field
            type="checkbox"
            name={getFullName(nameKey)}
            onChange={(e) => {
              setFieldValue(e.currentTarget.name, e.currentTarget.checked);
            }}
          />{" "}
          {property.label || ""} *
        </label>
      </div>
    );
  }

  function NumberField({ property, nameKey }) {
    return (
      <label className="heading-color ff-heading fw600 mb10">
        {property.label || ""} *
        <Error name={getFullName(nameKey)} />
        <Field
          placeholder={property.label}
          type="number"
          name={getFullName(nameKey)}
          className="form-control"
          onChange={(e) => {
            setFieldValue(e.currentTarget.name, e.currentTarget.valueAsNumber);
          }}
        />
      </label>
    );
  }

  function TextField({ property, nameKey }) {
    return (
      <div className="row">
        <div className="col-12">
          <label className="heading-color ff-heading fw600 mb10">
            {" "}
            {property.label || ""} *
            <Error name={getFullName(nameKey)} />
            <Field
              placeholder={property.label}
              type="text"
              className="form-control"
              name={getFullName(nameKey)}
              onChange={(e) => {
                setFieldValue(e.currentTarget.name, e.currentTarget.value);
              }}
            />
          </label>
        </div>
      </div>
    );
  }

  function EnumField({ property, nameKey }) {
    return (
      <div className="row">
        <div className="col-12">
          <label className="heading-color w-100 ff-heading fw600 mb10">
            {property.label} *
            <Select
              placeholder={property.label}
              styles={{
                menu: (prov) => ({ ...prov, zIndex: 99999999 }),
                menuList: (prov) => ({ ...prov, zIndex: 99999999 }),
                container: (prov) => ({
                  ...prov,
                  width: "100%",
                }),
              }}
              onChange={({ value }) => {
                setFieldValue(getFullName(nameKey), value);
              }}
              name="type"
              menuPosition="fixed"
              options={Object.keys(property.cases).map((propKey) => ({
                value: propKey,
                label: property.cases[propKey],
              }))}
              className="select-custom pl-0"
              classNamePrefix="select"
              required
            />
          </label>
        </div>
      </div>
    );
  }

  useEffect(() => {
    let elements = Object.keys(schema.properties).map((key) => {
      const property = schema.properties[key];

      if (property.type === "object")
        return <NestedObject key={key} nameKey={key} property={property} />;
      else if (property.type === "number" || property.type === "integer")
        return <NumberField key={key} nameKey={key} property={property} />;
      else if (property.type === "boolean") {
        return <BooleanField key={key} nameKey={key} property={property} />;
      } else if (property.type === "string" && !property.enum)
        return <TextField key={key} nameKey={key} property={property} />;
      else if (property.type === "string" && property.enum)
        return <EnumField nameKey={key} property={property} key={key} />;
    });

    if (schema.cols) {
      const colSize = 12 / schema.cols;
      const chunks = chunk(elements, colSize);

      elements = chunks.map((chunk) => (
        <div key={Math.random()} className={`col-${colSize}`}>
          {chunk}
        </div>
      ));
    }

    setEls(elements);
  }, [schema]);

  return (
    <div className="row">
      <h4 style={{ textTransform: "capitalize" }}>{schema.label}</h4>
      <hr />
      {els}
    </div>
  );
};

export default FormFromSchemaBuilder;
