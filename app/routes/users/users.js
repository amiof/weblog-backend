const express = require("express");
const { userController } = require("../../Controller/user/userController");
const router = express.Router();

router.post("/login", userController.LoginUser);
router.post("/signin", userController.signin);
router.get("/allUsers", userController.getallusers);
router.post("/userById", userController.getUserById);

module.exports = {
  userRoutes: router,
};
