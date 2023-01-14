const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
const { PRIVATEKAY } = require("../constants");
//i do it
//add save user to req for blogController

const jwtTokenCheck = (req, res, next) => {
  try {
    const Token = req.headers?.authorization;

    const pureToken = Token?.slice(7);
    if (!pureToken) throw createHttpError.Unauthorized("a problem in token occurred");
    const jwtStatus = jwt.verify(pureToken, PRIVATEKAY);
    if (!jwtStatus) throw createHttpError.Unauthorized("a problem in token verify occurred");
    if (jwtStatus.iat > jwtStatus.exp)
      throw createHttpError.Unauthorized("your token is expire please login again");

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  jwtTokenCheck,
};
