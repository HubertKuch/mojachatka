"use client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Field, connect, useFormikContext } from "formik";
import useOffer from "@/hooks/useOffer";

const imageUrlToBase64 = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
    reader.onerror = reject;
  });
};

const UploadPhotoGallery = ({ content, id }) => {
  const { setFieldValue, values } = useFormikContext();
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    Promise.all(
      (content?.properties?.images || [])?.map(
        async (img) => await imageUrlToBase64(img),
      ),
    ).then(setUploadedImages);
  }, []);

  useEffect(() => {
    setFieldValue(
      "properties.images",
      JSON.parse(JSON.stringify(uploadedImages)),
    );
  }, [uploadedImages]);

  const handleUpload = (files) => {
    const newImages = [...uploadedImages];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setUploadedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleUpload(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDelete = (index) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  return (
    <>
      <div
        className="upload-img position-relative overflow-hidden bdrs12 text-center mb30 px-2"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Field
          name="images"
          hidden
          as="textarea"
          value={JSON.stringify(uploadedImages)}
        />
        <div className="icon mb30">
          <span className="flaticon-upload" />
        </div>
        <h4 className="title fz17 mb10">
          Wybierz lub upuść zdjęcia twojej nieruchomości
        </h4>
        <p className="text mb25">
          Obrazy muszą być w formacie JPEG lub PNG i muszą mieć co najmniej
          2048x768
        </p>
        <label className="ud-btn btn-white">
          Przeglądaj pliki
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            multiple
            className="ud-btn btn-white"
            onChange={(e) => handleUpload(e.target.files)}
            style={{ display: "none" }}
          />
        </label>
      </div>

      {/* Display uploaded images */}
      <div className="row profile-box position-relative d-md-flex align-items-end mb50">
        {uploadedImages.map((imageData, index) => (
          <div className="col-md-4 col-lg-3" key={index}>
            <div className="profile-img mb20 position-relative">
              <Image
                width={212}
                height={194}
                className="w-100 bdrs12 cover"
                src={imageData}
                alt={`Uploaded Image ${index + 1}`}
              />
              <button
                style={{ border: "none" }}
                className="tag-del"
                title="Delete Image"
                onClick={() => handleDelete(index)}
                type="button"
                data-tooltip-id={`delete-${index}`}
              >
                <span className="fas fa-trash-can" />
              </button>

              <ReactTooltip
                id={`delete-${index}`}
                place="right"
                content="Delete Image"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UploadPhotoGallery;
