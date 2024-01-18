"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  return (
    <>
      {data.map((listing) => (
        <div
          className={`${colstyle ? "col-sm-6 col-lg-6" : "col-sm-12"}`}
          key={listing.id}
        >
          <div
            className={
              colstyle
                ? "listing-style1"
                : "listing-style1 listCustom listing-type"
            }
          >
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100  cover"
                style={{ height: "253px" }}
                src={listing.properties.images[0]}
                alt="listings"
              />
              {listing.isBoosted ? (
                <div className="sale-sticker-wrap">
                  {!listing.forRent && (
                    <div className="list-tag fz12">
                      <span className="flaticon-electricity me-2" />
                      PROMOWANA
                    </div>
                  )}
                </div>
              ) : null}
              <div className="list-price">
                {listing.price ? (
                  <span>{listing.price}PLN </span>
                ) : (
                  <span>${listing.pricePerMonth}PLN mo </span>
                )}
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/oferta/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <p className="list-text2">{listing.description}</p>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">
                  {listing.sellType === "BUY" ? "Sprzedaz" : "Najm"}
                </span>
                <span className="for-what">
                  {listing.properties.address.city}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
