class StatisticsController {
  static async getStatistics() {
    return await (
      await fetch(process.env.BASE_URL + "/statistics", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            process.env.TOKEN_KEY,
          )}`,
        },
      })
    ).json();
  }
}

export default StatisticsController;
