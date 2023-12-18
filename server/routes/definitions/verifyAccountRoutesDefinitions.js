const VerifyAccountController = require("../controllers/VerifyAccountController");
const router = require("express").Router();

router.get("/verifyEmail", VerifyAccountController.verifyEmail);

module.exports = router;
