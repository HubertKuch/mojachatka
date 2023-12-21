class FeatureController {
  static async findAll() {
    return await (await fetch(process.env.BASE_URL + "/features")).json();
  }
}

export default FeatureController;
