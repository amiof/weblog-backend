const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PRIVATEKAY } = require("../constants");
const crypto = require("crypto");
function createPassHashed(pass) {
  const salt = bcrypt.genSaltSync(10);
  let password = pass.toString();
  const passHashed = bcrypt.hashSync(password, salt);

  return passHashed;
}
function createToken(payload, expire) {
  return jwt.sign(payload, PRIVATEKAY, { expiresIn: expire });
}

function secretKeyGenerator() {
  const random16 = crypto.randomBytes(16);

  const random32 = crypto.randomBytes(32);

  const secretkey = crypto.createCipheriv("aes-256-gcm", random32, random16);
  let encryptData = secretkey.update(
    String(Math.random() * 1000),
    "utf-8",
    "hex"
  );
  return encryptData;
}
module.exports = {
  createPassHashed,
  createToken,
  secretKeyGenerator,
};
