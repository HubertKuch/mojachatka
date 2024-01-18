import axios from "./axios";

class BoostingController {
  static async boostOffer(offerId, boostType) {
    const boosts = await this.getBoosts();

    if (boosts.data.length === 0) {
      return { ok: false, body: { message: "Nie posiadasz podbic" } };
    }

    const boost = boosts.data.find(
      (b) => b.properties.type === boostType && !b.properties.used,
    );

    if (!boost) {
      return { ok: false, body: { message: "Nie posiadasz podbic..." } };
    }

    if (boost.properties.type !== boostType) {
      return { ok: false, body: { message: "Nie posiadasz podbic...2" } };
    }

    console.log(boost);

    const res = await axios.post(
      boostType === "GLOBAL"
        ? "/createBoostedOffer"
        : "/createBoostedMainOffer",
      { offerId, boostId: boost.id },
    );

    return { ok: res.status === 200, body: res.data };
  }

  static async getBoosts() {
    return await axios.get("/getUserBoosts");
  }

  static async getAllBoosts() {
    return (await axios.get("/getBoostPackets")).data;
  }
}

export default BoostingController;
