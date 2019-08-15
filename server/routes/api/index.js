const express = require("express");
const router = express.Router();
const signin = require("./signin");
const algoRoute = require("./algorithms");

router.use("/", signin);
router.use("/library", algoRoute);

module.exports = router;
