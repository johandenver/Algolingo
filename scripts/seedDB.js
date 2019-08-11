const mongoose = require("mongoose");
const Algorithm = require("../models/Algorithm");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/AlgoLingo");

const algorithmSeed = {
	title: "FizzBuzz",
	description:
		"Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print 'Fizz' instead of the number. For each multiple of 5, print 'Buzz' instead of the number. For numbers which are multiples of both 3 and 5, print 'FizzBuzz' instead of the number.",
	answer: `for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}`
};

db.Algorithm.remove({})
	.then(() => db.Algorithm.collection.insertMany(algorithmSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
// {
// 	title:
// 	description:
// 	answer:
// },
// {
// 	title:
// 	description:
// 	answer:
// },
// {
// 	title:
// 	description:
// 	answer:
// },
// {
// 	title:
// 	description:
// 	answer:
// },
// {
// 	title:
// 	description:
// 	answer:
// },
// {
// 	title:
// 	description:
// 	answer:
// },
// {
// 	title:
// 	description:
// 	answer:
// },
// {
// 	title:
// 	description:
// 	answer:
// },

// ]
