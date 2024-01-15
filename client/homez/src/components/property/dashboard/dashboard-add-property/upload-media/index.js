import React from "react";
import UploadPhotoGallery from "./UploadPhotoGallery";

const UploadMedia = ({ onChange }) => {
  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Wrzuc zdjecia swojej oferty</h4>
      <form className="form-style1">
        <div className="row">
          <div className="col-lg-12">
            <UploadPhotoGallery onChange={onChange} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadMedia;
