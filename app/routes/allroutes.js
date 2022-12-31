const express = require("express");
const { randomkey } = require("./admin/randomKay");
const { HomeRouter } = require("./api/HomeRoutes");
const { userRoutes } = require("./users/users");
const router = express.Router();

router.use("/", HomeRouter);
router.use("/user", userRoutes);
router.use("/randomkey", randomkey);

module.exports = {
  allroutes: router,
};
