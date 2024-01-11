require("./axios");

class UserController {
  static async getPublic(id) {
    return await (
      await fetch(process.env.BASE_URL + "/publicUser/" + id)
    ).json();
  }
}

export default UserController;
