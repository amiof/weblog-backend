const { HomeRoutesContorller } = require("../../Controller/api/HomeRoutes");

const router = require("express").Router();

router.get("/", HomeRoutesContorller.indexpage);

module.exports = {
  HomeRouter: router,
};
