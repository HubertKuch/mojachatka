"use client";

import AccountPacketsController from "@/controllers/AccountPacketsController";
import useAccountPackets from "@/hooks/useAccountPackets";
import dedupe from "dedupe";
import Image from "next/image";
import React from "react";

const Pricing = ({ type, user }) => {
  const packets = useAccountPackets(type);

  return (
    <>
      <div className="row" data-aos="fade-up" data-aos-delay="300">
        {packets
          .sort((p1, p2) => p1.price - p2.price)
          .map((item, index) => (
            <div className="col-md-6 col-xl-4" key={index}>
              <div
                className={`pricing_packages ${index === 1 ? "active" : ""}`}
              >
                <div className="heading mb60">
                  <h4 className={`package_title ${item.uniqueClass || ""}`}>
                    {item.name}
                  </h4>
                  <p className="text">{item.price / 100} PLN</p>
                  <Image
                    width={70}
                    height={70}
                    className="price-icon"
                    src={"images/icon/pricing-icon-1.svg"}
                    alt="icon"
                  />
                </div>
                <div className="details">
                  <div className="list-style1 mb40">
                    <h4>Profity</h4>
                    <ul>
                      {item.properties.fields.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="far fa-check text-white bgc-dark fz15" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <h4>Podbicia</h4>
                    <ul>
                      {dedupe(
                        item.properties.boosts
                          .map((boost, idx, arr) => {
                            const counts = {};
                            arr.forEach((item) => {
                              const key = JSON.stringify(item);
                              counts[key] = (counts[key] || 0) + 1;
                            });

                            return arr.map((item) => {
                              const key = JSON.stringify(item);
                              return { ...item, x: counts[key] };
                            });
                          })
                          .flat(2),
                      ).map((boost, featureIndex) => {
                        console.log(boost);
                        return (
                          <li key={featureIndex}>
                            <i className="far fa-check text-white bgc-dark fz15" />
                            Podbicie na {boost.days} dni{" "}
                            {boost.type === "MAIN" ? "na strone glowna" : ""} x{" "}
                            {boost.x}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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
                      disabled={user?.type !== type}
                      href="#"
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
      {/* End .row */}
    </>
  );
};

export default Pricing;
