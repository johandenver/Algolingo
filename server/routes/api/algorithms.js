const router = require("express").Router();
const algoController = require("../../../controllers/algoController");

router.route("/").get(algoController.findAll);
router.get("/:id").get(algoController.findUserId);

module.exports = router;
