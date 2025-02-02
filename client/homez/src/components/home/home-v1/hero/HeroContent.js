"use client";
import PropertyTypesSelect from "@/components/property/filter/PropertyTypesSelect";
import queryParams from "@/utilis/queryParams";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HeroContent = ({ filters }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("BUY");

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    filters.sellType = tab.id;
  };

  const tabs = [
    { id: "BUY", label: "Sprzedaż" },
    { id: "RENT", label: "Wynajem" },
  ];

  return (
    <div className="advance-search-tab mt70 mt30-md mx-auto animate-up-3">
      <ul className="nav nav-tabs p-0 m-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style1">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <div className="advance-search-field position-relative text-start">
                    <form className="form-search position-relative">
                      <div
                        className="box-search"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "70% 30%",
                        }}
                      >
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control bgc-f7 bdrs12"
                          type="text"
                          onInput={(e) => {
                            filters.search = e.currentTarget.value;
                          }}
                          name="search"
                          placeholder={`Wpisz miejscowość lub kod pocztowy dla ${tab.label}`}
                        />
                        <div className="location-area">
                          <PropertyTypesSelect filters={filters} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-8 */}

                <div className="col-md-4 col-lg-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Zaawansowane
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      onClick={() =>
                        router.push(
                          "/oferty" + queryParams.objectToQueryUri(filters),
                        )
                      }
                      type="button"
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
