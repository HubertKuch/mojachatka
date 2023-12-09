const { isAuthenticated } = require('../../utils/middlewares');
const OffersController = require('../controllers/OffersController');
const router = require('express').Router({ mergeParams: true });

router.get('/getAllOffers', OffersController.getOffers);
router.get('/getOffer/:id', OffersController.getById);
router.get('/getUserOffers', isAuthenticated, OffersController.getUserOffers);
router.get("/offerTypes", OffersController.getOffersTypes);
router.post('/createOffer', isAuthenticated, OffersController.createOffer);
router.patch('/editOffer/:offerId', isAuthenticated, OffersController.editOffer);
router.delete('/deleteImage/:offerId/:imgId', isAuthenticated, OffersController.deleteImage);;


module.exports = router;

