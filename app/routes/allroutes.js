const express = require("express");
const { randomkey } = require("./admin/randomKay");
const { blogRouters } = require("./api/blog");
const { HomeRouter } = require("./api/HomeRoutes");
const { userRoutes } = require("./users/users");
const router = express.Router();

router.use("/", HomeRouter);
router.use("/user", userRoutes);
router.use("/randomkey", randomkey);
router.use("/blogs", blogRouters);

module.exports = {
  allroutes: router,
};
