import OffersControllers from "@/controllers/OffersController";
import { useState, useEffect } from "react";

export default function useSellType() {
  const [sellTypes, setSellTypes] = useState([]);

  useEffect(() => {
    OffersControllers.getSellTypes().then(setSellTypes);
  }, []);

  return sellTypes.map((type) => {
    return { value: type, label: type };
  });
}
