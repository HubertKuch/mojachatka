const { isAuthenticated } = require("../../utils/middlewares");
const OffersController = require("../controllers/OffersController");
const router = require("express").Router({ mergeParams: true });

router.get("/getAllOffers", OffersController.getOffers);
router.get("/randomOffers", OffersController.getRandom);
router.get("/getOffer/:id", OffersController.getById);
router.get("/getUserOffers", isAuthenticated, OffersController.getUserOffers);
router.get("/offerTypes", OffersController.getOffersTypes);
router.get("/categoriesStats", OffersController.getCategories);
router.get("/sellTypes", OffersController.getSellTypes);
router.get("/regions", OffersController.getRegions);
router.get("/cities", OffersController.findCities);
router.post("/reportOffer", isAuthenticated, OffersController.report);
router.delete(
  "/deleteOffer/:id",
  isAuthenticated,
  OffersController.deleteOffer,
);
router.post("/createOffer", isAuthenticated, OffersController.createOffer);
router.patch(
  "/editOffer/:offerId",
  isAuthenticated,
  OffersController.editOffer,
);
router.delete(
  "/deleteImage/:offerId/:imgId",
  isAuthenticated,
  OffersController.deleteImage,
);

module.exports = router;
