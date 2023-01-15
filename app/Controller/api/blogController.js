const createHttpError = require("http-errors");
const { blogModel } = require("../../models/blogModel");
const { userModel } = require("../../models/userModel");
const { Controller } = require("../controller");

class blogController extends Controller {
  async addBlog(req, res, next) {
    try {
      const { auteur, title, image, category, mainText } = req.body;
      const createBlog = await blogModel.create({ auteur, title, image, category, mainText });
      console.log(createBlog);
    } catch (error) {
      next(error);
    }
  }

  async getBlogById(req, res, next) {
    try {
      const _id = req.body.id;
      const blog = await blogModel.find({ _id });
      if (!blog) throw createHttpError.NotAcceptable("this id is not valid");
      return res.status(201).json({
        status: 201,
        success: true,
        blog,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAllBlogs(req, res, next) {
    try {
      const Blogs = await blogModel.find({});
      if (!Blogs.length) throw createHttpError.NotFound("not found blog for show");
      return res.status(201).json({
        status: 201,
        success: true,
        blogs: Blogs,
      });
    } catch (error) {
      next(error);
    }
  }
  async getMyBookmarkblogs(req, res, next) {
    try {
      const userId = req.body.userid;
      const user = await userModel.find({ _id: userId });
      const bookmarks = user.bookmarks;
      const arryBookmarks = await blogModel.find({ id: { $in: bookmarks } });
      if ((arryBookmarks.length = 0)) throw createHttpError.NotFound("you have not bookmark blogs");
      return res.status(201).json({
        status: 201,
        success: true,
        bookmarkBlogs: arryBookmarks,
      });
    } catch (error) {
      next(error);
    }
  }

  getmyLikedBlogs(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  blogController: new blogController(),
};
