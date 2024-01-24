const AuthController = require("../controllers/AuthController");
const router = require("express").Router({ mergeParams: true });
const { isAuthenticated } = require("../../utils/middlewares");

router.get("/authenticated", AuthController.authenticated);
router.get("/profile", isAuthenticated, AuthController.getProfile);
router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);
router.post("/register", AuthController.register);

module.exports = router;
