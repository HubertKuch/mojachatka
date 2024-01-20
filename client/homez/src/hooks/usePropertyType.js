import OffersControllers from "@/controllers/OffersController";
import { useState, useEffect } from "react";

export default function useSellType() {
  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {
    OffersControllers.getOfferTypes().then(setPropertyTypes);
  }, []);

  return propertyTypes.map((type) => {
    return { value: type, label: type };
  });
}
