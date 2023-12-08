const OffersController = require('../controllers/OffersController');
const router = require('express').Router();

router.get('/getAllOffers', OffersController.getOffers);
router.post('/createOffer', OffersController.createOffer);


module.exports = router;

