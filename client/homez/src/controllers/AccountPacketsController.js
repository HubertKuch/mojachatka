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
}
