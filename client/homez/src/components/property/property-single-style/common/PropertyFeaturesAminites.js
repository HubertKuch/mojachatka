import React, { useEffect, useState } from "react";

const PropertyFeaturesAminites = ({ offer }) => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    setAmenities(offer?.features || []);
  }, [offer]);

  return (
    <>
      {amenities.map((row, rowIndex) => (
        <div key={rowIndex} className="col-sm-6 col-md-4">
          <div className="pd-list">
            <p className="text mb10">
              <i className="fas fa-circle fz6 align-middle pe-2" />
              {row.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
