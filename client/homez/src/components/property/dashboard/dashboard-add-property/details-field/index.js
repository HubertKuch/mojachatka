import { Field, useFormikContext } from "formik";
import React from "react";

const DetailsFiled = () => {
  const {
    setFieldValue,
    values: {
      properties: { security },
      properties,
    },
  } = useFormikContext();

  function set(props) {
    setFieldValue(props.currentTarget.name, props.currentTarget.checked);
  }

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-xl-4">
          <h4>Zabezpieczenia</h4>
          <div className="mb20">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Rolety antywlamiowe
              </label>{" "}
              <Field
                onChange={set}
                checked={security.antiBreakingRoles}
                type="checkbox"
                name="properties.security.antiBreakingRoles"
              />
            </div>{" "}
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Drzwi antywlamaniowe
              </label>{" "}
              <Field
                onChange={set}
                checked={security.antiBurglaryDoors}
                type="checkbox"
                name="properties.security.antiBurglaryDoors"
              />
            </div>
            <label className="heading-color ff-heading fw600 mb10">
              Okna antywlamaniowe
            </label>{" "}
            <Field
              onChange={set}
              checked={security.antiBurglaryWindows}
              type="checkbox"
              name="properties.security.antiBurglaryWindows"
            />
          </div>{" "}
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Teren zamkniety
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.closedArea"
              onChange={set}
              checked={security.closedArea}
            />
          </div>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Monitoring
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.monitoring"
              onChange={set}
              checked={security.monitoring}
            />
          </div>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Ochrona
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.security"
              onChange={set}
              checked={security.security}
            />
          </div>{" "}
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Alarm</label>{" "}
            <Field
              type="checkbox"
              name="properties.security.alarm"
              onChange={set}
              checked={security.alarm}
            />
          </div>{" "}
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Domofon
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.intercom"
              onChange={set}
              checked={security.intercom}
            />
          </div>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Wideofon
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.videophone"
              onChange={set}
              checked={security.videophone}
            />
          </div>
        </div>

        <div className="col-xl-4">
          <h4>Historia</h4>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Rok budowy
            </label>
            <Field
              type="number"
              name="properties.buildYear"
              className="form-control"
              onChange={(prop) =>
                setFieldValue(
                  prop.currentTarget.name,
                  prop.currentTarget.valueAsNumber,
                )
              }
              placeholder="2010"
            />
          </div>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Rynek pierwotny
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.afterMarket"
              onChange={set}
              checked={properties.afterMarket}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <h4>Pomieszczenia</h4>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Powierzchnia (w m2)
            </label>
            <Field
              onChange={(prop) =>
                setFieldValue(
                  prop.currentTarget.name,
                  prop.currentTarget.valueAsNumber,
                )
              }
              type="number"
              name="properties.sizeInMeters"
              className="form-control"
              placeholder="72"
            />
          </div>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Ilosc pokoi
            </label>
            <Field
              onChange={(prop) =>
                setFieldValue(
                  prop.currentTarget.name,
                  prop.currentTarget.valueAsNumber,
                )
              }
              type="number"
              name="properties.rooms"
              className="form-control"
              placeholder="4"
            />
          </div>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Ilosc sypialni
            </label>
            <Field
              onChange={(prop) =>
                setFieldValue(
                  prop.currentTarget.name,
                  prop.currentTarget.valueAsNumber,
                )
              }
              name="properties.bedrooms"
              className="form-control"
              type="number"
              placeholder="2"
            />
          </div>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Ilosc lazienek
            </label>
            <Field
              onChange={(prop) =>
                setFieldValue(
                  prop.currentTarget.name,
                  prop.currentTarget.valueAsNumber,
                )
              }
              type="number"
              name="properties.bathrooms"
              className="form-control"
              placeholder="2"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailsFiled;
