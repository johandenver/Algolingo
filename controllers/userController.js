const db = require("../server/models");

module.exports = {
	//Find the userId based on the token in local storage//
	//req.params.id should be the token that is found in localStorage on the frontend//
	//the token is the objectId of the userSession//
	findUserId: function(req, res) {
		console.log(req.params.token);
		db.UserSession.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	findName: function(req, res) {
		db.User.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	//using the userId
	saveAlgo: function(req, res) {
		db.User.findOneAndUpdate(
			{ _id: req.params.id },
			{
				$push: {
					userAnswers: {
						savedId: algorithm._id,
						savedAnswer: req.body
					}
				}
			}
		).then(dbModel => res.json(dbModel));
	}
};
