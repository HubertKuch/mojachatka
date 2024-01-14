"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import EnergyClass from "@/components/property/property-single-style/common/EnergyClass";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import HomeValueChart from "@/components/property/property-single-style/common/HomeValueChart";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";
import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import PropertyViews from "@/components/property/property-single-style/common/property-view";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
import VirtualTour360 from "@/components/property/property-single-style/common/VirtualTour360";
import AllReviews from "@/components/property/property-single-style/common/reviews";
import ContactWithAgent from "@/components/property/property-single-style/sidebar/ContactWithAgent";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PropertyGallery from "@/components/property/property-single-style/single-v6/PropertyGallery";
import React from "react";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
import WalkScore from "@/components/property/property-single-style/common/WalkScore";
import useOffer from "@/hooks/useOffer";
import { redirect } from "next/dist/server/api-utils";

const SingleV6 = ({ params }) => {
  const offer = useOffer(params.id);

  if (offer && offer.status === 404) {
    window.location.replace("/not-found");
  }

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      {/* Property All Single  */}
      <section className="pt60 pb90 bgc-f7">
        <div className="container">
          <div className="row">
            <PropertyHeader offer={offer?.offer || {}} />
          </div>
          {/* End .row */}

          <div className="row wrap">
            <div className="col-lg-12">
              <PropertyGallery offer={offer?.offer || {}} />
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Podstawowe informacje</h4>
                <div className="row">
                  <OverView offer={offer.offer} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Opis nieruchomości</h4>
                <ProperytyDescriptions offer={offer.offer} />
                {/* End property description */}

                <h4 className="title fz17 mb30 mt50">Dodatkowe informacje</h4>
                <div className="row">
                  <PropertyDetails offer={offer.offer} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="row">
                <div className="col-lg-6 ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30 mt30">Adres</h4>
                  <div className="row">
                    <PropertyAddress offer={offer.offer} />
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className="col-lg-6 ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Szczegóły ogłoszenia</h4>
                  <div className="row">
                    <PropertyFeaturesAminites offer={offer.offer} />
                  </div>
                </div>
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Kontakt</h4>
                <InfoWithForm id={offer?.offer} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
};

export default SingleV6;
