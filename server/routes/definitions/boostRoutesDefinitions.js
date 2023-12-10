const { isAuthenticated } = require('../../utils/middlewares');
const BoostController = require('../controllers/BoostController');
const router = require('express').Router({ mergeParams: true });

router.get("/getBoostPackets", BoostController.getBoostPackets);
router.get("/getUserBoosts", isAuthenticated, BoostController.getUserBoosts);
router.post('/createBoostedMainOffer', isAuthenticated, BoostController.createBoostedMainOffer);
router.post('/createBoostedOffer', isAuthenticated, BoostController.createBoostedOffer);

module.exports = router;
