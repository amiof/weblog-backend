const { Controller } = require("../controller");

class HomeRoutesContorller extends Controller {
  indexpage(req, res, next) {
    return res.send("hi clinent");
  }
}

module.exports = {
  HomeRoutesContorller: new HomeRoutesContorller(),
};
