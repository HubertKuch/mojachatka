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

  const [selectedTab, setSelectedTab] = useState("INDIVIDUAL");

  return (
    <>
      <DefaultHeader />
      <MobileMenu />

      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a
                      onClick={() => setSelectedTab("INDIVIDUAL")}
                      class={`nav-link ${
                        selectedTab === "INDIVIDUAL" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Pakiety indywidualne
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      onClick={() => setSelectedTab("AGENT")}
                      class={`nav-link ${
                        selectedTab === "AGENT" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Pakiety dla agenta
                    </a>
                  </li>
                  <li
                    onClick={() => setSelectedTab("DEVELOPER")}
                    class={`nav-link ${
                      selectedTab === "DEVELOPER" ? "active" : ""
                    }`}
                  >
                    <a class="nav-link" href="#">
                      Pakiety dla dewelopera
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {user
        ? packetElements.find((p) => p.type === selectedTab)?.el
        : packetElements.map((pe) => pe.el)}
      <Popup open={popup} closeOnDocumentClick onClose={() => setPopup(false)}>
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

                          if (url) window?.open(url, "mozillaTab");
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
