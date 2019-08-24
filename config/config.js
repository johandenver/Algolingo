// Copy this file as config.js in the same folder, with the proper database connection URI.

module.exports = {
	db:
		process.env.MONGODB_URI ||
		"mongodb://algouser:algouser1@ds051605.mlab.com:51605/heroku_4dx7r16z"
};
