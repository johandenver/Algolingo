const router = require("express").Router();
const algoController = require("../../../controllers/algoController");

router.route("/").get(algoController.findAll);
module.exports = router;
