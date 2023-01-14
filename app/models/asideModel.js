const { default: mongoose } = require("mongoose");

const shcema = new mongoose.Schema({
  text: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String },
  type: { type: String, default: "main" },
});

module.exports = {
  asideModel: mongoose.model("asid", shcema),
};
