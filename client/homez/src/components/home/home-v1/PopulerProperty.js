"use client";

import Link from "next/link";

import React, { useEffect, useState } from "react";
import PopularListings from "./PopularListings";
import listings from "@/data/listings";
export default function PopulerProperty() {
  const [pageData, setPageData] = useState([]);
  const [currentType, setCurrentType] = useState("rent");
  useEffect(() => {
    if (currentType == "rent") {
      const filtered = listings.filter((elm) => elm.forRent);
      setPageData(filtered);
    } else {
      const filtered = listings.filter((elm) => !elm.forRent);
      setPageData(filtered);
    }
  }, [currentType]);

  return (
    <section className="atut">
      <div className="bgc-dark container">
        {/* Atuty */}
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-12">
            <PopularListings data={pageData} />

            <div className="d-grid d-md-block text-center mt0-md ud-btn btn-thm">
              Atuty naszej strony: przejrzysta strona, prostota obsługi,
              niezmiennie niska cena. Kliknij{" "}
              <a style={{ color: "black" }} href="/about">
                TUTAJ
              </a>
              , aby przeczytaj więcej szczegółów na temat mojejchatki
            </div>
          </div>
        </div>

        {/* End .row */}
      </div>
    </section>
  );
}
