const router = require("express").Router();
const userController = require("../../../controllers/userController");

// matches with /api/user/:id
router.route("/token/:token").get(userController.findUserId);
router
	.route("/:id")
	.get(userController.findUserInfo)
	.post(userController.saveAlgo);
router
	.route("/:id/answer")
	.get(userController.showAnswer)
	.post(userController.updateAnswer);

router.route("/:id/remove").post(userController.deleteSaved);
module.exports = router;
