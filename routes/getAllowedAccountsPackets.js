const { UserType } = require("@prisma/client");
const APIError = require('../errors/APIError');
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const { type } = req.query;

  if (!Object.values(UserType).includes(type)) {
    next(new APIError("Unknow userType", 400));
  }


});

module.exports = router;

