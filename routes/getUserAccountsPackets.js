const { getUserAccountPackets } = require('../services/packets');

const router = require('express').Router();

router.get("/boughtedPackets", async (req, res) => {
  const userId = req.payload.data.id;

  res.status(200).json(await getUserAccountPackets(userId));
})

module.exports = router;

