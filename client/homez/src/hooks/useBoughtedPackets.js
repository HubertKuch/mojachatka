import AccountPacketsController from "@/controllers/AccountPacketsController";
import { useState, useEffect } from "react";

export default function useBoughtedPackets() {
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    return () => {
      AccountPacketsController.getBoughtedPackets().then(setPackets);
    };
  }, []);

  return packets;
}
