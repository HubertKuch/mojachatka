import axios from "./axios";

class BoostingController {
  static async boostOffer(offerId, type, id) {
    const res = await axios.post(
      type === "GLOBAL" ? "/createBoostedOffer" : "/createBoostedMainOffer",
      { offerId, boostId: id },
    );

    return { ok: res.status === 200, body: res.data };
  }

  static async buyBoost(id) {
    const res = await axios.post(`/buyBoost/${id}`);

    if (res.status === 401) {
      return window?.location?.replace("/logowanie");
    }

    if (res.status === 200) {
      return res.data.payment.continueUrl;
    }

    throw new Error("Nie udalo sie utworzyc platnosci");
  }

  static async getBoosts() {
    return await axios.get("/getUserBoosts");
  }

  static async getAllBoosts() {
    return (await axios.get("/getBoostPackets")).data;
  }
}

export default BoostingController;
