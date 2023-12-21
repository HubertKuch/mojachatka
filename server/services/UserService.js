const { db } = require("../utils/db");

class UserService {
  static async findById(id) {
    return await db.user.findUnique({ where: { id } });
  }
}

module.exports = UserService;
