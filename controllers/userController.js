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
		db.User.findOne(
			{ _id: req.params.id },
			{ firstName: 1, userAnswers: 1 }
		)
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
	},

	showAnswer: function(req, res) {
		db.User.findById(req.params.id).then(user => {
			var answers = user.userAnswers;
			console.log("answers", answers);
			// console.log("saved answer", answer.savedAnswer);
			var promises = answers.map(answer => {
				console.log("answer savedID", answer.savedId);
				return db.Algorithm.findOne({ _id: answer.savedId })
					.lean()
					.then(algorithm => {
						algorithm.savedAnswer = answer.savedAnswer;
						console.log(
							"algorithm.savedAnswer",
							algorithm.savedAnswer
						);
						console.log("saved answer", answer.savedAnswer);
						console.log("algorithm", algorithm);
						return algorithm;
					});
			});
			// console.log("promises", promises);
			Promise.all(promises).then(dbModel => res.json(dbModel));
		});
	},

	updateAnswer: function(req, res) {
		console.log(req.body);
		db.User.findOneAndUpdate(
			{ _id: req.params.id, "userAnswers.savedId": req.body.savedId },
			{ $set: { "userAnswers.$.savedAnswer": req.body.savedAnswer } },
			{ new: true, projection: { userAnswers: true } }
			// { projection: { userAnswers: true } }
		).then(dbModel => res.json(dbModel));
		// console.log(dbModel);
	}

	//Add a delete method//
	//Add a Create custom method//
};
