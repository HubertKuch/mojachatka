const APIError = require("../../errors/APIError");
const AdminUserService = require("../../services/AdminUserService");

/*
 * | ban a user
 * | show banned accounts
 * | show users
 * | find user by id
 * | show user offers
 * */
class AdminUserController {
  // can change bids listings activated
  static async updateUser(req, res, next) {
    const { bids, listings, activated } = req.body;
    const id = req.params.id;

    if (!id) {
      return next(new APIError("Id must be specified", 400));
    }

    const body = { bids, listings, activated };
    const user = await AdminUserService.updateUser({ id }, body);

    res.status(200).json(user);
  }

  static async getUserById(req, res, next) {
    const id = req.params.id;

    if (!id) {
      return next(new APIError("Id must be specified", 400));
    }

    const user = await AdminUserService.getUserById({ id });

    if (!user) {
      return next(new APIError("User not found", 404));
    }

    res.status(200).json(user);
  }

  static async getUsers(req, res) {
    const where = {};

    if (req.params.ban) {
      where.ban = true;
    }

    res.status(200).json(await AdminUserService.getUsers());
  }

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
