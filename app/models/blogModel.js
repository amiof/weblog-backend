const { default: mongoose, mongo } = require("mongoose");

const blogSchima = new mongoose.Schema(
  {
    auteur: { type: mongoose.Types.ObjectId, required: true },
    title: { type: String, require: true },
    description: { type: String },
    image: { type: String, require: true },
    tags: { type: [String], default: [] },
    category: { type: mongoose.Types.ObjectId, required: true },
    mainText: { type: String, required: true },
    likes: { type: [mongoose.Types.ObjectId], default: [] },
    dislikes: { type: [mongoose.Types.ObjectId], default: [] },
    comments: { type: [], default: [] },
  },
  { timestamps: true }
);

module.exports = {
  blogModel: mongoose.model("blog", blogSchima),
};
