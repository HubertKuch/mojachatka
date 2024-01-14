import instance from "./axios";

class FeatureController {
  static async findAll() {
    return (await instance.get("/features")).data;
  }
}

export default FeatureController;
