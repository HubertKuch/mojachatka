import objectToQueryUri from "../utilis/queryParams";
import instance from "./axios";

class OffersControllers {
  static async getCats() {
    return (await instance.get("/categoriesStats")).data;
  }

  static async findAll(query) {
    return await (
      await fetch(
        process.env.BASE_URL +
        "/getAllOffers" +
        objectToQueryUri.objectToQueryUri(query),
      )
    ).json();
  }

  static async findOneById(id) {
    const res = await fetch(process.env.BASE_URL + "/getOffer/" + id, {
      method: "GET",
    });

    return {
      status: res.status,
      offer: await res.json(),
    };
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
