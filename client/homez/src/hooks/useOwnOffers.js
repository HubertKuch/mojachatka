import OffersControllers from "@/controllers/OffersController";
import { useState, useEffect } from "react";

export default function useOwnOffers(page) {
  const [offers, setOffers] = useState({});

  useEffect(() => {
    OffersControllers.findOwn(page).then(setOffers);
  }, []);

  return offers;
}
