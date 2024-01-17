import React, { useEffect, useState } from "react";

const PropertyAddress = ({ offer }) => {
  const [address, setAddress] = useState({});

  useEffect(() => {
    if (offer?.properties) {
      setAddress({
        address: offer.properties.address.address,
        city: offer.properties.address.city,
        state: offer.properties.address.region,
        zipCode: offer.properties.address.zipCode,
      });
    }
  }, [offer]);

  return (
    <>
      <div className="col-lg-12 col-xl-12">
        <div className="d-flex justify-content-between">
          <div className="pd-list">
            <p className="fw600 mb10 ff-heading dark-color">Adres</p>{" "}
            <p className="fw600 mb10 ff-heading dark-color">Miasto</p>{" "}
            <p className="fw600 mb-0 ff-heading dark-color">Wojewodztwo</p>{" "}
            <p className="fw600 mb-0 ff-heading dark-color">Kod pocztowy</p>{" "}
          </div>
          <div className="pd-list">
            <p className="text mb10">{address.address}</p>
            <p className="text mb10">{address.city}</p>
            <p className="text mb-0">{address.state}</p>
            <p className="text mb-0">{address.zipCode}</p>
          </div>
        </div>
      </div>
      {/* End col */}

      <div className="col-md-12"></div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
