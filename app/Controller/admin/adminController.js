const httpStatus = require("http-status");
const { secretKeyGenerator } = require("../../utiles/utiles");
const { Controller } = require("../controller");

class adminController extends Controller {
  randomkeyGenrator(req, res, next) {
    try {
      const privateKey = secretKeyGenerator();
      return res.status(201).json({
        success: true,
        privateKey,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = {
  adminController: new adminController(),
};
