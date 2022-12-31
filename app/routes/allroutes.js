const express = require("express");
const { HomeRouter } = require("./api/HomeRoutes");
const { userRoutes } = require("./users/users");
const app = express();
const router = express.Router();

router.use("/", HomeRouter);
router.use("/user", userRoutes);

module.exports = {
  allroutes: router,
};
