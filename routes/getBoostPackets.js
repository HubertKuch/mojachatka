const { db } = require('../utils/db');

const router = require('express').Router();

router.get("/", async (req, res) => {
  res.status(200).json(await db.boostPacket.findMany());
});

module.exports = router;

