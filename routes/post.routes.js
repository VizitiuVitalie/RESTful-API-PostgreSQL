const Router = require("express");
const router = new Router();
const postController = require("../controllers/post.controller");

router.post("/posts", postController.createPost);
router.get("/posts/user", postController.getPostsByUser);
router.get("/posts", postController.getAllPosts);
router.get("/posts/:id", postController.getOnePost);
router.put("/posts", postController.updatePost);
router.delete("/posts", postController.deleteAllPosts);
router.delete("/posts/:id", postController.deleteOnePost);

module.exports = router;
