import objectToQueryUri from "../utilis/queryParams";

class OffersControllers {
  static async findAll(query) {
    return await (
      await fetch(
        process.env.BASE_URL +
          "/getAllOffers" +
          objectToQueryUri.objectToQueryUri(query),
      )
    ).json();
  }

  static async findOwn(page) {
    return await (
      await fetch(
        process.env.BASE_URL +
          "/getUserOffers" +
          objectToQueryUri.objectToQueryUri({ page }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              process.env.TOKEN_KEY,
            )}`,
          },
        },
      )
    ).json();
  }

  static async createOffer(body) {
    const res = await fetch(process.env.BASE_URL + "/createOffer", {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(process.env.TOKEN_KEY)}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    });

    return { body: await res.json(), status: res.status };
  }

  static async getSellTypes() {
    return await (await fetch(process.env.BASE_URL + "/sellTypes")).json();
  }

  static async getRegions() {
    return await (await fetch(process.env.BASE_URL + "/regions")).json();
  }

  static async getOfferTypes() {
    return await (await fetch(process.env.BASE_URL + "/offerTypes")).json();
  }
}

export default OffersControllers;
