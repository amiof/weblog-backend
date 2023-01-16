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
  async getCategoryById(req, res, next) {
    try {
      const id = req.path;
      const _id = id.slice(13);
      console.log(_id);
      const category = await categoryModel.findOne({ _id });
      if ((category.length = 0)) throw createHttpError.BadRequest("your id is not available");
      return res.status(201).json({
        status: 201,
        success: true,
        category,
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
  async updateCategory(req, res, next) {
    try {
      const { categoryName, oldId: _id } = req.body;
      const category = await categoryModel.findOne({ _id });
      if ((category.length = 0)) throw createHttpError.BadRequest("your id is not valid ");
      const rename = await categoryModel.updateOne({ _id }, { $set: { categoryName } });
      console.log(rename);
      return res.status(201).json({
        status: 201,
        success: true,
        message: "your category name is changed ",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  categoryController: new categoryController(),
};
