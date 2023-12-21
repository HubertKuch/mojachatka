import OffersControllers from "@/controllers/OffersController";
import { useState, useEffect } from "react";

export default function useRegion() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    return () => {
      OffersControllers.getRegions().then(setRegions);
    };
  }, []);

  return regions.map((type) => {
    return { value: type, label: type };
  });
}
