const AuthController = require("../controllers/AuthController");
const router = require("express").Router();
const { isAuthenticated } = require("../../utils/middlewares");

router.get("/profile", isAuthenticated, AuthController.getProfile);
router.post("/login", AuthController.login);
router.post("/refreshToken", isAuthenticated, AuthController.refreshToken);
router.post("/register", AuthController.register);

module.exports = router;
