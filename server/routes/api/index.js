const express = require("express");
const router = express.Router();
const signin = require("./signin");
const algoRoute = require("./algorithms");
const userRoute = require("./users");

router.use("/", signin);
router.use("/library", algoRoute);
router.use("/user", userRoute);

module.exports = router;
