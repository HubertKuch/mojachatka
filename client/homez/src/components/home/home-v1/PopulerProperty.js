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
            <div className="d-grid d-md-block text-center mt0-md">
              <Link href="/about" className="ud-btn btn-thm">
                Pragniemy Państwa poinformować iż nasz portal ogłoszeniowy
                opracowany został przez grono wybitnych specjalistów. Oparty
                został wyłącznie na krajowym kapitale dzięki czemu możemy
                utrzymać ceny na optymalnie niskim poziomie. Pragniemy również
                dodać iż każda sugestia z Państwa strony odnośnie funkcjonowania
                naszego portalu będzie niezwłocznie przeanalizowana przez
                naszych techników. Wszelkie uwagi oraz sugestie prosimy kierować
                na adres e-mail bezpośrednio do naszego zespołu
                techniczno-prawnego.
                <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* End .row */}
      </div>
    </section>
  );
}
