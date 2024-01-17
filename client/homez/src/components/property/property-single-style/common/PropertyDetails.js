import React from "react";

const PropertyDetails = ({ columns }) => {
  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className={`col-md-6 col-xl-4 gx-5 px-3`}>
          {column.map((detail, index) => (
            <div
              key={index}
              className="gx-5 px-3 d-flex justify-content-between"
            >
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
