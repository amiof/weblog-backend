const { default: validation } = require("ajv/dist/vocabularies/validation");
const createHttpError = require("http-errors");
const { categoryModel } = require("../../models/categoryModel");
const { validateCategory } = require("../../validation/categoryValidation");
const { Controller } = require("../controller");

class categoryController extends Controller {
  async addCategory(req, res, next) {
    try {
      const { categoryName } = req.body;
      const valid = validateCategory({ categoryName: categoryName });
      const addToDb = await categoryModel.create({ categoryName });
      console.log(addToDb);
      return res.status(201).json({
        status: 201,
        success: true,
        message: "your category is created",
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllCategores(req, res, next) {
    try {
      const data = await categoryModel.find({});
      return res.status(201).json({
        status: 201,
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  removeCategory(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  updateCategory(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  categoryController: new categoryController(),
};
