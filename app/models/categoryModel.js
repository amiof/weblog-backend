const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  categoryName: { type: String, required: true },
});

module.exports = {
  categoryModel: mongoose.model("category", schema),
};
