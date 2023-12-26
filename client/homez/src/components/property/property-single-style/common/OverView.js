import React from "react";

const OverView = ({ offer }) => {
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: offer?.properties?.bedrooms,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: offer?.type,
    },
    {
      icon: "flaticon-home",
      label: "Powierzchnia",
      value: offer?.properties.sizeInMeters + "m2",
    },
  ];

  if (offer?.properties?.bathrooms) {
    overviewData.push({
      icon: "flaticon-shower",
      label: "Bath",
      value: offer?.properties?.bathrooms,
    });
  }

  if (offer?.properties?.garages) {
    overviewData.push({
      icon: "flaticon-garage",
      label: "Bath",
      value: offer?.properties?.garages,
    });
  }

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
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
