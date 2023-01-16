const createHttpError = require("http-errors");
const httpStatus = require("http-status");
const { userModel } = require("../../models//userModel");
const { createPassHashed, createToken } = require("../../utiles/utiles");
const { Controller } = require("../controller");
const bcrypt = require("bcrypt");

class userController extends Controller {
  async getallusers(req, res, next) {
    try {
      const users = await userModel.find({});

      return res.status(201).json({
        status: 201,
        success: true,
        users,
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const { Id } = req.body;
      const users = await userModel.find({ _id: Id });
      if (users.length == 0) throw createHttpError.BadRequest("user not available");
      return res.status(201).json({
        status: 201,
        success: true,
        users,
      });
      return console.log(req);
    } catch (error) {}
  }
  async LoginUser(req, res, next) {
    try {
      const { username, password } = req.body;
      const findUser = await userModel.find({ username });
      if (!findUser) throw createHttpError.Unauthorized("this user or password not available");
      const passcheck = await bcrypt.compare(password, findUser[0].password);
      if (!passcheck) throw createHttpError.Unauthorized("this user or password not available");
      const token = createToken(username, "1d");
      const tokenUpdate = await this.updateDB({ _id: findUser[0]._id }, { token: token });
      if (tokenUpdate.modifiedCount == 0)
        throw createHttpError.Unauthorized("token update dont done");

      return res.status(201).json({
        status: 201,
        success: true,
        message: "user login successfully and update db token",
        OldToken: findUser[0].token,
        newToken: token,
      });
    } catch (error) {
      next(error);
    }
  }
  async signup(req, res, next) {
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
        return res.status("200").json({
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
  async updateDB(id, payload) {
    const user = await userModel.updateOne(id, { $set: payload });
    return user;
  }
}

module.exports = {
  userController: new userController(),
};
