"use client";

import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Pricing from "@/components/pages/pricing/Pricing";
import useBoosts from "@/hooks/useBoosts";
import useStore from "@/store/store";

const PricingPlan = () => {
  const user = useStore((s) => s.user);
  const boosts = useBoosts();

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
                <h2 className="title">Pakiety</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {user
        ? packetElements.find((p) => p.type !== user?.type)?.el
        : packetElements.map((pe) => pe.el)}

      <section className={`our-pricing pb90 pt-0`}>
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
                  <p className="text">{item.price / 100} PLN</p>
                </div>
                <div className="details">
                  <div className="d-grid">
                    <button
                      onClick={async () => {
                        const res = await AccountPacketsController.buyPacket(
                          item.id,
                        );

                        if (res.payment) {
                          window?.open(res.payment.continueUrl, "mozillaTab");
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
