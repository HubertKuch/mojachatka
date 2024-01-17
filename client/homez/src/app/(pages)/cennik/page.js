"use client";

import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Pricing from "@/components/pages/pricing/Pricing";
import useStore from "@/store/store";

const PricingPlan = () => {
  const user = useStore((s) => s.user);

  const packetElements = [
    {
      type: "DEVELOPER",
      el: (
        <section
          key={"developer"}
          className={`our-pricing pb90 pt-0 ${user?.type === "DEVELOPER" ? "matched-type-packets-container" : ""
            }`}
        >
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center mb30">
                  <h2>Pakiety dla Developera</h2>
                </div>
              </div>
            </div>

            <Pricing type={"DEVELOPER"} user={user} />
          </div>
        </section>
      ),
    },
    {
      type: "AGENT",
      el: (
        <section
          key={"agent"}
          className={`our-pricing pb90 pt-0 ${user?.type === "AGENT" ? "matched-type-packets-container" : ""
            }`}
        >
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
      type: "INDIVIDUAL",
      el: (
        <section
          key={"individual"}
          className={`our-pricing pb90 pt-0 ${user?.type === "INDIVIDUAL" ? "matched-type-packets-container" : ""
            }`}
        >
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
                <h2 className="title">Membership Plans</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Plans</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {packetElements.sort((p) => p.type !== user?.type).map((p) => p.el)}

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
