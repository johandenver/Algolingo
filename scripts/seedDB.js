const mongoose = require("mongoose");
const config = require("../config/config");
const db = require("../server/models");

mongoose.connect(
	process.env.MONGODB_URI ||
		"mongodb://algouser:algouser1@ds135217.mlab.com:35217/heroku_b8swn9zt"
);

const algorithmSeed = [
	{
		title: "FizzBuzz",
		description:
			"Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print 'Fizz' instead of the number. For each multiple of 5, print 'Buzz' instead of the number. For numbers which are multiples of both 3 and 5, print 'FizzBuzz' instead of the number.",
		answer: `for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}`
	},
	{
		title: "Fibonacci sequence",
		description:
			"Given a number N return the index value of the Fibonacci sequence, where the sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...",
		answer: `function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}`
	},
	{
		title: "Palindrome",
		description:
			"Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.",
		answer: `function palindrome(text) {
	let charArray = text.toLowerCase().split('');
	let result = charArray.every((letter, index) => {
	return letter === charArray[charArray.length - index - 1];
	});

	return result
	}`
	},
	{
		title: "Check Prime",
		description: "Verify a number if a prime number",
		answer: `function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}
`
	},
	{
		title: "Greatest Common Divisor",
		description: "Find the greatest common divisor of two numbers.",
		answer: `function greatestCommonDivisor(a, b){
  var divisor = 2, 
      greatestDivisor = 1;

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2)
     return 1;
  
  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}
`
	},
	{
		title: "Remove Duplicate",
		description: "Remove duplicate numbers from an array",
		answer: `function removeDuplicate(arr){
  var exists ={},
      outArr = [], 
      elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}`
	},
	{
		title: "Random between 5 and 7",
		description:
			"If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?",
		answer: `function rand5(){
   return 1 + Math.random() * 4;
}

function rand7(){
  return 5 + rand5() / 5 * 2;
}
`
	},
	{
		title: "Missingn number",
		description:
			"find the missing number from an unsorted array of numbers between 1-100",
		answer: `function missingNumber(arr){
  var n = arr.length+1, 
  sum = 0,
  expectedSum = n* (n+1)/2;
  
  for(var i = 0, len = arr.length; i < len; i++){
    sum += arr[i];
  }
  
  return expectedSum - sum;
}`
	}
];

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

// ]
