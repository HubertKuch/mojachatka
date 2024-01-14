import queryParams from "@/utilis/queryParams";
import instance from "./axios";

export default class AccountPacketsController {
  static async getPacketsForAccount(type) {
    return (
      await instance.get(
        "/allowedPackets" + queryParams.objectToQueryUri({ type }),
      )
    ).data;
  }

  static async buyPacket(packetId) {
    return (await instance.post("/buyPacket", JSON.stringify({ packetId })))
      .data;
  }

  static async getBoughtedPackets() {
    return (await instance.get("/boughtedPackets")).data;
  }
}
