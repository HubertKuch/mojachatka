const UserService = require("../../services/UserService");

class UserController {
  static async getPublicProfile({ params }, res) {
    if (!params.id) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.status(200).json(await UserService.getPublicUser(params.id));
  }
}

module.exports = UserController;
