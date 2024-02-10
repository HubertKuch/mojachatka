"use client";

import React, { useEffect, useState } from "react";
import ListingSidebar from "../../sidebar";
import FeaturedListings from "./FeatuerdListings";
import OffersControllers from "@/controllers/OffersController";
import PaginationTwo from "../../PaginationTwo";
import { useSearchParams } from "next/navigation";

export default function PropertyFilteringList() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCapacity, setPageCapacity] = useState(1);
  const [pageItems, setPageItems] = useState([]);
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({
    ...Object.fromEntries(searchParams),
  });

  useEffect(() => {
    OffersControllers.findAll(filters).then((res) => {
      setPageItems(res.offers.data);
      setPageCapacity(res.offers.meta.perPage);
    });
  }, [pageNumber]);

  return (
    <>
      <section className="pt0 pb90 bgc-f7">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-4 d-none d-lg-block">
              <ListingSidebar
                filters={filters}
                setPageItems={setPageItems}
                setPageCapacity={setPageCapacity}
              />
            </div>
            {/* End .col-lg-4 */}

            {/* start mobile filter sidebar */}
            <div
              className="offcanvas offcanvas-start p-0"
              tabIndex="-1"
              id="listingSidebarFilter"
              aria-labelledby="listingSidebarFilterLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="listingSidebarFilterLabel">
                  Filtry
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body p-0">
                <ListingSidebar
                  filters={filters}
                  setPageItems={setPageItems}
                  setPageCapacity={setPageCapacity}
                />
              </div>
            </div>
            {/* End mobile filter sidebar */}

            <div className="col-lg-8">
              <div className="row align-items-center mb20">
                {/* <TopFilterBar
                  pageContentTrac={pageContentTrac}
                  colstyle={colstyle}
                  setColstyle={setColstyle}
                  setCurrentSortingOption={setCurrentSortingOption}
                /> 
                */}
              </div>
              {/* End TopFilterBar */}

              <div className="row mt15">
                <FeaturedListings data={pageItems} />
              </div>
              {/* End .row */}

              <div className="row">
                <PaginationTwo
                  pageCapacity={pageCapacity}
                  data={pageItems}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                />
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    </>
  );
}
