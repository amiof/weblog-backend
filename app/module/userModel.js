const mongoose = require("mongoose");
const { Schema } = mongoose;

const userschema = new Schema({
  username: { type: String, required: true },
  email: { type: String, require: true, lowercase: true },
  firstnaem: { type: String },
  lastname: { type: String },
  moblie: { type: Number },
  password: { type: String, require: true },
  role: { type: [String], default: "USER" },
  token: { type: String },
});

module.exports = {
  userModel: mongoose.model("user", userschema),
};
