"use client";

import formatPrice from "@/utilis/price";
import React from "react";

const PropertyHeader = ({ offer }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title">{offer.title}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
              {offer.properties?.city || ""}, {offer.properties?.region || ""}
            </p>
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 ml0-sm ml10 bdrrn-sm"
              href="#"
            >
              {offer?.sellType === "BUY" ? "Sprzedaż" : "Wynajem"}
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            <h3 className="price mb-0">
              {formatPrice(offer?.price || offer?.pricePerMonth)}
              <small>{offer.price ? "" : ""}</small>
            </h3>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
