import instance from "./axios";

class StatisticsController {
  static async getStatistics() {
    return (await instance.get("/statistics")).data;
  }
}

export default StatisticsController;
