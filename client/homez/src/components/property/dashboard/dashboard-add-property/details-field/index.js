import React from "react";

const DetailsFiled = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Powierzchnia (w m2)
            </label>
            <input
              data-property
              type="number"
              name="sizeInMeters"
              className="form-control"
              placeholder="72"
            />
          </div>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Ilosc pokoi
            </label>
            <input
              type="number"
              data-property
              data-type="number"
              name="rooms"
              className="form-control"
              placeholder="4"
            />
          </div>

          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Ilosc sypialni
            </label>
            <input
              name="bedrooms"
              type="number"
              data-property
              data-type="number"
              className="form-control"
              placeholder="2"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailsFiled;
