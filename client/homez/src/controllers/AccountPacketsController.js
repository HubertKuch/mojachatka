import queryParams from "@/utilis/queryParams";

export default class AccountPacketsController {
  static async getPacketsForAccount(type) {
    return await (
      await fetch(
        process.env.BASE_URL +
          "/allowedPackets" +
          queryParams.objectToQueryUri({ type }),
      )
    ).json();
  }

  static async buyPacket(packetId) {
    return (
      await fetch(process.env.BASE_URL + "/buyPacket", {
        method: "POST",
        body: JSON.stringify({ packetId }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            process.env.TOKEN_KEY,
          )}`,
          "Content-Type": "application/json",
        },
      })
    ).json();
  }
}
