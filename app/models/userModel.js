const mongoose = require("mongoose");
const { Schema } = mongoose;

const userschema = new Schema(
  {
    name: { type: String },
    lastName: { type: String },
    username: { type: String, required: true },
    email: { type: String, require: true, lowercase: true },
    firstnaem: { type: String },
    lastname: { type: String },
    moblie: { type: Number },
    password: { type: String, require: true },
    role: { type: [String], default: "USER" },
    token: { type: String },
    likes: { type: [mongoose.Types.ObjectId], default: [] },
    dislikes: { type: [mongoose.Types.ObjectId], default: [] },
    bookmarks: { type: [mongoose.Types.ObjectId], default: [] },
    blogComments: { type: [mongoose.Types.ObjectId], default: [] },
  },
  { timestamps: true }
);

module.exports = {
  userModel: mongoose.model("user", userschema),
};
