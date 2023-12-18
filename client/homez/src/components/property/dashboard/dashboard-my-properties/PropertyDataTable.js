"use client";
import useOwnOffers from "@/hooks/useOwnOffers";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
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
                    width={110}
                    height={94}
                    className="w-100"
                    src={property.properties.images[0]}
                    alt="property"
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                  <div className="h6 list-title">
                    <Link href={`/single-v1/${property.id}`}>
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
              <div className="d-flex">
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

                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edi"
                />
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
