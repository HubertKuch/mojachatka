const { db } = require('../utils/db');

const router = require('express').Router();

router.get("/getUserBoosts", async (req, res) => {
  const user = req.payload.data;

  res.status(200).json(await db.userBoosts.findMany({ where: { userId: user.id } }));
});

module.exports = router;
