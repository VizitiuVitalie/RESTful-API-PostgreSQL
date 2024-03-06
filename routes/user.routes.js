const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getOneUser);
router.put("/users", userController.updateUser);
router.delete("/users", userController.deleteAllUsers);
router.delete("/users/:id", userController.deleteOneUser);

module.exports = router;
