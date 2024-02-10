"use client";

import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";
import { useState } from "react";

const Hero = () => {
  const [filters, setFilters] = useState({ sellType: "BUY" });

  return (
    <>
      <div className="inner-banner-style1 text-center">
        <h2 className="hero-sub-title animate-up-1">Tutaj znajdziesz</h2>
        <h2 className="hero-title animate-up-2">swój wymarzony dom</h2>
        <HeroContent filters={filters} />
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal filters={filters} />
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
