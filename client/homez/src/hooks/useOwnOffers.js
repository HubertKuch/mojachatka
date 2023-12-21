import OffersControllers from "@/controllers/OffersController";
import { useState, useEffect } from "react";

export default function useOwnOffers(page) {
  const [offers, setOffers] = useState({});

  useEffect(() => {
    return () => {
      OffersControllers.findOwn(page).then(setOffers);
    };
  }, [page]);

  return offers;
}
