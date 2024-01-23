"use client";

import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import InvoiceFooter from "@/components/pages/invoice/InvoiceFooter";
import InvoiceTable from "@/components/pages/invoice/InvoiceTable";
import InvoiceTopData from "@/components/pages/invoice/InvoiceTopData";
import PrintInvoice from "@/components/pages/invoice/PrintInvoice";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import useCatsStats from "@/hooks/useCatsStats";
import chunk from "chunk";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Invoice = () => {
  const { cats, iconByType, aliases } = useCatsStats();

  return (
    <>
      <section className="our-invoice bgc-gmart-gray pb200">
        <DboardMobileNavigation />
        <DefaultHeader />

        <section style={{ padding: "20px" }}>
          <h3>Kategorie</h3>
        </section>

        <section style={{ padding: "0" }}>
          <div className="row">
            {chunk(cats, 3)
              .map((cats) => {
                return cats.map((cat) => (
                  <div
                    key={cat.category}
                    className="item col-lg-3 col-md-4 col-sm-6"
                  >
                    <Link href={`/oferty?type=${cat.category}`}>
                      <div className="iconbox-style1">
                        <span
                          className={`icon ${iconByType[cat.category] || ""}`}
                        />
                        <div
                          className="iconbox-content"
                          style={{ textTransform: "capitalize" }}
                        >
                          <h6 className="title">
                            {aliases[cat.category].toLowerCase()}
                          </h6>
                          <p className="text mb-0">{`${cat.count} ofert`}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ));
              })
              .flat(2)}
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default Invoice;
