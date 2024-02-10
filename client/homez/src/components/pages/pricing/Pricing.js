"use client";

import AccountPacketsController from "@/controllers/AccountPacketsController";
import useAccountPackets from "@/hooks/useAccountPackets";
import formatPrice from "@/utilis/price";
import dedupe from "dedupe";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactSelect, { useStateManager } from "react-select";
import { Tooltip } from "react-tooltip";

const Pricing = ({ type, user }) => {
  const packets = useAccountPackets(type);
  const [groups, setGroups] = useState({});
  const [group, setGroup] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const [options, setOptions] = useState([]);

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

  useEffect(() => {
    setOptions(
      Object.keys(groups)
        .sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)[0]);
          const numB = parseInt(b.match(/\d+/)[0]);

          return numA - numB;
        })
        .map((key) => ({
          label: type === "AGENT" ? `${key} ogłoszeń` : `${key}`,
          value: key,
        })),
    );

    console.log(user?.type);
  }, [groups]);

  useEffect(() => {
    if (group) {
      setSelected(
        Object.keys(groups)
          .sort()
          .map((key) => ({
            label: key,
            value: key,
          }))[0],
      );
    }
  }, [groups]);

  useEffect(() => {
    if (selected) {
      setGroup(groups[selected.value]);
    }
  }, [selected]);

  return (
    <>
      <div className="row" data-aos="fade-up" data-aos-delay="300">
        {type !== "INDIVIDUAL" && (
          <>
            <p style={{ textAlign: "center", fontSize: "1.2em" }}>
              Wybierz ilość {type === "DEVELOPER" ? "inwestycji" : "ogłoszeń"}
            </p>
            <ReactSelect
              defaultValue={selected}
              value={selected}
              styles={{
                menu: (prov) => ({ ...prov, zIndex: 99999999 }),
                menuList: (prov) => ({ ...prov, zIndex: 99999999 }),
                container: (prov) => ({
                  ...prov,
                  width: "100%",
                }),
              }}
              menuPosition="absolute"
              className="mb-20"
              placeholder="Sprawdź cenę"
              onChange={({ value, label }) => {
                setSelected({ value, label });
                setGroup(groups[value]);
              }}
              options={options}
            />
          </>
        )}
        {dedupe(type === "INDIVIDUAL" ? packets : group, (val) => val.name)
          .sort(
            (p1, p2) => Number.parseInt(p1.price) - Number.parseInt(p2.price),
          )
          .map((item, index) => (
            <div
              className="col-md-6 col-xl-4 mt-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className={`pricing_packages ${index === 1 ? "active" : ""}`}
              >
                <div className="heading mb60">
                  <h4 className="package_title">{item.name}</h4>
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
                    {!item?.properties?.allowedFor?.includes(user?.type) && (
                      <Tooltip id={item.id}>
                        Twoje konto jest innego typu
                      </Tooltip>
                    )}
                    <button
                      data-tooltip-id={item.id}
                      onClick={async () => {
                        const res = await AccountPacketsController.buyPacket(
                          item.id,
                        );

                        if (res.payment) {
                          window?.open(res.payment.continueUrl, "mozillaTab");
                        }
                      }}
                      disabled={
                        !item?.properties?.allowedFor?.includes(user?.type)
                      }
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
