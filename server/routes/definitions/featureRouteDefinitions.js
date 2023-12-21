const FeatureController = require("../controllers/FeatureController");
const router = require("express").Router();

router.get("/features", FeatureController.find);
router.get("/features/:id", FeatureController.findById);

module.exports = router;
