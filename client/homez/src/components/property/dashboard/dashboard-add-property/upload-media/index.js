"use client";
import React from "react";
import UploadPhotoGallery from "./UploadPhotoGallery";
import { useFormikContext } from "formik";

const UploadMedia = ({ onChange, content }) => {
  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Wrzuć zdjęcia swojej oferty *</h4>
      <form className="form-style1">
        <div className="row">
          <div className="col-lg-12">
            <UploadPhotoGallery content={content} onChange={onChange} />
          </div>
        </div>
      </form>
      <button
        className="form-control ud-btn btn-white2"
        type="button"
        onClick={() => {
          if (typeof document !== "undefined")
            document?.querySelector('[aria-controls="nav-item3"]')?.click();
        }}
      >
        Dalej
      </button>
    </div>
  );
};

export default UploadMedia;
