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
import React, { useEffect, useLayoutEffect, useState } from "react";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
import WalkScore from "@/components/property/property-single-style/common/WalkScore";
import useOffer from "@/hooks/useOffer";
import { redirect } from "next/dist/server/api-utils";
import HouseOverview from "@/components/property/single/HouseOverView";
import HouseDatails from "@/components/property/single/HouseDetails";
import ApartmentDatails from "@/components/property/single/ApartmentDetails";
import ApartmentOverview from "@/components/property/single/ApartmentOverView";
import PlotOverView from "@/components/property/single/PlotOverView";
import PlotDetails from "@/components/property/single/PlotDetails";
import GarageDetails from "@/components/property/single/GarageDetails";
import GarageOverView from "@/components/property/single/GarageOverView";
import RoomOverView from "@/components/property/single/RoomOverView";
import RoomDetails from "@/components/property/single/RoomDetails";
import CommercialLocalOverView from "@/components/property/single/CommercialLocalOverView";
import CommercialLocalDetails from "@/components/property/single/CommercialLocalDetails";
import WareHouseOverView from "@/components/property/single/WarehouseOverView";
import WarehouseDetails from "@/components/property/single/WarehouseDetails";

const SingleV6 = ({ params }) => {
  const offer = useOffer(params.id);
  const [overview, setOverview] = useState();
  const [details, setDetails] = useState();

  if (offer && offer.status === 404) {
    window?.location?.replace("/not-found");
  }

  useEffect(() => {
    if (offer) {
      const OVERVIEW_BY_TYPE = {
        DOM: <HouseOverview offer={offer?.offer} />,
        MIESZKANIE: <ApartmentOverview offer={offer?.offer} />,
        DZIALKA: <PlotOverView offer={offer?.offer} />,
        GARAZ: <GarageOverView offer={offer?.offer} />,
        POKOJ: <RoomOverView offer={offer?.offer} />,
        LOKAL: <CommercialLocalOverView offer={offer?.offer} />,
        MAGAZYN: <WareHouseOverView offer={offer?.offer} />,
      };

      const DETAILS_BY_TYPE = {
        DOM: <HouseDatails offer={offer?.offer} />,
        MIESZKANIE: <ApartmentDatails offer={offer?.offer} />,
        DZIALKA: <PlotDetails offer={offer?.offer} />,
        GARAZ: <GarageDetails offer={offer?.offer} />,
        POKOJ: <RoomDetails offer={offer?.offer} />,
        LOKAL: <CommercialLocalDetails offer={offer?.offer} />,
        MAGAZYN: <WarehouseDetails offer={offer?.offer} />,
      };

      setOverview(OVERVIEW_BY_TYPE[offer?.offer?.type] || null);
      setDetails(DETAILS_BY_TYPE[offer?.offer?.type] || null);
    }
  }, [offer]);

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
            <div className="row col-lg-12">
              <PropertyGallery offer={offer?.offer || {}} />
              <div className="row ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="col-md-6 col-sm-12">
                  <h4 className="title fz17 mb30">Podstawowe informacje</h4>
                  <div className="">{overview}</div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h4 className="title fz17 mb30">Adres</h4>
                  <div className="">
                    <PropertyAddress offer={offer.offer} />
                  </div>
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Opis nieruchomości</h4>
                <ProperytyDescriptions offer={offer.offer} />
              </div>
              {/* End .ps-widget */}

              <div
                className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative"
                style={{ textTransform: "capitalize" }}
              >
                {details}
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Kontakt</h4>
                <InfoWithForm offer={offer.offer} id={offer?.offer} />
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
