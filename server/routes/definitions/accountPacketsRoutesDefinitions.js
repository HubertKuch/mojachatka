const { isAuthenticated } = require('../../utils/middlewares');
const AccountPacketsController = require('../controllers/AccountPacketsController');
const router = require('express').Router({ mergeParams: true });

router.get('/getAccountPackets', AccountPacketsController.getAccountPackets);
router.get("/allowedPackets", AccountPacketsController.getAllowedAccountPackets);
router.get("/boughtedPackets", isAuthenticated, AccountPacketsController.getUserAccountPackets);
router.post("/buyPacket", isAuthenticated, AccountPacketsController.buyPacket);

module.exports = router;
