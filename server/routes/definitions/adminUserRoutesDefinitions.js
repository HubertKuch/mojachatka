const router = require("express").Router({ mergeParams: true });
const { isAuthenticated, isAdmin } = require("../../utils/middlewares");
const AdminUserController = require("../controllers/AdminUserController");

router.get("/users", isAuthenticated, isAdmin, AdminUserController.getUsers);
router.get(
  "/users/:id",
  isAuthenticated,
  isAdmin,
  AdminUserController.getUserById,
);
router.patch(
  "/users/:id",
  isAuthenticated,
  isAdmin,
  AdminUserController.updateUser,
);
router.patch(
  "/banUser/:id",
  isAuthenticated,
  isAdmin,
  AdminUserController.banUser,
);

module.exports = router;
