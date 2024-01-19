"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import PropertyDescription from "./property-description";
import UploadMedia from "./upload-media";
const LocationField = dynamic(() => import("./LocationField"), { ssr: false });
import DetailsFiled from "./details-field";
import { Form, Formik, useFormikContext } from "formik";
import OffersControllers from "@/controllers/OffersController";

const AddPropertyTabContent = () => {
  return (
    <>
      <Formik
        initialValues={{
          type: null,
          properties: {
            security: {},
            address: {},
            price: null,
            pricePerMonth: null,
          },
        }}
      >
        {({
          handleChange,
          setFieldError,
          setFieldValue,
          values: { type },
          values,
        }) => {
          return (
            <>
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
                    2. Media
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
                    4. Szczegoly
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
                    <UploadMedia onChange={handleChange} />
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-item3"
                    role="tabpanel"
                    aria-labelledby="nav-item3-tab"
                  >
                    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                      <h4 className="title fz17 mb30">Listing Location</h4>
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
                      <DetailsFiled setValue={setFieldValue} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <button
                    type="submit"
                    className="form-control ud-btn btn-white2"
                    onClick={() => {
                      OffersControllers.createOffer({ data: values }).then(
                        (res) => {
                          if (res.status !== 200) {
                            res.body.message.forEach((err) => {
                              setFieldError(
                                err.path.replace("data.", ""),
                                err.message,
                              );
                            });
                          } else {
                            document.location.replace(
                              "/dashboard-my-properties",
                            );
                          }
                        },
                      );
                    }}
                  >
                    Dodaj
                  </button>
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
