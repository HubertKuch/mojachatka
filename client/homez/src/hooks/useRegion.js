import OffersControllers from "@/controllers/OffersController";
import { useState, useEffect } from "react";

export default function useRegion() {
  const regions = {
    DOLNOSLASKIE: "Dolnośląskie",
    KUJAWSKOPOMORSKIE: "Kujawsko-Pomorskie",
    LUBELSKIE: "Lubelskie",
    LUBUSKIE: "Lubuskie",
    LODZKIE: "Łódzkie",
    MALOPOLSKIE: "Małopolskie",
    MAZOWIECKIE: "Mazowieckie",
    OPOLSKIE: "Opolskie",
    PODLASKIE: "Podlaskie",
    PODKARPACKIE: "Podkarpackie",
    POMORSKIE: "Pomorskie",
    SLASKIE: "Śląskie",
    SWIETOKRZYSKIE: "Świętokrzyskie",
    WARMINSKOMAZURSKIE: "Warmińsko-Mazurskie",
    WIELKOPOLSKIE: "Wielkopolskie",
    ZACHODNIOPOMORSKIE: "Zachodniopomorskie",
  };

  return Object.entries(regions).map(([key, val]) => {
    return { label: val, value: key };
  });
}
