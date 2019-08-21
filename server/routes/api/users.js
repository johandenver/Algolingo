const router = require("express").Router();
const userController = require("../../../controllers/userController");

// matches with /api/user/:id
router.route("/token/:token").get(userController.findUserId);
router
	.route("/:id")
	.get(userController.findUserInfo)
	.post(userController.saveAlgo);

module.exports = router;
