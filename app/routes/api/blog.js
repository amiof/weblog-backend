const { Router } = require("express");
const app = require("express");
const { blogController } = require("../../Controller/api/blogController");

const router = Router();

router.get("/allBlogs", blogController.getAllBlogs);
router.post("/blogById", blogController.getBlogById);
router.post("/blogFav", blogController.getMyBookmarkblogs);
router.post("/blogsLiked", blogController.getmyLikedBlogs);
router.post("/addBlog", blogController.addBlog);
module.exports = {
  blogRouters: router,
};
