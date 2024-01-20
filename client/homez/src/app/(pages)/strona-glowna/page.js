"use client";

import { useEffect } from "react";

export default function RedirectToMain() {
  useEffect(() => {
    if (window) {
      window.location.replace("/");
    }
  });
  return <></>;
}
