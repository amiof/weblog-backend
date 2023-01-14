const { HomeRoutesContorller } = require("../../Controller/api/HomeRoutes");
const { jwtTokenCheck } = require("../../middleware/checkToken");

const router = require("express").Router();

router.get("/", jwtTokenCheck, HomeRoutesContorller.indexpage);

module.exports = {
  HomeRouter: router,
};
