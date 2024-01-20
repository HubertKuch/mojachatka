import FeatureController from "@/controllers/FeatureController";
import { useState, useEffect } from "react";

export default function useAmenities() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    FeatureController.findAll().then(setFeatures);
  }, []);

  return features;
}
