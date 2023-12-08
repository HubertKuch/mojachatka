const { getPackets } = require('../services/packets');

const router = require('express').Router({ mergeParams: true });

router.get('/getAccountPackets', async (req, res) => {
  res.status(200).json(await getPackets());
});

module.exports = router;

