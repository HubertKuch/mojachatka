"use client";

import { useEffect } from "react";

export default function RedirectToMain() {
  useEffect(() => {
    if (window) {
      window.location.replace(
        "/oferty?sellType=BUY&minPrice=0&maxPrice=9007199254740991",
      );
    }
  });
  return <></>;
}
