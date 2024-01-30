"use client";
import useOffers from "@/hooks/useOffers";
import formatPrice from "@/utilis/price";
import Image from "next/image";
import Link from "next/link";
import "swiper/swiper-bundle.min.css";

const FeaturedListings = () => {
  const listingsToShow = useOffers({ random: true, type: "MAIN" });

  return (
    <div className="featured-listings">
      <div className="row">
        {listingsToShow.map((listing) => (
          <div key={listing.id} className="col-lg-4 mb-4">
            <div className="item">
              <div className="listing-style1">
                <div className="list-thumb">
                  <Image
                    width={382}
                    height={248}
                    className="w-100 h-100 cover"
                    src={listing.properties.images[0]}
                    alt="listings"
                  />
                  <div className="sale-sticker-wrap">
                    {!listing.forRent && (
                      <div className="list-tag fz12">
                        <span className="flaticon-electricity me-2" />
                        PROMOWANA
                      </div>
                    )}
                  </div>

                  <div className="list-price">
                    {formatPrice(
                      listing.price ? listing.price : listing.pricePerMonth,
                    )}{" "}
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Link href={`/single-v1/${listing.id}`}>
                      {listing.title}
                    </Link>
                  </h6>
                  <p className="list-text">{listing.location}</p>
                  <hr className="mt-2 mb-2" />
                  <div className="list-meta2 d-flex justify-content-between align-items-center">
                    <span className="for-what">
                      {listing.type === "RENT" ? "Wynajem" : "Sprzedaż"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
