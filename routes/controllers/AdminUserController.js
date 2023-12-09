const APIError = require("../../errors/APIError");
const AdminUserService = require("../../services/AdminUserService");

class AdminUserController {
  static async banUser(req, res, next) {
    const userId = req.params.id;
    const loggedInUser = req.payload.data.id;
    const cause = req.body.cause;

    try {
      if (!userId || !cause) {
        return next(new APIError("User id and cause must be provided", 400));
      }

      if (loggedInUser === userId) {
        return next(new APIError("You can not ban your self", 409));
      }

      const ban = await AdminUserService.banUser(userId, cause);

      res.status(200).json(ban);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AdminUserController;
