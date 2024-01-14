import { Field, FieldArray } from "formik";
import React from "react";

const DetailsFiled = ({ onChange }) => {
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
                type="checkbox"
                name="properties.security.antiBreakingRoles"
              />
            </div>{" "}
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                Drzwi antywlamaniowe
              </label>{" "}
              <Field
                type="checkbox"
                name="properties.security.antiBurglaryDoors"
                value="afterMarket"
              />
            </div>
            <label className="heading-color ff-heading fw600 mb10">
              Okna antywlamaniowe
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.antiBurglaryWindows"
              value="afterMarket"
            />
          </div>{" "}
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Teren zamkniety
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.closedArea"
              value="afterMarket"
            />
          </div>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Monitoring
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.monitoring"
              value="afterMarket"
            />
          </div>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Ochrona
            </label>{" "}
            <Field
              type="checkbox"
              name="properties.security.security"
              value="afterMarket"
            />
          </div>{" "}
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Alarm</label>{" "}
            <Field
              type="checkbox"
              name="properties.security.alarm"
              value="afterMarket"
            />
          </div>{" "}
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Domofon
            </label>{" "}
            <Field type="checkbox" name="properties.security.intercom" />
          </div>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Wideofon
            </label>{" "}
            <Field type="checkbox" name="properties.security.videophone" />
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
              value="afterMarket"
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
              name="bedrooms"
              type="properties.bedrooms"
              className="form-control"
              placeholder="2"
            />
          </div>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Ilosc lazienek
            </label>
            <Field
              name="bedrooms"
              type="properties.bathrooms"
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
