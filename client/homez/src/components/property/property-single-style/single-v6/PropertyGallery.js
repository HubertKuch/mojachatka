"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Map from "./Map";

const PropertyGallery = ({ offer }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="row">
        <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
          <div className="ps-v4-hero-tab">
            <div
              className="tab-content overflow-visible"
              id="pills-tabContent2"
            >
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="p-0">
                  <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <div className="col-lg-12">
                      <div className="">
                        <Swiper
                          height={"auto !important"}
                          loop={true}
                          spaceBetween={10}
                          navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                          }}
                          thumbs={{
                            swiper:
                              thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                          }}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="mySwiper2"
                        >
                          {(offer.properties?.images || []).map((item, i) => (
                            <SwiperSlide key={i}>
                              <Image
                                height={736}
                                width={409}
                                src={item}
                                alt="gallery"
                                className="w-100 h-auto bdrs12"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="row">
                          <div className="col-lg-7 col-md-8">
                            <Swiper
                              onSwiper={setThumbsSwiper}
                              loop={true}
                              spaceBetween={10}
                              slidesPerView={4}
                              freeMode={true}
                              watchSlidesProgress={true}
                              modules={[FreeMode, Navigation, Thumbs]}
                              className="mySwiper mt20"
                            >
                              {(offer.properties?.images || []).map(
                                (item, i) => (
                                  <SwiperSlide key={i}>
                                    <Image
                                      height={90}
                                      width={83}
                                      src={item}
                                      alt="image"
                                      className="w-100 bdrs12 cover pointer"
                                    />
                                  </SwiperSlide>
                                ),
                              )}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End tab-pane */}

              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <Map />
              </div>
              {/* End map type listing */}

              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <iframe
                  className="h510 w-100"
                  src="https://www.google.com/maps/embed?pb=!4v1553797194458!6m8!1m7!1sR4K_5Z2wRHTk9el8KLTh9Q!2m2!1d36.82551718071267!2d-76.34864590837246!3f305.15097!4f0!5f0.7820865974627469"
                  allowFullScreen
                />
              </div>
              {/* End map locatoin fnder */}
            </div>
          </div>
          {/* End ps-v4-hero-tab content */}
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default PropertyGallery;
