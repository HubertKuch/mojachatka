"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const LocationField = dynamic(() => import("./LocationField"), { ssr: false });
const UploadMedia = dynamic(() => import("./upload-media/index"), {
  ssr: false,
});
const PropertyDescription = dynamic(
  () => import("./property-description/index"),
  { ssr: false },
);
const DetailsFiled = dynamic(() => import("./details-field/index"), {
  ssr: false,
});
import { Form, Formik } from "formik";
import OffersControllers from "@/controllers/OffersController";
import { flatten } from "flat";
import useUser from "@/hooks/useUser";
import Popup from "reactjs-popup";

const AddPropertyTabContent = ({ content, params }) => {
  const [success, setSuccess] = useState(false);
  const user = useUser({ reload: true });

  return (
    <>
      {!content && (
        <Popup open={user?.listings === 0}>
          <div
            className="popup-modal"
            style={{ fontSize: "1.5em", padding: "2em" }}
          >
            <a href="/cennik">
              Wygląda na to, że nie posiadasz dostępnych ogłoszeń. Udaj się do{" "}
              <span style={{ fontWeight: "bold", color: "#48b5ac" }}>
                Cennika
              </span>
              , aby dokonać zakupu odpowiedniego pakietu. Kliknij{" "}
              <span style={{ fontWeight: "bold", color: "#48b5ac" }}>
                tutaj.{" "}
              </span>
            </a>
          </div>
        </Popup>
      )}
      <Formik
        enableReinitialize
        initialValues={
          content
            ? content
            : {
                type: null,
                properties: {
                  images: [],
                  security: {},
                  address: {},
                  price: null,
                  pricePerMonth: null,
                },
              }
        }
      >
        {({
          handleChange,
          setFieldError,
          setFieldValue,
          values: { type },
          values,
          errors,
        }) => {
          return (
            <>
              {Object.values(flatten(errors)).map((err, key) => (
                <div
                  className="error"
                  key={key}
                  style={{ textAlign: "left", textTransform: "capitalize" }}
                >
                  {err?.toLowerCase()}
                </div>
              ))}
              {success && (
                <div
                  className="primary"
                  style={{
                    borderRadius: "20px",
                    border: "2px solid #00968a",
                    textAlign: "center",
                    fontSize: "1rem",
                    padding: "15px",
                  }}
                >
                  Zakończono sukcesem!{" "}
                </div>
              )}
              <nav>
                <div className="nav nav-tabs" id="nav-tab2" role="tablist">
                  <button
                    className="nav-link active fw600 ms-3"
                    id="nav-item1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-item1"
                    type="button"
                    role="tab"
                    aria-controls="nav-item1"
                    aria-selected="true"
                  >
                    1. Oferta
                  </button>
                  <button
                    className="nav-link fw600"
                    id="nav-item2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-item2"
                    type="button"
                    disabled={!type}
                    role="tab"
                    aria-controls="nav-item2"
                    aria-selected="false"
                  >
                    2. Zdjęcia
                  </button>
                  <button
                    className="nav-link fw600"
                    id="nav-item3-tab"
                    data-bs-toggle="tab"
                    disabled={!type}
                    data-bs-target="#nav-item3"
                    type="button"
                    role="tab"
                    aria-controls="nav-item3"
                    aria-selected="false"
                  >
                    3. Lokalizacja
                  </button>
                  <button
                    className="nav-link fw600"
                    id="nav-item4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-item4"
                    type="button"
                    role="tab"
                    disabled={!type}
                    aria-controls="nav-item4"
                    aria-selected="false"
                  >
                    4. Szczegóły
                  </button>
                </div>
              </nav>

              <Form>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-item1"
                    role="tabpanel"
                    aria-labelledby="nav-item1-tab"
                  >
                    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                      <h4 className="title fz17 mb30">Opis oferty</h4>
                      <PropertyDescription onChange={handleChange} />
                    </div>
                  </div>
                  {/* End tab for Property Description */}

                  <div
                    className="tab-pane fade"
                    id="nav-item2"
                    role="tabpanel"
                    aria-labelledby="nav-item2-tab"
                  >
                    <UploadMedia
                      params={params}
                      content={content}
                      onChange={handleChange}
                    />
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-item3"
                    role="tabpanel"
                    aria-labelledby="nav-item3-tab"
                  >
                    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                      <h4 className="title fz17 mb30">Lokalizacja</h4>
                      <LocationField onChange={handleChange} />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-item4"
                    role="tabpanel"
                    aria-labelledby="nav-item4-tab"
                  >
                    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                      <DetailsFiled content={content} setSuccess={setSuccess} />
                    </div>
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default AddPropertyTabContent;
