const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "destiantin");
  },
  filename: function (req, file, cb) {
    const type = path.extname(file.originalname);
    cb(null, String(Date.now() + type));
  },
});

const uploadMulter = multer({ storage });

module.exports = {
  uploadMulter,
};
