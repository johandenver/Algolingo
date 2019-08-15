const db = require("../server/models");

module.exports = {
	findAll: function(req, res) {
		console.log("herewe are");
		db.Algorithm.find(req.query)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
		console.log(req.query);
	},
	findById: function(req, res) {
		db.Algorithm.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
