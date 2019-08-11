const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const algorithmSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	answer: { type: String, required: true }
});

module.exports = mongoose.model("Algorithm", algorithmSchema);
