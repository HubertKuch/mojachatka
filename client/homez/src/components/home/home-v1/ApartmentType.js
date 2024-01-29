"use client";
import useCatsStats from "@/hooks/useCatsStats";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ApartmentType = () => {
  const { cats, iconByType, aliases } = useCatsStats();

  return (
    <Swiper
      className="overflow-visible"
      spaceBetween={30}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".next__active",
        prevEl: ".prev__active",
      }}
      pagination={{
        el: ".pagination__active",
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
    >
      {cats.map((type) => (
        <SwiperSlide key={type.id}>
          <div className="item">
            <Link href={`/oferty?type=${type.category}`}>
              <div className="iconbox-style1">
                <span className={`icon ${iconByType[type.category] || ""}`} />
                <div className="iconbox-content">
                  <h6 className="title" style={{ textTransform: "capitalize" }}>
                    {aliases[type.category].toLowerCase()}
                  </h6>
                  <p className="text mb-0">{`${type.count} nieruchomości`}</p>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ApartmentType;
