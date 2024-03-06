const Router = require("express");
const router = new Router();
const postController = require("../controllers/post.controller");

router.post("/post", postController.createPost);
router.get("/post/user", postController.getPostsByUser);
router.get("/posts", postController.getAllPosts);
router.get("/post/:id", postController.getOnePost);
router.put("/post", postController.updatePost);
router.delete("/posts", postController.deleteAllPosts);
router.delete("/post/:id", postController.deleteOnePost);

module.exports = router;
