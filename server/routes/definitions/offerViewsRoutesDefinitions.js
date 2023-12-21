const router = require("express").Router();
const { isAuthenticated } = require("../../utils/middlewares");
const OfferViewsController = require("../controllers/OfferViewsController");

router.get(
  "/statistics",
  isAuthenticated,
  OfferViewsController.getAccountViews,
);

module.exports = router;
