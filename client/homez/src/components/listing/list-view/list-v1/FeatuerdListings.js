"use client";

import formatPrice from "@/utilis/price";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  return (
    <>
      {data.map((listing) => (
        <Link key={listing.id} href={`/oferta/${listing.id}`}>
          <div className={`${colstyle ? "col-sm-6 col-lg-6" : "col-sm-12"}`}>
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
                {listing.properties.isBoosted ? (
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
                    <span>{formatPrice(listing.price)}</span>
                  ) : (
                    <span>{formatPrice(listing.pricePerMonth)}</span>
                  )}
                </div>
              </div>
              <div className="list-content">
                <h6 className="list-title">{listing.title}</h6>
                <p className="list-text">{listing.location}</p>
                <p className="list-text2">{listing.description}</p>
                <hr className="mt-2 mb-2" />
                <div className="list-meta2 d-flex justify-content-between align-items-center">
                  <span className="for-what">
                    {listing.sellType === "BUY" ? "Sprzedaż" : "Najem"}
                  </span>
                  <span className="for-what">
                    {listing.properties.address.city}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default FeaturedListings;
