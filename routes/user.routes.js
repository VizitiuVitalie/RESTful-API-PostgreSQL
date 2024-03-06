const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/user", userController.createUser);
router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getOneUser);
router.put("/user", userController.updateUser);
router.delete("/user", userController.deleteAllUsers);
router.delete("/user/:id", userController.deleteOneUser);

module.exports = router;
