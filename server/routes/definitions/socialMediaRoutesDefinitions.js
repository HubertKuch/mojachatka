const router = require("express").Router();
const { isAuthenticated } = require("../../utils/middlewares");
const SocialMediaController = require("../controllers/SocialMediaController");

router.get(
  "/socialMedia",
  isAuthenticated,
  SocialMediaController.getUsersMedia,
);
router.put(
  "/socialMedia",
  isAuthenticated,
  SocialMediaController.putSocialMedia,
);

module.exports = router;
