import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ListingStatus from "./ListingStatus";
import PropertyType from "./PropertyType";
import PriceSlider from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import OtherFeatures from "./OtherFeatures";
import OffersControllers from "@/controllers/OffersController";
import ReactSelect from "react-select";

const ListingSidebar = ({ filters, setPageItems, setPageCapacity }) => {
  const [cities, setCities] = useState([]);

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
        <h6 className="list-title">Przedział cenowy</h6>
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
        <h6 className="list-title">Łazienki</h6>
        <div className="d-flex">
          <Bathroom filters={filters} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper advance-feature-modal">
        <div className="form-style2 input-group">
          <label className="heading-color ff-heading fw600 mb10">
            Miejscowość
            <ReactSelect
              onChange={(val) => {
                filters.city = val.value;
                console.log(filters);
              }}
              onInputChange={(val) => {
                if (val.length <= 2) {
                  return;
                }

                OffersControllers.getCities(val).then((res) => {
                  if (res?.data?.cities) {
                    setCities(
                      res.data.cities.map((city) => ({
                        value: city,
                        label: city,
                      })),
                    );
                  }
                });
              }}
              name="properties.address.city"
              placeholder="Wpisz 3 znaki by wyszukac"
              options={cities}
            />
          </label>
        </div>
      </div>

      <div className="widget-wrapper mb20">
        <div className="btn-area d-grid align-items-center">
          <button
            className="ud-btn btn-thm"
            onClick={async () => {
              OffersControllers.findAll(filters).then((res) => {
                setPageItems(res.offers.data);
                setPageCapacity(res.offers.meta.perPage);
              });

              if (window) {
                window.scrollTo(0, 0);
              }
            }}
          >
            <span className="flaticon-search align-text-top pr10" />
            Szukaj
          </button>
        </div>
      </div>
      {/* End .widget-wrapper */}
    </div>
  );
};

export default ListingSidebar;
