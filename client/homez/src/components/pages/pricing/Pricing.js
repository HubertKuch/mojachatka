"use client";

import AccountPacketsController from "@/controllers/AccountPacketsController";
import useAccountPackets from "@/hooks/useAccountPackets";
import formatPrice from "@/utilis/price";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";

const Pricing = ({ type, user }) => {
  const packets = useAccountPackets(type);
  const [groups, setGroups] = useState({});
  const [group, setGroup] = useState([]);

  useEffect(() => {
    if (packets) {
      if (type === "AGENT" || type === "INDIVIDUAL")
        setGroups(
          Object.groupBy(packets, (packet) => packet.properties.listings),
        );
      else
        setGroups(
          Object.groupBy(packets, (packet) =>
            packet.properties.fields[0].replace("Ogłoszenia dla ", ""),
          ),
        );
    }
  }, [packets]);

  return (
    <>
      <div className="row" data-aos="fade-up" data-aos-delay="300">
        <p style={{ textAlign: "center" }}>
          Wybierz ilość {type === "DEVELOPER" ? "inwestycji" : "ogłoszeń"}
        </p>
        <ReactSelect
          className="mb-20"
          placeholder="Sprawdź cenę"
          onChange={({ value }) => {
            setGroup(groups[value]);
          }}
          options={Object.keys(groups)
            .sort()
            .map((key) => ({
              label: key,
              value: key,
            }))}
        />
        {group
          .sort((p1, p2) => p1.price - p2.price)
          .map((item, index) => (
            <div className="col-md-6 col-xl-4 mt-4" key={index}>
              <div
                className={`pricing_packages ${index === 1 ? "active" : ""}`}
              >
                <div className="heading mb60">
                  <h4 className={`package_title ${item.uniqueClass || ""}`}>
                    {item.name}
                  </h4>
                  <p className="text">{formatPrice(item.price / 100)} PLN</p>
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
                    <h4>Zawartość pakietu</h4>
                    <ul>
                      {item.properties.fields.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="far fa-check text-white bgc-dark fz15" />
                          {feature}
                        </li>
                      ))}
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
