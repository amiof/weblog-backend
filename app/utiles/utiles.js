const bcrypt = require("bcrypt");

function createPassHashed(pass) {
  const salt = bcrypt.genSaltSync(10);
  let password = pass.toString();
  const passHashed = bcrypt.hashSync(password, salt);

  return passHashed;
}

module.exports = {
  createPassHashed,
};
