"use client";

import React from "react";

const TopFilterBar = ({
  setCurrentSortingOption,
  colstyle,
  setColstyle,
  pageContentTrac,
}) => {
  return (
    <>
      <div className="col-sm-6">
        <div className="text-center text-sm-start">
          <p className="pagination_page_count mb-0">
            Wyświetla {pageContentTrac[0]}–
            {pageContentTrac[2] < pageContentTrac[1]
              ? pageContentTrac[2]
              : pageContentTrac[1]}{" "}
            z {pageContentTrac[2]} wyników
          </p>
        </div>
      </div>
      {/* End .col-sm-6 */}

      <div className="col-sm-6">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: "100px" }}>Sortuj według</span>
            <select
              className="form-select"
              onChange={(e) =>
                setCurrentSortingOption &&
                setCurrentSortingOption(e.target.value)
              }
            >
              <option>Najnowsze</option>
              <option>Najstarsze</option>
              <option>Najtańsze</option>
              <option>Najdroższe</option>
              <option>Najmniejsza powierzchnia</option>
              <option>Największa powierzchnia</option>
            </select>
          </div>
          <div
            className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block cursor ${
              !colstyle ? "menuActive" : "#"
            }`}
            onClick={() => setColstyle(false)}
          >
            Lista
          </div>
          <div
            className={`pl15 d-none d-md-block  cursor  ${
              colstyle ? "menuActive" : "#"
            } `}
            onClick={() => setColstyle(true)}
          >
            Kafelki
          </div>
        </div>
      </div>
      {/* End .col-sm-6 */}
    </>
  );
};

export default TopFilterBar;
