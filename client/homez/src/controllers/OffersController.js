import objectToQueryUri from "../utilis/queryParams";
import instance from "./axios";

class OffersControllers {
  static async delete(id) {
    return (await instance.delete("/deleteOffer/" + id)).data;
  }

  static async getCats() {
    return (await instance.get("/categoriesStats")).data;
  }

  static async getCities(chars) {
    return await instance.get("/cities?chars=" + chars);
  }

  static async getRandom(type) {
    return (await instance.get(`/randomOffers?type=${type}`)).data;
  }

  static async findAll(query) {
    return (
      await instance.get(
        "/getAllOffers" + objectToQueryUri.objectToQueryUri(query),
      )
    ).data;
  }

  static async findOneById(id) {
    const res = await instance.get("/getOffer/" + id);

    return {
      status: res.status,
      offer: res.data,
    };
  }

  static async findOwn(page) {
    return (
      await instance.get(
        "/getUserOffers" + objectToQueryUri.objectToQueryUri({ page }),
      )
    ).data;
  }

  static async createOffer(body) {
    const res = await instance.post("/createOffer", JSON.stringify(body));

    return { body: res.data, status: res.status };
  }

  static async updateOffer(id, body) {
    return await instance.patch(`/editOffer/${id}`, JSON.stringify(body));
  }

  static async getSellTypes() {
    return (await instance.get("/sellTypes")).data;
  }

  static async getRegions() {
    return (await instance.get("/regions")).data;
  }

  static async getOfferTypes() {
    return (await instance.get("/offerTypes")).data;
  }
}

export default OffersControllers;
