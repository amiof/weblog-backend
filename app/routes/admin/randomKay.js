const app = require("express");
const { adminController } = require("../../Controller/admin/adminController");
const router = app.Router();

router.get("/create", adminController.randomkeyGenrator);

module.exports = {
  randomkey: router,
};
