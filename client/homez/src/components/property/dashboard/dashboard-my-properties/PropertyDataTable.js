"use client";
import Modal from "@/components/customs/Modal";
import BoostingController from "@/controllers/BoostingController";
import OffersControllers from "@/controllers/OffersController";
import useOwnOffers from "@/hooks/useOwnOffers";
import useUser from "@/hooks/useUser";
import formatPrice from "@/utilis/price";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Tooltip as ReactTooltip } from "react-tooltip";

const PropertyDataTable = ({ currPage, setMeta }) => {
  const offers = useOwnOffers(currPage);
  const user = useUser({ reload: true });
  const [type, setType] = useState("MAIN");
  const [id, setId] = useState(null);

  useEffect(() => {
    setMeta(offers?.meta);
  }, [offers, setMeta]);

  function getBoostOptions(property) {
    const types = [];

    if (!property?.properties?.boostType?.includes("MAIN"))
      types.push({ label: "Na strone glowna", value: "MAIN" });

    if (!property?.properties?.boostType?.includes("GLOBAL"))
      types.push({ label: "Na liste", value: "GLOBAL" });

    return types;
  }

  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Tytuł</th>
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
                    <Link rel="nofollow" href={`/oferta/${property.id}`}>
                      {property.title}
                    </Link>
                  </div>
                  <p className="list-text mb-0">{property.location}</p>
                  <div className="list-price">
                    <a href="#">
                      {property.price
                        ? formatPrice(property.price)
                        : formatPrice(property.pricePerMonth)}
                    </a>
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
                  <a href={`/edycja/${property.id}`}>
                    <span className="fas fa-pen fa" />
                  </a>
                </button>

                <Modal
                  title={`Czy na pewno chcesz usunąć ofertę ${property.title}? Ta operacja będzie niemożliwa do cofnięcia.
`}
                  trigger={
                    <button
                      className="icon"
                      style={{ border: "none" }}
                      data-tooltip-id={`delete-${property.id}`}
                    >
                      <span className="flaticon-bin" />
                    </button>
                  }
                  actions={
                    <button
                      className="form-control btn"
                      onClick={async () => {
                        OffersControllers.delete(property.id).then(() =>
                          window?.location?.reload(),
                        );
                      }}
                    >
                      Tak
                    </button>
                  }
                ></Modal>
                <Modal
                  title={`Podbicie oferty ${property.title}`}
                  trigger={
                    <button
                      className="icon"
                      style={{ border: "none" }}
                      data-tooltip-id="promote"
                      disabled={property.properties?.boostType?.length === 2}
                    >
                      <i class="fa-solid fa-rectangle-ad"></i>
                    </button>
                  }
                  actions={
                    <button
                      className="form-control btn"
                      onClick={async () => {
                        const err = document?.querySelector("#modal-error");

                        const res = await BoostingController.boostOffer(
                          property.id,
                          type,
                          id,
                        );

                        if (!res.ok) {
                          return (err.innerText = res.body?.message);
                        }

                        window?.location?.reload();
                      }}
                    >
                      Akceptuj
                    </button>
                  }
                >
                  {user?.UserBoosts.filter((b) => !b.properties.used).length >
                  0 ? (
                    <>
                      <p
                        className="fz16"
                        style={{ color: "red" }}
                        id={"modal-error"}
                      ></p>
                      <p className="fz16">
                        Wybierz typ promowania.{" "}
                        <Link href={"/cennik"}>
                          W razie braku możliwej promocji możesz zakupić pakiet
                          promocyjny
                        </Link>
                      </p>
                      <p className="fz16">Typ promocji</p>

                      <ReactSelect
                        isSearchable={false}
                        name="type"
                        onChange={({ value }) => {
                          setType(value);
                        }}
                        placeholder="Typ promocji"
                        options={getBoostOptions(property)}
                      />
                      <p className="fz16">Ilosc dni</p>
                      <ReactSelect
                        isSearchable={false}
                        name="type"
                        onChange={({ value }) => {
                          setId(value);
                        }}
                        placeholder={"Dni"}
                        options={user?.UserBoosts.filter(
                          (b) =>
                            b?.properties?.type?.includes(type) &&
                            !b.properties.used,
                        ).map((b) => ({
                          value: b.id,
                          label: `Na ${b?.properties?.days} dni`,
                        }))}
                      />
                    </>
                  ) : (
                    "GOwno"
                  )}
                </Modal>
                {property?.properties?.isBoosted ? (
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
                {property?.properties?.boostType?.length === 2 ? (
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
                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edytuj"
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
