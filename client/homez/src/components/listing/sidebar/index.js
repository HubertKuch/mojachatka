import React from "react";
import SearchBox from "./SearchBox";
import ListingStatus from "./ListingStatus";
import PropertyType from "./PropertyType";
import PriceSlider from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import OtherFeatures from "./OtherFeatures";
import toQuery from "../../../utilis/queryParams";

const ListingSidebar = ({ filters }) => {
  return (
    <div className="list-sidebar-style1">
      <div className="widget-wrapper">
        <h6 className="list-title">Znajdz swoj dom</h6>
        <SearchBox filters={filters} />
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Status</h6>
        <div className="radio-element">
          <ListingStatus filters={filters} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Typ</h6>
        <div className="checkbox-style1">
          <PropertyType filters={filters} />
        </div>
      </div>

      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Przedzial cenowy</h6>
        {/* Range Slider Desktop Version */}
        <div className="range-slider-style1">
          <PriceSlider filters={filters} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Sypialnie</h6>
        <div className="d-flex">
          <Bedroom filters={filters} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Lazienki</h6>
        <div className="d-flex">
          <Bathroom filters={filters} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper advance-feature-modal">
        <h6 className="list-title">Lokalizacja -- NIE DZIALA --</h6>
        <div className="form-style2 input-group">
          {/* <Location filterFunctions={filters} /> */}
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <div className="feature-accordion">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item border-none">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button border-none p-0 after-none feature-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="flaticon-settings" /> Inne udogodnienia --
                  NIE DZIALA --
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0 mt15">
                  <OtherFeatures filterFunctions={filters} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper mb20">
        <div className="btn-area d-grid align-items-center">
          <button
            className="ud-btn btn-thm"
            onClick={() =>
              console.log(filters, toQuery.objectToQueryUri(filters))
            }
          >
            <span className="flaticon-search align-text-top pr10" />
            Szukaj
          </button>
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="reset-area d-flex align-items-center justify-content-between">
        <div
          onClick={() => filterFunctions.resetFilter()}
          className="reset-button cursor"
          href="#"
        >
          <span className="flaticon-turn-back" />
          <u>Resetuj</u>
        </div>
      </div>
    </div>
  );
};

export default ListingSidebar;
