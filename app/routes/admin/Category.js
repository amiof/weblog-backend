const app = require("express");
const { categoryController } = require("../../Controller/admin/categoryController");
const router = app.Router();

router.get("/getAllCategories", categoryController.getAllCategores);
router.post("/addCategory", categoryController.addCategory);
router.post("/removeCategory", categoryController.removeCategory);
router.post("/updateCategory", categoryController.updateCategory);

module.exports = {
  categoryRotes: router,
};
