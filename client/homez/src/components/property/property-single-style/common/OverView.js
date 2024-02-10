import React from "react";

const OverView = ({ overviewData }) => {
  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0 capitalize">{item.label}</h6>
              <p className="text mb-0 capitalize fz15">
                {typeof item.value === "string"
                  ? item.value?.toLowerCase()
                  : item.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
