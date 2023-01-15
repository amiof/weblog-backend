const path = require("path");
const fs = require("fs");
const createPathUpload = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const pathDir = path.join(
    __dirname,
    "..",
    "..",
    "public",
    String(year),
    String(month),
    String(day)
  );
  fs.mkdirSync(String(pathDir), { recursive: true });

  return path.join("pulbic", String(year), String(month), String(day));
};

module.exports = {
  createPathUpload,
};
