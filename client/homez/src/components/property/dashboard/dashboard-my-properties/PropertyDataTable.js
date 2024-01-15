"use client";
import Modal from "@/components/customs/Modal";
import BoostingController from "@/controllers/BoostingController";
import useOwnOffers from "@/hooks/useOwnOffers";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ReactSelect from "react-select";
import { Tooltip as ReactTooltip } from "react-tooltip";

const PropertyDataTable = ({ currPage, setMeta }) => {
  const offers = useOwnOffers(currPage);

  useEffect(() => {
    setMeta(offers?.meta);
  }, [offers]);

  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Tytul</th>
          <th scope="col">Akcje</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {offers.data?.map((property) => (
          <tr key={property.id}>
            <th scope="row">
              <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                <div className="list-thumb">
                  <Image
                    width={230}
                    height={110}
                    className="w-100"
                    src={property.properties.images[0]}
                    alt="property"
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                  <div className="h6 list-title">
                    <Link href={`/oferta/${property.id}`}>
                      {property.title}
                    </Link>
                  </div>
                  <p className="list-text mb-0">{property.location}</p>
                  <div className="list-price">
                    <a href="#">{property.price}</a>
                  </div>
                </div>
              </div>
            </th>
            <td className="vam">
              <div
                style={{ display: "grid", gap: "10px", alignItems: "right" }}
              >
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${property.id}`}
                >
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${property.id}`}
                >
                  <span className="flaticon-bin" />
                </button>
                <Modal
                  title={`Podbicie oferty ${property.title}`}
                  trigger={
                    <button
                      className="icon"
                      style={{ border: "none" }}
                      data-tooltip-id="promote"
                      disabled={property.isBoosted}
                    >
                      <i class="fa-solid fa-rectangle-ad"></i>
                    </button>
                  }
                  actions={
                    <button
                      className="form-control btn"
                      onClick={async () => {
                        const value =
                          document.querySelector("[name=type]").value;

                        const err = document.querySelector("#modal-error");

                        if (!["GLOBAL", "MAIN"].includes(value)) {
                          return (err.innerText = "Nie poprawny rodzaj");
                        }

                        const res = await BoostingController.boostOffer(
                          property.id,
                          value,
                        );

                        if (!res.ok) {
                          return (err.innerText = res.body?.message);
                        }

                        window.location.reload();
                      }}
                    >
                      Akceptuj
                    </button>
                  }
                >
                  <p
                    className="fz16"
                    style={{ color: "red" }}
                    id={"modal-error"}
                  ></p>
                  <p className="fz16">
                    Wybierz typ promowania. W razie braku mozliwej promocje
                    mozesz zakupic pakiet promocyjny.
                  </p>
                  <ReactSelect
                    name="type"
                    options={[
                      {
                        value: "MAIN",
                        label: "Standardowe",
                      },
                      {
                        value: "GLOBAL",
                        label: "Na strone glowna",
                      },
                    ]}
                  />
                </Modal>
                {property.isBoosted ? (
                  <button disabled className="icon" style={{ border: "none" }}>
                    {" "}
                    <i
                      className="fa-solid fa-star"
                      style={{
                        color: "#f6d32d",
                      }}
                    ></i>
                  </button>
                ) : null}
                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edytuj"
                />
                {property.isBoosted ? (
                  <ReactTooltip
                    id={"promote"}
                    place="top"
                    content={"Ta oferta jest juz promowana"}
                  />
                ) : (
                  <ReactTooltip id={"promote"} place="top" content={"Promuj"} />
                )}
                <ReactTooltip
                  id={`delete-${property.id}`}
                  place="top"
                  content="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropertyDataTable;
