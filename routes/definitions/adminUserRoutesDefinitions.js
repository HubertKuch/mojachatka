const router = require('express').Router({ mergeParams: true });
const { isAuthenticated, isAdmin } = require("../../utils/middlewares");
const AdminUserController = require('../controllers/AdminUserController');

router.patch("/banUser/:id", isAuthenticated, isAdmin, AdminUserController.banUser);

module.exports = router;
