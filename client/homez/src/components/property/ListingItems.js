import formatPrice from "@/utilis/price";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingItems = ({ data }) => {
  return (
    <>
      {data?.map((listing) => (
        <div className="col-md-6" key={listing.id}>
          <div className="listing-style1">
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100 h-100 cover"
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {listing.featured && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    PROMOWANA
                  </div>
                )}
              </div>

              <div className="list-price">
                {listing.price
                  ? formatPrice(listing.price)
                  : formatPrice(listing.pricePerMonth)}
                <span></span>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link rel="nofollow" href={`/oferta/${listing.id}`}>
                  {listing.title}
                </Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">For Rent</span>
                <div className="icons d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListingItems;
