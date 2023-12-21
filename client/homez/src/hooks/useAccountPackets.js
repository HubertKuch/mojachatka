import AccountPacketsController from "@/controllers/AccountPacketsController";
import { useEffect, useState } from "react";

export default function useAccountPackets(accountType) {
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    AccountPacketsController.getPacketsForAccount(accountType).then(setPackets);
  });

  return packets;
}
