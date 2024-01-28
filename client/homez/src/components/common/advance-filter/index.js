"use client";
import PriceRange from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import { useRouter } from "next/navigation";
import PropertyTypesSelect from "@/components/property/filter/PropertyTypesSelect";
import SellTypesSelect from "@/components/property/filter/SellTypesSelect";
import { useState } from "react";
import queryParams from "@/utilis/queryParams";

const AdvanceFilterModal = ({ filters }) => {
  const router = useRouter();

  return (
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header pl30 pr30">
          <h5 className="modal-title" id="exampleModalLabel">
            Więcej filtrów
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End modal-header */}

        <div className="modal-body pb-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper">
                <h6 className="list-title mb20">Zakres cenowy</h6>
                <div className="range-slider-style modal-version">
                  <PriceRange filters={filters} />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Rodzaj</h6>
                <div className="form-style2 input-group">
                  <PropertyTypesSelect filters={filters} />
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Typ</h6>
                <div
                  className="form-style2 input-group location-area"
                  style={{ height: "100%" }}
                >
                  <SellTypesSelect filters={filters} />
                </div>
              </div>
            </div>

            {/* End .col-6 */}
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Sypialnie</h6>
                <div className="d-flex">
                  <Bedroom filters={filters} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Łazienki</h6>
                <div className="d-flex">
                  <Bathroom filters={filters} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End modal body */}

        <div className="modal-footer justify-content-between">
          <div className="btn-area">
            <button
              data-bs-dismiss="modal"
              type="submit"
              className="ud-btn btn-thm"
              onClick={() => {
                router.push("/oferty" + queryParams.objectToQueryUri(filters));
              }}
            >
              <span className="flaticon-search align-text-top pr10" />
              Szukaj
            </button>
          </div>
        </div>
        {/* End modal-footer */}
      </div>
    </div>
  );
};

export default AdvanceFilterModal;
