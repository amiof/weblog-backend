const createHttpError = require("http-errors");
const httpStatus = require("http-status");
const { userModel } = require("../../module/userModel");
const { createPassHashed, createToken } = require("../../utiles/utiles");
const { Controller } = require("../controller");

class userController extends Controller {
  getallusers(req, res, next) {
    try {
      return res.send("user not found");
    } catch (error) {
      next(error);
    }
  }

  getUserById(req, res, next) {
    try {
      return console.log(req);
    } catch (error) { }
  }
  LoginUser(req, res, next) {
    try {
      console.log(req);
    } catch (error) {
      next(error);
    }
  }
  async signin(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const userfind = await userModel.find({ username });
      if (userfind.length > 0) {
        throw createHttpError.Unauthorized("this user are existed");
      } else {
        const passhashed = createPassHashed(password);
        const token = createToken(username, "1d");
        await userModel.create({
          username,
          email,
          password: passhashed,
          token,
        });
        console.log(token);
        return res.status("201").json({
          status: 201,
          token,
          username,
          email,
          password: passhashed,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  removeUser(req, res, next) {
    try {
      console.log(req);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  userController: new userController(),
};
