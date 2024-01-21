"use client";

import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Pricing from "@/components/pages/pricing/Pricing";
import BoostingController from "@/controllers/BoostingController";
import useBoosts from "@/hooks/useBoosts";
import useStore from "@/store/store";
import formatPrice from "@/utilis/price";
import { useState } from "react";
import Popup from "reactjs-popup";

const PricingPlan = () => {
  const user = useStore((s) => s.user);
  const boosts = useBoosts();
  const [popup, setPopup] = useState(false);

  const packetElements = [
    {
      type: "INDIVIDUAL",
      el: (
        <section key={"individual"} className={`our-pricing pb90 pt-0 `}>
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center mb30">
                  <h2>Pakiety indywidualne</h2>
                </div>
              </div>
            </div>

            <Pricing type={"INDIVIDUAL"} user={user} />
          </div>
        </section>
      ),
    },
    {
      type: "AGENT",
      el: (
        <section key={"agent"} className={`our-pricing pb90 pt-0 `}>
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center mb30">
                  <h2>Pakiety dla agenta</h2>
                </div>
              </div>
            </div>

            <Pricing type={"AGENT"} />
          </div>
        </section>
      ),
    },
    {
      type: "DEVELOPER",
      el: (
        <section key={"developer"} className={`our-pricing pb90 pt-0 `}>
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center mb30">
                  <h2>Pakiety dla dewelopera</h2>
                </div>
              </div>
            </div>

            <Pricing type={"DEVELOPER"} user={user} />
          </div>
        </section>
      ),
    },
  ];

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Pakiety</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {user
        ? packetElements.find((p) => p.type === user?.type)?.el
        : packetElements.map((pe) => pe.el)}
      <Popup closeOnDocumentClick onClose={() => setPopup(false)}>
        <p
          style={{
            background: "white",
            fontSize: "1.5rem",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          Nie udalo sie utworzyc platnosci
        </p>
      </Popup>

      <section className={`our-pricing container pb90 pt-0`}>
        <div className="container row">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb30">
                <h2>Podbicia</h2>
              </div>
            </div>
          </div>
          {boosts.map((item, idx) => (
            <div className="col-md-6 col-xl-4" key={idx}>
              <div className={`pricing_packages`}>
                <div className="heading mb60">
                  <h4 className={`package_title `}>{item.name}</h4>
                  <p className="text">{formatPrice(item.price / 100)}</p>
                </div>
                <div className="details">
                  <div className="d-grid">
                    <button
                      onClick={async () => {
                        try {
                          const url = await BoostingController.buyBoost(
                            item.id,
                          );

                          window?.open(url, "mozillaTab");
                        } catch (e) {
                          setPopup(true);
                        }
                      }}
                      className="ud-btn btn-thm-border text-thm"
                    >
                      Kup
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default PricingPlan;
