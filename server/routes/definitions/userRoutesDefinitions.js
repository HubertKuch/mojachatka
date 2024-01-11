const UserController = require("../controllers/UserController");

const router = require("express").Router();

router.get("/publicUser/:id", UserController.getPublicProfile);

module.exports = router;
