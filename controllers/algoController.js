const db = require("../server/models");

module.exports = {
	findAll: function(req, res) {
		console.log("here we are");
		db.Algorithm.find()
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		db.Algorithm.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	//Find the userId based on the token in local storage//
	//the token is the objectId of the userSession//
	findUserId: function(req, res) {
		db.UserSession.findById({ _id: req.params.id }).then(dbModel =>
			res.json(dbModel)
		);
	}
	//using the user
};
