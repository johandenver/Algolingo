const db = require("../server/models");

module.exports = {
	//Find the userId based on the token in local storage//
	//req.params.id should be the token that is found in localStorage on the frontend//
	//the token is the objectId of the userSession//
	findUserId: function(req, res) {
		console.log(req.params.token);
		db.UserSession.findById({ _id: req.params.token }, { userId: true })
			.then(dbModel => {
				res.json(dbModel);
			})
			.catch(err => res.status(422).json(err));
	},

	findUserInfo: function(req, res) {
		db.User.find({ _id: req.params.id }, { firstName: 1, userAnswers: 1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	//using the userId
	saveAlgo: function(req, res) {
		console.log("saveAlgo", req.params.id, req.body);
		db.User.findOneAndUpdate(
			{ _id: req.params.id },
			{
				$push: {
					userAnswers: req.body
				}
			},
			{ new: true, projection: { userAnswers: true } }
		).then(dbModel => {
			console.log("dbModel", dbModel);
			res.json(dbModel);
		});
	}

	//update the answer for something the user has already started//
	//add delete
	//create
};
