const AdminFeatureController = require("../controllers/AdminFeatureController");
const router = require("express").Router();
const { isAuthenticated, isAdmin } = require("../../utils/middlewares");

router.post("/features", isAuthenticated, isAdmin, AdminFeatureController.add);

module.exports = router;
