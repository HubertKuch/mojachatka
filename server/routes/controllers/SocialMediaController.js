const APIError = require("../../errors/APIError");
const SocialMediaService = require("../../services/SocialMediaService");
const { getSocialMediaValidator } = require("../../schemas/UsersDataSchemas");

class SocialMediaController {
  static async putSocialMedia(req, res, next) {
    const validator = getSocialMediaValidator();

    validator(req.body);

    if (validator.errors) {
      return next(new APIError("Invalid body"));
    }

    res
      .status(200)
      .json(
        await SocialMediaService.putSocialMedia(req.payload.data.id, req.body),
      );
  }

  static async getUsersMedia(req, res) {
    res
      .status(200)
      .json(await SocialMediaService.getUserSocialMedia(req.payload.data.id));
  }
}

module.exports = SocialMediaController;
