"use client";

import AuthController from "@/controllers/AuthController";
import { useEffect } from "react";

export default function Wyloguj() {
  useEffect(() => {
    AuthController.logout().then(() => {
      if (window) {
        window?.location?.replace("/logowanie");
      }
    });
  });

  return <></>;
}
