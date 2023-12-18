import React from "react";
import WeeklyBarChart from "./WeeklyBarChart";

const PropertyViews = (data) => {
  return (
    <div className="col-md-12">
      <div className="navtab-style1">
        <div className="d-sm-flex align-items-center justify-content-between">
          <h4 className="title fz17 mb20">Statystyki</h4>
          <ul
            className="nav nav-tabs border-bottom-0 mb30"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="hourly-tab"
                data-bs-toggle="tab"
                href="#hourly"
                role="tab"
                aria-controls="hourly"
                aria-selected="true"
              >
                Tygodniowe
              </a>
            </li>
          </ul>
        </div>
        {/* End nav-tabs */}

        <div className="tab-content" id="myTabContent2">
          <div
            className="tab-pane fade show active"
            id="hourly"
            role="tabpanel"
            aria-labelledby="hourly-tab"
            style={{ height: "500px", maxHeight: "100%" }}
          >
            <WeeklyBarChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyViews;
